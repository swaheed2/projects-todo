import { Component } from '@angular/core';

@Component({
	selector: 'td-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
	colWidth = 50;
	colMargin = .6;

	projects:Array<any> = [
		{
			title: "Learn Angular",
			items: [
				{
					title: "Learn Basics",
					complete:true
				}, 
				{
					title:"Make useful applications",
					complete:true
				},
				{
					title:"Learn advance concepts",
					complete:true
				},
				{
					title:"Contribute or create a library"
				}
			],
			color:"teal"
		},
		{
			title: "Github Workflow",
			items: [
				{
					title: "Learn the most useful commands",
					complete: true
				},
				{
					title: "Prace feature branch and merging",
				},
				{
					title: "Fix merge conflicts",
				}
			],
			color:"indigo"
		},
		{
			title: "Project Todo App",
			items: [
				{
					title: "Learn flexbox and angular flex-layout",
					complete: true
				},
				{
					title: "Create first working prototype using angular material and flex-layout",
					complete: true
				},
				{
					title: "Connect with firebase to persist data"
				},
				{
					title: "Implement new project and edit functionality"
				},
				{
					title: "Add drag to reorder items feature"
				}
			],
			color:"deep-orange"
		},
		{
			title: "Learn React",
			items: [
				{
					title: "Find motivation to learn react"
				},
				{
					title: "Learn React"
				},
				{
					title: "Make some cool apps with react"
				},
				{
					title: "Make the final judgement that Angular and Typescript are better"
				}
			],
			color:"cyan"
		}
	]

	constructor() { 
	}
}
