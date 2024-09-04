import { Component, inject, Input, OnInit } from '@angular/core';
import { Commonmodels } from '../_models/commonmodels';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ExpenseserviceService } from '../_service/expenseservice.service';

@Component({
  selector: 'app-expensecard',
  standalone: true,
  imports: [],
  templateUrl: './expensecard.component.html',
  styleUrl: './expensecard.component.scss'
})
export class ExpensecardComponent implements OnInit {

    expenseser = inject(ExpenseserviceService)
    router = inject(Router)
    route = inject(ActivatedRoute)

  
    ngOnInit(): void {}
  
    @Input() detail: Commonmodels = {
      id: '',
      price: '',
      title: '',
      description: ''
    }
  
    onEdit() {
      this.router.navigate(['expense-form', this.detail.id])
  
    }
  
    onRemove() {
      this.expenseser.delete(this.detail.id).subscribe(() => { });
    }
  
  }

