import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    DetailsComponent
  ],
  providers: [

    AppRoutingModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


