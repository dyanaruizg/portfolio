export interface Project {
  imgPath: string;
  imgAlt: string;
  link: string;
  repo: string;
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
    <h1 class="title">MY PROJECTS</h1>

    <div class="projects-container">
    <ul class="mobile">
      @for (project of projects; track project) {
          <li>
            <img src="{{ project.imgPath }}" alt="{{ project.imgAlt }}">
            <a class="title-link" href="{{ project.link }}">
              <button class="project-title">{{ project.title }}</button>
            </a>
            <p> {{ project.description }} </p>
            <p><strong>Technologies used: </strong>{{ project.technologies }}</p>
            <p> {{ project.learning }} </p>
            <hr>
            <a class="links" href="{{ project.link }}">Link</a> |
            <a class="links" href="{{ project.repo }}">GitHub Repo</a>
          </li>
        }
      </ul>

      @for (project of projects; track project) {
        <div class="project tab-desk">
          <img src="{{ project.imgPath }}" alt="{{ project.imgAlt }}">
          <a class="title-link" href="{{ project.link }}">
            <button class="project-title">{{ project.title }}</button>
          </a>
          <p> {{ project.description }} </p>
          <p><strong>Technologies used: </strong>{{ project.technologies }}</p>
          <p> {{ project.learning }} </p>
          <hr>
          <a href="{{ project.link }}">Link</a> |
          <a href="{{ project.repo }}">GitHub Repo</a>
        </div>
      }
    </div>
  `,
  styles: `
    .projects-container {
      padding: 15px;
      align-content: center;
    }

    img {
      height: 350px;
      width: 350px;
      border: .5px solid black;
    }

    h1 {
      text-align: center;
    }

    li {
      background: linear-gradient(180deg, #FFF 40%, #D5CAEB 40%);
      text-align: center;
      padding: 10px;
      list-style-type: none;
    }

    .project {
      background: linear-gradient(180deg, #FFF 40%, #D5CAEB 40%);
      float: left;
      width: 33.33%;
      padding: 20px;
      box-sizing: border-box;
      text-align: center;
    }

    .project-title {
      border: .5px solid black;
      border-radius: 25px;
      padding: 10px 15px;
      font-family: "Open Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      margin: 10px;
      font-size: 1.3em;
      cursor: pointer;
    }

    .title-link {
      display: flex;
      justify-content: center;
    }

    a {
      text-decoration: none;
      align-items: center;
    }

    p {
      font-size: 1.1em;
      margin: 10px;
      text-align: justify;
      text-justify: inter-word;
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
        repo: "https://github.com/dyanaruizg/rpg-character-builder",
        title: "RPG Character Builder",
        description: "RPG Character Builder is designed to cater to gamers and RPG enthusiasts.",
        technologies: "Angular, TypeScript, HTML and CSS",
        learning: "In this project, I learned how to use the Angular framework, write unit " +
          "tests, implement template-driven forms, reactive forms, and dynamic forms, " +
          "integration authentication, component communication, about HTTP requests, and how " +
          "to deploy an Angular application."
      },
      {
        imgPath: "assets/virtual-taco-stand.png",
        imgAlt: "virtual-taco-stand homepage",
        link: "https://dyanaruizg.github.io/virtual-taco-stand/",
        repo: "https://github.com/dyanaruizg/virtual-taco-stand",
        title: "Virtual Taco Stand",
        description: "Virtual Taco Stand is designed to order tacos and view the daily specials.",
        technologies: "Angular, TypeScript, HTML and CSS",
        learning: "In this project, I learned how to build a basic SPA layout using an Angular " +
          "component, setup and configuration of basic routing, error handling techniques, " +
          "the role of form validation, use of guards for route protection, use of Input/Output " +
          "properties and Angular modules."
      },
      {
        imgPath: "assets/bioSite.png",
        imgAlt: "bioSite homepage",
        link: "https://dyanaruizg.github.io/bioSite/",
        repo: "https://github.com/dyanaruizg/bioSite",
        title: "BioSite",
        description: "BioSite is designed to tell my brother's story, and learn about his hobbies.",
        technologies: "HTML and CSS",
        learning: "In this project, I learned the basics of HTML, including basic HTML tags, " +
          "attributes, and elements, how to make responsive pages, import images and videos, " +
          "including links, tables, and lists, use symbol entities, as well as using CSS to " +
          "design, style and layout a web page, including colors, fonts, sizes, and padding."
      },
      {
        imgPath: "assets/in-n-out-books.png",
        imgAlt: "in-n-out-books homepage",
        link: "https://github.com/dyanaruizg/in-n-out-books",
        repo: "https://github.com/dyanaruizg/in-n-out-books",
        title: "In-N-Out Books",
        description: "In-N-Out Books is designed to show you trending books and find a variety of books to read.",
        technologies: "NodeJS, Express, HTML and CSS",
        learning: "In this project, I learned the core components of an Express application, how to build " +
          "a web server, develop a JSON web service, the role of CRUD operations, implementation " +
          "of authentication and authorization in a web application, the process and importance " +
          "of deploying a web application, unit tests for APIs, and use of TDD in ensuring robust CRUD operations."
      },
      {
        imgPath: "assets/cookbook.png",
        imgAlt: "in-n-out-books homepage",
        link: "https://github.com/dyanaruizg/cookbook",
        repo: "https://github.com/dyanaruizg/cookbook",
        title: "Cookbook App",
        description: "Cookbook App is designed to discover and share amazing recipes.",
        technologies: "NodeJS, Express, HTML and CSS",
        learning: "In this project, I learned the Express ecosystem, server setup, request and response " +
          "handling, routing, findAll and findById endpoints, process for data creation using the POST " +
          "endpoint, data removal, process of data updating using the PUT endpoint,  importance of password " +
          "reset functionality, and post-deployment monitoring and maintenance."
      },
      {
        imgPath: "assets/rescue.png",
        imgAlt: "Wild Rescue homepage",
        link: "https://github.com/dyanaruizg/rescue",
        repo: "https://github.com/dyanaruizg/rescue",
        title: "Wild Rescues",
        description: "Wild Rescues is designed to rescue, rehabilitate, and release wildlife.",
        technologies: "HTML and CSS",
        learning: "In this project, I learned how to create web pages in HTML5, one of the features that " +
          "I implemented semantic tags, media tags as <video>, and other tags such as <figure> and " +
          "<figcaption>. Futhermore, I learned about User Interface (UI) design, design patterns, " +
          "User Experience (UX) design, web semantics, integration of functional " +
          "paradigms and programming."
      }
    ];
  }
}
