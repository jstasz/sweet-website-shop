import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CakeDesignerComponent } from "./cake-designer/cake-desgner.component";
import { ContactComponent } from "./contact/contact.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ShopOnlineComponent } from "./shop-online/shop-online.component";

const appRoutes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'cake-designer', component: CakeDesignerComponent },
    { path: 'shop-online', component: ShopOnlineComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: "/not-found" },
]

@NgModule(
    {
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {
}
