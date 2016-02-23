describe('Discogs', () => {
  let d;

  beforeEach(() => {
    d = new Discogs();
  });

  it("should be able to retrieve a release's Discogs' data", () => {
    const release = d.release(249504);
    expect(release.title).toBe('Never Gonna Give You Up');
  });

  it("should be able to retrieve a master release's Discogs' data", () => {
    const masterRelease = d.masterRelease(1000);
    expect(masterRelease.title).toBe('Stardiver');
  });

  it("should be able to retrieve an artist's Discogs' data", () => {
    const artist = d.artist(108713);
    expect(artist.name).toBe('Nickelback');
  });

  it("should be able to retrieve a label's Discogs' data", () => {
    const label = d.label(1);
    expect(label.name).toBe('Planet E');
  });

  it('should be able to search for releases', () => {
    const search = d.search('illmatic - nas');
    expect(search.results.length).toBeGreaterThan(0);
  });
});
