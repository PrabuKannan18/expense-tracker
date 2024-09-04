import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Commonmodels } from '../_models/commonmodels';
import { ExpenseserviceService } from '../_service/expenseservice.service';


@Component({
  selector: 'app-expense-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.scss'
})
export class ExpenseFormComponent implements OnInit {
  id: string = '';
  isEdit: boolean = false;
  expenseform: FormGroup;

  private expenseService = inject(ExpenseserviceService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.expenseform = this.fb.group({
      price: [''],
      title: [''],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.id = param['id'];
      if (this.id) {
        this.expenseService.getDetails(this.id).subscribe((res: Commonmodels) => {
          this.expenseform.patchValue(res);
          this.isEdit = true;
        });
      }
    });
  }

  onSubmit() {
    if (this.isEdit) {
      this.expenseService.update({ ...this.expenseform.value, id: this.id }).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    } else {
      this.expenseService.add(this.expenseform.value).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }

  onBack() {
    this.router.navigateByUrl('/');
  }
}