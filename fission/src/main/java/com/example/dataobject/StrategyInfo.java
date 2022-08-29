package com.example.dataobject;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
@Data

public class StrategyInfo{

    @Id
    //天数
    private Integer Day;

    //当天平台总用户数
    private Integer totalUsers;

    //日内活跃用户数（至少完成一次请求发送或助力）
    private Integer DAU;

    //当天助力请求发送次数
    private Integer requestsSent;

    //当天助力完成次数
    private Integer requestsCompleted;

        }
