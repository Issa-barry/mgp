import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounceTime } from 'rxjs';
import { Product } from 'src/app/demo/api/product';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ProductService } from 'src/app/demo/service/product.service';
import { Table } from 'primeng/table';
import { MessageService } from 'primeng/api';

@Component({
    templateUrl: './ecommerce.dashboard.component.html',
    providers: [MessageService]
})
export class EcommerceDashboardComponent implements OnInit, OnDestroy {
    

    constructor(
        private productService: ProductService,
        private layoutService: LayoutService,
        private messageService: MessageService,
    ) {
      
    }

    ngOnInit(): void {
        
    }

    
    ngOnDestroy(): void {
       
    }
 
    openNew() {
         
    }

    
    uploadedFiles: any[] = [];

    onUpload(event: any) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    }

    onBasicUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }

}
