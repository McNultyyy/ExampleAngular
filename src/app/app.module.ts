import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavmenuComponent} from './navmenu/navmenu.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MaxHitCalcComponent} from './max-hit-calc/max-hit-calc.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaxHitCalcService} from './max-hit-calc.service';


@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    MaxHitCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'max-hit-calc', component: MaxHitCalcComponent},
      // { path: 'counter', component: CounterComponent },
      // { path: 'fetch-data', component: FetchDataComponent },
      {path: '**', redirectTo: 'home'}
    ])
  ],
  providers: [MaxHitCalcService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
