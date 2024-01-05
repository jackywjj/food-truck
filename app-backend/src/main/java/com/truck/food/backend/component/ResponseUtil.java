package com.truck.food.backend.component;

import com.truck.food.backend.enumeration.ResponseEnum;

public class ResponseUtil {
    public static <T> Response<T> success(T data) {
        return success(ResponseEnum.SUCCESS.getMsg(), data);
    }

    public static <T> Response<T> successWithMsg(String msg) {
        return success(msg, null);
    }

    public static <T> Response<T> success(String msg, T data) {
        return build(ResponseEnum.SUCCESS.getCode(), msg, data);
    }

    public static <T> Response<T> success() {
        return build(ResponseEnum.SUCCESS.getCode(), ResponseEnum.SUCCESS.getMsg(), null);
    }

    public static <T> Response<T> error() {
        return build(ResponseEnum.FAILURE.getCode(), ResponseEnum.FAILURE.getMsg(), null);
    }

    public static <T> Response<T> error(String msg, T data) {
        return build(ResponseEnum.FAILURE.getCode(), msg, data);
    }

    public static <T> Response<T> error(T data) {
        return error(ResponseEnum.FAILURE.getMsg(), data);
    }

    public static <T> Response<T> errorWithMsg(String msg) {
        return error(msg, null);
    }

    public static <T> Response<T> build(int code, String msg, T data) {
        return new Response<>(code, msg, data);
    }
}






