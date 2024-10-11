export interface Project {
  imgPath: string;
  imgAlt: string;
  link: string;
  title: string;
  description: string;
  technologies: string;
  learning: string;
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <h1>MY PROJECTS</h1>

    <div class="projects-container">
      @for (project of projects; track project) {
        <div class="project">
          <img src="{{ project.imgPath }}" alt="{{ project.imgAlt }}">
          <a href="{{ project.link }}">
            <button class="title">{{ project.title }}</button>
          </a>
          <p> {{ project.description }} </p>
          <p><strong>Technologies used: </strong>{{ project.technologies }}</p>
          <p> {{ project.learning }} </p>
        </div>
      }
    </div>
  `,
  styles: `
    .projects-container {
      background: linear-gradient(180deg, #FFF 40%, #D5CAEB 40%);
      padding: 15px;
      align-content: center;
    }

    img {
      height: 350px;
      width: 350px;
      border: .5px solid black;
    }

    h1 {
      font-size: 30px;
      text-align: center;
    }

    .project {
      float: left;
      width: 33.33%;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
    }

    .title {
      border: .5px solid black;
      border-radius: 25px;
      padding: 10px 15px;
      font-family: "Open Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      margin-top: 10px;
      cursor: pointer;
    }
  `
})
export class ProjectsComponent {

  projects: Project[];

  constructor() {
    this.projects = [
      {
        imgPath: "assets/rpg-character-builder.png",
        imgAlt: "RPG-character-builder homepage",
        link: "https://dyanaruizg.github.io/rpg-character-builder/",
        title: "RPG Character Builder",
        description: "RPG Character Builder is designed to cater to gamers and RPG enthusiasts.",
        technologies: "Angular, TypeScript, HTML and CSS",
        learning: "In this project, I learned how to use the Angular framework, write unit " +
          "tests, implement template-driven forms, reactive forms, and dynamic forms, " +
          "integration authentication, component communication, about HTTP requests, and how " +
          "to deploy an Angular application."
      },
      {
        imgPath: "assets/bioSite.png",
        imgAlt: "bioSite homepage",
        link: "https://dyanaruizg.github.io/bioSite/",
        title: "BioSite",
        description: "BioSite is designed to tell my brother's story, and learn about his hobbies.",
        technologies: "HTML and CSS",
        learning: "In this project, I learned the basics of HTML, including basic HTML tags, " +
          "attributes, and elements, how to make responsive pages, import images and videos, " +
          "including links, tables, and lists, use symbol entities, as well as using CSS to " +
          "design, style and layout a web page, including colors, fonts, sizes, padding, " +
          "margin, and borders."
      },
      {
        imgPath: "assets/in-n-out-books.png",
        imgAlt: "in-n-out-books homepage",
        link: "https://github.com/dyanaruizg/in-n-out-books",
        title: "In-N-Out Books",
        description: "In-N-Out Books is designed to show you trending books and find a variety of books to read.",
        technologies: "NodeJS, Express, HTML and CSS",
        learning: "In this project, I learned the core components of an Express application, how to build " +
          "a web server, develop a JSON web service,  the role of CRUD operations, implementation " +
          "of authentication and authorization in a web application, and the process and importance " +
          "of deploying a web application."
      }
    ];
  }
}
