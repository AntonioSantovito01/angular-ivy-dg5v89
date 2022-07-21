import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Beer } from '../../model/model';
import { BeerService } from '../../sevices/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})
export class BeerComponent implements OnInit {
  @Input() beer: Beer;
  beerList: Observable<Beer[]>;

  constructor(public beerService: BeerService) {
    this.beerList = beerService.getBeerList();
  }

  onDelete(beer: Beer) {
    this.beerService.deleteBeer(beer);
  }

  ngOnInit() {}
}
