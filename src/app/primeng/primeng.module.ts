import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        ToolbarModule,
        InputTextModule,
        PasswordModule
    ],
    exports: [
        ButtonModule,
        ToolbarModule,
        InputTextModule,
        PasswordModule
    ],
    providers: [],
})
export class PrimengModule {}