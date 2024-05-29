import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component( {
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  imports: [RouterModule, CommonModule],
  standalone: true,
} )
export class NavbarComponent implements OnInit {

  showed: boolean = false;

  constructor ( public router: Router ) { }

  ngOnInit (): void {
  }

}
