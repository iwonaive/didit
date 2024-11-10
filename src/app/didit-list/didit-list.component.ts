import { Component, computed, signal } from '@angular/core';

import { DUMMY_LIST } from '../dummy-list';

const randomIndex = Math.floor(Math.random() * DUMMY_LIST.length);

@Component({
  selector: 'app-didit-list',
  standalone: true,
  imports: [],
  templateUrl: './didit-list.component.html',
  styleUrl: './didit-list.component.css',
})
export class DiditListComponent {
  selectedList = signal(DUMMY_LIST[randomIndex]);

  imagePath = computed(() => 'assets/photos/' + this.selectedList().avatar);

  onSelectedList() {
    const randomIndex = Math.floor(Math.random() * DUMMY_LIST.length);
    this.selectedList.set(DUMMY_LIST[randomIndex]);
  }
}

// totalnie nie czaje skąd ten błąd i czemu nie mogę sobie poradzić z obrazkiem
