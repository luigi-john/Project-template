'use strict';

describe('Service: schedule', function () {

  // load the service's module
  beforeEach(module('project1App'));

  // instantiate service
  var schedule;
  beforeEach(inject(function (_schedule_) {
    schedule = _schedule_;
  }));

  it('should do something', function () {
    expect(!!schedule).toBe(true);
  });

});
