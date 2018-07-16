import { Club } from './../club.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubDataService } from '../club-data.service';

@Component({
  selector: 'app-club-detail',
  templateUrl: './club-detail.component.html',
  styleUrls: ['./club-detail.component.css']
})
export class ClubDetailComponent implements OnInit {
 private _club: Club;

  constructor(private route: ActivatedRoute, private clubDataService: ClubDataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(pa =>
      this.clubDataService.getClub(pa.get('id'))
        .subscribe(item => this._club = item))
  }

}
