import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DataService} from '../../services/data.service';
import {Ruimte} from '../../model/ruimte';
import {ComponentService} from '../../services/component.service';

@Component({
  selector: 'app-tweedeverdieping',
  templateUrl: './tweedeverdieping.component.html',
  styleUrls: ['./tweedeverdieping.component.css']
})
export class TweedeverdiepingComponent implements OnInit {
  ruimtesSet: Ruimte[];

  @Output() toggleClick = new EventEmitter();

  constructor(private dataService: DataService, private componentService: ComponentService) { }

  ngOnInit() {

  }

  onClick(ruimte) {
    this.componentService.changeRuimte(ruimte);
  }

}
