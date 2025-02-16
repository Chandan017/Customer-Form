import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  imports: [FormsModule, NgFor],
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) { }
  customerID: any = -1;
  customer: any = {
    id: -1,
    developedBy: '',
    date: '',
    region: '',
    name: '',
    billingStreet: '',
    billingCity: '',
    billingState: '',
    billingPostalCode: '',
    shippingStreet: '',
    shippingCity: '',
    shippingState: '',
    shippingPostalCode: '',
    contactPerson: '',
    department: '',
    designation: '',
    phone: '',
    landline: '',
    email: '',
    pAndF: '',
    gst: '',
    freight: '',
    paymentTerms: '',
    creditLimit: '',
    category: '',
    businessUnit: '',
    industryType: '',
    totalCons: '',
    expectedCons: '',
    status: '',
    Proprietership: '',
    proprietorName: '',
    gstinNo: '',
    panNo: '',
    residentialAddress: '',
    for: ''
  };

  categoryList: any = ['cat1', 'cat2', 'cat3', 'cat4'];
  businessUnitList: any = ['busUnit1', 'busUnit2', 'busUnit3', 'busUnit4'];
  industryTypeList: any = ['inudstryType1', 'industryType2', 'industryType3', 'industryType4'];
  proprietershipList = ['Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'];


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.customerID = params['id'];
    });
    if (this.customerID == undefined)
      this.customerID = -1;
    let customers = JSON.parse(localStorage.getItem('customers') || '[]');
    console.log(customers.length)
    if (customers.length > this.customerID) {
      this.customer = customers[this.customerID];
    }

  }

  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    var newRecord: any = {};
    var flag = false;
    formData.forEach((value, key) => {
      newRecord[key] = value;
      if (key === 'name' && value === '') {
        alert("Name can't be blank!");
        flag = true;
        return;
      }
    });
    if (flag)
      return;
    let customers = JSON.parse(localStorage.getItem('customers') || '[]');
    if (this.customerID != -1) {
      customers[this.customerID] = newRecord;
    }
    else {
      customers.push(newRecord);
    }
    localStorage.setItem('customers', JSON.stringify(customers));
    if (this.customerID != -1)
      alert('Customer updated successfully!');
    else
      alert('Customer saved successfully!')
    this.router.navigate(['']);
  }
}
