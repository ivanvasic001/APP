import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhoneService } from "./phone.service";
import {IPhone} from './phone';

@Component({
  templateUrl: './phone-edit.component.html',
  styleUrls: ['./phone-edit.component.css']
})
export class PhoneEditComponent implements OnInit {
  pageTitle: string = 'Phone';
  phone: IPhone;
  phoneIndex: number = -1;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private phoneService: PhoneService
  ) { }

  ngOnInit() {
    this.phoneIndex = Number(this.route.snapshot.paramMap.get('id'));

    // init the phone object
    this.phone = {
        name: '',
        phoneNumber: ''
    }
  }

  /**
   * Save the form
   */
  onSubmit(): void {
    // add a new phone
    this.phoneService.phones.push({
        name: this.phone.name,
        phoneNumber: this.phone.phoneNumber
    });

    this.router.navigate(['/phones']);
  }

  /**
   * Cancel
   */
  onCancel(): void {
    this.router.navigate(['/phones']);
  }
}
