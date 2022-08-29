package com.example.fission;

import lombok.Data;

@Data
public class EnvironmentStat {

    public int acquisition  = 0;
    public int totalParticipation;
    public int totalSuccess;
    public int totalFission;

    public int currentRound;
    public boolean done = false;

    public void incrementCurrentRound(){
        this.currentRound++;
    }


    public void incrementParticipation(){
        this.totalParticipation +=1;
    }

    public void incrementSuccess(int n){

        this.totalSuccess +=n;
    }

    public void incrementFissionCount(int n){
        this.totalFission += n;
    }

    public int getAcquisition() {
        return acquisition;
    }

    public void setAcquisition(int acquisition) {
        this.acquisition = acquisition;
    }

    public int getTotalParticipation() {
        return totalParticipation;
    }

    public void setTotalParticipation(int totalParticipation) {
        this.totalParticipation = totalParticipation;
    }

    public int getTotalSuccess() {
        return totalSuccess;
    }

    public void setTotalSuccess(int totalSuccess) {
        this.totalSuccess = totalSuccess;
    }

    public int getTotalFission() {
        return totalFission;
    }

    public void setTotalFission(int totalFission) {
        this.totalFission = totalFission;
    }

    public int getCurrentRound() {
        return currentRound;
    }

    public void setCurrentRound(int currentRound) {
        this.currentRound = currentRound;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }
}
