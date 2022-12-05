import { Component, OnInit } from "@angular/core";
import {  NgForm } from "@angular/forms";
import { PostService } from "../publicaciones/post.service";



// Aqui se crea un componente en este caso el header
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})


export class HeaderComponent implements OnInit{




  ngOnInit(): void {

  }


  onSubmit(login: NgForm){
    //console.log(this.postsService.getPosts())
    //this.postsService.limiparCampos();
    //console.log(this.postsService.getPosts())
    //this.child.Reset();
    window.open("https://www.salud-digna.org/", "_blank");

  }


}
