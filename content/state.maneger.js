import { AptContent } from '../app/classes/AptContent.js'
import { Worker } from 'worker_threads'

import {Tables} from '../app/types/enums.js'

///==========================
///state tables in store
///==========================

export let AlphonState = []
export let CommitsState = []
export let CommitsDetailsState = []
export let TrumotState = []
export let TrumotDetailsState = []
export let MatchesState = []

///==========================
///function to refresh state
///==========================
export function RefreshData(){
   
}

const worker = new Worker('./content/refresh.data.js')
worker.once('message', (data) => {
   

        console.log(data);
    
    // AlphonState = data.AlphonState
    // CommitsState = data.CommitsState
    // CommitsDetailsState = data.CommitsDetailsState
    // TrumotState = data.TrumotState
    // TrumotDetailsState = data.TrumotDetailsState
    // MatchesState = data.MatchesState
})

// setTimeout(RefreshData, 1000)
// setInterval(RefreshData, 100000)