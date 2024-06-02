import { Component } from '@angular/core';
import { ReadService } from '../../services/read.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component( {
  selector: 'app-read-config',
  standalone: true,
  imports: [FormsModule,
    ReactiveFormsModule],
  templateUrl: './read-config.component.html',
  styleUrl: './read-config.component.scss'
} )
export class ReadConfigComponent {

  constructor ( public readService: ReadService ) {

  }

}
