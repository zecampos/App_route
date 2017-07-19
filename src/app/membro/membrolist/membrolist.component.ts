
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";


import { MembroService } from './../membro.service';

@Component({
  selector: 'app-membrolist',
  templateUrl: './membrolist.component.html',
  styleUrls: ['./membrolist.component.scss']
})
export class MembrolistComponent implements OnInit {
membros;
  constructor(
     private route: ActivatedRoute,
    private membroService: MembroService,
    private router : Router
  ) { }

  ngOnInit() {
      this.membroService.getMembros().subscribe(data => this.membros=data)


  }
    selectMembro(){
       this.membroService.getmembro(this.route.snapshot.params['id'])
      .subscribe(membros => this.membros= membros)
      this.router.navigate(['/update', this.membros._id.$oid])
    }



}
