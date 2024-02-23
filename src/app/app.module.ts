import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';

const routes:Routes =[
{path:"",component:HomeComponent},
{path:"equipment", component:EquipmentComponent},
{path:"membership", component:PricingComponent},
{path:'about',component:AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    EquipmentComponent,
    AboutComponent,
    PricingComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
