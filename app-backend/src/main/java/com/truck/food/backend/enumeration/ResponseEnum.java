package com.truck.food.backend.enumeration;

import lombok.Getter;

@Getter
public enum ResponseEnum {
    /* 成功状态码 */
    SUCCESS(200, "成功"),
    /* 失败状态码 */
    FAILURE(500, "失败");

    private final int code;
    private final String msg;

    ResponseEnum(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
