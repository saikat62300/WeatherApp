import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LanderComponent } from "./lander/lander.component";
import { WeatherComponent } from "./weather/weather.component";

const routes: Routes = [
  { path: "", component: LanderComponent },
  { path: 'weather/:woeid', component: WeatherComponent },
  { path: 'search/:location', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
