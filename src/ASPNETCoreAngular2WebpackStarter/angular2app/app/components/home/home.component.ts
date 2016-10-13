import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/DataService';
import { ToasterService } from 'angular2-toaster/angular2-toaster'
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})

export class HomeComponent implements OnInit {

    public message: string;
    public values: any[];

    constructor(
        private _dataService: DataService,
        private _toasterService: ToasterService,
        private _slimLoadingBarService: SlimLoadingBarService) {
        this.message = "Hello from HomeComponent constructor";
    }

    ngOnInit() {
        this._slimLoadingBarService.start();

        this._dataService
            .GetAll()
            .subscribe(data => this.values = data,
            error => (response) => {
                this._toasterService.pop('error', 'Damn', 'Something went wrong...');
            },
            () => {
                this._toasterService.pop('success', 'Complete', 'Getting all values complete');
                this._slimLoadingBarService.complete();
            });
    }
}
