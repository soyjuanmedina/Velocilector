import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtensionService } from './services/extension.service';
import { CommonModule } from '@angular/common';

@Component( {
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
} )
export class AppComponent {
  title = 'Velocilector';

  constructor ( public extensionService: ExtensionService ) {

    if ( !this.extensionService.isRunningAsExtension() ) {
      document.body.className = document.body.className.replace( "extensionSize", "" );
    }

  }
}
