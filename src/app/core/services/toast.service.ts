import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastr:ToastrService) { }

  
  success(title:string,message?:string){
    this.toastr.success(title,message);
   }
}
