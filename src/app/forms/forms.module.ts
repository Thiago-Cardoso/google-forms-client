import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormListComponent } from './form-list/form-list.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { routing } from './../app.routing';
import { FormsModule as CoreFormsModule } from '@angular/forms';
import { FormFormComponent } from './form-form/form-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterializeModule,
    routing,
    CoreFormsModule
  ],
  exports: [
    FormListComponent
  ],
<<<<<<< HEAD
  declarations: [FormListComponent, FormEditComponent]
=======
  declarations: [FormListComponent, FormEditComponent, ActiveComponent, FormFormComponent, QuestionListComponent, QuestionFormComponent]
>>>>>>> component_form_new
})
export class FormsModule { }