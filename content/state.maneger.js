import { Worker } from 'worker_threads'

///==========================
///state tables in store
///==========================

export let AlphonState = []
export let CommitsState = []
export let CommitsDetailsState = []
export let TrumotState = []
export let TrumotDetailsState = []
export let MatchesState = []

const worker = new Worker('./content/refresh.data.js')
worker.once('message', (data) => {
    AlphonState = data.AlphonState
    CommitsState = data.CommitsState
    CommitsDetailsState = data.CommitsDetailsState
    TrumotState = data.TrumotState
    TrumotDetailsState = data.TrumotDetailsState
    MatchesState = data.MatchesState
})
