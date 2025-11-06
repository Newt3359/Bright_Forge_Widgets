package swf.army.mil.brightforgewidget.widget;

import org.springframework.stereotype.Service;
import swf.army.mil.brightforgewidget.DTOs.ImageDTO;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;
import swf.army.mil.brightforgewidget.Entities.*;
import swf.army.mil.brightforgewidget.Utils.WidgetMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class WidgetService {

    private final WidgetRepository widgetRepository;
    private final ColorRepository colorRepository;
    private final WidgetMapper widgetMapper;
    private final ImageRepository imageRepository;

    public WidgetService (WidgetRepository widgetRepository, WidgetMapper widgetMapper, ColorRepository colorRepository, ImageRepository imageRepository){
        this.widgetMapper = widgetMapper;
        this.widgetRepository = widgetRepository;
        this.colorRepository = colorRepository;
        this.imageRepository = imageRepository;
    }

    public WidgetDTO createWidget(WidgetDTO dto){
        WidgetInfo widget = widgetMapper.toEntity(dto);
        WidgetInfo saved = widgetRepository.save(widget);

        return widgetMapper.toDTO(saved);
    }

//    public List<WidgetDTO> getAllWidgets(){
//        return widgetRepository.findAll().stream()
//                .map(widgetMapper::toDTO)
//                .toList();
//    }

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


}
