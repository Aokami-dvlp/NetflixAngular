import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Details, IDetails, Movie } from 'src/app/shared/interface'
import { MovieService } from 'src/app/shared/movie.service'
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { IUser } from 'app/models/user-interface';

@Component({
  selector: 'movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit {

   search!: string;
   popularTVs: Movie[] = [];
   popularMovies: Movie[] = [];
   movieDetails:Partial<Details> = {};
   tvDetails:Partial<Details> = {};
   genres!: string[];
   detailstv: boolean = false;
   detailsfilm: boolean = false;

  constructor(private service:MovieService ) { }

  ngOnInit(): void {
     this.service.getPopularMovies(1).subscribe(res => this.popularMovies = res)
     this.service.getPopularTV(1).subscribe(res => this.popularTVs = res)
   }

   customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false,
    navText : ["<div class='nav-btn prev-slide'><i class='bi bi-chevron-left'></i></div>","<div class='nav-btn next-slide'><i class='bi bi-chevron-right'></i></div>"]
  }


}
