import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: [ './product-list.component.scss' ]
})
export class ProductListComponent implements OnInit {

    pageTitle = 'dream products';
    imageWidth = 50;
    imageMargin = 2;
    showImage = true;
    _listFilter: string;
    products: IProduct[];
    filteredProducts: IProduct[];

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.products.filter(x =>
            x.productName.toLocaleLowerCase().indexOf(this._listFilter.toLocaleLowerCase()) !== -1)
            : this.products;
    }


    constructor(private productService: ProductService) {
    }


    toggleImage = () => {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
        this.listFilter = 'a';

    }

    onRatingClick(message: string): void {
        console.log(message);
    }

}
