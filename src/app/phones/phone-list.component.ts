import { Component, OnInit } from "@angular/core";

import { IPhone } from "./phone";
import { PhoneService } from "./phone.service";

@Component({
    templateUrl: './phone-list.component.html',
    styleUrls: ['./phone-list.component.css']
})

export class PhoneListComponent implements OnInit {
    pageTitle:string = 'Phones';
    errorMessage:string;
    
    phones: IPhone[] = [];

    constructor(private phoneService:PhoneService) {
    }

    ngOnInit():void {
        const self = this;

        // read phones from json
        if (this.phoneService.phones == undefined){
            this.phoneService.getPhones().subscribe(
                function(response){
                    self.phones = response;
                },
                error => this.errorMessage = <any>error
            );
        } else { // get phones from the service
            this.phones = this.phoneService.phones;
        }
    }

    /**
     * Delete Phone
     * @param phoneIndex 
     */
    deletePhone(phoneIndex: any):void {
        this.phones.splice(phoneIndex, 1);
        this.phoneService.phones = this.phones;
    }
}