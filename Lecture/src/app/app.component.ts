import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateTestComponent } from './Components/template-test/template-test.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ContentComponent } from './Components/content/content.component';
import { DecoratorsComponent } from './Components/decorators/decorators.component';
import { LifeCycleHooksComponent } from './Components/life-cycle-hooks/life-cycle-hooks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateTestComponent, ParentComponent, ContentComponent, DecoratorsComponent, LifeCycleHooksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4-Lifeycle';
}
