package swf.army.mil.brightforgewidget.Entities;

import jakarta.persistence.*;
import swf.army.mil.brightforgewidget.Utils.LifeCycleStatus;

import java.time.Instant;

@Entity
@Table(name = "Warehouse")
public class Warehouse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lot_number")
    private Long lotNumber;

    @Column(name = "Created_at_Date", nullable = false)
    private Instant created;

    @Column(name = "Last_Edit", nullable = true)
    private Instant lastEdit;

    @Column(name = "Quantity", nullable = false)
    private int quantity;

    @Enumerated(EnumType.STRING)
    @Column(name = "LifeCycle_Status", nullable = false)
    private LifeCycleStatus lifeCycleStatus = LifeCycleStatus.Active;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "widget_id_fk", nullable = false)
    private WidgetInfo widget;

    public Warehouse() {
    }

    public Warehouse(Long lotNumber, Instant created, Instant lastEdit, int quantity, LifeCycleStatus lifeCycleStatus, WidgetInfo widget) {
        this.lotNumber = lotNumber;
        this.created = created;
        this.lastEdit = lastEdit;
        this.quantity = quantity;
        this.lifeCycleStatus = lifeCycleStatus;
        this.widget = widget;
    }

    public Long getLotNumber() {
        return lotNumber;
    }

    public void setLotNumber(Long lotNumber) {
        this.lotNumber = lotNumber;
    }

    public Instant getCreated() {
        return created;
    }

    public void setCreated(Instant created) {
        this.created = created;
    }

    public Instant getLastEdit() {
        return lastEdit;
    }

    public void setLastEdit(Instant lastEdit) {
        this.lastEdit = lastEdit;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public LifeCycleStatus getLifeCycleStatus() {
        return lifeCycleStatus;
    }

    public void setLifeCycleStatus(LifeCycleStatus lifeCycleStatus) {
        this.lifeCycleStatus = lifeCycleStatus;
    }

    public WidgetInfo getWidget() {
        return widget;
    }

    public void setWidget(WidgetInfo widget) {
        this.widget = widget;
    }
}
