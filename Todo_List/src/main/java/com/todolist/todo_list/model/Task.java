package com.todolist.todo_list.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tasks")

public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id  ;
    @Column(name = "title")
    private String Title ;
    @Column(name = "description")
    private String Description ;

    @Column(name= "completed")
    private Boolean Completed ;

    public Task(){

    }
    public Task(String title, String description) {
        Title = title;
        Description = description;
        Completed = false ;


    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Boolean getCompleted() {
        return Completed;
    }

    public void setCompleted(Boolean complited) {
        Completed = complited;
    }
}
