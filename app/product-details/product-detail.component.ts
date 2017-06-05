import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product, DataSource } from  '../table.component/table.service';

@Component({
    moduleId: module.id,
    selector: 'my-product-detail',
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    public product: Product | null;
    constructor(private router: Router, private dataSource: DataSource, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        //let id: number = +this.activatedRoute.snapshot.params['id'];
        //this.product = this.dataSource.getDataById(id);

        // params - параметры текущего маршрута. Данное свойство является Observable объектом
        // Если параметры будут изменены - произойдет событие и компонент узнает о изменениях.

        // OBSERVABLE PARAMS
        // forEach - устанавливаем обработчик на каждое изменение params
        this.activatedRoute.params.forEach((params: Params) => {
            let id = +params["id"]; // конвертируем значение параметра id в тип number
            this.product = this.dataSource.getDataById(id);
        });
    }

    goToProductList() {
        this.router.navigate(['products']); // перенаправляем пользователя на PhraseListComponent
    }
}
