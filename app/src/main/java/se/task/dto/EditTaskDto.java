package se.task.dto;

import se.task.enums.Priority;

import java.time.LocalDate;
import java.util.UUID;

public record EditTaskDto(UUID id, String title, String description, String category, LocalDate dueDate, Priority priority) {
}
