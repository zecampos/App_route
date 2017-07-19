
import { Component, OnInit } from '@angular/core';

import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import 'rxjs/add/operator/map';
import { API_MEMBRO } from './../../app.api';

@Component({
  selector: 'app-membronew',
  templateUrl: './membronew.component.html',
  styleUrls: ['./membronew.component.scss']
})
export class MembronewComponent implements OnInit {

  formulario: FormGroup

  constructor(private formBuilder: FormBuilder,
              private _http: Http
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      Nome: '',
        TipoLogadouro: '',
        Logadouro: '',
        Numero: '',
        Complemento: '',
        Bairro: '',
        Cidade: '',
        DDD:    ['',  Validators.maxLength(2)],
        Telefone: ['', Validators.maxLength(9)],
        DataNascimento: '',
        EstadoCivil: '',
        Sexo: '',
        Batizado: '',
        AnoBatismo: 0,
        Discipulador: '',
        Encontro: '',
        EscolaLideres: '',
        Status: 'Ativo'



    })

  }
onSubmit(){
  console.log(this.formulario.value)
   let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({headers : headers});
  this._http.post(`${API_MEMBRO}/membros/`,JSON.stringify(this.formulario.value),options)
  .map(res => res)
  .subscribe(dados => console.log(dados))
}

}
