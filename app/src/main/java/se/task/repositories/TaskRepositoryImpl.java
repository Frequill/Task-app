package se.task.repositories;

import org.springframework.stereotype.Repository;
import se.task.models.Task;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public class TaskRepositoryImpl implements TaskRepository {

    private List<Task> tasks;

    @Override
    public void createTask(Task task) {
        tasks.add(task);
    }

    @Override
    public Optional<Task> getTask(UUID id) {
        return tasks.stream().filter(task -> task.getUid().toString().equals(id.toString())).findFirst();
    }

    @Override
    public List<Task> getTasks() {
        return tasks;
    }

    @Override
    public Optional<Task> editTask(UUID id, Task task) {
        tasks = tasks.stream().map(task1 -> task1.getUid().equals(id) ? task : task1).toList();
        return getTask(id);
    }

    @Override
    public void deleteTask(UUID id) {
        tasks.removeIf(task -> task.getUid().toString().equals(id.toString()));
    }

}
