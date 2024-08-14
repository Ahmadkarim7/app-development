import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ProductComponent } from "./products/products_component";

@NgModule({
    declarations: [
        AppComponent, // Add AppComponent here
        ProductComponent
    ],
    imports: [
        BrowserModule // Keep BrowserModule here
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}