import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { CakeDesignerComponent } from "./cake-designer/cake-designer.component";
import { ColorComponent } from "./cake-designer/color/color.component";
import { CreamComponent } from "./cake-designer/cream/cream.component";
import { DetailsComponent } from "./cake-designer/details/details.tcomponent";
import { FlavourComponent } from "./cake-designer/flavour/flavour.component";
import { SizeComponent } from "./cake-designer/size/size.component";
import { SummaryComponent } from "./cake-designer/summary/summary.component";
import { TypeComponent } from "./cake-designer/type/type.component";
import { CartComponent } from "./cart/cart.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ShopOnlineComponent } from "./shop-online/shop-online.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainPageComponent },
    {
        path: 'cake-designer', component: CakeDesignerComponent, children: [
            { path: '', redirectTo: 'size', pathMatch: 'full' },
            { path: 'size', component: SizeComponent },
            { path: 'type', component: TypeComponent },
            { path: 'flavour', component: FlavourComponent },
            { path: 'cream', component: CreamComponent },
            { path: 'color', component: ColorComponent },
            { path: 'details', component: DetailsComponent },
            { path: 'summary', component: SummaryComponent },
        ]
    },
    { path: 'shop-online', component: ShopOnlineComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'favourites', component: FavouritesComponent },
    { path: 'cart', component: CartComponent },
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
