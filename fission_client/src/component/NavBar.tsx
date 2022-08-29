
import {Component} from "react";


interface Props{
    setMode:(newMode:string )=>void;
}

export class NavBar extends Component<Props> {

    constructor(props:Props) {
        super(props);
    }
    render(){
        const {setMode} = this.props;
        return(

            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/*side bar brand*/}
                <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div className="sidebar-brand-text mx-3">Management System </div>
                </div>


                <hr className="sidebar-divider my-0"/>
                <li className="nav-item active">
                    <a className="nav-link" href="">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>


                {/*divider*/}
                <hr className="sidebar-divider my-0 mb-3"></hr>

                {/*headingg*/}
                <div className="sidebar-heading">
                    Goal
                </div>

                {/*nav item*/}
                <li className="nav-item">
                    <a className="nav-link" href="" onClick={(e)=>setMode("acquisition")}>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Acquisition</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="" onClick={(e)=>setMode("activation")}>
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Activition</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Retention</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Revenue</span></a>
                </li>



                <hr className="sidebar-divider my-0 mb-3"/>

                    {/*heading*/}
                    <div className="sidebar-heading ">
                        Analysis
                    </div>

                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Fission Analysis</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Market Analysis</span></a>
                    </li>

                    
                </ul>
            
            
            
            
        );
    }


}