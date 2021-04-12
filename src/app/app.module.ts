import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { GridMainComponent } from "./grid-main/grid-main.component";
import { DataService } from "./data.service";
import { SkinCreateComponent } from "./skin-create/skin-create.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  //  { path: 'products', component: ProductListComponent },
  //  { path: 'products/:id', component: ProductDetailsComponent },
  { path: "create", component: SkinCreateComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AppComponent, GridMainComponent, SkinCreateComponent],
  bootstrap: [AppComponent],
  providers: [DataService],
  exports: [RouterModule]
})
export class AppModule {}
