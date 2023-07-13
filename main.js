import { AptContent } from "./app/classes/AptContent.js";

const aptContent = new AptContent();

const data = aptContent.getById('Alphon', 21349);

console.log(data);