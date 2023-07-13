import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
import { tables } from '../types/tables.js';

export class AptContent {

    /**
     * 
     * @param {string} filePath path for the mdb file 
     */
    constructor(filePath){
        this.filePath = filePath
        this.buffer = readFileSync(this.filePath);
        this.reader = new MDBReader(this.buffer);
    }

    /**
     * 
     * @param {string} tableName the table key for the table in APT softwhere
     * @returns {{[x: string]: Value}[]} object keys converted and values from the table
     */
    getContentByTableName(tableName) {

        const valueTableName = tables.find(t => t.key === tableName).value;
        const fields = tables.find(t => t.key === tableName).fields;

        const data = this.reader.getTable(valueTableName)
            .getData({ columns: fields.map(f => f.value) })
        data.forEach(obj => {
            fields.forEach(f => {
                obj[f.key] = obj[f.value]
                delete obj[f.value]
            })
        })
        return data;
    }
    
    /**
     * 
     * @param {string} tableName the table key for the table in APT softwhere
     * @param {number} id the id for the request row in APT table 
     * @returns {{[x:string]: value}} object for this id
     */
    getById(tableName, id) {
        const data = this.getContentByTableName(tableName)
        return data.find(d => d.id === id)
    }

    /**
     * 
     * @param {string} tableName the table key for the table in APT softwhere
     * @param {string | number | Date} query The query that needs to be filtered from the table
     * @param {string} field the field key of filtered
     * @returns {{[x:string]: value}[]}
     */
    search(tableName, query, field) {
        const data = this.getContentByTableName(tableName)
        return data.filter(d => d[field] === query)
    }
    /**
     * 
     * @param {string} tableName the table key for the table in APT softwhere
     * @param {string | number | Date} rangeStart the start value of range filtered
     * @param {string | number | Date} rangeEnd the end value of range filtered
     * @param {string} field the field key of filtered
     * @returns {{[x:string]: value}[]}
     */
    range(tableName, rangeStart, rangeEnd, field) {
        const data = this.getContentByTableName(tableName)
        return data.filter(d => d[field] < rangeEnd && d[field] > rangeStart)
    }
}