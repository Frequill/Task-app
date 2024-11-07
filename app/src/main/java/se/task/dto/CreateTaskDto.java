package se.task.dto;

import se.task.enums.Priority;

import java.time.LocalDate;

public record CreateTaskDto(String title, String description, String category, LocalDate dueDate, Priority priority) {
}
