import { Component } from '@angular/core';

import { DUMMY_LIST } from '../dummy-list';

const randomIndex = Math.floor(Math.random() * DUMMY_LIST.length);

@Component({
  selector: 'app-didit-list',
  standalone: true,
  imports: [],
  templateUrl: './didit-list.component.html',
  styleUrl: './didit-list.component.css'
})
export class DiditListComponent {
  selectedList = DUMMY_LIST[randomIndex];
}
