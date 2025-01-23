import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name: string = "Gabriel Mendes"
  viewTitle: boolean = false

  public handleClick() {
    console.log("clique")
    this.viewTitle = !this.viewTitle
  }
}