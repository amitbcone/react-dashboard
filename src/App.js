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
      button:"primary",
      switch1:"primary",
      switch2:"primary",
      switch3:"primary"
    }
    this.onclk = this.onclk.bind(this);
    this.popuButtons =this.popuButtons.bind(this);
    this.togglButton = this.togglButton.bind(this);
  };
  togglButton(){
    this.setState({switch1:"primary"});
  //   NotificationSounds.getNotifications().then(soundsList => {
  //     console.warn('SOUNDS', JSON.stringify(soundsList ));
      
  //     playSampleSound(soundsList[1]); 
  // });
  }
  onclk(params) {
    console.log('params');
    if(params ==="switch1"){
      try{
         axios.get('http://192.168.1.31/switch1On').then((resp)=>{console.log('resp data-->');
    console.log(resp.data);
      if(resp.data!=='Hello')
    this.togglButton(); }).catch( (err) =>{console.log("err.response.status")});
      this.setState({switch1:"Disabled"});
      }catch(errr){
        console.log('errrroooorr');
        console.log(errr);
      }
      setTimeout(function(){
 
        axios.get('http://192.168.1.31/switch1Off').then(resp=>{});
        this.togglButton();
        
      }.bind(this), 15*60000);//
      

    }else{
      axios.get('http://192.168.1.31/switch1Off').then(resp=>{});
    }
    //this.state.button === "Disabled" ? this.setState({button:"primary"}) : this.setState({button:"Disabled"});
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
            <td><AwesomeButton  type={this.state.switch1} ripple onPress={() => this.onclk('switch1')}>Button1</AwesomeButton></td>
            <td><AwesomeButton  type="primary" ripple  onPress={() => this.onclk('switch1')}>Button2</AwesomeButton></td>
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
