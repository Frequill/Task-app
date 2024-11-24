package se.task.dto;

import se.task.enums.Category;
import se.task.enums.Priority;

import java.time.LocalDate;

public record CreateTaskDto(String title, String description, Category category, LocalDate dueDate, Priority priority) { }
