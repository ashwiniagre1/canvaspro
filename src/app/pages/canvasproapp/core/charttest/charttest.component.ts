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
	selector: 'charttest',
	templateUrl: 'charttest.component.html'
})
export class CharttestComponent implements OnInit
{
	charttestModel:CharttestModel;
	areachartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.charttestModel=new CharttestModel();
	}
	ngOnInit()
	{
		this.fetchareachartLocalDataChart();
	}
	
	
	fetchareachartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/18hpt2').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.areachartLocalData = reponseData.data;
		}
		);
	}
	
}

export class CharttestModel
{
}
