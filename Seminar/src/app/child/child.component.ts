import { Component } from '@angular/core';
import { TestDirective } from '../Directives/test.directive';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [TestDirective],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

}
