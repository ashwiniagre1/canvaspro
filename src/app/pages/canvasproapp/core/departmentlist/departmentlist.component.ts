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
	selector: 'departmentlist',
	templateUrl: 'departmentlist.component.html'
})
export class DepartmentlistComponent implements OnInit
{
	departmentlistModel:DepartmentlistModel;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.departmentlistModel=new DepartmentlistModel();
	}
	ngOnInit()
	{
	}
	
	
	
}

export class DepartmentlistModel
{
}
