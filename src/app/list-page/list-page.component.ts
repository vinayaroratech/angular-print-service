import { Component, OnInit } from '@angular/core';
import { PrintService } from '../print.service';

@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
})
export class ListPageComponent implements OnInit {
  title = 'list page';

  constructor(public printService: PrintService) {}

  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService.printDocument('invoice', invoiceIds);
  }

  ngOnInit() {}
}
