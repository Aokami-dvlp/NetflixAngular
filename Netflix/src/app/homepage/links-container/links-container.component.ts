import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'links-container',
  templateUrl: './links-container.component.html',
  styleUrls: ['./links-container.component.scss']
})
export class LinksContainerComponent implements OnInit {

  links = [
    {
      name1: "Domande frequenti",
      name2: "Rapporti con gli investitori",
      name3: "Come guardare Netflix",
      name4: "Informazioni sull'azienda",
      name5: "Solo su Netflix"
    },
    {
      name1: "Centro assistenza",
      name2: "Opportunità di lavoro",
      name3: "Condizioni di utilizzo",
      name4: "Contattaci"
    },
    {
      name1: "Account",
      name2: "Riscatta carte regalo",
      name3: "Privacy",
      name4: "Test di velocità"
    },
    {
      name1: "Media Center",
      name2: "Acquista carte regalo",
      name3: "Preferenze per i cookie",
      name4: "Note legali"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

export class Links {
  name1!: string;
  name2!: string;
  name3!: string;
  name4!: string;
  name5?: string;
  name6?: string;
}
