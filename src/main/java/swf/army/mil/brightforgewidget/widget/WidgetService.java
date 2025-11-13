package swf.army.mil.brightforgewidget.widget;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;
import swf.army.mil.brightforgewidget.DTOs.ImageDTO;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;
import swf.army.mil.brightforgewidget.Entities.*;
import swf.army.mil.brightforgewidget.Utils.WidgetMapper;

import javax.management.RuntimeErrorException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class WidgetService {

    @Value("${upload.dir}")
    private String uploadDir;

    private final WidgetRepository widgetRepository;
    private final WidgetMapper widgetMapper;
    private final ImageRepository imageRepository;



    public WidgetService (WidgetRepository widgetRepository, WidgetMapper widgetMapper, ImageRepository imageRepository){
        this.widgetMapper = widgetMapper;
        this.widgetRepository = widgetRepository;
        this.imageRepository = imageRepository;
    }

    public WidgetDTO createWidget(WidgetDTO dto){
        WidgetInfo widget = widgetMapper.toEntity(dto);
        WidgetInfo saved = widgetRepository.save(widget);

        for (Warehouse w : widget.getWarehouseLot()) {
            w.setLotNumber(null);
            w.setWidget(widget);
        }

        return widgetMapper.toDTO(saved);
    }


    public List<WidgetDTO> getAllWidgets() {
        List<WidgetInfo> widgets = widgetRepository.findAll();

        return widgets.stream().map(widget -> {

            WidgetDTO dto = widgetMapper.toDTO(widget);

            List<Images> images = imageRepository.findByWidget_Id(widget.getId());


            List<ImageDTO> imageDTOs = images.stream()
                    .map(img -> new ImageDTO(img.getImageId(),img.getImgUrl()))
                    .collect(Collectors.toList());


            return new WidgetDTO(
                    dto.id(),
                    dto.title(),
                    dto.description(),
                    dto.rating(),
                    dto.slug(),
                    dto.colors(),
                    dto.warehouseLot(),
                    imageDTOs
            );
        }).collect(Collectors.toList());
    }

    public ImageDTO saveImage(MultipartFile file, WidgetInfo widget) throws IOException {

        String filename = file.getOriginalFilename();
        Path path = Paths.get(uploadDir, filename);
        Files.copy(file.getInputStream(), path);


        Images image = new Images();
        image.setImgUrl("/uploads/" + filename);
        image.setWidget(widget);
        imageRepository.save(image);

        return new ImageDTO(image.getImageId(), image.getImgUrl());
    }

    public List<WidgetDTO> searchWidgetsByTitle (String query){
        return widgetRepository.findDistinctByTitleContainingIgnoreCase(query)
                .stream().map(widgetMapper::toDTO)
                .collect(Collectors.toList());
    }

    public List<WidgetDTO> searchWidgetsByDescription(String query){
        return widgetRepository.findDistinctByDescriptionContainingIgnoreCase(query)
                .stream().map(widgetMapper::toDTO)
                .collect(Collectors.toList());
    }

    public WidgetDTO partialUpdate(WidgetDTO dto){

        WidgetInfo updatedWidget = widgetMapper.toEntity(dto);
        updatedWidget.setId(dto.id());
        if (updatedWidget.getId() == null){
            throw new IllegalArgumentException("Id cannot be null");
        }
        widgetRepository.save(updatedWidget);
        return dto;
    }

    public void updateQuantity (Long id){
        WidgetInfo widgetToUpdate = widgetRepository.findById(id).orElseThrow();
        if (!widgetToUpdate.getWarehouseLot().isEmpty()){
            Warehouse lot = widgetToUpdate.getWarehouseLot().getFirst();
            lot.setQuantity(lot.getQuantity()-1);
        }else {
            throw new RuntimeException("No quantity found for widget number " + id);
        }
        widgetRepository.save(widgetToUpdate);
    }

}
