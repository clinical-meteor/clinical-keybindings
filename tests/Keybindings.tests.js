
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