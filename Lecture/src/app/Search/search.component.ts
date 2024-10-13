import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",

    standalone: true,
    imports: [FormsModule]
})
export class SearchComponent{
    value: string = ""

    @Output("value")
    valueEmitter: EventEmitter<string> = new EventEmitter<string>()

    changeValue(): void{
        this.valueEmitter.emit(this.value)
    }
}