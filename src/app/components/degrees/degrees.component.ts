import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss'],
})
export class DegreesComponent {
  @Input() temp: any;
}
