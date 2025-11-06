package swf.army.mil.brightforgewidget.widget;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import swf.army.mil.brightforgewidget.DTOs.ColorDTO;
import swf.army.mil.brightforgewidget.DTOs.ImageDTO;
import swf.army.mil.brightforgewidget.DTOs.WarehouseDTO;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;
import swf.army.mil.brightforgewidget.Entities.*;
import swf.army.mil.brightforgewidget.Utils.LifeCycleStatus;
import swf.army.mil.brightforgewidget.Utils.WidgetMapper;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class WidgetServiceTest {

    @Mock
    WidgetRepository widgetRepository;

    @Mock
    ColorRepository colorRepository;

    @Mock
    ImageRepository imageRepository;

    @Mock
    WidgetMapper mapper;

    @InjectMocks
    WidgetService widgetService;


    Colors widget1Colors = new Colors(1,"Blu", "Blue", "#3185FC");
    Instant timeNow = Instant.now();
    ImageDTO imageDTO = new ImageDTO(1, "./Basic/Path");
    ColorDTO colorDTO = new ColorDTO(1,"Blu", "Blue", "#3185FC");
    WarehouseDTO warehouseDTO = new WarehouseDTO(1,timeNow,null,10, LifeCycleStatus.Active);
    WidgetDTO widgetDTO = new WidgetDTO("widget","test widget", 3.5, "Just-Widget", Set.of(colorDTO), List.of(warehouseDTO), List.of(imageDTO));


    ImageDTO imageDTO2 = new ImageDTO(1, "./Basic/Path");

    WarehouseDTO warehouseDTO2 = new WarehouseDTO(1,timeNow,null,10, LifeCycleStatus.Active);
    WidgetDTO widgetDTO2 = new WidgetDTO("widget2", "another one", 4.0, "just-a-widget", Set.of(colorDTO), List.of(warehouseDTO2), List.of(imageDTO2));

    @Test
    void shouldCreateWidget(){
       WidgetMapper mapper = new WidgetMapper(colorRepository);
        widgetService = new WidgetService(widgetRepository, mapper, colorRepository, imageRepository);

        when(colorRepository.findAllById(List.of(1))).thenReturn(List.of(widget1Colors));
        when(widgetRepository.save(any(WidgetInfo.class))).thenAnswer(invocation -> invocation.getArgument(0));

        WidgetDTO result = widgetService.createWidget(widgetDTO);

        verify(colorRepository).findAllById(List.of(1));
        verify(widgetRepository).save(any(WidgetInfo.class));

        assertEquals("widget", result.title());
        assertEquals(3.5, result.rating());
        assertNull(result.warehouseLot().getFirst().lastEdit());
    }

    @Test
    void shouldGetAllWidgets(){

        WidgetInfo widget1 = new WidgetInfo();
        widget1.setId(1L);
        widget1.setTitle("Widget One");

        WidgetInfo widget2 = new WidgetInfo();
        widget2.setId(2L);
        widget2.setTitle("Widget Two");

        List<WidgetInfo> widgetEntities = List.of(widget1, widget2);

        WidgetDTO dto1 = new WidgetDTO("Widget One", "desc", 4.0, "slug1", Set.of(), List.of(), List.of());
        WidgetDTO dto2 = new WidgetDTO("Widget Two", "desc", 5.0, "slug2", Set.of(), List.of(), List.of());

        System.out.println(mapper.getClass());
        System.out.println(widgetRepository.getClass());

        when(widgetRepository.findAll()).thenReturn(widgetEntities);
        when(mapper.toDTO(widget1)).thenReturn(dto1);
        when(mapper.toDTO(widget2)).thenReturn(dto2);

        List<WidgetDTO> result = widgetService.getAllWidgets();

        assertEquals(2, result.size());
        assertEquals("Widget One", result.get(0).title());
        assertEquals("Widget Two", result.get(1).title());

        verify(widgetRepository).findAll();
        verify(mapper,times(2)).toDTO(any(WidgetInfo.class));
    }

}