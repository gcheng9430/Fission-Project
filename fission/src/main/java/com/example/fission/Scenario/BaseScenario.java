package com.example.fission.Scenario;

import com.example.fission.Agent;
import com.example.fission.World;
import lombok.Data;

@Data
public class BaseScenario {

    private double psychDistBar;

    private int numAgent;

    private int seededPlayer;

    private int platFormUser;

    private int maxDays;

    private int roundsPerDay;

    private  int maxHelpFissionPeople;









    public BaseScenario() {
    }



    //在这里为参与者分派任务 以及一天10轮每个人每天10轮中最多助力几个人
    //pass by value ?
    public void applyActionFissionForce(World world) {

        for (Agent agent : world.agents) {
            //agent.cur_social_distance = agent.max_social_distance * np.exp(-agent.action.fission / 10) TODO
            agent.setMaxHelpFissionPeople(this.maxHelpFissionPeople);//最多助力几人
            if (true) {
                // 平台策略：每个用户的任务
                agent.setFissionTask(5);  //according to some formula
                agent.setPossibleReward(3);

            }
        }
    }

    public int getNumAgent() {
        return numAgent;
    }

    public void setNumAgent(int numAgent) {
        this.numAgent = numAgent;
    }

    public int getSeededPlayer() {
        return seededPlayer;
    }

    public void setSeededPlayer(int seededPlayer) {
        this.seededPlayer = seededPlayer;
    }

    public int getPlatFormUser() {
        return platFormUser;
    }

    public void setPlatFormUser(int platFormUser) {
        this.platFormUser = platFormUser;
    }

    public int getMaxDays() {
        return maxDays;
    }

    public void setMaxDays(int maxDays) {
        this.maxDays = maxDays;
    }

    public int getRoundsPerDay() {
        return roundsPerDay;
    }

    public void setRoundsPerDay(int roundsPerDay) {
        this.roundsPerDay = roundsPerDay;
    }

    public int getMaxHelpFissionPeople() {
        return maxHelpFissionPeople;
    }

    public void setMaxHelpFissionPeople(int maxHelpFissionPeople) {
        this.maxHelpFissionPeople = maxHelpFissionPeople;
    }


    public double getPsychDistBar() {
        return psychDistBar;
    }

    public void setPsychDistBar(double psychDistBar) {
        this.psychDistBar = psychDistBar;
    }


}
