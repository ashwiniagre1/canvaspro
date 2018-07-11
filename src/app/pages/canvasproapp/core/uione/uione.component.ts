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
	selector: 'uione',
	templateUrl: 'uione.component.html'
})
export class UioneComponent implements OnInit
{
	uioneModel:UioneModel;
	checkboxgroupData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.uioneModel=new UioneModel();
	this.checkboxgroupData={"data":[{"lang":"java","id":"1"},{"lang":"angular","id":"2"},{"lang":"c","id":"3"}]};
	}
	ngOnInit()
	{
	}
	
	
	
}

export class UioneModel
{
	 chk: string; 
	 chkkkkkkkkk: string; 
}
