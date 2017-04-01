import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { assert } from 'meteor/practicalmeteor:chai';
import { chai } from 'meteor/practicalmeteor:chai';
import { expect } from 'meteor/practicalmeteor:chai';

describe('clinical:keybindings', function () {
  beforeEach(function () {
    //console.log('beforeEach');
  });
  afterEach(function () {
    //console.log('afterEach');
  });
  it('Searchbars show/hide keybing', function () {
    expect(Session.get('showSearchbar')).to.exist;
  });
  it('Navbar show/hide keybing', function () {
    expect(Session.get('showNavbars')).to.exist;
  });
});