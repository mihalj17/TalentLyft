import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

const ELEMENT_DATA: Tutorial[] = [
    
];

@Component({
  selector: 'app-published-list',
  templateUrl: './published-list.component.html',
  styleUrls: ['./published-list.component.scss']
})
export class PublishedListComponent implements OnInit {

    listUsers:Tutorial[]=[];
    publishUsers: Tutorial[]=[];
    results : Tutorial[]=[];
    displayedColumns: string[] = ['id', 'title', 'description', 'published','actions'];
    dataSource =  ELEMENT_DATA;
    filterText:string='';
    publishedFilterText:string='';
    dataTitle:string='';
    publish:boolean=false;
    
    

  constructor(private tutorialService:TutorialService) { }

  ngOnInit(): void {
    this.tutorialService.getAll().subscribe( data =>{
        this.listUsers=data;
        
        
        this.publishUsers=this.listUsers.filter(function(result){
            return result.published===true;
        })
        
       
        });
        
        
        
        
        
  }

}
