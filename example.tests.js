import assert from 'assert';
describe('Example', () => {
  console.log('In the test group');
  it('test', () => {
    console.log('In the test case');
    assert.fail();
  });
});