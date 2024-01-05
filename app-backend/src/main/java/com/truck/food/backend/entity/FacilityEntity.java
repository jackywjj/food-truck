package com.truck.food.backend.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.*;

/**
 * @author Jacky Wu
 */
@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = false)
@TableName("tbl_facilities")
public class FacilityEntity {

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    private Integer locationId;

    private String applicant;

    private Integer facilityType;

    private String cnn;

    private String locationDescription;

    private String address;

    private String blocklot;

    private String block;

    private String lot;

    private String permit;

    private String status;

    private String foodItems;

    private String locationX;

    private String locationY;

    private String latitude;

    private String longitude;

    private String schedule;

    private String dayshours;

    private String noiSent;

    private String approved;

    private String received;

    private String priorPermit;

    private String expirationDate;

    private String location;

    private String firePreventionDistricts;

    private String policeDistricts;

    private String supervisorDistricts;

    private String zipCodes;

    private String neighborhoods;
}
