import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';

import {PageAComponent} from "./page-a/page-a.component";
import {PageBComponent} from "./page-b/page-b.component";

const routes: Routes = [
  { path: '', component: PageAComponent },
  { path: 'pageB', component: PageBComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    Angulartics2Module.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
