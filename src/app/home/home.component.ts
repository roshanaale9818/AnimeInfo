import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AnimeService } from './../services/anime.service';
import { Response } from './../model/response';
import { Anime } from './../model/anime';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchAnime:FormGroup;
  default:string = "Naruto";
  name;
  anime:Anime[];
  page: number = 1;
  showPagination:boolean = false;
  submitted:boolean = false;

  constructor(
    private formBuilder:FormBuilder,
    private animeService:AnimeService,
    private spinner:NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.searchAnime =this.formBuilder.group({
      Name:['',[Validators.required]]
    })
  //    new FormGroup({
  //     Name: new FormControl([Validators.required])
  //  });
   this.searchAnime.controls['Name'].setValue(this.default, {onlySelf: true});
  //  this.setPage(1);
  }
  onSubmit(name){
    if(this.searchAnime.invalid){
      alert('Please fill the search box')
    }
else {
  this.submitted = true;
  this.spinner.show();
  this.name = name.Name;
  this.animeService.searchAnime(name).subscribe((data:Response) =>{
    // console.log(data)
    this.anime = data.results;
    // console.log('anime',this.anime)
    this.showPagination = true;
    this.spinner.hide();
  })
}
  }

}
