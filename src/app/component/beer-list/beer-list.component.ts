import { Component, OnInit } from '@angular/core';
import { beersData } from '../../data/beer-list';
import { Beer } from '../../model/model';
import { BeerService } from '../../sevices/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
})
export class BeerListComponent implements OnInit {
  //beers : Beer[]= beersData;

  constructor(private beerService: BeerService) {}

  beers: Beer[] = this.beerService.getBeerList();

  ngOnInit() {}
}
