import express from 'express';


const router = express.Router();


// /routes/goods.js

const goods = [
  {
    goodsId: 1,
    name: '상품 1',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg',
    category: 'drink',
    price: 6.2,
  },
  {
    goodsId: 2,
    name: '상품 2',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg',
    category: 'drink',
    price: 0.11,
  },
  {
    goodsId: 3,
    name: '상품 3',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg',
    category: 'drink',
    price: 2.2,
  },
  {
    goodsId: 4,
    name: '상품 4',
    thumbnailUrl:
      'https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg',
    category: 'drink',
    price: 0.1,
  },
];

// 상품 목록 조회 API // 
router.get('/goods', (req, res) => {
  return res.status(200).json({
    goods: goods,
  })
});

// 상품 상세 조회 API //
router.get('/goods/:goodsId', (req, res) => {
  // 1. 상품의 id 조회
  // 2. 상품 id와 일치하는 데이터 찾기
  // 3. 조회된 상품 정보를 Response로 Return 한다.

  const goodsId = req.params.goodsId;

  const findGoods = goods.find((oneGoods) => oneGoods.goodsId === +goodsId);

return res.status(200).json({goods: findGoods});
})


export default router;