import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { CharacterComponent } from './character/character.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  }
  ,
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
  ,
  {
    path:'anime/:id',
    component:AnimeComponent
  },
  {
    path:'animedetail/:id',
    component:AnimeComponent

  },
  {
    path:'character/:id',
    component:CharacterComponent
  },
  {
    path:'**',
    component:NotfoundComponent
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
