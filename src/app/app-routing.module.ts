import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './core/components/banner/banner.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AuthGuard } from './auth/services/auth.guard';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { LoginComponent } from './auth/components/login/login.component';
import { LoginGuard } from './auth/services/login.guard';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { ManageCategoryComponent } from './core/components/manage-category/manage-category.component';
import { ManageProductComponent } from './core/components/manage-product/manage-product.component';
import { ManageOrdersComponent } from './core/components/manage-orders/manage-orders.component';
import { ViewBillsComponent } from './core/components/view-bills/view-bills.component';
import { ManageUserComponent } from './core/components/manage-user/manage-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: BannerComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard],},
  {
    path: 'cafe', component: NavbarComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'category', component: ManageCategoryComponent },
      { path: 'product', component: ManageProductComponent},
      { path: 'orders', component: ManageOrdersComponent},
      { path: 'bills', component: ViewBillsComponent},
      { path: 'user', component: ManageUserComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
