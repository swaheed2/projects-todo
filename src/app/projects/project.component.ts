import { Component, Input, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

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

	constructor(public dialog: MdDialog) {

	}

	editProject(data) {
		let dialogRef = this.dialog.open(EditProjectDialog, {
			width: "80vw",
			height: "150px",
			data: data
		}); 
		dialogRef.afterClosed().subscribe(project => {
			//this.project = project;
		});
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

	editItem(event, item) {
	}

	setProjectColor() {
		let i = this.colors.indexOf(this.project.color);
		if (i === -1 || i === (this.colors.length - 1)) {
			this.project.color = this.colors[0];
		}
		else {
			this.project.color = this.colors[i + 1];
		}
	}
}

@Component({
	selector: 'dialog-edit-project',
	template: ` 
  	<div md-dialog-title>Edit Project</div>
	<div md-dialog-content>
		<md-input-container style="width:70%">
			<input mdInput required placeholder="Project Name" 
				floatPlaceholder="always" 
				ng-model-options="{ standalone:true }" 
				[(ngModel)]="project.title" />
		</md-input-container>
		<button md-raised-button color="primary" (click)="dialogRef.close(project)">Save</button>
	</div> 
  `
})
export class EditProjectDialog { 

	constructor(
		public dialogRef: MdDialogRef<EditProjectDialog>
		, @Inject(MD_DIALOG_DATA) public project: any) {

	 }
}
