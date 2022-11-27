import React, { Component } from 'react'
import {connect} from 'react-redux'
class Information extends Component {
  render() {
    return (
      <div>
        <h2 className="display-4" style={{fontWeight: 'bold'}}>BẠN CHỌN: <span className="text-danger">{this.props.taiXiu ? "Tài" : "Xỉu"}</span> </h2>
          <h3 className="display-4" style={{fontWeight: 'bold'}}>Số bàn thắng: <span className="text-success"> {this.props.soBanThang} </span> </h3>
          <h3 className="display-4" style={{fontWeight: 'bold'}}>Tổng số bàn chơi: <span className="text-primary">{this.props.soBanChoi}</span> </h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    soBanChoi: state.DiceGameReducer.soBanChoi,
    soBanThang: state.DiceGameReducer.soBanThang,
    taiXiu: state.DiceGameReducer.taiXiu
  };
};

export default connect(mapStateToProps)(Information);
