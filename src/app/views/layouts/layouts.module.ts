import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../main/home/home.component';
import { ServiceComponent } from '../main/service/service.component';
import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { PartialModule } from '../main/partial/partial.module';



@NgModule({
  declarations: [
    LayoutsComponent,
    HomeComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    PartialModule,

  ]
})
export class LayoutsModule { }
