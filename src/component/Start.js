import React, { Component } from "react";
import "./scss/Global.scss";
import "./scss/Start.scss";
import "./scss/Start.css";
import Background from "./images/Heroine2.svg";
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
            <h2 className="start--title">Artechmis</h2>
            <div className="start--wrap container-fluid">
              <div className="eye--wrapper ">
                <div className="eye--img"></div>
                <div className="eye--img_pupille"></div>
              </div>

              <div className="start--typo_wrap wrapper ">
                <p className="start--typo slide">
                  {" "}
                  Super <br></br>Heroine
                </p>
              </div>
              <div className="circle--wrap">
                <button
                  type="button"
                  onClick={this.toggleStoryMount}
                  className="btn from-right"
                >
                  Play the Game
                </button>
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
//                     <div className=""></div>
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
