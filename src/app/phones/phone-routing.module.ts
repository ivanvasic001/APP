import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PhoneListComponent } from './phone-list.component';
import { PhoneEditComponent } from './phone-edit.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      {path: 'phones', component: PhoneListComponent},
      {path: 'phones/:id', component: PhoneEditComponent},
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PhoneRoutingModule { }
