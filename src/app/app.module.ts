import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { IdFilterPipe } from './modules/employee/pipes/id-filter.pipe';
import { SearchPipe } from './modules/employee/pipes/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    IdFilterPipe,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
