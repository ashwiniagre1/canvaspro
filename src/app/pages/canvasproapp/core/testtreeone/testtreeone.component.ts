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
	selector: 'testtreeone',
	templateUrl: 'testtreeone.component.html'
})
export class TesttreeoneComponent implements OnInit
{
	testtreeoneModel:TesttreeoneModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testtreeoneModel=new TesttreeoneModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TesttreeoneModel
{
}
