/**
 * Created by Sagar Jadhav.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {TopNavBarComponent} from "../layout/topnavbar.component";
import {AmexioWidgetModule} from "amexio-ng-extensions";

const routes: Routes = [
  { path: '', component:HomeComponent,
    children: [
          	{
     	path: 'core/department', loadChildren: './../pages/canvasproapp/core/department/department.module#DepartmentModule'
     	},	
	     	{
     	path: 'core/departmentlist', loadChildren: './../pages/canvasproapp/core/departmentlist/departmentlist.module#DepartmentlistModule'
     	},	
	     	{
     	path: 'core/getstatedata', loadChildren: './../pages/canvasproapp/core/getstatedata/getstatedata.module#GetstatedataModule'
     	},	
	     	{
     	path: 'core/testui', loadChildren: './../pages/canvasproapp/core/testui/testui.module#TestuiModule'
     	},	
	     	{
     	path: 'core/testcomp', loadChildren: './../pages/canvasproapp/core/testcomp/testcomp.module#TestcompModule'
     	},	
	    ]
  }
];


@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule.forChild(routes),
    AmexioWidgetModule
  ],
  exports: [RouterModule],
  declarations: [
    HomeComponent,
    TopNavBarComponent
  ]
})
export class HomeModule {
}