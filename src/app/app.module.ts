
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FormCreateComponent } from './publicaciones/form-create/form-create.component';
import { PostFormComponent } from './publicaciones/post-form/post-form.component';
import { MoveButtonsComponent } from './MoveButtons/MoveButtons.component';
import { InfoComponent } from './Info/info.component';
import { NgModule} from '@angular/core';

import { BottomSheetComponent } from './publicaciones/bottom-sheet/bottom-sheet.component';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatSelectModule} from '@angular/material/select'
import { FormsModule } from '@angular/forms';
import { PostService } from './publicaciones/post.service';
import { MatStepperModule} from '@angular/material/stepper'
import { MatDividerModule} from '@angular/material/divider'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import { QualificationServiceComponent } from './publicaciones/qualification-/qualification-service.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormCreateComponent,
    PostFormComponent,
    InfoComponent,
    MoveButtonsComponent,
    BottomSheetComponent,
    QualificationServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    MatStepperModule,
    MatDividerModule,
    MatBottomSheetModule,
    MatListModule,
    HttpClientModule,
    CarouselModule

  ],
  providers: [PostService],
  bootstrap: [AppComponent]

})
export class AppModule { }
