import { Component } from '@angular/core';

/**
 * Generated class for the SectionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'section',
  templateUrl: 'section.html'
})
export class SectionComponent {

  text: string;

  constructor() {
    console.log('Hello SectionComponent Component');
    this.text = 'Hello World';
  }

}
