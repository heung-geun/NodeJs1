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

// 상품 등록 API //

router.post('/goods', (req, res) => {
// 1. name, thumbnailUrl, category, price를 req.body로 전달받는다.
// 2. 해당하는 데이터를 바탕으로 상품을 등록한다.
// 3. 등록된 상품 데이터를 클라이언트에게 반호나한다.

// 아래 4줄은 구조분해할당으로 인해 
// const {name, thumbnailUrl, category, price} = req.body 로 변환이 가능하다.

// const name = req.body.name;
// const thumbnailUrl = req.body.thumbnailUrl;
// const category = req.body.category;
// const price = req.body.price;

const {name, thumbnailUrl, category, price} = req.body;

// +1된 goodsId를 가져온다.
const goodsId = goods[goods.length - 1].goodsId + 1;

// 구조분해할당 사용
const goodsItem = {
  goodsId,
  name,
  thumbnailUrl,
  category,
  price,
}

goods.push(goodsItem);

return res.status(201).json({goods: goodsItem});

})


export default router;