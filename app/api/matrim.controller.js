import { AlphonState, TrumotDetailsState, TrumotState } from '../../content/state.maneger.js'
import { isSameMonth } from '../utils/isSameMonth.js'

function sumPaymentMonth(matrimCode, month, year) {
    const usersIds = AlphonState.filter(user => user.matrimCode === matrimCode).map(user => user.id);
    const rows = TrumotDetailsState.filter(row => usersIds.includes(row.toremId) && isSameMonth(row.date, month, year) );
    return rows.reduce((a, b) => a + (b.shahar === 'שקל' ? Number(b.sum) : (Number(b.sum) * Number(b.shahar))), 0)
}

function sumCommissionMonth() {
    return 0;
}

function sumRemainderMonth() { 
    return 0;
}

export function getMonthDataByMatrim(req, res) {
    const matrimCode = req.user.code;
    const { month, year } = req.body;
    const object = {
        sumPaymentMonth: sumPaymentMonth(matrimCode, month, year),
        sumCommissionMonth: sumCommissionMonth(),
        sumRemainderMonth: sumRemainderMonth()
    }
    res.status(200).json(object);
}