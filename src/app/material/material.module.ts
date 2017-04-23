import { NgModule } from '@angular/core';

/** Libraries */
import {
    MdButtonModule, MdMenuModule, MdIconModule, MdToolbarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

let materialComponents = [ 
    MdButtonModule, MdMenuModule, MdIconModule, MdToolbarModule
]

@NgModule({
    declarations: [],
    imports: [
        FlexLayoutModule,
        ...materialComponents
    ],
    providers: [],
    exports: [
        FlexLayoutModule,
        ...materialComponents
    ]
})
export class MaterialModule { }
