import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateChildComponent } from './template-child/template-child.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-template-test',
  standalone: true,
  imports: [FormsModule, TemplateChildComponent, NgTemplateOutlet, NgIf],
  templateUrl: './template-test.component.html',
  styleUrl: './template-test.component.css'
})
export class TemplateTestComponent {
  temp_searchedText: string = ''
  searchedText: string = ''

  changeValue(string_text: string){
    this.searchedText = string_text
  }
}
