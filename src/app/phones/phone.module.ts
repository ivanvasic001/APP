import { NgModule } from '@angular/core';

import { PhoneListComponent } from './phone-list.component';
import { PhoneEditComponent } from './phone-edit.component';
import { SharedModule } from '../shared/shared.module';
import { PhoneRoutingModule } from './phone-routing.module';

@NgModule({
  declarations: [
    PhoneListComponent,
    PhoneEditComponent
  ],
  imports: [
    SharedModule,
    PhoneRoutingModule
  ]
})
export class PhoneModule { }
