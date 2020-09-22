import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    // angular modules
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class AppModule {}
