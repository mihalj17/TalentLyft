import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TutorialService } from 'src/app/services/tutorial.service';
import { Tutorial } from 'src/app/models/tutorial.model';



  
  const ELEMENT_DATA: Tutorial[] = [
    
  ];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  listUsers:Tutorial[]=[];
  displayedColumns: string[] = ['id', 'title', 'description', 'published','actions'];
  dataSource = ELEMENT_DATA;
  constructor(private tutorialService:TutorialService) { }

  ngOnInit(): void {
      this.tutorialService.getAll().subscribe( data =>{
          this.listUsers=data;
      });
  }

}
