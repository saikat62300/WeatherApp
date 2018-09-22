import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { BackendapiService } from './backendapi.service';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LanderComponent } from './lander/lander.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { TransformPipePipe } from './transform-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LanderComponent,
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    TransformPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [BackendapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
