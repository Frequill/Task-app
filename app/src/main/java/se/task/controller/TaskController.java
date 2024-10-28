package se.task.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import se.task.dto.CreateTaskDto;
import se.task.dto.EditTaskDto;
import se.task.models.Task;
import se.task.services.TaskService;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController("/api/v1/tasks")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public void createTask(@RequestBody CreateTaskDto createTaskDto) {
        taskService.createTask(createTaskDto);
    }

    @GetMapping("/{id}")
    public Task getTask(@PathVariable UUID id) {
        return taskService.getTask(id);
    }

    @GetMapping
    public List<Task> getTask() {
        return taskService.getTasks();
    }

    @PutMapping("/{id}")
    public Task editTask(@PathVariable String id, @RequestBody EditTaskDto editTaskDto) {
        return taskService.editTask(UUID.fromString(id), editTaskDto);
    }

    @DeleteMapping
    public void deleteTask(@PathVariable String id) {
        taskService.deleteTask(UUID.fromString(id));
    }

}
