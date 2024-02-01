//ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ANGULAR MATERIAL IMPORTS
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

// COMPONENTS
import { HomeContentComponent } from './home-content.component';

@NgModule({
  declarations: [HomeContentComponent],
  imports: [
    CommonModule,
    NgbCarouselModule
  ],
  exports: [HomeContentComponent]
})
export class HomeContentModule { }
