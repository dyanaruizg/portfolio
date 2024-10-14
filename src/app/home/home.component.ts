import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="home-container">
      <div class="main-container">
        <div class="left">
          <div id="light-purple"></div>
          <div id="purple">
            <img src="assets/my-photo.jpg" alt="My Photo" class="my-photo">
          </div>
        </div>

        <div class="right">
          <h1>Hi!<br>I'm Diana Ruiz Garcia</h1>
          <h3>Brief introduction to myself.</h3>
          <p>
            I'm a computer systems engineer specializing in software. My focus
            is building and managing websites and web applications. I am a
            very resourceful and ambitious person at the same time. I find
            solutions, am creative, and solve problems without needing help
            from colleagues or bosses. I know when to ask for help and take
            my time when needed. But when it is possible to take care of
            something without taking up other people's time, I do it and
            consider myself very good at it.
          </p>
        </div>
      </div>

      <div class="center">
        <div class="row">
          <h2>Bucket list of things I want to do</h2>
        </div>

        <div class="row">
          <ul class="list mobile">
          @for (item of bucketList; track item) {
            <li>{{ item }}</li>
          }
          </ul>

          <ul class="column tab-desk">
            <li>{{ bucketList[0] }}</li>
            <li>{{ bucketList[1] }}</li>
            <li>{{ bucketList[2] }}</li>
            <li>{{ bucketList[3] }}</li>
            <li>{{ bucketList[4] }}</li>
            <li>{{ bucketList[5] }}</li>
            <li>{{ bucketList[6] }}</li>
            <li>{{ bucketList[7] }}</li>
          </ul>
          <ul class="column tab-desk">
            <li>{{ bucketList[8] }}</li>
            <li>{{ bucketList[9] }}</li>
            <li>{{ bucketList[10] }}</li>
            <li>{{ bucketList[11] }}</li>
            <li>{{ bucketList[12] }}</li>
            <li>{{ bucketList[13] }}</li>
            <li>{{ bucketList[14] }}</li>
            <li>{{ bucketList[15] }}</li>
          </ul>
          <ul class="column tab-desk">
            <li>{{ bucketList[16] }}</li>
            <li>{{ bucketList[17] }}</li>
            <li>{{ bucketList[18] }}</li>
            <li>{{ bucketList[19] }}</li>
            <li>{{ bucketList[20] }}</li>
            <li>{{ bucketList[21] }}</li>
            <li>{{ bucketList[22] }}</li>
            <li>{{ bucketList[23] }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: `
    h2 {
      color: #593392;
    }

    p {
      font-size: 1.15em;
      text-align: justify;
      text-justify: inter-word;
    }

    .center {
      justify-content: space-between;
      text-align: center;
      height: 100%;
      background-image: url("https://dyanaruizg.github.io/portfolio/assets/cloudy-purple.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }

    .center li {
      list-style-type: none;
    }

    .column {
      float: left;
      width: 33.33%;
      padding: 20px;
      font-size: 20px;
    }

    .row {
      padding: 0 20px;
    }

    .row:after {
      content: "";
      display: table;
      clear: both;
    }
  `
})
export class HomeComponent {

  bucketList: string[];

  constructor() {
    this.bucketList = [
      "- Tour all of Europe with my mom.",
      "- Discover my own country.",
      "- Travel on a cruise.",
      "- Plant my garden.",
      "- Visit at least one city in each state of Mexico." ,
      "- Live at least three months abroad." ,
      "- Travel in First Class.",
      "- Have a dog and cat sanctuary.",
      "- Learn and master three languages (Spanish, English, and Korean).",
      "- See the seven wonders of the world.",
      "- Create my own business.",
      "- Travel around the world.",
      "- Attend a soccer World Cup.",
      "- Meet all my favorite artists.",
      "- Learn to play the piano and drums.",
      "- Travel by train.",
      "- Make a difference in the world.",
      "- Work on something I like.",
      "- Study for a master's degree.",
      "- Go skydiving.",
      "- Bathe in a waterfall.",
      "- See the northern lights.",
      "- Go camping wildly.",
      "- Have a collection of magnets from all the cities I've been to."
    ];
  }
}
