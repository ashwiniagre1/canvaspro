import {Component} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'homeqq',
  templateUrl: 'home.html'
})
export class HomeComponent {
   menuData:any;	
  constructor(private _router : Router){
    
 this.menuData=[{"text":"Core","expand":true,"children":[{"text":"Department","routerLink":"core/department","selected":false},{"text":"DepartmentList","routerLink":"core/departmentlist","selected":false},{"text":"GetStatedata","routerLink":"core/getstatedata","selected":false},{"text":"TestUI","routerLink":"core/testui","selected":false},{"text":"Testcomp","routerLink":"core/testcomp","selected":false},{"text":"Uione","routerLink":"core/uione","selected":false},{"text":"TestTabUI","routerLink":"core/testtabui","selected":false},{"text":"Testaccord","routerLink":"core/testaccord","selected":false},{"text":"TestformUi","routerLink":"core/testformui","selected":false},{"text":"Testlogin","routerLink":"core/testlogin","selected":false},{"text":"Testradio","routerLink":"core/testradio","selected":false},{"text":"Testtree","routerLink":"core/testtree","selected":false},{"text":"Testtreeone","routerLink":"core/testtreeone","selected":false},{"text":"Testbtn","routerLink":"core/testbtn","selected":false},{"text":"Testchart","routerLink":"core/testchart","selected":false}]}];   }
  routeToLink(data: any){
     if(!data.hasOwnProperty('children') && data.routerLink)
      this._router.navigate([data.routerLink]);
  }
}
