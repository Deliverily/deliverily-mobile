import { Component } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
map:any;
  constructor() {}
ionViewDiEnter(){
this.map=new google.maps.Map(document.getElementById('map'), {
  center: {lat: -34.397, lng: 150.644},
  zoom: 8
});
}
}

