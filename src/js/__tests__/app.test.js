import demo from '../app';

test('demo', () => {
  const value = 'hello';
  const result = demo(value);
  expect(result).toBe('hello');
});
