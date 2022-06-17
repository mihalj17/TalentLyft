
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
    userId: any;
    userDetails :any;
    dataLoaded: boolean=false;
    editUserForm : FormGroup = new FormGroup ({});
  constructor(private activatedRoute : ActivatedRoute,
            private  tutorialService:TutorialService,
            private formBuilder:FormBuilder,
            private _snackBar: MatSnackBar,
            private router:Router) { }

  ngOnInit(): void {
      this.dataLoaded=false;
      this.activatedRoute.params.subscribe(data =>{
          this.userId =data['id'];
      });
      if(this.userId !==''){
          // View user details
          this.tutorialService.get(this.userId)
          .toPromise()
          .then(data => {
              this.userDetails=data;
              Object.assign(this.userDetails,data);
              // Build the edit form
              this.editUserForm =this.formBuilder.group({
                'title' : new  FormControl(this.userDetails.title,[Validators.required,Validators.minLength(3)]),
                'description' : new  FormControl(this.userDetails.description,[Validators.required,Validators.minLength(3)]),
                'published' : new  FormControl(this.userDetails.published)
              })
              this.dataLoaded=true;
          })
          .catch(err =>{
              console.log(err);
          })
      }
  }
 updateUser(){
    this.tutorialService.update(this.userId,this.editUserForm.value).subscribe(data =>{
        this._snackBar.open("Task updated successfully ");
        this.router.navigate(['/users/list']);
    },err =>{
      this._snackBar.open("Unable to  update user");
      
    }
    )
 }
}
