const stateDice = {
    taiXiu: true,
    mangDice:[
        {ma: 1, hinhAnh: "images/1.png"},
        {ma: 1, hinhAnh: "images/1.png"},
        {ma: 1, hinhAnh: "images/1.png"}
    ],
    soBanThang: 0,
    soBanChoi: 0
}

const DiceGameReducer = (state = stateDice, action) => {
    switch(action.type)
    {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu
            return {...state}
        case 'CHOI_GAME':
            let mangNgauNhien = [];
            for(var i = 0; i<3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let dice = {
                    ma: soNgauNhien,
                    hinhAnh: `images/${soNgauNhien}.png`
                }

                mangNgauNhien.push(dice);
            }
            state.mangDice = mangNgauNhien;
            // xu ly so ban choi
            state.soBanChoi += 1;

            // xu ly so ban thang
            let tongDiem = state.mangDice.reduce((tongDiem, item, index)=>{
                return tongDiem += item.ma;
            }, 0);

            // Kiem tra win game
            if ((tongDiem > 11 && state.taiXiu) || (tongDiem <= 11 && !state.taiXiu)) {
                state.soBanThang += 1;
            }
            
            return {...state}
        default: return {...state}
    }
}

export default DiceGameReducer;