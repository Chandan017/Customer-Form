import { NgFor } from '@angular/common';
import { routes } from './../app.routes';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-customer-list',
  imports: [NgFor],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit {
  constructor(private router: Router) { }

  customers: any = [];
  ngOnInit(): void {
    this.customers = JSON.parse(localStorage.getItem('customers') || '[]');
  }

  editCustomer(e: any) {
    this.router.navigate(['/customer-details'], { queryParams: { id: e } });

  }

  addCustomer() {
    this.router.navigate(['/customer-details']);
  }

}
