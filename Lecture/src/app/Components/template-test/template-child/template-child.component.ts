import { Component } from '@angular/core';

@Component({
  selector: 'app-template-child',
  standalone: true,
  imports: [],
  templateUrl: './template-child.component.html',
  styleUrl: './template-child.component.css'
})
export class TemplateChildComponent {
  string_value = "Hello Angular"
}
