import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        ToolbarModule
    ],
    exports: [
        ButtonModule,
        ToolbarModule
    ],
    providers: [],
})
export class PrimengModule {}