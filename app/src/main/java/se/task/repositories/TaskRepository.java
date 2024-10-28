package se.task.repositories;

import se.task.models.Task;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TaskRepository {

    void createTask(Task task);

    Optional<Task> getTask(UUID id);

    List<Task> getTasks();

    Optional<Task> editTask(UUID id, Task task);

    void deleteTask(UUID id);
}
