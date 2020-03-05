import React, { Component } from "react";
import GiveTheResult from "./GiveTheResult"


class DisplayResult extends Component {

  render() {
    return (
      <section >
           
           <GiveTheResult flag={this.props.flag} handlerunmount={this.props.handlerunmount}/>
                
      </section>
    );
  }
}

export default DisplayResult;
