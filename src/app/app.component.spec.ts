import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async () => {
    const routes: Routes = [
      { path: 'projects', component: ProjectsComponent }
    ]

    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: () => 'staticValue',
        },
      },
      queryParams: of({}),
    };

    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterModule.forRoot(routes), // Include RouterModule to handle routing
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();
  });

  /**
   * Unit test that is created by default when the component is generated.
   */
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * Unit test that checks if there is a correct route for the Project Component.
   */
  it('should have correct route for Projects Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'projects');
    expect(route).toBeDefined(); // Check if the route is defined

    if (route) {
      // Check if the component is ProjectsComponent
      expect(route.component).toBe(ProjectsComponent);
    }
  });
});
