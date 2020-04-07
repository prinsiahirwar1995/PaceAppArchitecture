import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [
        RouterTestingModule
      ],
=======
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
<<<<<<< HEAD
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PaceLayerApplication'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('PaceLayerApplication');
=======
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'PaceLayerUI'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PaceLayerUI');
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
<<<<<<< HEAD
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('PaceLayerApplication app is running!');
=======
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('PaceLayerUI app is running!');
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
  });
});
