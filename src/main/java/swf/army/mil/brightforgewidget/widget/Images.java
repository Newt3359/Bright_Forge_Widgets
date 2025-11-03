package swf.army.mil.brightforgewidget.widget;

import jakarta.persistence.*;

@Entity
@Table(name = "Images")
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer imageId;

    @Column(name = "Image_URL", nullable = false)
    private String imgUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "widget_image_fk", nullable = false)
    private WidgetInfo widget;

}
