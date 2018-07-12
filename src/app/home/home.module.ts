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
	     	{
     	path: 'core/uione', loadChildren: './../pages/canvasproapp/core/uione/uione.module#UioneModule'
     	},	
	     	{
     	path: 'core/testtabui', loadChildren: './../pages/canvasproapp/core/testtabui/testtabui.module#TesttabuiModule'
     	},	
	     	{
     	path: 'core/testaccord', loadChildren: './../pages/canvasproapp/core/testaccord/testaccord.module#TestaccordModule'
     	},	
	     	{
     	path: 'core/testformui', loadChildren: './../pages/canvasproapp/core/testformui/testformui.module#TestformuiModule'
     	},	
	     	{
     	path: 'core/testlogin', loadChildren: './../pages/canvasproapp/core/testlogin/testlogin.module#TestloginModule'
     	},	
	     	{
     	path: 'core/testradio', loadChildren: './../pages/canvasproapp/core/testradio/testradio.module#TestradioModule'
     	},	
	     	{
     	path: 'core/testtree', loadChildren: './../pages/canvasproapp/core/testtree/testtree.module#TesttreeModule'
     	},	
	     	{
     	path: 'core/testtreeone', loadChildren: './../pages/canvasproapp/core/testtreeone/testtreeone.module#TesttreeoneModule'
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