import {parentPort} from 'worker_threads'
import { AptContent } from '../app/classes/AptContent.js'
import {Tables} from '../app/types/enums.js'
console.log('fff');
setTimeout(() => {
    do {
        console.log('ff');
        console.log(process.env.PATH_MDB);
        if(!process.env.PATH_MDB) {} else {

            console.log('fetch data');
            const aptContent = new AptContent(process.env.PATH_MDB);
            let data = {
                
                AlphonState:  aptContent.getContentByTableName(Tables.Alphon),
                CommitsState: aptContent.getContentByTableName(Tables.Commits),
        CommitsDetailsState: aptContent.getContentByTableName(Tables.CommitsDetails),
        TrumotState: aptContent.getContentByTableName(Tables.Trumot),
        TrumotDetailsState: aptContent.getContentByTableName(Tables.TrumotDetails),
        MatchesState: aptContent.getContentByTableName(Tables.Matches)
    }
    
    console.log('data is refreshed');
    console.table([
        {table: Tables.Alphon,length: AlphonState.length},
        {table: Tables.Commits,length: CommitsState.length},
        {table: Tables.CommitsDetails,length: CommitsDetailsState.length},
        {table: Tables.Trumot,length: TrumotState.length},
        {table: Tables.TrumotDetails,length: TrumotDetailsState.length},
        {table: Tables.Matches,length: MatchesState.length},
    ]);
    // return data;
    
    parentPort.postMessage(data)
}
}
    while (process.env.PATH_MDB);
    
}, 1000)

