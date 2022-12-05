import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualificationServiceComponent } from './publicaciones/qualification-/qualification-service.component';
import { FormCreateComponent } from './publicaciones/form-create/form-create.component';
import { PostFormComponent } from './publicaciones/post-form/post-form.component';

const routes: Routes = [
  //{path: 'create', component: FormCreateComponent},
  //{path: 'edit/:postId', component: FormCreateComponent},
  {path: '', component: PostFormComponent},
  {path: 'Qualification', component: QualificationServiceComponent},
  {path: 'Cal/:postId', component: QualificationServiceComponent},
  {path: 'create', component: FormCreateComponent},
  {path: 'edit/:postId', component: FormCreateComponent}


  /* {path: 'create', component: PostCreateComponent},
  {path: 'edit/:postId', component: PostCreateComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
