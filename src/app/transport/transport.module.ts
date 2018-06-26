import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import { TransportListComponent } from './transport-list/transport-list.component';
import { transportReducer } from 'src/app/transport/shared/store/transport-store';
import { TransportEffects } from 'src/app/transport/shared/store/transport-effects';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
  { path: '', redirectTo: 'transport-list', pathMatch: 'full' },
  { path: 'transport-list', component: TransportListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('transport', transportReducer),
    EffectsModule.forFeature([TransportEffects]),
    NgxDatatableModule
  ],
  declarations: [
    TransportListComponent
  ]
})
export class TransportModule { }
