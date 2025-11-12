package swf.army.mil.brightforgewidget.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "Images")
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long imageId;

    @Column(name = "Image_URL", nullable = false)
    private String imgUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "widget_image_fk", nullable = false)
    private WidgetInfo widget;

    public Images() {
    }

    public Images(Long imageId, String imgUrl, WidgetInfo widget) {
        this.imageId = imageId;
        this.imgUrl = imgUrl;
        this.widget = widget;
    }

    public Long getImageId() {
        return imageId;
    }

    public void setImageId(Long imageId) {
        this.imageId = imageId;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public WidgetInfo getWidget() {
        return widget;
    }

    public void setWidget(WidgetInfo widget) {
        this.widget = widget;
    }
}
