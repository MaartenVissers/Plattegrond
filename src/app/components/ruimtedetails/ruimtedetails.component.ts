import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component.service';
import { Location } from '@angular/common';
import {Ruimte} from '../../model/ruimte';

import{DataService} from '../../services/data.service';
import {Verdieping} from '../../model/verdieping';


@Component({
  selector: 'app-ruimtedetails',
  templateUrl: './ruimtedetails.component.html',
  styleUrls: ['./ruimtedetails.component.css']
})
export class RuimtedetailsComponent implements OnInit {
  ruimte: Ruimte;

  ngOnInit(): void {
    this.componentService.currentRuimte.subscribe(ruimte => this.ruimte = ruimte);
  }

  constructor(private componentService: ComponentService, private dataService: DataService, private location: Location){

  }

  submit(ruimte) {
    this.dataService.updateRuimte(this.ruimte)
      .subscribe(() => this.goBack());
    this.dataService.getVerdiepingen().subscribe(verdiepingen => console.log(verdiepingen));
    /*this.dataService.getRuimtes().subscribe(r => console.log(r));
    console.log("de heroes: " + this.verdiepingen);*/


  }

  goBack(): void {
    this.location.back();
  }




}
