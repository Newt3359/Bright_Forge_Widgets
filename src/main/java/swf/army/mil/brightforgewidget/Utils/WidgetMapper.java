package swf.army.mil.brightforgewidget.Utils;

import org.springframework.stereotype.Component;
import swf.army.mil.brightforgewidget.DTOs.ColorDTO;
import swf.army.mil.brightforgewidget.DTOs.ImageDTO;
import swf.army.mil.brightforgewidget.DTOs.WarehouseDTO;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;
import swf.army.mil.brightforgewidget.Entities.*;

import java.util.*;
import java.util.stream.Collectors;


@Component
public class WidgetMapper {

    private final ColorRepository colorRepository;

    public WidgetMapper(ColorRepository colorRepository) {
        this.colorRepository = colorRepository;
    }

    public WidgetInfo toEntity(WidgetDTO dto) {
        WidgetInfo widget = new WidgetInfo();
        widget.setTitle(dto.title());
        widget.setDescription(dto.description());
        widget.setRating(dto.rating());
        widget.setSlug(dto.slug());

        Set<Colors> colors = new HashSet<>(
                colorRepository.findAllById(
                        Optional.ofNullable(dto.colors())
                                .orElse(Collections.emptySet())
                                .stream().map(ColorDTO::ColorId)
                                .toList()
                )
        );
        widget.setColors(colors);

        List<Warehouse> warehouses = Optional.ofNullable(dto.warehouseLot()).orElse(Collections.emptyList()).stream().map(warehouseDTO -> {
            Warehouse warehouse = new Warehouse();
            warehouse.setLotNumber(warehouseDTO.lotNumber());
            warehouse.setCreated(warehouseDTO.created());
            warehouse.setLastEdit(warehouseDTO.lastEdit());
            warehouse.setQuantity(warehouseDTO.quantity());
            warehouse.setLifeCycleStatus(warehouseDTO.lifeCycleStatus());
            warehouse.setWidget(widget);
            return warehouse;
        }).toList();
        widget.setWarehouseLot(warehouses);


        List<Images> images = Optional.ofNullable(dto.image()).orElse(Collections.emptyList()).stream().map(imageDTO -> {
            Images images1 = new Images();
            images1.setImgUrl(imageDTO.imgUrl());
            images1.setWidget(widget);
            return images1;
        }).toList();
        widget.setImages(images);

        return widget;
    }

    public WidgetDTO toDTO(WidgetInfo widget) {
        return new WidgetDTO(
                widget.getId(),
                widget.getTitle(),
                widget.getDescription(),
                widget.getRating(),
                widget.getSlug(),

                widget.getColors().stream()
                        .map(colors -> new ColorDTO(colors.getColorId(), colors.getCode(), colors.getLabel(), colors.getHex()))
                        .collect(Collectors.toSet()),

                widget.getWarehouseLot().stream()
                        .map(warehouse -> new WarehouseDTO(
                                warehouse.getLotNumber(),
                                warehouse.getCreated(),
                                warehouse.getLastEdit(),
                                warehouse.getQuantity(),
                                warehouse.getLifeCycleStatus()
                        ))
                        .toList(),

                widget.getImages().stream()
                        .map(images -> new ImageDTO(images.getImageId(), images.getImgUrl()))
                        .toList()
        );

    }
}



