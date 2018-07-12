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
	selector: 'testmap',
	templateUrl: 'testmap.component.html'
})
export class TestmapComponent implements OnInit
{
	testmapModel:TestmapModel;
	testmapchartLocalData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testmapModel=new TestmapModel();
	}
	ngOnInit()
	{
		this.fetchtestmapchartLocalDataChart();
	}
	
	
	fetchtestmapchartLocalDataChart()
	{
		let reponseData: any;
		this.http.get('https://api.myjson.com/bins/18hpt2').subscribe(response => 
		{
			reponseData = response;
		},
	(err) => {},
		() => {
			this.testmapchartLocalData = reponseData.data;
		}
		);
	}
	
}

export class TestmapModel
{
}
