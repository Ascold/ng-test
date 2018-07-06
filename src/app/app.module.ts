import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { appRouting } from './app.routes';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core/core.module';

import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    appRouting
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
