import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TutorialService } from 'src/app/services/tutorial.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

    addUserForm: FormGroup = new FormGroup({});
  constructor( private formBuilder: FormBuilder,private tutorialService:TutorialService,private _snackBar: MatSnackBar,) { }

  ngOnInit(): void {
      this.addUserForm= this.formBuilder.group({
          'title' : new  FormControl('',[Validators.required,Validators.minLength(3)]),
          'description' : new  FormControl('',[Validators.required,Validators.minLength(3)]),
          'published' : new  FormControl('')
      })
  }

  createUser(){
      this.tutorialService.create(this.addUserForm.value).subscribe(data =>{
          this._snackBar.open("Task created successfully ");
      },err =>{
        this._snackBar.open("Unable to  create user");
      }
      )
  }

}
