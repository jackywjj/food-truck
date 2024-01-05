package com.truck.food.backend.component;

import lombok.Data;

@Data
public class Response<T> {
    private Integer code;
    private String msg;
    private T data;

    public Response() {
    }

    public Response(Integer code, String msg, T data) {
        this.code = code;
        this.msg = msg;
        this.data = (data == null ? (T) "" : data);
    }
}
