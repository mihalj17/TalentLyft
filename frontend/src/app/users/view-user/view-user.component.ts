import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
    userId:any;
    userDetails:any;
  constructor( private tutorialService:TutorialService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data => {
          this.userId=data['id'];
      })
      this.tutorialService.get(this.userId).subscribe(data => {
          this.userDetails=data;
      })
  }

}
