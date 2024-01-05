package com.truck.food.backend.service;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.truck.food.backend.entity.FacilityEntity;
import com.truck.food.backend.entity.TruckBo;

import java.util.List;
import java.util.Map;

/**
 * @author Jacky Wu
 */
public interface FacilityService extends IService<FacilityEntity> {
    IPage<FacilityEntity> getFacilityList(Integer pageNumber, Integer pageSize, Map<String, Object> condition);

    List<TruckBo> getAllTacoTruckList();
}
