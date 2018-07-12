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
	selector: 'testdash',
	templateUrl: 'testdash.component.html'
})
export class TestdashComponent implements OnInit
{
	testdashModel:TestdashModel;
	datapointchartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testdashModel=new TestdashModel();
	}
	ngOnInit()
	{
		this.fetchdatapointchartLocalDataChart();
	}
	
	
	fetchdatapointchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/9ykpy').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.datapointchartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestdashModel
{
}
