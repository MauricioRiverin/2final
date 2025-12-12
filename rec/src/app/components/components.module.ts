import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LinksComponent } from './links/links.component';
import { MenuComponent } from './menu/menu.component';
import { EncuestaComponent } from './encuesta/encuesta.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LinksComponent,
    MenuComponent,
    EncuestaComponent
  ],
  exports: [
    EncuestaComponent,
    FooterComponent,
    HeaderComponent,
    LinksComponent,
    MenuComponent
  ],
  imports: [
    CommonModule
  ],
  
})
export class ComponentsModule { }
