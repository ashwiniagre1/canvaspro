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
	selector: 'testaccord',
	templateUrl: 'testaccord.component.html'
})
export class TestaccordComponent implements OnInit
{
	testaccordModel:TestaccordModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testaccordModel=new TestaccordModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TestaccordModel
{
}
