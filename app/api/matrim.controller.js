import { AlphonState, CommitsDetailsState, TrumotDetailsState } from '../../content/state.maneger.js'
import { isSameMonth } from '../utils/isSameMonth.js'
import { isProjectCode } from '../utils/isProjectCode.js'
import { isOneYearCommit } from '../utils/isOneYearCommit.js';
import {isCommitActive} from'../utils/isCommitActive.js';

function sumPaymentMonth(matrimCode, month, year) {
    const usersIds = AlphonState.filter(user => user.matrimCode === matrimCode).map(user => user.id);
    const rows = TrumotDetailsState.filter(row => usersIds.includes(row.toremId) && isSameMonth(row.date, month, year) && isProjectCode(row.trumaId, 10));
    const commits = CommitsDetailsState.filter(row => usersIds.includes(row.toremId) && isSameMonth(row.date, month, year) && isCommitActive(row.commitId))
    rows.forEach(row => row.isOneYear = isOneYearCommit(row.id, row.toremId))
    return {
        payment: rows.reduce((a, b) => a + (b.shahar === 'שקל' ? Number(b.sum) : Number(b.dolar * b.shahar)), 0),
        commission: rows.reduce((a, b) => a + (b.shahar === 'שקל' ? Number(b.sum / (b.isOneYear ? 10 : 20)) : Number(b.dolar * b.shahar) / (b.isOneYear ? 10 : 20)), 0),
        remainder: commits.reduce((a, b) => a + (b.shahar === 'שקל' ? Number(b.sum) : Number(b.dolar * b.shahar)), 0),
    }
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
    const { payment, commission , remainder} = sumPaymentMonth(matrimCode, month, year);
    const object = {
        sumPaymentMonth: payment,
        sumCommissionMonth: commission,
        sumRemainderMonth: remainder
    }
    res.status(200).json(object);
}