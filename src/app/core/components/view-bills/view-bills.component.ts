import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../../services/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BillDetailsComponent } from 'src/app/shared/components/bill-details/bill-details.component';

@Component({
  selector: 'app-view-bills',
  templateUrl: './view-bills.component.html',
  styleUrls: ['./view-bills.component.scss']
})
export class ViewBillsComponent implements OnInit {

  displayedColumns = ['name', 'email', 'paymentMode', 'totalAmount', 'actions'];
  dataSource!: MatTableDataSource<any>;
  billData: any;
  productData: any;

  constructor(private userService: UserService,
    private ngxService: NgxUiLoaderService,
    private dialog: MatDialog) { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.ngxService.start();
    this.userService.getAllBills().subscribe((res: any) => {
      if (res) {
        console.log('Bills: ', res);
        this.ngxService.stop();
        this.dataSource = new MatTableDataSource(res.response);
      }
    });
  }

  onView(element: any) {
    this.ngxService.start();
    console.log('ele: ', element);
    const dialogRef = new MatDialogConfig();
    dialogRef.width = '650px'
    dialogRef.data = {
      email: element.email,
      modified: element.modified
    }
    this.dialog.open(BillDetailsComponent, dialogRef);
  }

}
