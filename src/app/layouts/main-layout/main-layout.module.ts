import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "./main-layout-component";
import {MainLayoutRoutingModule} from "./main-layout-routing.module";
import {HeaderModule} from "../../primary-components/header/header.module";
import {SidebarModule} from "../../primary-components/sidebar/sidebar.module";
import {FooterModule} from "../../primary-components/footer/footer.module";

@NgModule({
    imports: [
        CommonModule,
        MainLayoutRoutingModule,
        HeaderModule,
        SidebarModule,
        FooterModule
    ],
    declarations: [MainLayoutComponent]
})
export class MainLayoutModule {}
