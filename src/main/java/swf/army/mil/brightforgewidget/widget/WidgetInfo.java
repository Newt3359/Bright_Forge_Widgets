package swf.army.mil.brightforgewidget.widget;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Widget_Info")
public class WidgetInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false)
    private String title;

    @Column (nullable = false)
    private String description;

    @DecimalMin(value = "1.0", message = "Rating must be at least a 1.0")
    @DecimalMax(value = "5.0", message = "Rating cannot exceed 5.0")
    @Column (nullable = false)
    private Float rating;

    @Column(nullable = false)
    private String slug;

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Colors> colors = new ArrayList<>();

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images = new ArrayList<>();

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Warehouse> warehouseLot = new ArrayList<>();

    public WidgetInfo() {

    }

    public WidgetInfo(Long id, String title, String description, Float rating, String slug) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.slug = slug;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getRating() {
        return rating;
    }

    public void setRating(Float rating) {
        this.rating = rating;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }
}
