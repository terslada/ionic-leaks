import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainer2Component } from './explore-container2.component';

describe('ExploreContainerComponent', () => {
  let component: ExploreContainer2Component;
  let fixture: ComponentFixture<ExploreContainer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreContainer2Component],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreContainer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
