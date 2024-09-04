import { Component, inject, OnInit } from '@angular/core';
import { ExpensecardComponent } from '../expensecard/expensecard.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExpenseserviceService } from '../_service/expenseservice.service';
import { Commonmodels } from '../_models/commonmodels';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [ExpensecardComponent, RouterModule, CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.scss'
})
export class ExpensesComponent implements OnInit {
  details: Commonmodels[] = []; 

  private expenseService = inject(ExpenseserviceService);

  ngOnInit(): void {
    this.expenseService.get().subscribe((res: Commonmodels[]) => {
      this.details = res;
      console.log(this.details); 
    });
  }

  getTotalExpenses(): number {
    return this.details.reduce((total, detail) => total + Number(detail.price), 0);
  }
}
