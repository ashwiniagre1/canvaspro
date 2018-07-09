/**
 * Created by: deepali arvind
 * Date: 09/07/2018
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
