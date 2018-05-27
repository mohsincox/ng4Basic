import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DivisionComponent } from './components/division/division.component';
import { DataService } from './services/data.service';
import { EditDivisionComponent } from './components/edit-division/edit-division.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const appRoutes: Routes = [
  { path:'', component:DivisionComponent },
  { path:'create', component:CreateComponent },
  { path:'edit/:id', component:EditDivisionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DivisionComponent,
    EditDivisionComponent,
    CreateComponent,
    HomeComponent,
    ProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // RouterModule.forRoot(appRoutes),
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "product", component: ProductComponent},
      {path: "updateProduct/:id", component: UpdateProductComponent}
    ]),
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
