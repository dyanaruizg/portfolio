import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { of } from 'rxjs';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent }
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
        PageNotFoundComponent,
        RouterModule.forRoot(routes), // Include RouterModule to handle routing
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotFoundComponent);
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
   * Unit test that checks if there is a correct route for the Home Component.
   */
  it('should have correct route for Home Component', () => {
    const router = TestBed.inject(Router);
    const route = router.config.find(r => r.path === 'home');
    expect(route).toBeDefined(); // Check if the route is defined

    if (route) {
      // Check if the component is HomeComponent
      expect(route.component).toBe(HomeComponent);
    }
  });
});
