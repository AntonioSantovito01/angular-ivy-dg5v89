import { Component, OnInit } from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../sevices/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  constructor(private beerService:BeerService) { }
  beers: Beer[] = this.beerService.getBeerList();

  ngOnInit() {
  }

}