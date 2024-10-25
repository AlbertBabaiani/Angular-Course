import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",

    standalone: true,
    imports: []
})
export class SearchComponent{
    @Output("value")
    valueEmitter: EventEmitter<string> = new EventEmitter<string>()

    changeValue(new_value: string): void{
        this.valueEmitter.emit(new_value)
    }
}