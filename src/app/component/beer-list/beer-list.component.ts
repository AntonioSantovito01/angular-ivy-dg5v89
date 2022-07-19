import { Component, OnInit } from '@angular/core';
import { beersData } from '../../data/beer-list';
import { Beer } from '../../model/model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

beers:Beer[] = beersData;

  constructor() { }

  ngOnInit() {
  }

}