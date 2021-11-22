import { Component, OnInit } from '@angular/core';
import { Service } from 'app/models/Service';

@Component({
  selector: 'service-container',
  templateUrl: './service-container.component.html',
  styleUrls: ['./service-container.component.scss']
})
export class ServiceContainerComponent implements OnInit {

  // Service

  services: Service[] = [
    {
      title: 'Goditi Netflix sulla tua TV.',
      description: 'Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri dispositivi.',
      image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png',
      id: 1
    },
    {
      title: 'Scarica le tue serie da guardare offline.',
      description: 'Salva facilmente i tuoi preferiti così avrai sempre qualcosa da guardare.',
      image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg',
      id: 2
    },
    {
      title: 'Guarda Netflix ovunque.',
      description: 'Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti e senza spendere di più.',
      image: 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png',
      id: 3
    },
    {
      title: 'Crea profili per i bambini.',
      description: 'I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già incluso nel tuo abbonamento.',
      image: 'https://occ-0-3982-2581.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbh8I7sjWYNz2f8_bqyLdqQqR5AfT7VDHCKvURfq4-D-a7r0fnLYR01-_teQH4fX1NctSxg5EVZ_cX0tjuzKbmdUvLab.png?r=dda',
      id: 4
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
