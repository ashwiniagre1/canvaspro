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
	selector: 'testtabui',
	templateUrl: 'testtabui.component.html'
})
export class TesttabuiComponent implements OnInit
{
	testtabuiModel:TesttabuiModel;
	successMsgData:any[]=[];
	
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testtabuiModel=new TesttabuiModel();
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_country(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.testtabuiModel.countryGrid).subscribe(
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
		this.stateGrid_Data=response.response;
		
	} 
	
	
}

export class TesttabuiModel
{
	 country: string; 
}
