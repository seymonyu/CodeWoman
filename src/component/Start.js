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
                  <p className="start--typo">Super</p>
                  <p className="start--typo">Heroine</p>
                  <div className="circle--wrap">
                    <div className="blob"></div>
                    <button
                      type="button"
                      onClick={this.toggleStoryMount}
                      className="circle--typo btn btn-link"
                    >
                      Play the Game
                    </button>
                  </div>
                  <span className="start--marginal">
                    #woman #tech #wildcodeschool #amsterdam
                  </span>
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

// import React, { Component } from "react";

// import "./scss/start.scss";

// import Eye from "./images/Eye.svg";
// import Story from "./Story";

// class Start extends Component {
//   state = {
//     mountStory: false
//   };

//   toggleStoryMount = () => {
//     this.setState({ mountStory: !this.state.mountStory });
//   };

//   render() {
//     return (
//       <div>
//         {this.state.mountStory === true ? (
//           <Story />
//         ) : (
//           <section className="start">
//             <title>Artechmiss</title>
//             <div className="start--wrap container-fluid">
//               <div className="start--row row">
//                 <div className="start--col_left col">
//                   <div className="eye--wrapper">
//                     <img className="start--eye" src={Eye} alt="Eye" />
//                   </div>
//                 </div>
//                 <div className="start--col_right col">
//                   <h2 className="start--title">Artechmiss</h2>
//                   <p className="start--typo">Super</p>
//                   <p className="start--typo">Heroine</p>
//                   <div className="circle--wrap">
//                     <div className="blob"></div>
//                     <button
//                       onClick={this.toggleStoryMount}
//                       type="button"
//                       className="circle--typo btn btn-link"
//                     >
//                       Play the Game
//                     </button>
//                   </div>
//                   <span className="start--marginal">
//                     #woman #tech #wildcodeschool #amsterdam
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}
//       </div>
//     );
//   }
// }

// export default Start;
