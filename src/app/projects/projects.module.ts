import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project.component';

/** Libraries */
import { MdCardModule, MdCheckboxModule, 
  MdInputModule, MdProgressBarModule, MdButtonModule, 
  MdSlideToggleModule, MdMenuModule, MdToolbarModule, MdIconModule }
 from '@angular/material';
 
 
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,

    /** Material */
    MdCardModule, MdCheckboxModule, MdInputModule, MdProgressBarModule, 
    MdButtonModule, MdSlideToggleModule, MdMenuModule, MdToolbarModule, 
    MdIconModule
  ],
  providers: [],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
