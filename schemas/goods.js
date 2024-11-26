
// 1. mongoose 가져오기
import mongoose from 'mongoose'

// 2. 스키마 작성하기

const goodsSchema = new mongoose.Schema({
    goodsId: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    thumbnailUrl: {
        type: String,
    },
    category: String,
    price: Number,
});

// 3. 스키마를 통해 모델 구현하기
// 4. 모델 외부로 보내기
export default mongoose.model('Goods', goodsSchema);


