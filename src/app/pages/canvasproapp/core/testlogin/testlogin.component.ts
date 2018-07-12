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
	selector: 'testlogin',
	templateUrl: 'testlogin.component.html'
})
export class TestloginComponent implements OnInit
{
	testloginModel:TestloginModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testloginModel=new TestloginModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TestloginModel
{
}
