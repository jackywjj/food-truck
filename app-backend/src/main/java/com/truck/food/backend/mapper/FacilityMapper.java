package com.truck.food.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.truck.food.backend.entity.FacilityEntity;
import com.truck.food.backend.entity.TruckBo;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

/**
 * @author Jacky Wu
 */
@Mapper
public interface FacilityMapper extends BaseMapper<FacilityEntity> {
    @Select("SELECT DISTINCT b.applicant FROM tbl_food_items a INNER JOIN tbl_facilities b ON a.location_id=b.location_id WHERE a.food_item like '%taco%'")
    List<TruckBo> getAllTacoTruckList();
}
