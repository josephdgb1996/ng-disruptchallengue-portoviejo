import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServicesModule } from 'src/app/core/services/services.module';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './header/banner/banner.component';
import { CintilloComponent } from './header/cintillo/cintillo.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    imports: [
        CommonModule,
        ServicesModule,
        ToastrModule.forRoot()
    ],
    exports: [
        HeaderComponent
    ],
    declarations: [
        HeaderComponent,
        BannerComponent,
        CintilloComponent
    ],
    providers: [],
})
export class LayoutModule { }


