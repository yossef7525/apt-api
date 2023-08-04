export const tables = [
    {
        key: 'Alphon',
        value: 'אלפון',
        fields: [
            { key: 'id', value: 'תעודת זהות' },
            { key: 'firstName', value: 'שם פרטי' },
            { key: 'lastName', value: 'שם משפחה' },
            { key: 'phone', value: 'טלפון נייד' },
            { key: 'address', value: 'רחוב' },
            { key: 'numberAddress', value: 'מס רחוב' },
            { key: 'city', value: 'ישוב' },
            { key: 'kolel', value: 'חופשי1' },
            { key: 'group', value: 'חופשי3' },
            { key: 'matrimCode', value: 'מתרים' },
            { key: 'isTorem', value: 'סיווג תורם' },
            { key: 'tz', value: 'תז' },
            { key: 'contry', value: 'ארץ' },
            { key: 'paymentType', value: 'חופשי11' },
            { key: 'beforeTitle', value: 'תואר לפני' },
            { key: 'afterTitle', value: 'תואר אחרי' },
            { key: 'krayera', value: 'עיסוק' },
            { key: 'notes', value: 'הערות' },
            { key: 'personStatus', value: 'סטטוס' },
            { key: 'email', value: 'אימייל' },
            { key: 'chatan', value: 'חופשי' },
            { key: 'fathzerName', value: 'שם_אב' },
            { key: 'women', value: 'שם_ב_זוג' },
            { key: 'isMatrim', value: 'סיווג מתרים' }

        ]
    },
    {
        key: 'Commits',
        value: 'התחייבויות',
        fields: [
            { key: 'id', value: 'מס_התחייבות' },
            { key: 'description', value: 'התחייבות' },
            { key: 'dateStart', value: 'מתאריך' },
            { key: 'dateEnd', value: 'עד_תאריך' },
            { key: 'toremId', value: 'תז' },
            { key: 'sum', value: 'סכום_בשח' },
            { key: 'currnty', value: 'מטבע' },
            { key: 'shahar', value: 'שער' },
            { key: 'codeMatrim', value: 'קוד מתרים' },
            { key: 'itra', value: 'יתרה' }
        ]
    },
    {
        key: 'CommitsDetails',
        value: 'פרטי_התחייבויות',
        fields: [
            { key: 'id', value: 'מס סידורי' },
            { key: 'commitId', value: 'מס_תנועה' },
            { key: 'date', value: 'תאריך ערך' },
            { key: 'dateHe', value: 'תאריך עברי' },
            { key: 'toremId', value: 'תז' },
            { key: 'sum', value: 'סכום' },
            { key: 'dolar', value: 'דולר' },
            { key: 'currnty', value: 'מטבע' },
            { key: 'shahar', value: 'שער' },
            { key: 'paymentNum', value: 'מתוך' },
            { key: 'totalPayments', value: 'מס_תשלום' },
            { key: 'itra', value: 'יתרה' }
        ]
    },
    {
        key: 'Trumot',
        value: 'תרומות',
        fields: [
            { key: 'id', value: 'מס_תרומה' },
            { key: 'commitId', value: 'מס_תנועה' },
            { key: 'date', value: 'תאריך' },
            { key: 'dateHe', value: 'עברי' },
            { key: 'toremId', value: 'ת-ז' },
            { key: 'sum', value: 'סכום_בשח' },
            { key: 'dolar', value: 'סכום_בדולר' },
            { key: 'currnty', value: 'מטבע' },
            { key: 'shahar', value: 'שער' },
            { key: 'paymentType', value: 'אמצעי תשלום' },
            { key: 'projectCode', value: 'קוד מבצע' },
            { key: 'matrimCode', value: 'שיוך מתרים' }
        ]
    },
    {
        key: 'TrumotDetails',
        value: 'פרטי תרומה',
        fields: [
            { key: 'id', value: 'מס סידורי' },
            { key: 'trumaId', value: 'מס תרומה' },
            { key: 'date', value: 'תאריך ערך' },
            { key: 'dateHe', value: 'תאריך עברי' },
            { key: 'toremId', value: 'תז' },
            { key: 'sum', value: 'סכום' },
            { key: 'dolar', value: 'דולר' },
            { key: 'currnty', value: 'מטבע' },
            { key: 'shahar', value: 'שער' },
            { key: 'paymentType', value: 'אמצעי פרעון' },
            { key: 'projectCode', value: 'קוד מבצע' },
            { key: 'matrimCode', value: 'שיוך מתרים' }
        ]
    },
    {
        key: 'Matches',
        value: 'matches',
        fields: [
            {key: 'trumaId', value: 'truma_num'},
            {key: 'commitId', value: 'commit_num'},
            {key: 'Sum', value: 'sum'},
            {key: 'Inserted', value: 'inserted'},
            {key: 'DateRow', value: 'dateRow'},
        ]
    }
]