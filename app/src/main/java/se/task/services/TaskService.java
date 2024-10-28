package se.task.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import se.task.dto.CreateTaskDto;
import se.task.dto.EditTaskDto;
import se.task.exceptions.TaskNotFoundException;
import se.task.models.Task;
import se.task.repositories.TaskRepository;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TaskService {

    private final TaskRepository repo;

    public void createTask(CreateTaskDto taskDto) {
        Task task = Task.builder()
                .uid(UUID.randomUUID())
                .title(taskDto.title())
                .description(taskDto.description())
                .priority(taskDto.priority())
                .build();
        repo.createTask(task);
    }

    public Task getTask(UUID id) {
        return repo.getTask(id).orElseThrow(() -> new TaskNotFoundException("No such task exists"));
    }

    public List<Task> getTasks() {
        return repo.getTasks();
    }

    public Task editTask(UUID id, EditTaskDto editTaskDto) {
        Task task = Task.builder()
                .uid(id)
                .title(editTaskDto.title())
                .description(editTaskDto.description())
                .priority(editTaskDto.priority())
                .build();
        return repo.editTask(id, task).orElseThrow(() -> new TaskNotFoundException("No such task exists"));
    }

    public void deleteTask(UUID id) {
        repo.deleteTask(id);
    }

}