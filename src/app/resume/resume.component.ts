export interface Education {
  title: string;
  school: string;
  years: string;
}

export interface Experience {
  title: string;
  company: string;
  years: string;
  tasks: string[];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="title">RESUME</h1>

    <div class="grid-container">
      <div class="grid-item-1">
        <h1>Education</h1>
        <ul class="mobile">
          @for (degree of education; track degree) {
            <li class="list">
              <p>
                <strong>{{ degree.title }}</strong>
                <br> {{ degree.school }}
                <br> <em>{{ degree.years }}</em>
              </p>
            </li>
          }
        </ul>

        @for (degree of education; track degree) {
          <div class="column tab-desk">
            <p>
              <strong>{{ degree.title }}</strong>
              <br> {{ degree.school }}
              <br> <em>{{ degree.years }}</em>
            </p>
          </div>
        }
      </div>

      <div class="grid-item-2">
        <h1>Skills</h1>
        <ul class="mobile">
          @for (skill of skills; track skill) {
            <li>{{ skill }}</li>
          }
        </ul>

        <div class="column tab-desk">
          <ul>
            <li>{{ skills[0] }}</li>
            <li>{{ skills[1] }}</li>
            <li>{{ skills[2] }}</li>
            <li>{{ skills[3] }}</li>
          </ul>
        </div>

        <div class="column tab-desk">
          <ul>
            <li>{{ skills[4] }}</li>
            <li>{{ skills[5] }}</li>
            <li>{{ skills[6] }}</li>
            <li>{{ skills[7] }}</li>
          </ul>
        </div>

        <div class="column tab-desk">
          <ul>
            <li>{{ skills[8] }}</li>
            <li>{{ skills[9] }}</li>
            <li>{{ skills[10] }}</li>
          </ul>
        </div>
      </div>

      <div class="grid-item-1">
        <h1>Experience</h1>
        <ul class="mobile">
          @for (job of experience; track job) {
            <li class="list">
              <p>
                <strong>{{ job.title }}</strong>
                <br> {{ job.company }}
                <br> <em>{{ job.years }}</em>
              </p>
              <hr>
              <ul>
                @for (task of job.tasks; track task) {
                  <li>{{ task }}</li>
                }
              </ul>
            </li>
          }
        </ul>

        @for (job of experience; track job) {
          <div class="column tab-desk">
            <p>
              <strong>{{ job.title }}</strong>
              <br> {{ job.company }}
              <br> <em>{{ job.years }}</em>
            </p>
            <hr>
            <ul>
              @for (task of job.tasks; track task) {
                <li>{{ task }}</li>
              }
            </ul>
          </div>
        }
      </div>

      <div class="grid-item-2">
        <h1>Certifications</h1>
        <ul>
          @for (certification of certifications; track certification) {
            <li>{{ certification }}</li>
          }
        </ul>
      </div>

      <div class="grid-item-1">
        <h1>Export Resume</h1>
        <button class="export" (click)="exportResume()">Download PDF</button>
      </div>
    </div>
  `,
  styles: `
    .grid-container {
      text-align: center;
    }

    .grid-item-1 {
      padding: 50px 30px;
      background-color: #D5CAEB;
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .grid-item-2 {
      padding: 50px 30px;
      background-color: #FFF;
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    li {
      list-style-type: none;
    }

    li, p {
      font-size: 1.15em;
    }

    .list {
      padding: 5px;
    }

    .column {
      float: left;
      width: 33.33%;
      padding: 10px;
      box-sizing: border-box;
    }

    .grid-item-1::after, .grid-item-2::after {
      content: "";
      clear: both;
      display: table;
    }

    .title {
      text-align: center;
    }

    .export {
      border: .5px solid black;
      border-radius: 25px;
      padding: 10px 15px;
      font-family: "Open Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      cursor: pointer;
    }
  `
})
export class ResumeComponent {

  education: Education[];
  skills: string[];
  experience: Experience[];
  certifications: string[];

  constructor() {
    this.education = [
      {
        title: "HIGH SCHOOL",
        school: "Centro de Bachillerato Tecnologico " +
          "industrial y de servicios No. 37",
        years: "2012 - 2015"
      },
      {
        title: "BACHELOR'S DEGREE IN COMPUTER SYSTEMS ENGINEER",
        school: "Instituto Tecnologico Superior de Cajeme",
        years: "2015 - 2019"
      },
      {
        title: "BACHELOR OF SCIENCE IN WEB DEVELOPMENT",
        school: "Bellevue University",
        years: "2023 - present"
      }
    ];

    this.skills = [
      "- Problem resolution",
      "- Friendly, positive attitude",
      "- Advanced engineering knowledge",
      "- Teamwork",
      "- Flexible",
      "- Multitasking",
      "- Helpful communication",
      "- Goal-oriented and ambitious",
      "- Development of technical skills",
      "- Bilingual - English/Spanish",
      "- Knowledge of Java, Python, C++, JavaScript, " +
        "HTML, Angular, SQL, NoSQL, Kotlin, React, " +
        "Swift, NodeJS, Express and TypeScript."
    ];

    this.experience = [
      {
        title: "LEADERSHIP ASSOCIATE",
        company: "Macy's",
        years: "2021 - present",
        tasks: [
          "- Monitor team performance and communicate metrics.",
          "- Make decisions to achieve a goal.",
          "- Provide the support and advice needed to make an " +
            "impact with each colleague."
        ]
      },
      {
        title: "SEASONAL DEPARTMENT HOURLY SUPERVISOR",
        company: "Macy's",
        years: "Sep 2022 - Jan 2023, Sep 2023 - Dec 2023",
        tasks: [
          "- Coordinate the tasks that each colleague will carry out.",
          "- Responsible for ensuring that all employees fulfill their " +
            "responsibilities.",
          "- Manage conflicts and solve problems."
        ]
      },
      {
        title: "MOBILE DEVELOPER",
        company: "NSoluciones de Software",
        years: "2018 - 2020",
        tasks: [
          "- Used best practices to identify and fix bugs.",
          "- Develop a mobile CRM system.",
          "- Create detailed documentation on the operation of the application."
        ]
      }
    ];

    this.certifications = [
      "- Basics of HTML",
      "- Angular - The Complete Guide (2023 Edition)",
      "- Microsoft Office"
    ];
  }

  // Function that export my resume in pdf format
  exportResume() {
    let link = document.createElement("a");
    link.download = "DianaRG_Resume.pdf";
    link.href = "assets/resume.pdf";
    link.click();
  }

}
