import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { TutorialService } from 'src/app/services/tutorial.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { MatTable, MatTableDataSource } from '@angular/material/table';


  
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
  dataSource =  ELEMENT_DATA;
  filterText:string='';
  dataTitle:string='';
  publish:boolean=false;
  constructor(private tutorialService:TutorialService) { }

  ngOnInit(): void {
      this.tutorialService.getAll().subscribe( data =>{
          this.listUsers=data;
          
          
          
      });
      
  }

        
}
