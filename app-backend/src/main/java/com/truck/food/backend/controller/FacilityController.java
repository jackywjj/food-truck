package com.truck.food.backend.controller;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.truck.food.backend.entity.FacilityEntity;
import com.truck.food.backend.service.FacilityService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/**
 * @author Jacky Wu
 */
@RestController
@RequestMapping("facilities")
public class FacilityController extends BaseController {
    @Resource
    private FacilityService facilityService;

    @GetMapping(value = "", produces = "application/json")
    public Map<String, Object> list(@RequestParam(value = "pageSize", defaultValue = "20") int pageSize,
                                    @RequestParam(value = "pageNum", defaultValue = "1") int pageNum,
                                    @RequestParam(value = "queryKeywords", defaultValue = "") String queryKeywords) {
        Map<String, Object> data = new HashMap<>();

        Map<String, Object> condition = new HashMap<>();
        if (!"".equals(queryKeywords)) {
            condition.put("queryKeywords", queryKeywords);
        }

        IPage<FacilityEntity> page = facilityService.getFacilityList(pageNum, pageSize, condition);
        data.put("facilities", page.getRecords());
        data.put("total", page.getTotal());
        return successResult(data);
    }
}
