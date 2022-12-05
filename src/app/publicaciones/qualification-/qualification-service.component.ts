import { Component, OnInit, ViewEncapsulation, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { BehaviorSubject } from 'rxjs';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';
import { PostService } from '../post.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { datosCliente } from "../post.model";


// import Swiper core and required components


// Aqui se crea un componente en este caso el header
@Component({
  selector: 'app-qualification-service',
  templateUrl: './qualification-service.component.html',
  styleUrls: ['./qualification-service.component.css']
})

export class QualificationServiceComponent implements OnInit  {
  private mode = 'Qualification';
  private postId: string;
  post: datosCliente;

ngOnInit(){
  this.route.paramMap.subscribe((paramMap: ParamMap) => {
    if(paramMap.has('postId')){
      this.mode = 'editCal';
      this.postId = paramMap.get('postId');
      //this.post = this.postsService.getPost(this.postId);
      this.postService.getPost(this.postId).subscribe(postData => {
        this.post = {id: postData._id, nombre: postData.nombre,estado: postData.estado, ciudad: postData.ciudad
        ,sucursal: postData.sucursal, servicio: postData.servicio, calificacionServicio: postData.calificacionServicio
      ,recomendacion: postData.recomendacion}
          this.postService.addServicio(postData.servicio,postData.calificacionServicio);
      });
    }else{
      this.mode = 'Qualification';
      this.postId = null;
    }
  })

}



constructor(private bottomSheet: MatBottomSheet, private postService: PostService, public route: ActivatedRoute){}

  showlist: boolean = false;

  openSheet(valor){
    this.postService.servicio = [];
    this.bottomSheet.open(BottomSheetComponent);
     this.postService.valor$.emit(valor);

  }
  ShowList(){
    this.showlist= true;
    console.log(this.showlist);
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
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
      600: {
        items: 4
      }
    },
    nav: false
  }
}
