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
  constructor(private beerSrv: BeerService) {}
  beers: Beer[] = this.beerSrv.getBeerList();

  onDelete(beer: Beer) {
    this.beerSrv.deleteBeer(beer);
  }

  ngOnInit() {}
}
