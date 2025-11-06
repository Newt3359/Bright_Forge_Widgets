package swf.army.mil.brightforgewidget.widget;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;
import swf.army.mil.brightforgewidget.Entities.ImageRepository;
import swf.army.mil.brightforgewidget.Entities.Images;
import swf.army.mil.brightforgewidget.Entities.WidgetInfo;
import swf.army.mil.brightforgewidget.Entities.WidgetRepository;
import swf.army.mil.brightforgewidget.Utils.WidgetMapper;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/widget")
public class WidgetController {

    private final WidgetMapper widgetMapper;

    private final WidgetService widgetService;

    private final WidgetRepository widgetRepository;

    private final ImageRepository imageRepository;

    @Value("${file.upload-dir}")
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

    //Image Calls
    @PostMapping("/{widgetId}/upload")
    public ResponseEntity<String> uploadImage (@PathVariable Long widgetId, @RequestParam("file") MultipartFile file)throws IOException {
        String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();

        Path path = Paths.get(uploadDir, fileName);
        Files.createDirectories(path.getParent());
        Files.write(path, file.getBytes());

        WidgetInfo widget = widgetRepository.findById(widgetId).orElseThrow(RuntimeException::new);

        Images widgetImage = new Images();
        widgetImage.setWidget(widget);
        imageRepository.save(widgetImage);

        return ResponseEntity.ok("Image Uploaded");
    }

    @GetMapping("/image/{fileName:.+}")
    public ResponseEntity<Resource> getImage (@PathVariable String fileName) throws IOException{
        Path filePath = Paths.get(uploadDir, fileName);
        Resource resource = new UrlResource(filePath.toUri());
        if (!resource.exists()) return ResponseEntity.notFound().build();
        String contentType = Files.probeContentType(filePath);

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .body(resource);
    }



}
