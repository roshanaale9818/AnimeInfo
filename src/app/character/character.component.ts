import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from './../services/anime.service';
import { Characterdetail } from './../model/characterdetail';
import { Character } from '../model/character';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor(
    private activaedRoute:ActivatedRoute,
    private animeService:AnimeService,
    private spinner:NgxSpinnerService
  ) { }
  id:number;
  about:string;
  characterDetail:Characterdetail;
  animes:Character[];
  manga:any;
  voiceActors:any;
  // paragraph;

  ngOnInit() {
    this.spinner.show();
    this.id =  this.activaedRoute.snapshot.params.id;
    this.animeService.getCharacterDetail(this.id).subscribe((data:Characterdetail)=>{
      this.characterDetail = data;
      this.about = data.about;
      this.about = this.about.replace(/\r\n/g,' ')
      // let str = this.about.includes('\n')
      // if (str === true){
      //   this.about = this.about.replace('\n',' ')
      //   alert('there')
       
      // }
      this.animes = data.animeography;
      this.manga = data.mangaography;
      this.voiceActors = data.voice_actors;
      // console.log(data.animeography);
      this.spinner.hide();
      // console.log(data)
    })
  }

}
