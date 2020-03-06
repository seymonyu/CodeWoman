import React, { Component } from "react";
import GiveTheResult from "./GiveTheResult"


class DisplayResult extends Component {

  render() {
    return (
      <section >
           
           <GiveTheResult flag={this.props.flag} 
           handlerunmount={this.props.handlerunmount} 
           handlerunmountQuestion={this.props.handlerunmountQuestion} 
           mount={this.props.mount}
           handlerunmountStory={this.props.handlerunmountStory}
         />
                
      </section>
    );
  }
}

export default DisplayResult;
