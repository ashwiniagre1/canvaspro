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
	selector: 'testtree',
	templateUrl: 'testtree.component.html'
})
export class TesttreeComponent implements OnInit
{
	testtreeModel:TesttreeModel;
	treeData:any;
	
	constructor(private http: HttpClient,private router: Router)
	{
		this.testtreeModel=new TesttreeModel();
	this.treeData={"data":[{"text":"web app","expand":"true","children":[{"text":"app","expand":"true","children":[{"leaf":"true","text":"application.js"}]},{"text":"button","expand":"true","children":[{"leaf":"true","text":"button.js"},{"leaf":"true","text":"cycle.js"},{"leaf":"true","text":"split.js"}]}]},{"text":"core","expand":"true","children":[{"text":"dom","expand":"false","children":[{"leaf":"true","text":"element.form.js"},{"leaf":"true","text":"element.static.js"}]}]}]};
	}
	ngOnInit()
	{
	}
	
	
	
}

export class TesttreeModel
{
}
