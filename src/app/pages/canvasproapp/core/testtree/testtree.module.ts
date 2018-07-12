/**
 * Created by: deepali arvind
 * Date: 12/07/2018
 * Organization: Individual	
 */
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { TesttreeComponent } from './testtree.component';
import {AmexioWidgetModule, AmexioChartsModule,AmexioDashBoardModule,AmexioMapModule,CommonDataService} from "amexio-ng-extensions";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule } from '@angular/common/http';
const routes: Routes = [
{ 
	path: '', component: TesttreeComponent 
}
];
@NgModule(
{
	declarations:[
	    TesttreeComponent
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
export class TesttreeModule 
{ 
}
