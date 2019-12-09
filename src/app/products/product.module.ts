import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spapces.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe ],
  imports: [

    RouterModule.forChild([ { path: 'products', component: ProductListComponent },
    { path: 'products/:id', canActivate: [ ProductDetailGuard ], component: ProductDetailComponent },
    ]),
    SharedModule
  ]
})
export class ProductModule { }
