import { Component } from '@angular/core';
import { Personne } from './classes/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  personne: Personne;
  notes: number[] = [10, 15, 8, 12, 20, 17, 14, 9, 13, 16];
  personnes: Array<Personne> = [
    new Personne(100, 'tounsi', 'Mohamed'),
    new Personne(101, 'tounsi2', 'Mohamed2'),
    new Personne(102, 'tounsi3', 'Mohamed3'),
    new Personne(103, 'tounsi4', 'Mohamed4')
  ];

  constructor() {
    // Créer une instance de la classe Personne
    this.personne = new Personne(1, 'Benna', 'Walid');
  }
}

