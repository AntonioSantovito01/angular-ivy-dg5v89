import { Component, Input, OnInit } from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../sevices/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  @Input() beer: Beer;

  constructor(private beersrv: BeerService) {}

  beers: Beer[] = this.beersrv.getBeerList();

  ngOnInit() {}
}
