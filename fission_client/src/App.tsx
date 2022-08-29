import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap';
// import './static/style/sb-admin-2.css';
// import './static/style/all.min.css';
// import './component/_sidebar.scss';
// import './component/_topbar.scss';



import {
    BrowserRouter as Router,
    //Routes,
    Route,
} from 'react-router-dom';
import { Header } from './component/Header';
import { Acquisition } from './component/Acquisition';
import { NavBar } from './component/NavBar';
import { FissionAnalysis } from './component/FissionAnalysis';
import { Activation } from './component/Activation';



interface State{
    mode: string;
}

class App extends React.Component<{}, State>{
  constructor(props:{}) {
    super(props);
    this.state={
        mode:"acquisition",
    }
  }
  
  setMode = (newMode:string) =>{
      this.setState({mode:newMode});
  };


  render() {
      const{ mode}= this.state;
    return (

        <div className="App">
          <div className = "app">
              
              <div id="wrapper" className="toggled">
                <NavBar setMode={this.setMode}></NavBar>
                  
                  {/*content wrapper*/}
                  <div id="content-wrapper" className="d-flex flex-column">
                      {/*main content*/}
                      <div id="content">
                          {/*top bar*/}
                          <Header>
                          </Header>

                          {/*begin page content*/}

                          {mode == "acquisition" &&  <Acquisition/>}
                          {mode == "activation" &&  <Activation/>}




                          
                          <FissionAnalysis></FissionAnalysis>
                      </div>
                      {/*main content end*/}
                </div>
                  {/*content wrapper end*/}
              </div>
          </div>
        </div>

    );
  }

}

export default App;
