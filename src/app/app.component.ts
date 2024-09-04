import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensecardComponent } from './expensecard/expensecard.component';
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExpensesComponent,ExpenseFormComponent,ExpensecardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'expense-tracker';
  
  // private readonly storage:Storage = inject(Storage);

  // uploadFile(input:HTMLInputElement){
  //   if(!input.files) return

  //   const files:FileList = input.files;

  //   for(let i=0; i<files.length; i++){
  //     const file = files.item(i);
  //     if(file){
  //       const storageref = ref(this.storage,file.name);
  //       uploadBytesResumable(storageref,file);
  //     }
  //   }
  // }
}
