import { AlphonState, TrumotDetailsState } from "../../content/state.maneger.js";

///========================================================
/// this function return all tormim for cuurnet matrim code
///========================================================
export function getTormimByMatrimCode(req, res){
    const {matrimCode} = req.body;
    const users = AlphonState.filter(row => row.matrimCode === matrimCode && row.isTorem)
    users ? res.status(200).json(users) : res.status(400).json({ message: 'bad request' });
}

///========================================================
/// this function return all tormim for cuurnet matrim code
///========================================================
export function getLastPaymentForTormin(req, res){
    const {tormimIds} = req.body;
    const usersTrumot = []
     tormimIds.forEach(id => {
      usersTrumot.push(getLastPaymentById(id))
    }); 
    usersTrumot ? res.status(200).json(usersTrumot) : res.status(400).json({ message: 'bad request' });
}

function getLastPaymentById(id){
  return TrumotDetailsState.filter(row => row.toremId === id).at(-1)
}