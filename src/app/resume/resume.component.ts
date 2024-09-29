import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  exportResume() {
    let link = document.createElement("a");
    link.download = "DianaRG_Resume.pdf";
    link.href = "assets/resume.pdf";
    link.click();
  }

}
