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
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testtabuiModel=new TesttabuiModel();
	}
	ngOnInit()
	{
	}
	
	onSingleSelect_country(eventData:any)
	{ 
	} 
	
	
}

export class TesttabuiModel
{
	 country: string; 
}
