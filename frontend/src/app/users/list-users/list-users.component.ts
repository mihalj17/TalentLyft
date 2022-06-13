import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers!:any;
  constructor(private tutorialService:TutorialService) { }

  ngOnInit(): void {
      this.tutorialService.getAll().subscribe( data =>{
          this.listUsers=data;
      });
  }

}
