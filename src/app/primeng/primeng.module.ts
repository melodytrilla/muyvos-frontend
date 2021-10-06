import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ButtonModule,
        ToolbarModule,
        InputTextModule,
        PasswordModule,
        CardModule
    ],
    exports: [
        ButtonModule,
        ToolbarModule,
        InputTextModule,
        PasswordModule,
        CardModule
    ],
    providers: [],
})
export class PrimengModule {}