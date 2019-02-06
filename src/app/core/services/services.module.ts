import { NgModule } from '@angular/core';
import { NavbarHorizontalService } from './navbar-horizontal.service';
import { ToastService } from './toast.service';

@NgModule({
    imports: [],
    exports: [  ],
    declarations: [],
    providers: [
        NavbarHorizontalService,
        ToastService
    ],
})
export class ServicesModule { }
