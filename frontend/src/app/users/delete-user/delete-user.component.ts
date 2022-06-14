import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
    userId: string ='';
  constructor( private activatedRoute: ActivatedRoute,private tutorialService:TutorialService,private _snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data =>{
        this.userId= data['id'];
      });

      if(this.userId){
          this.tutorialService.delete(this.userId).subscribe(data =>{
            this._snackBar.open("Task delete successfully ");
            
          },err =>{
            this._snackBar.open("Unable to Delete the Task ");
          })
      }
  }

}
