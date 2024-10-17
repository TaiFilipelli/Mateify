import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bentogrid',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './bentogrid.component.html',
  styleUrl: './bentogrid.component.css'
})
export class BentogridComponent {
  loader = faCircleNotch;

}
