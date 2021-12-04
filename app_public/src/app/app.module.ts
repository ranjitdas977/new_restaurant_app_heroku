import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MenudetailsComponent } from './menudetails/menudetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    MenuComponent,
    FooterComponent,
    MenudetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([                
      {
        path: '',                         
        component: HomeComponent      
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      }
    ])
  ],
  
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }
