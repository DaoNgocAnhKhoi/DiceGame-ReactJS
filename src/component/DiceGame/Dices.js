import React, { Component } from 'react'
import {connect} from 'react-redux'
class Dices extends Component {
    styleDice = {
        width: "50px",
      };
    renderXucXac = () => {

        return this.props.mangDice.map ((xucXac, index) => {
          console.log(xucXac);
            return <div className='col-4' key={index}>
                <img style={this.styleDice} alt="a" src={xucXac.hinhAnh}></img>
            </div>
        })
    }
    
  render() {
    return (
        <div className="row">
            {this.renderXucXac()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        mangDice: state.DiceGameReducer.mangDice,
    };
  };
  
  export default connect(mapStateToProps)(Dices);
  