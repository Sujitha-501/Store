import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MaterialModule } from '../material/material.module';
import { CategoryDialogComponent } from './components/category-dialog/category-dialog.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';



@NgModule({
  declarations: [
    DialogComponent,
    SnackbarComponent,
    CategoryDialogComponent,
    ProductDialogComponent,
    BillDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
