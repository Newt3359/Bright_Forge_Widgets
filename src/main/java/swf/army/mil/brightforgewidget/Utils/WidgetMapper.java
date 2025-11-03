package swf.army.mil.brightforgewidget.Utils;

import org.springframework.stereotype.Service;
import swf.army.mil.brightforgewidget.DTOs.ColorDTO;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;
import swf.army.mil.brightforgewidget.Entities.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class WidgetMapper {

    private final ColorRepository colorRepository;

    public WidgetMapper (ColorRepository colorRepository) {
        this.colorRepository = colorRepository;
    }

    public WidgetInfo toEntity(WidgetDTO dto){
        WidgetInfo widget = new WidgetInfo();
        widget.setTitle(dto.title());
        widget.setDescription(dto.description());
        widget.setRating(dto.rating());
        widget.setSlug(dto.slug());

        Set<Colors> colors = new HashSet<>(colorRepository.findAllById(
                dto.colors().stream().map(ColorDTO::ColorId).toList()
        ));
        widget.setColors(colors);

        List<Warehouse> warehouses = dto.warehouseLot().stream().map(warehouseDTO -> {
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

        List<Images> images =dto.image().stream().map(imageDTO -> {
            Images images1 = new Images();
            images1.setImgUrl(imageDTO.imgUrl());
            images1.setWidget(widget);
            return images1;
        }).toList();
        widget.setImages(images);

        return widget;
    }

}
