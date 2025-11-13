package swf.army.mil.brightforgewidget.Entities;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import swf.army.mil.brightforgewidget.DTOs.WidgetDTO;

import java.util.List;

@Repository
public interface WidgetRepository extends JpaRepository <WidgetInfo, Long> {

    List<WidgetInfo> findDistinctByTitleContainingIgnoreCase(String query);

    List<WidgetInfo> findDistinctByDescriptionContainingIgnoreCase(String query);
}
