/**
 * Created by: deepali arvind
 * Date: 12/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testui',
	templateUrl: 'testui.component.html'
})
export class TestuiComponent implements OnInit
{
	testuiModel:TestuiModel;
	errorMsgData:any[]=[];
	
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testuiModel=new TestuiModel();
	}
	ngOnInit()
	{
	}
	
	onClick_testtype(eventData:any)
	{ 
		let response: any;
		const requestJson={
			id:this.testuiModel.confirm,
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
			this.testtypeBindResponse_1(response);
		});
	}
	testtypeBindResponse_1(response: any)
	{
		
	} 
	onBlur_confirm(eventData:any)
	{ 
		this.errorMsgData.push('errrorrrrr');
		
		
	} 
	
	
}

export class TestuiModel
{
	 confirm: string; 
	 email: string; 
}
