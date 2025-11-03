package swf.army.mil.brightforgewidget.DTOs;

import swf.army.mil.brightforgewidget.Utils.LifeCycleStatus;

import java.time.Instant;

public record WarehouseDTO(
        Integer lotNumber,
        Instant created,
        Instant lastEdit,
        int quantity,
        LifeCycleStatus lifeCycleStatus
) {
}
