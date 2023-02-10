import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { ValuesComponent } from './components/values/values.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceDetailComponent } from './service-detail/service-detail.component';
import { MgtComponent } from './serv/mgt/mgt.component';
import { LeanComponent } from './serv/lean/lean.component';
import { StrategyComponent } from './serv/strategy/strategy.component';
import { OperationalComponent } from './serv/operational/operational.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavigationComponent,

    ServicesComponent,
    TeamComponent,
    ContactComponent,
    ValuesComponent,
    FooterComponent,
    ServiceDetailComponent,
    MgtComponent,
    LeanComponent,
    StrategyComponent,
    OperationalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
