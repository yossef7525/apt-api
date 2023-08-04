import { AptContent } from '../app/classes/AptContent.js'
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
    if(!process.env.PATH_MDB) return;
    const aptContent = new AptContent(process.env.PATH_MDB);
    
    AlphonState = aptContent.getContentByTableName(Tables.Alphon);
    CommitsState = aptContent.getContentByTableName(Tables.Commits);
    CommitsDetailsState = aptContent.getContentByTableName(Tables.CommitsDetails);
    TrumotState = aptContent.getContentByTableName(Tables.Trumot);
    TrumotDetailsState  = aptContent.getContentByTableName(Tables.TrumotDetails);
    MatchesState  = aptContent.getContentByTableName(Tables.Matches);

    console.log('data is refreshed');
    console.table([
        {table: Tables.Alphon,length: AlphonState.length},
        {table: Tables.Commits,length: CommitsState.length},
        {table: Tables.CommitsDetails,length: CommitsDetailsState.length},
        {table: Tables.Trumot,length: TrumotState.length},
        {table: Tables.TrumotDetails,length: TrumotDetailsState.length},
        {table: Tables.Matches,length: MatchesState.length},
    ]);
}

setTimeout(RefreshData, 1000)
// setInterval(RefreshData, 100000)