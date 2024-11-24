package com.app.dto;

public class ResponseDTO<T> {
    private String message;
    private T result;

    // Default constructor
    public ResponseDTO() {}

    // Constructor for only result
    public ResponseDTO(T result) {
        this.result = result;
    }

    // Constructor for message and result
    public ResponseDTO(String message, T result) {
        this.message = message;
        this.result = result;
    }
    
    // Getters and Setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getResult() {
        return result;
    }

    public void setResult(T result) {
        this.result = result;
    }
}
