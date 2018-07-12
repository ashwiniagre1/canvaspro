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
	selector: 'testbtn',
	templateUrl: 'testbtn.component.html'
})
export class TestbtnComponent implements OnInit
{
	testbtnModel:TestbtnModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testbtnModel=new TestbtnModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TestbtnModel
{
}
