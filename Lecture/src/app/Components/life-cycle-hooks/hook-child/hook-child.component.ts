import { AfterContentChecked, AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hook-child',
  standalone: true,
  imports: [],
  templateUrl: './hook-child.component.html',
  styleUrl: './hook-child.component.css'
})
export class HookChildComponent implements
OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
OnDestroy
{
  @Input() value!: string
  @Input() value1!: string[]

  @ContentChild('p')
  projectedP!: ElementRef<HTMLParagraphElement>

  value_string = "sfdssfd"

  constructor(){
    console.log("Child Initialized", this.value)
  }

  ngOnChanges(simpleChanges: SimpleChanges){
    console.log("Child On Changes", `@Input: ${this.value}, ${this.value1}`)
    // if(simpleChanges['value']){
    //   console.log(simpleChanges['value'].firstChange)
    // }
  }

  ngOnInit(): void {
    console.log("Child On Init", `@Input: ${this.value}, ${this.value1}`)
  }

  ngDoCheck(): void {
    console.log("Child Do Check", `@Input: ${this.value}, ${this.value1}`)
  }

  ngAfterContentInit(): void {
    console.log("Child After Content Init", `Projected P: ${this.projectedP.nativeElement}`)
  }

  ngAfterContentChecked(): void {
    console.log("Child After Content Checked", `Projected P: ${this.projectedP.nativeElement}`)
  }

  ngAfterViewInit(): void {
    console.log("Child After View Init")
  }

  ngAfterViewChecked(): void {
    console.log("Child After View Checked")
  }

  ngOnDestroy(): void {
    console.log("Child Destroyed")
  }
}
