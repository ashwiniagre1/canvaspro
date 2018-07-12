/**
 * Created by: deepali arvind
 * Date: 11/07/2018
 * Organization: Individual	
 */
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { TestloginComponent } from './testlogin.component';
import {AmexioWidgetModule, AmexioChartsModule,AmexioDashBoardModule,AmexioMapModule,CommonDataService} from "amexio-ng-extensions";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule } from '@angular/common/http';
const routes: Routes = [
{ 
	path: '', component: TestloginComponent 
}
];
@NgModule(
{
	declarations:[
	    TestloginComponent
	 ],
	imports: [
	FormsModule,
	CommonModule, 
	HttpClientModule,
	RouterModule.forChild(routes),
	AmexioWidgetModule,
	AmexioChartsModule,
	AmexioDashBoardModule,
	AmexioMapModule	
	],
	providers: [CommonDataService]
}
)
export class TestloginModule 
{ 
}
