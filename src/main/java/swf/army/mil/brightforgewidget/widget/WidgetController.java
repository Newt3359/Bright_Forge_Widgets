package swf.army.mil.brightforgewidget.widget;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import swf.army.mil.brightforgewidget.DTOs.ImageDTO;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;
import swf.army.mil.brightforgewidget.Entities.ImageRepository;
import swf.army.mil.brightforgewidget.Entities.WidgetRepository;
import swf.army.mil.brightforgewidget.Utils.WidgetMapper;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/widget")
public class WidgetController {

    private final WidgetMapper widgetMapper;

    private final WidgetService widgetService;

    private final WidgetRepository widgetRepository;

    private final ImageRepository imageRepository;

    @Value("${upload.dir}")
    private String uploadDir;

    public WidgetController (WidgetMapper widgetMapper, WidgetService widgetService, WidgetRepository widgetRepository, ImageRepository imageRepository){
        this.widgetMapper = widgetMapper;
        this.widgetService = widgetService;
        this.widgetRepository = widgetRepository;
        this.imageRepository = imageRepository;
    }

    @PostMapping
    public WidgetDTO createWidget(@RequestBody WidgetDTO widgetDTO){
        return widgetService.createWidget(widgetDTO);
    }

    @GetMapping
    public List<WidgetDTO> getAllWidgets(){
        return widgetService.getAllWidgets();
    }

    @PostMapping("/upload")
    public ResponseEntity<ImageDTO> uploadImage(
            @RequestParam("file") MultipartFile file,
            @RequestParam("widgetId") Long widgetId
    ) {
        try {
            // 1️⃣ Find the widget by ID
            var widget = widgetRepository.findById(widgetId)
                    .orElseThrow(() -> new RuntimeException("Widget not found"));

            // 2️⃣ Save image and attach widget
            ImageDTO saved = widgetService.saveImage(file, widget);

            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/search")
    public List<WidgetDTO> searchByTitleAndDescription(@RequestParam String query){
        List<WidgetDTO> results = new ArrayList<>();

        results.addAll(widgetService.searchWidgetsByTitle(query));
        results.addAll(widgetService.searchWidgetsByDescription(query));
        return results.stream().distinct().toList();
    }



}
