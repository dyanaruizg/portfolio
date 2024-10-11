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
        <div class="column">
          <p>
            <strong>HIGH SCHOOL</strong>
            <br> Centro de Bachillerato Tecnologico
            <br> industrial y de servicios No. 37
            <br> <em>2012 - 2015</em>
          </p>
        </div>

        <div class="column">
          <p>
            <strong>
              BACHELOR'S DEGREE IN
              <br> COMPUTER SYSTEMS ENGINEER
            </strong>
            <br> Instituto Tecnologico Superior de Cajeme
            <br> <em>2015 - 2019</em>
          </p>
        </div>

        <div class="column">
          <p>
            <strong>BACHELOR OF SCIENCE IN WEB DEVELOPMENT</strong>
            <br> Bellevue University
            <br> <em>2023 - present</em>
          </p>
        </div>
      </div>

      <div class="grid-item-2">
        <h1>Skills</h1>
        <div class="column">
          <ul>
            <li>- Problem resolution</li>
            <li>- Friendly, positive attitude</li>
            <li>- Advanced engineering knowledge</li>
            <li>- Teamwork</li>
          </ul>
        </div>

        <div class="column">
          <ul>
            <li>- Flexible</li>
            <li>- Multitasking</li>
            <li>- Helpful communication</li>
            <li>- Goal-oriented and ambitious</li>
          </ul>
        </div>

        <div class="column">
          <ul>
            <li>- Development of technical skills</li>
            <li>- Bilingual - English/Spanish</li>
            <li>- Knowledge of Java, Python, C++, JavaScript,
              HTML, Angular, SQL, NoSQL, Kotlin, React,
              Swift, NodeJS, Express and TypeScript.</li>
          </ul>
        </div>
      </div>

      <div class="grid-item-1">
        <h1>Experience</h1>
        <div class="column">
          <p>
            <strong>LEADERSHIP ASSOCIATE</strong>
            <br> Macy's
            <br> <em>2021 - present</em>
          </p>
          <hr>
          <ul>
            <li>- Monitor team performance and communicate metrics.</li>
            <li>- Make decisions to achieve a goal.</li>
            <li>- Provide the support and advice needed to make an impact with
              each colleague.</li>
          </ul>
        </div>
        <div class="column">
          <p>
            <strong>SEASONAL DEPARTMENT HOURLY SUPERVISOR</strong>
            <br> Macy's
            <br> <em>Sep 2022 - Jan 2023, Sep 2023 - Dec 2023</em>
          </p>
          <hr>
          <ul>
            <li>- Coordinate the tasks that each colleague will carry out.</li>
            <li>- Responsible for ensuring that all employees fulfill their
              responsibilities.</li>
            <li>- Manage conflicts and solve problems.</li>
          </ul>
        </div>
        <div class="column">
          <p>
            <strong>MOBILE DEVELOPER</strong>
            <br> NSoluciones de Software
            <br> <em>2018 - 2020</em>
          </p>
          <hr>
          <ul>
            <li>- Used best practices to identify and fix bugs.</li>
            <li>- Develop a mobile CRM system.</li>
            <li>- Create detailed documentation on the operation of the application.</li>
          </ul>
        </div>
      </div>

      <div class="grid-item-2">
        <h1>Certifications</h1>
        <ul>
          <li>- Basics of HTML</li>
          <li>- Angular - The Complete Guide (2023 Edition)</li>
          <li>- Microsoft Office</li>
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
      padding: 0 50px 50px 50px;
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
      font-size: 30px;
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

  // Function that export my resume in pdf format
  exportResume() {
    let link = document.createElement("a");
    link.download = "DianaRG_Resume.pdf";
    link.href = "assets/resume.pdf";
    link.click();
  }

}
