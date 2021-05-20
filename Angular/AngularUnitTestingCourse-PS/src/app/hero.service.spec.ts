import { TestBed, inject } from '@angular/core/testing';
import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;
  let service: HeroService;

  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);

    TestBed.configureTestingModule({
      // mock HttpClient from the @angular/common/http/testing module
      imports: [ HttpClientTestingModule ],
      providers: [
        HeroService,
        { provide: MessageService, useValue: mockMessageService }
      ]
    });

    // This is a special method on the TestBed that basically accesses the dependency injection registry. 
    // So if I give it a type, in this case, HttpTestingController, 
    // it's going to look inside of the dependency injection registry for this TestBed's module, 
    //  and find the service that correlates to that type and give us a handle to it.
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(HeroService);
  });

  describe('getHero', () => {
    /* it('should call get with the correct URL',
       inject([HeroService, HttpTestingController], (service: HeroService, controller: HttpTestingController) => {
        service.getHero(4).subscribe();
        // verify below protects agains this scenario where multiple calls are occurring, but only one is expected to be made
        // service.getHero(3).subscribe();

        const request = controller.expectOne('api/heroes/4');
        request.flush({ id: 4, name: 'Super Dude', strength: 100 });
        controller.verify();
      }) 
    ); */
    it('should call get with the correct URL', () => {
        // the mock HttpClient that it should expect a call to a certain URL. 
        // In this case, if we pass in a 4 the URL is going to be whatever the heroesUrl is, 
        // then a slash, then the id(api/heroes/4).

        service.getHero(4).subscribe();
        // verify below protects agains this scenario where multiple calls are occurring, but only one is expected to be made
        // service.getHero(3).subscribe();

        // So we could tell the HTTP mock client using the httpTestingController, 
        // and this is the instance variable here, that we are expecting a call. 
        // And we call expectOne, and then we give it the URL, which is api/heroes/4, 
        // and that will create a request. Then we can tell the mock HttpClient that Angular has created for us what data we want to return when this call comes in. 
        // Using the request object we can say req. flush, and then we set whatever data we want to come back.
        const request = httpTestingController.expectOne('api/heroes/4');
        request.flush({ id: 4, name: 'Super Dude', strength: 100 });

        // a special method on the controller, which is verify, 
        // which verifies that we only get exactly what we expected. so if we get extra request then it fails
        httpTestingController.verify();
    });
  });
});
