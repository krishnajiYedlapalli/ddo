import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatGridListModule,
MatTableModule,
MatTooltipModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatTableModule,
    MatTooltipModule
  ],
  declarations: [],
})
export class MaterialModule {}
export const materialArray = [
  MatCardModule,
  BrowserAnimationsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatGridListModule,
  MatTableModule,
  MatTooltipModule
];
