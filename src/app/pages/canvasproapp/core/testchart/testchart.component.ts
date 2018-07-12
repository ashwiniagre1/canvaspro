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
	selector: 'testchart',
	templateUrl: 'testchart.component.html'
})
export class TestchartComponent implements OnInit
{
	testchartModel:TestchartModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testchartModel=new TestchartModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TestchartModel
{
}
