import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';

declare var google: any;

@Component({
  selector: 'app-mapa-endereco',
  templateUrl: './mapa-endereco.page.html',
  styleUrls: ['./mapa-endereco.page.scss'],
})
export class MapaEnderecoPage implements OnInit {

  map: any;

  @ViewChild('map' , {read: ElementRef, static: false}) mapRef: ElementRef;

  infoWindows: any = [];
  markers: any = [
    {
      title: 'Nome da Rua',
    latitude: '-22.9375814',
      longitude: '-43.0289207'
    }
  ];


  constructor(private route: Router) { }

  ngOnInit() {

  }

  ionViewDidEnter(){
    this.showMap();
  }

  addMarketTopMap(markers){
    for (const marker of markers){
      const position = new google.maps.LatLng(marker.latitude, marker.longitude);
      const mapMarker = new google.maps.Marker({
        position,
        title:  marker.title,
        latitude:  marker.latitude,
        longitude:  marker.longitude
      });

      mapMarker.setMap(this.map);

      this.addInfoWindowToMarket(mapMarker);

    }

  }

  addInfoWindowToMarket(marker){
    const infowindowContent = '<div id="content">' +
    '<h6 id="firstHeading" clas="firstHeading">' + marker.title + '</h6>' +
    '<p >Você está aqui</p></div>';

    const infoWindow = new google.maps.InfoWindow({
      content: infowindowContent
    });

    marker.addListener('click' , () => {
      this.closeeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });

    this.infoWindows.push(infoWindow);
  }

  closeeAllInfoWindows(){
    for (const window of this.infoWindows){
      window.close();
    }
  }


  irParaAddEditEndereco(){
    this.route.navigate(['/add-endereco']);
  }

  showMap(){

    const location = new google.maps.LatLng(-22.9375814, -43.0289207);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarketTopMap(this.markers);

  }



}
