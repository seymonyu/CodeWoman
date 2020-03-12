import React, { Component } from "react";
import "./scss/start.scss";
import Eye from "./images/Eye.svg";
import Story from "./Story";

class Start extends Component {
  state = {
    mountStory: false
  };

  toggleStoryMount = () => {
    this.setState({ mountStory: !this.state.mountStory });
  };

  render() {
    return (
      <div>
        {this.state.mountStory === true ? (
          <Story />
        ) : (
          <section className="start">
            <title>Artechmiss</title>
            <div className="start--wrap container-fluid">
              <div className="start--row row">
                <div className="start--col_left col">
                  <div className="eye--wrapper">
                    <img className="start--eye" src={Eye} alt="Eye" />
                  </div>
                </div>
                <div className="start--col_right col">
                  <h2 className="start--title">Artechmiss</h2>
                  <p className="start--typo"> Super Heroine</p>
                  <div className="circle--wrap">
                    <div className=""></div>
                    <button
                      type="button"
                      onClick={this.toggleStoryMount}
                      className="circle--typo btn btn-link"
                    >
                      Play the Game
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    );
  }
}

export default Start;
