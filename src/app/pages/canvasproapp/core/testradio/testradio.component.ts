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
	selector: 'testradio',
	templateUrl: 'testradio.component.html'
})
export class TestradioComponent implements OnInit
{
	testradioModel:TestradioModel;
	radiogroupData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testradioModel=new TestradioModel();
	this.radiogroupData=[{"id":"1","name":"admin"},{"id":"2","name":"hr"},{"id":"3","name":"it"}];
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TestradioModel
{
	 radio: string; 
}
