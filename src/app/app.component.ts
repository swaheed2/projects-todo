import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colWidth:number = 50;

  projects = [
    {
      title: "Manufactoring UI",
      progress: 60,
      items:[
        {
          title:"Tree View",
        }
      ]
    },
    {
      title: "Manufactoring Calendar",
      progress: 10,
      items:[
        {
          title:"Setup Calendar Application using Full Calendar library",
          complete: true
        },
        {
          title:"Make REST Api for calendar data",
        }
      ]
    },
    {
      title: "Label Printing",
      progress: 90,
      items:[
        {
          title:"Test and Finalize Templates for the new printer",
          complete: true
        },
        {
          title:"Commit Code and Put in test HOSS to be tested internally"
        }
      ]
    }
  ]
}
