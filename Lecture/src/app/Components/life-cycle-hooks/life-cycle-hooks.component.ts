import { afterNextRender, afterRender, AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { HookChildComponent } from './hook-child/hook-child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-life-cycle-hooks',
  standalone: true,
  imports: [HookChildComponent, FormsModule],
  templateUrl: './life-cycle-hooks.component.html',
  styleUrl: './life-cycle-hooks.component.css'
})
export class LifeCycleHooksComponent implements AfterViewInit, AfterViewChecked{
  arr: string[] = []

  value = 'sdsfsf'

  @ViewChild('div') div_el!: ElementRef<HTMLDivElement>

  constructor(){
    console.log("Parent Initialized")

    afterNextRender(() => {
      console.log("Parent After Next Render")
    })


    afterRender(() =>{
      console.log("Parent Next Render")
    })
  }

  ngOnChanges(){
    console.log("Parent On Changes")
  }

  ngOnInit(): void {
    console.log("Parent On Init")
  }

  ngDoCheck(): void {
    console.log("Parent Do Check")
  }

  ngAfterContentInit(): void {
    console.log("Parent After Content Init")
  }

  ngAfterContentChecked(): void {
    console.log("Parent After Content Checked")
  }

  ngAfterViewInit(): void {
    console.log("Parent After View Init", this.div_el.nativeElement.innerText)
  }

  ngAfterViewChecked(): void {
    console.log("Parent After View Checked", this.div_el.nativeElement.innerText)
  }
}
