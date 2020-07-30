import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AnimeService } from './../services/anime.service';
import { Animedetail } from './../model/animedetail';
import { Character } from './../model/character';
import { NgxSpinnerService } from "ngx-spinner";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animeDetail:Animedetail;
  page;
  id:number;
  genres:[];
  studios:[];
  adaptation:[];
  sequel:[];
  sideStory:[];
  opening_themes:[]
  ending_themes:[];
  character:Character[];
  showPagination:boolean = true;



  constructor(
    private activatedRoute:ActivatedRoute,
    private animeService:AnimeService,
    private spinner:NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.id = this.activatedRoute.snapshot.params.id;
    this.animeService.getAnimeDetail(this.id).subscribe((data:Animedetail) =>{
      // console.log('this is data',data)
      this.animeDetail = data;
      this.genres = data.genres;
      this.studios = data.studios;
      this.adaptation = data.related.Adaptation;
      this.sequel = data.related['Sequel'];
      this.sideStory = data.related['Side story'];
      this.opening_themes = data.opening_themes;
      this.ending_themes = data.ending_themes;
    })

    this.animeService.getCharacters(this.id).subscribe((data:Character)=>{
      // console.log(data)
      this.character = data.characters;
      this.spinner.hide();
    })
  
  }

}
