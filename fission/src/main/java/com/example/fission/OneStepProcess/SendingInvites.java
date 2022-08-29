package com.example.fission.OneStepProcess;

import com.example.fission.Scenario.BaseScenario;
import com.example.fission.Agent;
import com.example.fission.World;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


public class SendingInvites implements Runnable{
    World world;
    BaseScenario scenario;

//TODO
    @Override
    public void run() {

    }


    public static HashMap<Agent,List<Agent>>  sendingInvites(World world,BaseScenario scenario){

        HashMap<Agent, List<Agent>> to_be_fissioned = new HashMap<Agent, List<Agent>>();


        for (Agent agent: world.getAgents()){
            //如果是新的 一天 新的10轮 重置可以帮助的人数 重置可以参加的状态 重置统计获得助力数
            if (agent.curRound %10 ==0){
                agent.setMaxHelpFissionPeople(scenario.getMaxHelpFissionPeople());
                agent.setGotReward(false);
                agent.resetCurFissionCount();
            }
            //if in the  game
            if (agent.fissionable && !agent.gotReward) { //被触及到且今天还没有成功过 就可以继续发
                world.getEnvironmentStat().incrementParticipation(); //世界参与人数增加
                agent.setParticipationCount(agent.getParticipationCount()+1); //个人参与轮数增加
                //System.out.println("checking"+agent.getSocialAndPsychDist().size());
                //所有要邀请的人
                List<Agent> invited = decideToSend(agent,scenario);

                for (Agent receiver :invited) {

                    to_be_fissioned.putIfAbsent(receiver, new ArrayList<Agent>());
                    to_be_fissioned.get(receiver).add(agent);

                }
            }
        }

        return to_be_fissioned;
    }



    /**
     * 发给我的所有邻居（psych dist太远的需要排除）
     * @param sender
     * @return list of agents sender decides to send
     */
    public static List<Agent> decideToSend(Agent sender, BaseScenario scenario){
        List<Agent> invited = new ArrayList<Agent>();
        //遍历一阶neighbor   TODO：遍历二阶
        HashMap<Agent,List<Double>> socialAndPsychDist = sender.getSocialAndPsychDist();
        //System.out.println("iterating" + socialAndPsychDist.size() +"neighbors");
        for (Agent receiver :socialAndPsychDist.keySet()){
            List<Double> relation = socialAndPsychDist.get(receiver);
            double socialDist = relation.get(0);
            double psychDIst = relation.get(1);
            if ( psychDIst< socialDist*(1+ scenario.getPsychDistBar())){
                //发送
                invited.add(receiver);
            }
        }
        return invited;
    }



}
