import { Component, OnInit } from '@angular/core';
import {ComponentService} from '../../services/component.service';

@Component({
  selector: 'app-ruimte',
  templateUrl: './ruimte.component.html',
  styleUrls: ['./ruimte.component.css']
})
export class RuimteComponent implements OnInit {

  ruimte: string;

  constructor(private data: ComponentService) { }

  ngOnInit() {
    this.data.currentRuimte.subscribe(ruimte => this.ruimte = ruimte);
  }



}
