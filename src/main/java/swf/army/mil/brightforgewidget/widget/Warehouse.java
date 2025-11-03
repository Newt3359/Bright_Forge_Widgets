package swf.army.mil.brightforgewidget.widget;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
@Table(name = "Warehouse")
public class Warehouse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer lotNumber;

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
}
