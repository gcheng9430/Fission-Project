import {Component} from "react";
import { Button } from 'react-bootstrap';




interface State{
    totalAgent: number;
    totalActivated: number;
    totalSeededPlayer: number;
    task: number;
    reward: number;
    psychDistBar: number;
    maxDays: number;
    roundsPerDay: number;
    maxHelpFissionPeople: number;
}
interface Props{

}

export class Activation extends Component<Props,State> {

    constructor(props:Props) {
        super(props);
        this.state = {
            totalAgent: 1000,
            totalActivated: 200,
            totalSeededPlayer: 50,
            task: 3,
            reward: 5,
            psychDistBar: 0.5,
            maxDays: 7,
            roundsPerDay: 100,
            maxHelpFissionPeople: 2,
        }
    }

    runSimulation = ()=>{

    };


    handleChangeTotalAgent = (event:any) =>{
        this.setState({totalAgent:event.target.value});
    };
    handleChangeTotalActivated = (event:any) =>{
        this.setState({totalActivated:event.target.value});
    };
    handleChangeTotalSeededPlayer = (event:any) =>{
        this.setState({totalSeededPlayer:event.target.value});
    };
    handleChangeTask = (event:any) =>{
        this.setState({task:event.target.value});
    };
    handleChangeReward = (event:any) =>{
        this.setState({reward:event.target.value});
    };
    handleChangePsychDistBar = (event:any) =>{
        this.setState({psychDistBar:event.target.value});
    };
    handleChangeMaxDays = (event:any) =>{
        this.setState({maxDays:event.target.value});
    };
    handleChangeRoundsPerDay = (event:any) =>{
        this.setState({roundsPerDay:event.target.value});
    };
    handleChangeMaxHelpFissionPeople = (event:any) =>{
        this.setState({maxHelpFissionPeople:event.target.value});
    };


    render(){
        const {
            totalAgent,
            totalActivated,
            totalSeededPlayer,
            task,
            reward,
            psychDistBar,
            maxDays,
            roundsPerDay,
            maxHelpFissionPeople,
        } = this.state;
        return(
            <div>


                <div className="container-fluid mx-1">
                    {/*page heading*/}
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">Activation</h1>
                    </div>
                    {/*card*/}
                    <div className="card o-hidden border-0 shadow-lg my-5 ">
                        <div className="card-body p-0">
                            {/*content row*/}
                            {/*<div className="row mt-4 justify-content-center">*/}
                            {/*    <div className="col-lg-6">*/}
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Set your parameter for Activation Mode!</h1>
                                </div>
                                <form className="user">
                                    <div className = "row">
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="totalAgent" className="w-100 font-weight-bold">
                                                Total Agent
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="totalAgent"
                                                    placeholder="eg.1000"
                                                    value={totalAgent}
                                                    onChange={this.handleChangeTotalAgent}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="totalActivated" className="w-100 font-weight-bold">
                                                Total Activated
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="totalActivated"
                                                    placeholder="eg.200"
                                                    value={totalActivated}
                                                    onChange={this.handleChangeTotalActivated}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="totalSeededPlayer" className="w-100 font-weight-bold">
                                                Total Seeded Player
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="totalSeededPlayer"
                                                    placeholder="eg.50"
                                                    value={totalSeededPlayer}
                                                    onChange={this.handleChangeTotalSeededPlayer}
                                                    required
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="task" className="w-100 font-weight-bold">
                                                Task
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="task"
                                                    placeholder="eg.3"
                                                    value={task}
                                                    onChange={this.handleChangeTask}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="reward" className="w-100 font-weight-bold">
                                                Reward
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="reward"
                                                    placeholder="eg.5"
                                                    value={reward}
                                                    onChange={this.handleChangeReward}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="psychDistBar" className="w-100 font-weight-bold">
                                                PsychDistBar
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="psychDistBar"
                                                    placeholder="eg.0.5 (should be between 0 and 1)"
                                                    value={psychDistBar}
                                                    onChange={this.handleChangePsychDistBar}
                                                    required
                                                />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="maxDays" className="w-100 font-weight-bold">
                                                maxDays
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="maxDays"
                                                    placeholder="eg.7"
                                                    value={maxDays}
                                                    onChange={this.handleChangeMaxDays}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="roundsPerDay" className="w-100 font-weight-bold">
                                                RoundsPerDay
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="roundsPerDay"
                                                    placeholder="eg.7"
                                                    value={roundsPerDay}
                                                    onChange={this.handleChangeRoundsPerDay}
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className="form-group col-12 col-lg-4">
                                            <label htmlFor="maxHelpFissionPeople" className="w-100 font-weight-bold">
                                                MaxHelpFissionPeople
                                                <input
                                                    type="number"
                                                    className="form-control form-control-user"
                                                    id="maxHelpFissionPeople"
                                                    placeholder="eg.3"
                                                    value={maxHelpFissionPeople}
                                                    onChange={this.handleChangeMaxHelpFissionPeople}
                                                    required
                                                />
                                            </label>
                                        </div>
                                    </div>


                                    <div className = "row justify-content-center">
                                        <div className="pb-2 pt-2 col-sm-2 ">
                                            <Button
                                                type="submit"
                                                onClick={this.runSimulation}
                                                variant="primary" className="btn btn-primary btn-user btn-block">
                                                Run
                                            </Button>
                                        </div>
                                    </div>

                                </form>
                            </div>

                            {/*</div>*/}
                            {/*</div>*/}
                            {/*content end*/}
                        </div>
                    </div>

                </div>
                {/*container end*/}

            </div>
        );
    }


}

