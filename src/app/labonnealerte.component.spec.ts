import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { LabonnealerteAppComponent } from '../app/labonnealerte.component';

beforeEachProviders(() => [LabonnealerteAppComponent]);

describe('App: Labonnealerte', () => {
  it('should create the app',
      inject([LabonnealerteAppComponent], (app: LabonnealerteAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'labonnealerte works!\'',
      inject([LabonnealerteAppComponent], (app: LabonnealerteAppComponent) => {
    expect(app.title).toEqual('labonnealerte works!');
  }));
});
