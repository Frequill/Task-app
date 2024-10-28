package se.task.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import se.task.enums.Priority;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
public class Task {
    // Frontend sets default values
    private UUID uid;
    private String title;
    private String description;
    private String category;
    private LocalDateTime dueDate;
    private Priority priority;
}
