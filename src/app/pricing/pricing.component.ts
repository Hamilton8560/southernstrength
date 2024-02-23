import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {
   dayPass = 'https://buy.stripe.com/test_6oE5l8gQffSKauA4gi'
  monthlyUrl = 'https://buy.stripe.com/test_8wM8xk43t35Y8msaEH'
 annual = 'https://buy.stripe.com/test_5kAdREdE3bCu0U05ko'
portal= 'https://billing.stripe.com/p/login/test_cN25o7chFczs83SeUU'


  constructor(private router: Router){}

  onDayPass(){
    window.open(this.dayPass)  
  }
  onMonthlyMembership(){
    window.open(this.monthlyUrl)
  }
  onAnnualPass(){
    window.open(this.annual)
  }
 /* onCustomerPortal(){
    window.open(this.portal)
  }*/
}
