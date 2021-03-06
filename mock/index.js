import Mock from 'mockjs';
import user from './modules/user';
import search from './modules/search';
import message from './modules/message';
import analysis from './modules/analysis';

const apis = [
  ...user,
  ...search,
  ...message,
  ...analysis
];

const responseContextHandle = response => {
  return ctx => {
    const Random = Mock.Random;
    const IDPool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    Random.extend({
      id: function( n = 12 ) {
        return Random.string(IDPool, n);
      }
    });
    ctx.Random = Random;
    ctx.IDPool = IDPool;
    ctx.body = JSON.parse(ctx.body);
    return Mock.mock( response(ctx) )
  }
}

apis.forEach(api => {
  Mock.mock( api.url, api.type, responseContextHandle(api.response) );
});