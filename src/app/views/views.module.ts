import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBodyFooterComponent } from './header-body-footer/header-body-footer.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { BodyFooterComponent } from './body-footer/body-footer.component';
import { HeaderComponent } from './view-parts/header/header.component';
import { BodyComponent } from './view-parts/body/body.component';
import { FooterComponent } from './view-parts/footer/footer.component';
import { BodyViewComponent } from './body-view/body-view.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HeaderBodyFooterComponent,
    HeaderBodyComponent,
    BodyFooterComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    BodyViewComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HeaderBodyFooterComponent,
    HeaderBodyComponent,
    BodyFooterComponent,
    BodyViewComponent
  ]
})
export class ViewsModule { }
