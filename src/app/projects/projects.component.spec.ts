import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Unit test that is created by default when the component is generated.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Unit test that checks if there is a correct display of a list of projects.
   */
  it('should correctly display a list of projects', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const projects = compiled.querySelectorAll('.project'); // Get all the projects
    // Check if the number of projects is equal to the number of projects in the projects array
    expect(projects.length).toEqual(component.projects.length);
  });
});
