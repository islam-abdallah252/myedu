import { Component } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: 'subscription.page.html',
  styleUrls: ['subscription.page.scss'],
})
export class SubscriptionPage {
  daysCount = Array(31).fill(0).map((x, i) => i + 1)
  yearsCount = Array.from({ length: 51 }, (_, i) => new Date().getFullYear() - i)
  monthsCount = Array(12).fill(0).map((x, i) => i + 1)
  constructor() {
  }

}
