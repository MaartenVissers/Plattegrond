import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component.service';
import { Location } from '@angular/common';
import {Ruimte} from '../../model/ruimte';

import{DataService} from '../../services/data.service';
import {Verdieping} from '../../model/verdieping';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-ruimtedetails',
  templateUrl: './ruimtedetails.component.html',
  styleUrls: ['./ruimtedetails.component.css']
})
export class RuimtedetailsComponent implements OnInit {
  ruimte: Ruimte;
  myForm: FormGroup;

  ngOnInit(): void {
    this.componentService.currentRuimte.subscribe(ruimte => this.ruimte = ruimte);

    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9\\s]*')

      ]],
      type: ['', [
        Validators.required,
        Validators.pattern("klaslokaal|aula|vergaderzaal|cafetaria|bureau|studielandschap|Studielandschap|Klaslokaal|Aula|Vergaderzaal|Cafetaria|Bureau")
      ]],
      capaciteit: ['', [
        Validators.required,
        Validators.min(0),
        Validators.max(200)
      ]],
      beamer : '',
      bezet: '',
      drukte: '',
      reserveer: ''
    })

    // @ts-ignore
    this.myForm.valueChanges.subscribe(this.dataService.updateRuimte(this.ruimte).subscribe());
  }

  constructor(private fb: FormBuilder, private componentService: ComponentService, private dataService: DataService, private location: Location){

  }

  submit(ruimte) {
    this.dataService.updateRuimte(this.ruimte)
      .subscribe(() => this.goBack());
  }

  /*reserveer() {
    const eindDatum = new Date();
    if (this.selectedOption) {
      this.ruimte.startDatumReservatie = new Date();
      eindDatum.setHours(eindDatum.getHours() + Number(this.selectedOption));
      this.ruimte.gereserveerd = true;
      this.ruimte.eindDatumReservatie = eindDatum;
      this.dataService.updateRuimte(this.ruimte).subscribe();
    }c
  }*/

  goBack(): void {
    this.location.back();
  }

  get name() {
    return this.myForm.get('name');
  }

  get capaciteit() {
    return this.myForm.get('capaciteit');
  }

  get type() {
    return this.myForm.get('type');
  }

  veranderReservatie(){
    if(!this.ruimte.gereserveerd){
      this.ruimte.eindDatumReservatie = null;
      this.ruimte.startDatumReservatie = null;
      console.log(this.ruimte);
    }
    console.log(this.ruimte);
  }



}
