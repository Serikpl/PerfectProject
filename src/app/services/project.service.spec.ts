import { TestBed, inject } from '@angular/core/testing';

import { ProjectService } from './project-service.service';

describe('ProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService]
    });
  });

  it('should be created', inject([ProjectService], (service: ProjectServiceService) => {
    expect(service).toBeTruthy();
  }));
});
