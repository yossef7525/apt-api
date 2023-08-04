import { parentPort } from 'worker_threads'
import { AptContent } from '../app/classes/AptContent.js'
import { Tables } from '../app/types/enums.js'
import dotenv from 'dotenv';

dotenv.config();

setTimeout(() => {
    do {

        if (!process.env.PATH_MDB) { } else {

            console.log('fetch data');
            const aptContent = new AptContent(process.env.PATH_MDB);
            let data = {

                AlphonState: aptContent.getContentByTableName(Tables.Alphon),
                CommitsState: aptContent.getContentByTableName(Tables.Commits),
                CommitsDetailsState: aptContent.getContentByTableName(Tables.CommitsDetails),
                TrumotState: aptContent.getContentByTableName(Tables.Trumot, 70000),
                TrumotDetailsState: aptContent.getContentByTableName(Tables.TrumotDetails, 260000),
                MatchesState: aptContent.getContentByTableName(Tables.Matches)
            }

            console.log('data is refreshed');
            console.table([
                { table: Tables.Alphon, length: data.AlphonState.length },
                { table: Tables.Commits, length: data.CommitsState.length },
                { table: Tables.CommitsDetails, length: data.CommitsDetailsState.length },
                { table: Tables.Trumot, length: data.TrumotState.length },
                { table: Tables.TrumotDetails, length: data.TrumotDetailsState.length },
                { table: Tables.Matches, length: data.MatchesState.length },
            ]);
            // return data;

            parentPort.postMessage(data)
        }
    }
    while (!process.env.PATH_MDB);

}, 1000)


setInterval(() => {
    do {

        if (!process.env.PATH_MDB) { } else {

            console.log('fetch data');
            const aptContent = new AptContent(process.env.PATH_MDB);
            let data = {

                AlphonState: aptContent.getContentByTableName(Tables.Alphon),
                CommitsState: aptContent.getContentByTableName(Tables.Commits),
                CommitsDetailsState: aptContent.getContentByTableName(Tables.CommitsDetails),
                TrumotState: aptContent.getContentByTableName(Tables.Trumot, 70000),
                TrumotDetailsState: aptContent.getContentByTableName(Tables.TrumotDetails, 260000),
                MatchesState: aptContent.getContentByTableName(Tables.Matches)
            }

            console.log('data is refreshed');
            console.table([
                { table: Tables.Alphon, length: data.AlphonState.length },
                { table: Tables.Commits, length: data.CommitsState.length },
                { table: Tables.CommitsDetails, length: data.CommitsDetailsState.length },
                { table: Tables.Trumot, length: data.TrumotState.length },
                { table: Tables.TrumotDetails, length: data.TrumotDetailsState.length },
                { table: Tables.Matches, length: data.MatchesState.length },
            ]);
            // return data;

            parentPort.postMessage(data)
        }
    }
    while (!process.env.PATH_MDB);

}, 100000)

