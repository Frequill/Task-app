package se.task.dto;

import se.task.enums.Priority;

import java.time.LocalDateTime;
import java.util.UUID;

public record CreateTaskDto(UUID uid, String title, String description, String category, LocalDateTime dueDate, Priority priority) {
}
