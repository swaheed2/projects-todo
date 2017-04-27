import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent, EditProjectDialog } from './project.component';

/** Libraries */
import {
  MdCardModule, MdCheckboxModule, MdDialogModule, MdInputModule, MdProgressBarModule,
  MdSlideToggleModule, MdMenuModule
} from '@angular/material';
import { DragulaModule } from 'ng2-dragula';

import { MaterialModule } from '../material';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    EditProjectDialog
  ],
  entryComponents: [ EditProjectDialog ],
  imports: [
    CommonModule,
    FormsModule,

    /** Material Common */
    MaterialModule,
    DragulaModule,

    /** Material */
    MdCardModule, MdCheckboxModule, MdInputModule, MdProgressBarModule,
    MdSlideToggleModule, MdMenuModule, MdDialogModule
  ],
  providers: [],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
