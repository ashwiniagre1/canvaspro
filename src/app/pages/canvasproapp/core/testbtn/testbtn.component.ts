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
	selector: 'testbtn',
	templateUrl: 'testbtn.component.html'
})
export class TestbtnComponent implements OnInit
{
	testbtnModel:TestbtnModel;
	state_Data:any;
	successMsgData:any[]=[];
	
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testbtnModel=new TestbtnModel();
		this.state_Data=[];
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_state(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.testbtnModel.con).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.stateBindResponse_1(response);
		});
	}
	stateBindResponse_1(response: any)
	{
		this.successMsgData.push('successfully data get');
		
		this.state_Data=response.response;
		
	} 
	
	
}

export class TestbtnModel
{
	 con: string; 
	 state: string; 
}
