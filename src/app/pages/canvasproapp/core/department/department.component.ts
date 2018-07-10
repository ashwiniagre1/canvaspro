/**
 * Created by: deepali arvind
 * Date: 10/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'department',
	templateUrl: 'department.component.html'
})
export class DepartmentComponent implements OnInit
{
	departmentModel:DepartmentModel;
	testtype_Data:any;
	chk_Data:any;
	successMsgData:any[]=[];
	
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.departmentModel=new DepartmentModel();
		this.testtype_Data=[];
		this.chk_Data=[];
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_country(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.departmentModel.country).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryBindResponse_1(response);
		});
	}
	countryBindResponse_1(response: any)
	{
		this.chk_Data=response.response;
		
	} 
	onClick_save(eventData:any)
	{ 
		let response: any;
		const requestJson={
			id:this.departmentModel.id,
			name:this.departmentModel.name
		 };
		this.http.post('https://uat.amexio.org:8991/rest-sample-app/api/dept/save',requestJson).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.saveBindResponse_1(response);
		});
	}
	saveBindResponse_1(response: any)
	{
		this.successMsgData.push(response.name+' '+'Saved Successfully.');
		
		this.router.navigate(['core/departmentlist']);
		
	} 
	
	
}

export class DepartmentModel
{
	 id: string; 
	 name: string; 
	 country: string; 
	 radi: string; 
	 testtype: string; 
	 chk: string; 
}
