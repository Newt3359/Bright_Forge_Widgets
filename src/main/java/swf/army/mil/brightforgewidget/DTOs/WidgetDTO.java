package swf.army.mil.brightforgewidget.DTOs;

import java.util.List;
import java.util.Set;

public record WidgetDTO(
        Long id,
        String title,
        String description,
        Double rating,
        String slug,
        Set <ColorDTO> colors,
        List<WarehouseDTO> warehouseLot,
        List<ImageDTO> image
) {
}
