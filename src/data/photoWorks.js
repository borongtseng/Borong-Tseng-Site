// 每一筆 = 主頁的一張卡片 = 一個作品頁 (/photo/<id>)
// images：前 3 張會做成卡片縮圖，全部會顯示在作品頁
const img1 = [
  { src: '/images/20261019 攝影社小社遊/colored/IMG_4039.jpg', caption: '' },
  { src: '/images/20261019 攝影社小社遊/colored/IMG_3886.jpg', caption: '' },
  { src: '/images/20261019 攝影社小社遊/colored/IMG_3894.jpg', caption: '' },
  { src: '/images/20261019 攝影社小社遊/colored/IMG_3957.jpg', caption: '' },
  { src: '/images/20261019 攝影社小社遊/colored/IMG_3958.jpg', caption: '' },
  { src: '/images/20261019 攝影社小社遊/colored/IMG_3963.jpg', caption: '' },
  { src: '/images/20261019 攝影社小社遊/colored/IMG_4017.jpg', caption: '' },
  { src: '/images/20261019 攝影社小社遊/colored/IMG_4045.jpg', caption: '' },
  { src: '/images/20261019 攝影社小社遊/colored/IMG_4068.jpg', caption: '' },
]
const img2 = [
  { src: '/images/20261003 新竹市區/colored/IMG_3755.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3608.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3690.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3707.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3756.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3780.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3648.jpg', caption: '' },
  
  { src: '/images/20261003 新竹市區/colored/IMG_3709.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3597.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3698.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3588.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3815.jpg', caption: '' },
  { src: '/images/20261003 新竹市區/colored/IMG_3805.jpg', caption: '' },
]
const img3 = [
  { src: '/images/20260802 大同三星壯圍/colored/IMG_1490.jpg', caption: '' },
  { src: '/images/20260802 大同三星壯圍/colored/IMG_1487.jpg', caption: '' },
  { src: '/images/20260802 大同三星壯圍/colored/IMG_1483.jpg', caption: '' },
  { src: '/images/20260802 大同三星壯圍/colored/IMG_1500.JPG', caption: '' },
  { src: '/images/20260802 大同三星壯圍/colored/IMG_1513.JPG', caption: '' },
  { src: '/images/20260802 大同三星壯圍/colored/IMG_1516.jpg', caption: '' },
]

export const photoWorks = [
  {
    id: 'Hsin Chu - Chi Ding',
    title: '新竹-崎頂',
    date: '2026.10.18',
    location: '新竹市、苗栗縣',
    description: [' 一個週末的午後，始於東門圓環旁的護城河，此時光線仍然強烈，直接照耀在河面上。', '　　步至東門市場，深刻體驗何謂「地方創生」，店家換上富有現代感的招牌，引領著過去，與現在並接。', '　　　　時近日落，搭乘區間車前往崎頂，西部海岸日落總是如此令人震撼、光彩。'],
    images: [img1[0], img1[1], img1[2], img1[3], img1[4], img1[5], img1[6], img1[7], img1[8]],
    files: [],
  },
  {
    id: 'Dong men',
    title: '東門-護城河',
    date: '2026.10.03',
    location: '新竹市東區',
    description: ['東門圓環，承載歷史、牽起過去、現在、未來。傍晚斜陽輕撫在城門上'],
    images: [img2[0], img2[1], img2[2], img2[3], img2[4], img2[5], img2[6], img2[7], img2[8], img2[9], img2[10], img2[11], img2[12]],
    files: []
  },
  {
    id: 'San hsing Da tong',
    title: '三星-大同',
    date: '2026.08.02',
    location: '宜蘭縣三星鄉、大同鄉',
    description: [''],
    images: [img3[0], img3[1], img3[2], img3[3], img3[4], img3[5],],
    files: []
  },
]
