import { DatePipe } from "@angular/common";

export class Connection {

    connectionId :number = 0;
    consumerNumber : number =0;
    customerId! : number;
    flatOrHouseNumber : number =0;
    villageName : string="";
    districtName : string="";
    state : string="";
    pincode : number = 0;
    connectionType : string="";
    applicationDate!: DatePipe;
    connectionDate!: DatePipe;  
    connectionStatus : string="";
              
    
}