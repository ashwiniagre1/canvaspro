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
	selector: 'getstatedata',
	templateUrl: 'getstatedata.component.html'
})
export class GetstatedataComponent implements OnInit
{
	getstatedataModel:GetstatedataModel;
	stateId_Data:any;
	radiogroupData:any;
	stateaaa_Data:any;
	successMsgData:any[]=[];
	
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.getstatedataModel=new GetstatedataModel();
		this.stateId_Data=[];
	this.radiogroupData={"data":[{"name":"female","id":"1"},{"name":"male","id":"2"}]};
		this.stateaaa_Data=[];
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_countryId(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.getstatedataModel.countryId).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.countryIdBindResponse_1(response);
		});
	}
	countryIdBindResponse_1(response: any)
	{
		this.stateId_Data=response.response;
		this.successMsgData.push('Success Message:'+' '+response.message);
		
		
	} 
	onSingleSelect_cntry(eventData:any)
	{ 
		let response: any;
		this.http.get('https://uat.amexio.org:8991/rest-sample-app/api/state/findbycountryid'+'/'+this.getstatedataModel.cntry).subscribe(
		(res: any) =>
		{
			response = res;
		},
		(error: any) => 
		{
			
		},
		() => 
		{
			this.cntryBindResponse_1(response);
		});
	}
	cntryBindResponse_1(response: any)
	{
		this.stateaaa_Data=response.response;
		
	} 
	
	
}

export class GetstatedataModel
{
	 countryId: string; 
	 stateId: string; 
	 testlocal: string; 
	 type: string; 
	 cntry: string; 
	 stateaaa: string; 
}
