import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-title',
  templateUrl: './item-title.component.html',
  styleUrls: ['./item-title.component.css']
})
export class ItemTitleComponent implements OnInit {
  @Input() text:string;
  constructor() { }

  ngOnInit(): void {
  }

}
