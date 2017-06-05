import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'
import { DataSource, Product } from  '../table.component/table.service';

@Component({
    moduleId: module.id,
    inputs: ['numberOfElements'],
    selector: 'my-product-list',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {
    public numberOfElements: number = 5;
    public rows: Array<Product>;
    constructor(private router: Router, private dataSource: DataSource) {}

    ngOnInit(): void {
        this.rows = this.dataSource.getData(this.numberOfElements, () => true);
    }

    clickOnElement(elem: Product): void {
        //alert(elem.name);
        this.router.navigate(['product', elem.id])
    }

}