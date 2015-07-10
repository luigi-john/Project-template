'use strict';

describe('Directive: materialSelect', function () {

  // load the directive's module
  beforeEach(module('project1App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<material-select></material-select>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the materialSelect directive');
  }));
});
