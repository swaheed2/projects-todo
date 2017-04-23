import { Component, Input } from '@angular/core';

@Component({
	selector: 'td-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

	@Input() project;

	colors = ['red',
		'pink',
		'purple',
		'deep-purple',
		'indigo',
		'blue',
		'light-blue',
		'cyan',
		'teal',
		'green',
		'light-green',
		'lime',
		'amber',
		'orange',
		'deep-orange',
		'brown',
		'grey',
		'blue-grey']

	constructor() {

	}

	checkItem($event, item) {
		item.complete = $event.checked;
	}

	calcProgress() {
		let total = this.project.items.length;
		let complete = 0;
		for (let item of this.project.items) {
			if (item.complete) {
				complete++;
			}
		}
		return (complete / total) * 100;
	}

	setProjectColor() {
		let i = this.colors.indexOf(this.project.color);
		if(i === -1 || i === (this.colors.length - 1)){
			this.project.color = this.colors[0];
		}
		else{
			this.project.color = this.colors[i+1];
		}
	}
}
