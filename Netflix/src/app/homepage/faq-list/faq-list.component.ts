import { Component,  OnInit } from '@angular/core';
import { Faq } from '../../models/faq'
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss'],
  providers: [NgbAccordionConfig]
})
export class FaqListComponent implements OnInit {

  faqs:Faq[] = [
    {
      question: "Cos'è Netflix?",
      answer: `Netflix è un servizio di streaming che offre una varietà di serie TV, film, documentari pluripremiati e tanto altro su una vasta gamma di dispositivi connessi a Internet.

      Guarda quello che vuoi, in qualsiasi momento e senza interruzioni pubblicitarie. Il tutto a una quota mensile ridotta. C'è sempre qualcosa di nuovo da scoprire: aggiungiamo nuovi film e serie TV ogni settimana!`
    },
    {
      question: "Quanto costa Netflix?",
      answer: "Guarda Netflix su smartphone, tablet, Smart TV, laptop o dispositivi per lo streaming, il tutto per un importo mensile fisso. Piani da 7,99 € a 17,99 € al mese. Nessun costo aggiuntivo, nessun contratto."
    },
    {
      question: "Dove posso guardare Netflix?",
      answer: `Guarda Netflix dove vuoi, quando vuoi. Accedi al tuo account per guardare subito Netflix dal tuo computer su netflix.com oppure da qualsiasi dispositivo connesso a Internet che supporta l'app Netflix, come smart TV, smartphone, tablet, lettori multimediali per streaming e console per videogiochi.

      Con l'app per iOS, Android e Windows 10 puoi anche scaricare i tuoi programmi preferiti. Usa la funzionalità di download per guardare i contenuti mentre sei in viaggio e senza connessione a Internet. Porta Netflix sempre con te.`
    },
    {
      question: "Come posso disdire?",
      answer: "Netflix è flessibile. Nessun contratto fastidioso e nessun impegno. Puoi facilmente disdire il tuo contratto online con due clic. Nessuna penale: attiva o disdici il tuo account in qualsiasi momento."
    },
    {
      question: "Cosa posso guardare su Netflix?",
      answer: "Netflix ha un nutrito catalogo di lungometraggi, documentari, serie TV, anime, originali Netflix pluripremiati e tanto altro. Guarda tutto quello che vuoi, in qualsiasi momento."
    },
    {
      question: "Netflix è adatto ai bambini?",
      answer: `L'area Netflix Bambini, già inclusa nell'abbonamento, offre ai genitori un maggiore controllo sui contenuti e ai più piccoli uno spazio dedicato dove guardare serie TV e film per tutta la famiglia.

      I profili Bambini hanno un filtro famiglia con PIN che ti permette di limitare l'accesso ai contenuti in base alla fascia d'età e bloccare la visione di titoli specifici.`
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export class NgbdAccordionConfig {
  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }
}
