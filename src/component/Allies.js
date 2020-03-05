import React, { Component } from "react";

import axios from "axios";

const access_token = "2560077217542151";

class AlliesData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myAll: {
        powerstats: {
          inteligence: " ",
          strength: "",
          speed: ""
        },
        image: {
          url: ""
        },
        name: ""
      }
    };
  }

  componentDidMount() {
    axios.get(`/${access_token}/${"589"}`).then(res => {
      this.setState({ myAll: res.data });
    });
  }
  render() {
    return <div>hello {this.state.myAll.name} </div>;
  }
}

export default AlliesData;
