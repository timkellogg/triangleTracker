describe('triangleTracker', function() {

  it('returns false for invalid triangles', function() {
    expect(triangleTracker(100, 10, 1)).to.equal("false");
  });

  it('returns \'equilateral\' if all sides equal', function() {
    expect(triangleTracker(1, 1, 1)).to.equal("equilateral");
  });

  it('returns isosceles if two sides are equal', function() {
    expect(triangleTracker(2,2,3)).to.equal("isosceles");
  });

  it('returns scalene if no sides are equal', function() {
    expect(triangleTracker(6,2,5)).to.equal("scalene");
  });

});

// istriangle
  // sum of 2 sides have to be greater than 3rd side

// equilat

// isco

// scalene
