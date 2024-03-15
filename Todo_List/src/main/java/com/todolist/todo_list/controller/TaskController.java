package com.todolist.todo_list.controller;

import com.todolist.todo_list.model.Task;
import com.todolist.todo_list.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/V1/")
public class TaskController  {
    @Autowired
    private TaskRepository  taskRepository;
@GetMapping("/tasks")
    public List<Task> getAllTasks(){
        return taskRepository.findAll();

    }

    @PostMapping("/tasks")
    public Task createTask(@RequestBody Task task) {
        task.setCompleted(false);
    return taskRepository.save(task);
    }

    @GetMapping("/tasks/{id}")
   public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task task =  taskRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Task not found with id: " + id));
        return ResponseEntity.ok(task) ;
}









}
