var app = angular.module('miniRouting');

app.service('productService', function() {
  this.shoeData = [
    {
      type: 'Nike',
      color: 'Red',
      size: 12,
      image: 'http://images.complex.com/complex/image/upload/t_article_image/hnkdnalfnzsqvdoc1i8n.jpg'
    },
    {
      type: 'Reebok',
      color: 'Blue',
      size: 9,
      image: 'http://cdn.sneakernews.com/wp-content/uploads/2013/04/reebok-question-blue-canvas-10.jpg'
    },
    {
      type: 'Adidas',
      color: 'Yellow',
      size: 6,
      image: 'http://image.thefashionisto.com/wp-content/uploads/2015/03/Pharrell-Adidas-Originals-Superstar-Supercolor-Yellow.jpg'
    },
    {
      type: 'Puma',
      color: 'Green',
      size: 7,
      image: 'http://hyphytek.net/wordpress/wp-content/uploads/2010/06/puma-suede-green.jpg'
    }
  ];

  this.sockData = [
    {
      type: 'Stance',
      color: 'Red',
      size: 'S',
      image: 'https://1xasyt2reviqjghbj3apazc3-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/p-17476-m200bclord_1.jpg'
    },
    {
      type: 'Nike',
      color: 'White',
      size: 'M',
      image: 'http://www.finishline.com/images/products/xlsx3693107.jpg'
    },
    {
      type: 'Reebok',
      color: 'Green',
      size: 'L',
      image: 'http://cdn3.volusion.com/ecrb4.3npxd/v/vspfiles/photos/AKR700-BJ9-2.jpg'
    },
  ]
})