import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomDirective } from './Directives/custom.directive';
import { CustomClassDirective } from './Directives/custom-class.directive';
import { TestDirective } from './Directives/test.directive';
import { ChildComponent } from './child/child.component';
import { DirectiveListenDirective } from './Directives/directive-listen.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomDirective, CustomClassDirective, TestDirective, ChildComponent, DirectiveListenDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directives';
}
