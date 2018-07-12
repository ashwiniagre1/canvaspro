/**
 * Created by: deepali arvind
 * Date: 11/07/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component(
{
	selector: 'testformui',
	templateUrl: 'testformui.component.html'
})
export class TestformuiComponent implements OnInit
{
	testformuiModel:TestformuiModel;
	successMsgData:any[]=[];
	
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testformuiModel=new TestformuiModel();
	}
	ngOnInit()
	{
	}
	
	onClick_btn(eventData:any)
	{ 
		let response: any;
		const requestJson={
			id:this.testformuiModel.deptId,
			name:this.testformuiModel.deptName
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
			this.btnBindResponse_1(response);
		});
	}
	btnBindResponse_1(response: any)
	{
		
	} 
	
	
}

export class TestformuiModel
{
	 deptId: string; 
	 deptName: string; 
}
