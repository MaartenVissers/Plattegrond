import {Component, Input, OnInit} from '@angular/core';
import {ComponentService} from '../../services/component.service';



@Component({
  selector: 'app-ruimtedetails',
  templateUrl: './ruimtedetails.component.html',
  styleUrls: ['./ruimtedetails.component.css']
})
export class RuimtedetailsComponent implements OnInit {
  ruimte: string;

  ngOnInit(): void {
    this.componentService.currentRuimte.subscribe(ruimte => this.ruimte = ruimte);
  }

  constructor(private componentService: ComponentService){

  }

  show(){
    console.log(this.ruimte);
  }



}
