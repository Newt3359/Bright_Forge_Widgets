package swf.army.mil.brightforgewidget.widget;

import jakarta.persistence.*;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "widget_color_id_fk", nullable = false)
    private WidgetInfo widget;

    public Colors() {
    }

    public Colors(Integer colorId, String code, String label, String hex, WidgetInfo widget) {
        ColorId = colorId;
        this.code = code;
        this.label = label;
        this.hex = hex;
        this.widget = widget;
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

    public WidgetInfo getWidget() {
        return widget;
    }

    public void setWidget(WidgetInfo widget) {
        this.widget = widget;
    }
}
