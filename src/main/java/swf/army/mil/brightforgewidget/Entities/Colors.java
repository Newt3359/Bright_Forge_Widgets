package swf.army.mil.brightforgewidget.Entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Colors")
public class Colors {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ColorId;

    @Column(name = "Color_Code", length = 3)
    private String code;

    @Column(name = "Color_Label")
    private String label;

    @Column(name = "Color_Hex", length = 7)
    private String hex;

    @ManyToMany(mappedBy = "colors")
    private Set<WidgetInfo> widgets = new HashSet<>();

    public Colors() {
    }

    public Colors(Integer colorId, String code, String label, String hex) {
        ColorId = colorId;
        this.code = code;
        this.label = label;
        this.hex = hex;
    }

    public Colors(Integer colorId, String code, String label, String hex, Set<WidgetInfo> widgets) {
        ColorId = colorId;
        this.code = code;
        this.label = label;
        this.hex = hex;
        this.widgets = widgets;
    }

    public Integer getColorId() {
        return ColorId;
    }

    public void setColorId(Integer colorId) {
        ColorId = colorId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getHex() {
        return hex;
    }

    public void setHex(String hex) {
        this.hex = hex;
    }

    public Set<WidgetInfo> getWidgets() {
        return widgets;
    }

    public void setWidgets(Set<WidgetInfo> widgets) {
        this.widgets = widgets;
    }
}
