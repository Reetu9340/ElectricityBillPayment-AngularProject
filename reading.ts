import { CurrencyPipe } from "@angular/common";

export class Reading {
    connectionId : number =0;
    readingId: number=0;
    consumerNumber!: number;
    unitsConsumed: number=0;
    reading: number=0;
    readingDate!: Date;
    pricePerUnits!:CurrencyPipe;    

}