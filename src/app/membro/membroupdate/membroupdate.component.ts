import { Membro } from './../membro.model';
import { Observable } from 'rxjs/Observable';
import { API_MEMBRO } from './../../app.api';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MembroService } from "app/membro/membro.service";

@Component({
  selector: 'app-membroupdate',
  templateUrl: './membroupdate.component.html',
  styleUrls: ['./membroupdate.component.scss']
})
export class MembroupdateComponent implements OnInit {
membro;
  constructor(private membroService: MembroService,
    private route: ActivatedRoute,
    private http: Http
  ) { }

  ngOnInit() {

      this.membroService.getmembro(this.route.snapshot.params['id'])
      .subscribe(membro => this.membro= membro)



  }
    getmembro(id:string){
    return this.http.get(`${API_MEMBRO}/membros/${id}`).map(res => res.json().Membros)

  }

}
