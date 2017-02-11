const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/assets', express.static('public'));

const posts = [{
  id: 1,
  image: 'https://scontent-icn1-1.cdninstagram.com/t51.2885-15/e35/16465558_382590272097549_3541468678950223872_n.jpg?ig_cache_key=MTQ0NzU0NjUzOTExMTQwMjQxMQ%3D%3D.2',
  text: 'ㅋㅋㅋㅋㅋ쓸데없이 예쁘게 찍기😂kkkkkkkk instagram~~~~????\n' +
      '.\n' +
      '.\n' +
      '.\n' +
      '.\n' +
      '#instagram #놀리기 #잘찍었지',
  createdAt: '2017-02-11T03:27:42.000Z',
  author: {
    serviceId: 'jeonghwan',
    profileImage: 'https://scontent-icn1-1.cdninstagram.com/t51.2885-19/s150x150/15625475_1649716258655204_4098158640228204544_a.jpg'
  },
  likes: ['jeonghwan', 'chris', 'alice'],
  replies: [
    {author: 'jeonghwan', message: '샴푸가 따~~악!!!', createdAt: '2017-02-11T03:27:42.000Z'}
  ]
}];

app.get('/', (req, res) => {
  res.render('main', {posts: posts});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

