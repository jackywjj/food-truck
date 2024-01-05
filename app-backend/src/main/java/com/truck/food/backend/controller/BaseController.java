package com.truck.food.backend.controller;

import com.truck.food.backend.exception.BaseException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.web.bind.ServletRequestDataBinder;
import org.springframework.web.bind.annotation.InitBinder;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class BaseController {
    protected Map<String, Object> successResult() {
        return successResult("", "", "");
    }

    protected Map<String, Object> successResult(String message) {
        return successResult("", message, "");
    }

    protected Map<String, Object> successResult(Object data) {
        return successResult("", "", data);
    }

    protected Map<String, Object> successResult(String errorCode, String errorMessage, Object data) {
        Map<String, Object> result = new HashMap<>();
        result.put("code", errorCode);
        result.put("msg", errorMessage);
        result.put("data", data == null ? "" : data);
        return result;
    }

    protected Map<String, Object> success() {
        return successResult("200", "", null);
    }

    protected Map<String, Object> success(Object data) {
        return successResult("200", "", data);
    }

    protected Map<String, Object> failResult(BaseException e) {
        return failResult(e.getMessage(), e.getMessage(), null);
    }

    protected Map<String, Object> failResult(String errorCode, String errorMessage) {
        return failResult(errorCode, errorMessage, null);
    }

    protected Map<String, Object> failResult(String errorCode, String errorMessage, Object data) {
        Map<String, Object> result = new HashMap<>();
        result.put("code", errorCode == null ? "" : errorCode);
        result.put("msg", errorMessage == null ? "" : errorMessage);
        result.put("data", data == null ? "" : data);
        return result;
    }

    protected void responseResultFile(HttpServletResponse response, String fileName, byte[] result) {
        ServletOutputStream respOs = null;
        try {
            response.setHeader("Content-disposition", "attachment; filename="
                    + URLEncoder.encode(fileName, "UTF-8"));
            response.setHeader("Content-Length", String.valueOf(result.length));
            respOs = response.getOutputStream();
            respOs.write(result);
            respOs.flush();
        } catch (IOException e) {
            log.error("ioException", e);
            e.printStackTrace();
        } finally {
            if (respOs != null) {
                try {
                    respOs.close();
                } catch (IOException e) {
                    log.error("ioException", e);
                    e.printStackTrace();
                }
            }
        }
    }

    @InitBinder
    protected void initBinder(HttpServletRequest request, ServletRequestDataBinder binder) throws Exception {
        binder.registerCustomEditor(String.class, new StringTrimmerEditor(false));
    }
}
