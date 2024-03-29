import { defineMock } from 'dumi';
import mockjs from 'mockjs';

export default defineMock({
  /**
   * 包含分页信息的列表
   *
   *
   * */
  'POST /api/list': (_, res) => {
    res.send(
      mockjs.mock({
        message: '成功',
        data: {
          'list|10': [
            {
              'id|+1': 1,
              name: '@cname',
              'age|18-60': 18,
              address: '@city',
              email: '@email',
              date: '@datetime',
              logo: '@image',
              color: '@color',
            },
          ],
          total: 100,
        },
      }),
    );
  },
});
