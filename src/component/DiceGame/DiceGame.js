import React, { Component } from "react";
import node from "../DiceGame/DiceGame.css";
import { connect } from "react-redux";
import Information from "../../redux/Information";
import Dices from "./Dices";
class DiceGame extends Component {
  styleNode = {
    width: "130px",
    height: "130px",
    borderRadius: "13px",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "30px",
    background: "#0A72FE",
  };



  render() {
    return (
      <div className="container text-center game">
        <h1
          className="py-5 text-uppercase"
          style={{ fontSize: "80px", fontWeight: "bold" }}
        >
          Game đổ xúc xắc
        </h1>
        <div className="row justify-content-around">
          <div className="col-5">
            <button id="tai" onClick={() => {this.props.datCuoc(true)}} className="diceNode" style={this.styleNode}>
              Tài
            </button>
          </div>
          <div className="col-2">
            <Dices></Dices>
          </div>
          <div className="col-5">
            <button id="xiu" onClick={() => {this.props.datCuoc(false)}} className="diceNode" style={this.styleNode}>
              Xỉu
            </button>
          </div>
        </div>
        <div className="thongTinChoi text-center">
          <Information></Information>
          <button onClick={() => {this.props.playGame()}} className="btn btn-success p-2 display-2 mt-5">
            Play game
          </button>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    datCuoc: (taiXiu) => {
      // xu ly hinh anh
      let idTai = document.getElementById("tai");
      let idXiu = document.getElementById("xiu");
      if(taiXiu) {
        idTai.classList.add("active");
        idXiu.classList.remove("active");
      } else {
        idXiu.classList.add("active");
        idTai.classList.remove("active");
      }

      let action = {
        type: 'DAT_CUOC',
        taiXiu
      }
      dispatch(action);
    },

    playGame: () => {
      dispatch({
        type: 'CHOI_GAME'
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(DiceGame);
