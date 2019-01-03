import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ComponentService} from '../../services/component.service';

@Component({
  selector: 'app-ruimte',
  templateUrl: './ruimte.component.html',
  styleUrls: ['./ruimte.component.css']
})
export class RuimteComponent implements OnInit {
  selectedOption: number;
  @Input() ruimte;

  isCollapsed : boolean = true;

  constructor(private componentService: ComponentService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {

  }

  reserveer() {
    let eindDatum = new Date();
    eindDatum.setHours(eindDatum.getHours() + Number(this.selectedOption));
    this.ruimte.gereserveerd = true;
    this.ruimte.eindDatumReservatie = eindDatum;
    console.log(eindDatum.toLocaleString());

  }

  onClick() {
    this.isCollapsed = !this.isCollapsed;
  }

  infoClick(){
    this.componentService.changeRuimte(this.ruimte);
  }
}
