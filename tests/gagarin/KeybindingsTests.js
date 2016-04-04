describe('clinical:keybindings', function () {
  var server = meteor();
  var client = browser(server);

  it('KeybindingsModal exists', function () {
    return client.execute(function () {
      expect(Template.keybindingsModal).to.exist;
    });
  });

  it('Searchbars show/hide keybing', function () {
    return client.execute(function () {
      expect(Session.get('showSearchbar')).to.exist;
    });
  });
  it('Navbar show/hide keybing', function () {
    return client.execute(function () {
      expect(Session.get('showNavbars')).to.exist;
    });
  });
});
