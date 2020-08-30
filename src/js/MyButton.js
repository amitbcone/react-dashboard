import React from 'react';
import AwesomeButton from 'react-awesome-button';
//import "react-awesome-button/dist/styles.css";


class MyButton extends React.Component{

    constructor(props){
      super(props);
      this.state ={
        data:""
      }
    }
    render(){
      return(
        <table><tr><td><AwesomeButton type="primary">Button1</AwesomeButton></td>
        <td><AwesomeButton type="primary">Button2</AwesomeButton></td>
        <td><AwesomeButton type="primary">Button3</AwesomeButton></td>
        <td><AwesomeButton type="primary">Button4</AwesomeButton></td></tr></table>
      );
  
    }
  
  }
  export default MyButton;
