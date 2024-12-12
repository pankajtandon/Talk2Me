import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Talk2MeComponent } from './talk2-me/talk2-me.component';
export const routes: Routes = [
  { path: '', component: Talk2MeComponent }, // Load YourComponent at the root path
];
