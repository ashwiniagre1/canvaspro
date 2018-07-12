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
	selector: 'testdatapoint',
	templateUrl: 'testdatapoint.component.html'
})
export class TestdatapointComponent implements OnInit
{
	testdatapointModel:TestdatapointModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testdatapointModel=new TestdatapointModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TestdatapointModel
{
}
