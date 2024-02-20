import { defineMock } from 'dumi';

export default defineMock({
  '/api/dict': {
    success: true,
    data: [
      { dataValue: 'foo', dataName: 'Foo' },
      { dataValue: 'bar', dataName: 'Bar' },
    ],
  },
});
