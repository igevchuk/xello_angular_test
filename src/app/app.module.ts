import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { TaskComponent } from './views/task/task.component';
import { TooltipComponent } from './common/tooltip/tooltip.component';
import { AppRouter } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
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
