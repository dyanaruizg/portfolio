import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="page-not-found-container">
      <img src="assets/404.png" alt="Error 404">
      <h3><strong>PAGE NOT FOUND</strong></h3>
      <h1>WE COULDN'T FIND THE PAGE YOU WERE LOOKING FOR.</h1>
      <a routerLink="/home"><button>GO HOMEPAGE</button></a>
    </div>
  `,
  styles: `
    .page-not-found-container {
      text-align: center;
    }

    img {
      width: 30%;
      height: 30%;
      padding-top: 50px;
    }

    h3 {
      font-size: 60px;
      margin: 0;
    }

    h1 {
      font-size: 25px;
      margin: 0;
    }

    button {
      margin: 50px;
      border: .5px solid black;
      border-radius: 25px;
      padding: 10px 15px;
      font-family: "Open Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      font-size: medium;
      color: white;
      cursor: pointer;
      background-color: #611ee6;
    }
  `
})
export class PageNotFoundComponent {

}
