package swf.army.mil.brightforgewidget.Entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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

    @DecimalMin(value = "0.1", message = "Rating must be at least a 1.0")
    @DecimalMax(value = "5.0", message = "Rating cannot exceed 5.0")
    @Column (nullable = false)
    private Double rating;

    @Column(nullable = false)
    private String slug;

    @ManyToMany
    @JoinTable(
            name = "widget_color",
            joinColumns = @JoinColumn(name = "widget_id"),
            inverseJoinColumns = @JoinColumn(name = "color_id")
    )
    private Set<Colors> colors = new HashSet<>();

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Images> images = new ArrayList<>();

    @OneToMany(mappedBy = "widget", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Warehouse> warehouseLot = new ArrayList<>();

    public WidgetInfo() {

    }

    public WidgetInfo(Long id, String title, String description, Double rating, String slug) {
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

    public Double getRating() {
        return rating;
    }

    public void setRating(Double rating) {
        this.rating = rating;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public Set<Colors> getColors() {
        return colors;
    }

    public void setColors(Set<Colors> colors) {
        this.colors = colors;
    }

    public List<Images> getImages() {
        return images;
    }

    public void setImages(List<Images> images) {
        this.images = images;
    }

    public List<Warehouse> getWarehouseLot() {
        return warehouseLot;
    }

    public void setWarehouseLot(List<Warehouse> warehouseLot) {
        this.warehouseLot = warehouseLot;
    }
}
