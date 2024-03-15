package com.todolist.todo_list;

import com.todolist.todo_list.model.Task;
import com.todolist.todo_list.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class TodoListApplication implements CommandLineRunner {

    @Autowired
    private TaskRepository taskRepository ;
    public static void main(String[] args) {
        SpringApplication.run(TodoListApplication.class, args);

    }

@Override
    public void run(String... args) throws Exception {
        taskRepository.save(new Task( "Back end " , "always start with the backend cuz it's much easier "));
        taskRepository.save(new Task( "Front end " , "eternity to deal with it  "));
        taskRepository.save(new Task( "go to sleep " , "cuz it is a task too !!"));

    }
}
