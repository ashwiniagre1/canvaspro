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
	selector: 'testcomp',
	templateUrl: 'testcomp.component.html'
})
export class TestcompComponent implements OnInit
{
	testcompModel:TestcompModel;
	dchartchartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testcompModel=new TestcompModel();
	}
	ngOnInit()
	{
		this.fetchdchartchartLocalDataChart();
	}
	
	
	fetchdchartchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/18hpt2').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.dchartchartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestcompModel
{
}
