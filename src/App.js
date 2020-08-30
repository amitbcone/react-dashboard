import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./styles.scss";
import axios from 'axios';

import AppComponent from './components/App';
import './styles/app.scss';


class App extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    return (
      <Buttn></Buttn>
    )
  }
}

class Buttn extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      data:"testing",
      button:"primary"
    }
    this.onclk = this.onclk.bind(this);
    this.popuButtons =this.popuButtons.bind(this);
  };
  onclk(params) {
    console.log('aaaaaaa');
    axios.get('');
    this.state.button === "Disabled" ? this.setState({button:"primary"}) : this.setState({button:"Disabled"});
  }
  popuButtons(){

    let content = [];
    for (let i = 0; i < 5; i++) {
      content.push(<td><AwesomeButton type={this.state.button} ripple 
        onPress={() => this.onclk(`Button${i}`)}>Button${i}</AwesomeButton></td>);
      
    }
    return content;
  }

  render(){
     return(
    <div>
      <AppComponent/>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
       
      <table>
          <tr>
            {/* {this.popuButtons()} */}
            <td><AwesomeButton type={this.state.button} ripple onPress={() => this.onclk('Button1')}>Button1</AwesomeButton></td>
            <td><AwesomeButton  type="primary" ripple>Button2</AwesomeButton></td>
            <td><AwesomeButton type="primary">Button3</AwesomeButton></td>
            <td><AwesomeButton type="primary">Button4</AwesomeButton></td>
          </tr>
        </table>
      </div>
    </div>
    );

  }

}


export default App;
