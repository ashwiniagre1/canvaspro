import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Department","routerLink":"core/department","selected":false},{"text":"DepartmentList","routerLink":"core/departmentlist","selected":false},{"text":"GetStatedata","routerLink":"core/getstatedata","selected":false},{"text":"TestUI","routerLink":"core/testui","selected":false},{"text":"Testcomp","routerLink":"core/testcomp","selected":false},{"text":"Uione","routerLink":"core/uione","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
