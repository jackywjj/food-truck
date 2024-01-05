package com.truck.food.backend.controller;

import com.truck.food.backend.entity.TruckBo;
import com.truck.food.backend.service.FacilityService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Jacky Wu
 */
@RestController
@RequestMapping("trucks")
public class TruckController extends BaseController {
    @Resource
    private FacilityService facilityService;

    @GetMapping(value = "")
    public String list() {
        List<TruckBo> list = facilityService.getAllTacoTruckList();
        return list.stream().map(TruckBo::getApplicant).collect(Collectors.joining(","));
    }
}
