import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { TooltipComponent } from './common/tooltip/tooltip.component';
import { AppRouter } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
