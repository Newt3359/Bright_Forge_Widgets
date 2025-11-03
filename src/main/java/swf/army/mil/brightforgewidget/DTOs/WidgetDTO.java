package swf.army.mil.brightforgewidget.DTOs;

import java.util.List;
import java.util.Set;

public record WidgetDTO(
        String title,
        String description,
        Float rating,
        String slug,
        Set <ColorDTO> colors,
        List<WarehouseDTO> warehouseLot,
        List<ImageDTO> image
) {
}
