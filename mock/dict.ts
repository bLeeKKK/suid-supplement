import { defineMock } from 'dumi';

export default defineMock({
  '/api/dict': {
    success: true,
    data: [
      { dataValue: 1, dataName: 'foo' },
      { dataValue: 2, dataName: 'bar' },
    ],
  },
});
