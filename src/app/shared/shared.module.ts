import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './authentication/auth.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbStepperModule, NbTabsetModule, NbToggleModule } from '@nebular/theme';
import { MatInputModule } from '@angular/material/input';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NewsService } from '../pages/layout/news.service';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    NbToggleModule
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    NbToggleModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    MatInputModule,
    NbInputModule,
    NbTabsetModule,
    NbFormFieldModule,
    NbIconModule,
    Ng2SmartTableModule,
    NbListModule,
    NbAccordionModule,
    NbRadioModule,
  ],
  providers: [
    AuthService,
    NewsService,
  ]
})
export class SharedModule { }
