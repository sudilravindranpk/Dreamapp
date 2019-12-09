import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: [ './star.component.scss' ]
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() starClick: EventEmitter<string> = new EventEmitter<string>();


    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onStarClick = () => {
        this.starClick.emit(`has clicked  a rating of ${this.rating}`);
    }

}
