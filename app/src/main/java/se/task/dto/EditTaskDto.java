package se.task.dto;

import se.task.enums.Category;
import se.task.enums.Priority;

import java.time.LocalDate;
import java.util.UUID;

public record EditTaskDto(UUID id, String title, String description, Category category, LocalDate dueDate, Priority priority) {
}
