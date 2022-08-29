package com.example.fission;
import com.example.fission.Scenario.BaseScenario;
import lombok.Data;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;

import static com.example.fission.Agent.calculateDist;

@Data
public class World {
    public List<Agent> agents  = new ArrayList<Agent>();
    public int numAgent = 0;
    EnvironmentStat environmentStat;

    public List<Agent> getAgents() {
        return agents;
    }

    public int getNumAgent() {
        return numAgent;
    }

    public EnvironmentStat getEnvironmentStat() {
        return environmentStat;
    }

    public void setAgents(List<Agent> agents) {
        this.agents = agents;
    }

    public void setNumAgent(int numAgent) {
        this.numAgent = numAgent;
    }

    public void setEnvironmentStat(EnvironmentStat environmentStat) {
        this.environmentStat = environmentStat;
    }

    //初始化 在scenario里面 决定world的参数 有多少个agent
    public World (BaseScenario scenario){

        //add agents for world
        this.setNumAgent(scenario.getNumAgent());
        for (int i = 0;i < numAgent;i++){
            Agent agent = new Agent();
            if(i< scenario.getPlatFormUser()){
                if (i<scenario.getSeededPlayer()){
                    agent.setStatus(2);//种子用户
                    agent.setFissionable(true);
                }
                agent.setStatus(1); //平台用户
            }
            this.agents.add(agent);
        }
        //make intitial conditions
        resetWorld();

    }

    //重置world里面所有agent的值
    public void resetWorld() {
        double start = -1;
        double end = 1;
        Random random = new Random();
        //reset or initialize color and position for all agents
        for (Agent agent : this.agents) {
            agent.getViewAgent().setColor(new double[]{0.35, 0.35, 0.85});

            agent.getViewAgent().setSize(0.5);
            double x = start + random.nextDouble() * (end - start);
            double y = start + random.nextDouble() * (end - start);
            agent.getViewAgent().setPosition(new double[]{x, y});
        }

        this.environmentStat = new EnvironmentStat();
        int agentId = 0;
        //为他们所有人分配邻居
        for (Agent agent : this.getAgents()) {
            //随机一个邻居范围
            agentId += 1;
            Random rdm = new Random();
            double maxSocialDist = 0.1;  //有待考证
            //寻找邻居
            for (Agent other : this.getAgents()) {
                if (agent.getSocialAndPsychDist().containsKey(other)) {
                    continue;
                }
                double socialDist = calculateDist(agent, other);
                if (socialDist < maxSocialDist && socialDist != 0) {
                    agent.getSocialAndPsychDist().put(other, Arrays.asList(socialDist, socialDist));
                    other.getSocialAndPsychDist().put(agent, Arrays.asList(socialDist, socialDist));
                }
            }
            //System.out.println("this agent " + agentId + " has original " + agent.getSocialAndPsychDist().size() + "neighbors"); //这里初始化neighbor
        }

    }
}
