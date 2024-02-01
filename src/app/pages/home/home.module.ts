// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANGULAR MATERIAL IMPORTS
import { MatToolbarModule } from '@angular/material/toolbar';

// PAGES
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

// COMPONENTS
import { HeaderModule } from '../../components/header/header.module';
import { HomeContentModule } from './components/home-content/home-content.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    HomeContentModule
  ]
})
export class HomeModule { }
