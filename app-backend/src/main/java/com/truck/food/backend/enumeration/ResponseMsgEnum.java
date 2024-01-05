package com.truck.food.backend.enumeration;

import lombok.Getter;

/**
 * @author panz
 * @create 2020-09-10 21:22
 **/
@Getter
public enum ResponseMsgEnum {
    /**
     * 错误枚举
     */
    PARAM_NOT_NULL("参数不能为空"),
    USER_NOT_LOG_IN("用户未登录,请重新登录"),
    SYSTEM_ERROR("系统异常"),
    USER_LOGIN_INVALID("登录已失效,请重新登录");


    private final String msg;

    ResponseMsgEnum(String msg) {
        this.msg = msg;
    }
}
