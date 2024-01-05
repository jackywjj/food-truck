package com.truck.food.backend.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.truck.food.backend.entity.FacilityEntity;
import com.truck.food.backend.entity.TruckBo;
import com.truck.food.backend.mapper.FacilityMapper;
import com.truck.food.backend.service.FacilityService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @author Jacky Wu
 */
@Service
public class FacilityServiceImpl extends ServiceImpl<FacilityMapper, FacilityEntity> implements FacilityService {
    @Resource
    private FacilityMapper facilityMapper;

    @Override
    public IPage<FacilityEntity> getFacilityList(Integer pageNumber, Integer pageSize, Map<String, Object> condition) {
        IPage<FacilityEntity> page = new Page<>(pageNumber, pageSize);
        QueryWrapper<FacilityEntity> queryWrapper = new QueryWrapper<>();
        if (condition.get("queryKeywords") != null) {
            queryWrapper.like("location_description", condition.get("queryKeywords"))
                    .or()
                    .like("address", condition.get("queryKeywords"));
        }

        return facilityMapper.selectPage(page, queryWrapper);
    }

    @Override
    public List<TruckBo> getAllTacoTruckList() {
        return facilityMapper.getAllTacoTruckList();
    }
}
