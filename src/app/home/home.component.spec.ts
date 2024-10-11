import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
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
   * Unit test that checks if there is a correct display of a bucket list
   * of things I want to do.
   */
  it('should correctly display a bucket list of things I want to do', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const bucketList = compiled.querySelectorAll('li'); // Get all the things I want to do
    // Check if the number of bucketList is equal to the number of bucketList in the bucketList array
    expect(bucketList.length).toEqual(component.bucketList.length);
  });
});
