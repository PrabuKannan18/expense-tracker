import { Routes } from '@angular/router';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpensesComponent } from './expenses/expenses.component';

export const routes: Routes = [

    { path: '', component: ExpensesComponent, canActivate: [] },
    { path: 'expense-form', component: ExpenseFormComponent },
    { path: 'expense-form/:id', component: ExpenseFormComponent },];
