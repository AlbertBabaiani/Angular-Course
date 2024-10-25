import { Component } from '@angular/core';
import { ContentChildComponent } from './content-child/content-child.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ContentChildComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
