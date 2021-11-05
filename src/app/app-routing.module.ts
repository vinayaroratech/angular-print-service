import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice/invoice.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { ListPageComponent } from './list-page/list-page.component';

const routes: Routes = [
  // {
  //   path: 'print',
  //   outlet: 'print',
  //   component: PrintLayoutComponent,
  //   children: [{ path: 'invoice/:invoiceIds', component: InvoiceComponent }],
  // },
  {
    path: 'list',
    component: ListPageComponent,
    children: [
      {
        path: 'print',
        outlet: 'print',
        component: PrintLayoutComponent,
        children: [
          { path: 'invoice/:invoiceIds', component: InvoiceComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
