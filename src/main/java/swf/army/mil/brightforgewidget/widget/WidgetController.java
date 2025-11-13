package swf.army.mil.brightforgewidget.widget;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import swf.army.mil.brightforgewidget.DTOs.ImageDTO;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;
import swf.army.mil.brightforgewidget.Entities.WidgetRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/widget")
public class WidgetController {



    private final WidgetService widgetService;

    private final WidgetRepository widgetRepository;



    public WidgetController ( WidgetService widgetService, WidgetRepository widgetRepository){

        this.widgetService = widgetService;
        this.widgetRepository = widgetRepository;

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

            var widget = widgetRepository.findById(widgetId)
                    .orElseThrow(() -> new RuntimeException("Widget not found"));

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

    @PatchMapping("/{id}")
    public WidgetDTO partialUpdate (@RequestBody WidgetDTO widget){
        return widgetService.partialUpdate(widget);
    }

    @PatchMapping("/qty/{id}")
    public ResponseEntity<Void> updateQuantity (@PathVariable Long id){
        try {
            widgetService.updateQuantity(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }




}
