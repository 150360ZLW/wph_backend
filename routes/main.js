var express = require('express');
var router = express.Router();

// 今日推荐分类接口
router.get('/classify', function(req, res, next) {
  	var arr = [
  		{
  			id: 1,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/1.gif"
  		},
  		{
  			id: 2,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/2.png"
  		},
  		{
  			id: 3,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/3.png"
  		},
  		{
  			id: 4,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/4.png"
  		},
  		{
  			id: 5,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/5.png"
  		},
  		{
  			id: 6,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/6.png"
  		},
  		{
  			id: 7,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/7.png"
  		},
  		{
  			id: 8,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/8.png"
  		},
  		{
  			id: 9,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/9.png"
  		},
  		{
  			id: 10,
  			imgurl: "http://127.0.0.1:3000/images/shouye/classify/10.png"
  		}
  	];
  	res.send(arr);
});

// 品牌特卖接口
router.get('/saleHot', function(req, res, next) {
  var arr = [
    {
      titleUrl: "http://127.0.0.1:3000/images/shouye/saleHot/01.jpg",
      imgUrl: [
        "http://127.0.0.1:3000/images/shouye/saleHot/02.jpg",
        "http://127.0.0.1:3000/images/shouye/saleHot/03.jpg",
        "http://127.0.0.1:3000/images/shouye/saleHot/04.jpg"
      ]
    }
  ];
  res.send(arr);
});

// 唯品快抢接口
router.get('/saleFast', function(req, res, next) {
  var arr = [
      {
        id: 1,
        titleUrl: "http://127.0.0.1:3000/images/shouye/saleHot/05.png",
        priceColor: "rgb(222, 61, 150)",
        imgsUrl: [
            {
              imgurl: "http://127.0.0.1:3000/images/shouye/saleHot/06.jpg",
              imgtitle: "http://127.0.0.1:3000/images/shouye/saleHot/06_1.png",
              yh: "快抢价",
              price: "￥88"
            },
            {
              imgurl: "http://127.0.0.1:3000/images/shouye/saleHot/07.jpg",
              imgtitle: "http://127.0.0.1:3000/images/shouye/saleHot/07_1.png",
              yh: "快抢价",
              price: "￥106"
            },
            {
              imgurl: "http://127.0.0.1:3000/images/shouye/saleHot/08.jpg",
              imgtitle: "http://127.0.0.1:3000/images/shouye/saleHot/08_1.png",
              yh: "快抢价",
              price: "￥99"
            },
            {
              imgurl: "http://127.0.0.1:3000/images/shouye/saleHot/09.jpg",
              imgtitle: "http://127.0.0.1:3000/images/shouye/saleHot/09_1.png",
              yh: "快抢价",
              price: "￥230"
            }
        ]
      },
      {
        id: 2,
        titleUrl: "http://127.0.0.1:3000/images/shouye/saleHot/10.png",
        priceColor: "#000",
        imgsUrl: [
            {
              imgurl: "http://127.0.0.1:3000/images/shouye/saleHot/11.jpg",
              imgtitle: "",
              yh: "快抢价",
              price: "￥239"
            },
            {
              imgurl: "http://127.0.0.1:3000/images/shouye/saleHot/12.jpg",
              imgtitle: "",
              yh: "快抢价",
              price: "￥88"
            },
            {
              imgurl: "http://127.0.0.1:3000/images/shouye/saleHot/13.jpg",
              imgtitle: "",
              yh: "快抢价",
              price: "￥160"
            }
        ]
      }    
  ];
  res.send(arr);
});


//今日特卖接口
router.get('/todaySale', function(req, res, next) {
  var arr = [
    {
      imgUrl: "http://127.0.0.1:3000/images/shouye/todaySale/01.jpg",
      title: "安奈儿Annil童装-0-12岁男女童款专场",
      zhekou: "2.7折",
      total: ""
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/shouye/todaySale/02.jpg",
      title: "英二时尚集团-恩裳INSUN女装专场",
      zhekou: "1折",
      total: " | 全场折上8折"
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/shouye/todaySale/03.jpg",
      title: "Pullella女装专场-拉夏贝尔集团专场",
      zhekou: "1.6折",
      total: " | 全场折上8折"
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/shouye/todaySale/04.jpg",
      title: "天美意teenmix女鞋包混合专场",
      zhekou: "1.5折",
      total: ""
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/shouye/todaySale/01.jpg",
      title: "安奈儿Annil童装-0-12岁男女童款专场",
      zhekou: "2.7折",
      total: ""
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/shouye/todaySale/02.jpg",
      title: "英二时尚集团-恩裳INSUN女装专场",
      zhekou: "1折",
      total: " | 全场折上8折"
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/shouye/todaySale/03.jpg",
      title: "Pullella女装专场-拉夏贝尔集团专场",
      zhekou: "1.6折",
      total: " | 全场折上8折"
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/shouye/todaySale/04.jpg",
      title: "天美意teenmix女鞋包混合专场",
      zhekou: "1.5折",
      total: ""
    } 
  ];
  res.send(arr);
});


// 母婴轮播图接口
router.get("/slider", function(req, res, next) {
  var arr = [
    "http://127.0.0.1:3000/images/fransnana/banner/01.jpg",
    "http://127.0.0.1:3000/images/fransnana/banner/02.jpg"
  ];
  res.send(arr);
});
// 母婴分类接口
router.get("/wbClassify", function(req, res, next) {
  var arr = [
    {
      id: "1",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/01.png",
      title: "尿裤纸品"
    },
    {
      id: "2",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/02.png",
      title: "洗护喂养"
    },
    {
      id: "3",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/03.png",
      title: "婴幼奶粉"
    },
    {
      id: "4",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/04.png",
      title: "儿童玩具"
    },
    {
      id: "5",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/05.png",
      title: "婴幼服饰"
    },
    {
      id: "6",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/06.png",
      title: "营养辅食"
    },
    {
      id: "7",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/07.png",
      title: "女童裙装"
    },
    {
      id: "8",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/08.png",
      title: "孕产护肤"
    },
    {
      id: "9",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/09.png",
      title: "孕妈护肤"
    },
    {
      id: "10",
      imgUrl: "http://127.0.0.1:3000/images/fransnana/wbClassify/10.png",
      title: "女童鞋"
    }
  ];
  res.send(arr);
});
// 母婴热卖接口
router.get("/wbSaleHot", function(req, res, next) {
  var arr = [
    {
      title:"http://127.0.0.1:3000/images/fransnana/saleHot/01.jpg",
      imgUrl:[
        "http://127.0.0.1:3000/images/fransnana/saleHot/02.jpg",
        "http://127.0.0.1:3000/images/fransnana/saleHot/03.jpg",
        "http://127.0.0.1:3000/images/fransnana/saleHot/04.jpg"
      ]
    }
  ];
  res.send(arr);
})
// 母婴唯品快抢接口
router.get("/wbSaleFast", function(req, res, next) {
  var arr = [
    {
      id: 1,
      priceColor: "rgb(222, 61, 150)",
      titleImg: 'http://127.0.0.1:3000/images/fransnana/saleFast/01.jpg',
      imgsurl: [
        {
          id: 1,
          mainImg: 'http://127.0.0.1:3000/images/fransnana/saleFast/02.jpg',
          smallImg: 'http://127.0.0.1:3000/images/fransnana/saleFast/02_1.png',
          price: "￥32"
        },
        {
          id: 2,
          mainImg: "http://127.0.0.1:3000/images/fransnana/saleFast/03.jpg",
          smallImg: "http://127.0.0.1:3000/images/fransnana/saleFast/03_1.png",
          price: "￥109"
        },
        {
          id: 3,
          mainImg: "http://127.0.0.1:3000/images/fransnana/saleFast/04.jpg",
          smallImg: "http://127.0.0.1:3000/images/fransnana/saleFast/04_1.png",
          price: "￥93"
        },
        {
          id: 4,
          mainImg: "http://127.0.0.1:3000/images/fransnana/saleFast/05.jpg",
          smallImg: "http://127.0.0.1:3000/images/fransnana/saleFast/05_1.png",
          price: "￥439"
        },
      ],

      text: "快抢价"
      
    },
    {
      id: 2,
      priceColor: "#323232",
      titleImg: 'http://127.0.0.1:3000/images/fransnana/saleFast/06.png',
      imgsurl: [
        {
          id: 1,
          mainImg: 'http://127.0.0.1:3000/images/fransnana/saleFast/07.jpg',
          smallImg: '',
          price: "￥32"
        },
        {
          id: 2,
          mainImg: "http://127.0.0.1:3000/images/fransnana/saleFast/08.jpg",
          smallImg: "",
          price: "￥109"
        },
        {
          id: 3,
          mainImg: "http://127.0.0.1:3000/images/fransnana/saleFast/09.jpg",
          smallImg: "",
          price: "￥93"
        }
      ],

      text: "快抢价"
      
    }
  ];
  res.send(arr);
})

// 页面由右上角分类
router.get("/wbClassifyLeft",function(req, res, next) {
  var arr = [
    "为你推荐",
    "女装",
    "男装",
    "男女内衣",
    "女鞋",
    "男鞋",
    "箱包皮具",
    "手表配饰",
    "护肤彩妆",
    "个人护理",
    "母婴",
    "户外运动",
    "手机数码",
    "家用电器",
    "家居家纺",
    "生活超市",
    "唯品国际",
    "唯品·奢",
    "唯品金融",
    "医药健康",
    "图书文娱"
  ];
  res.send(arr);
})

// 分类推荐---猜你喜欢
router.get("/recommend", function(req, res, next) {
  var arr = [
    {
      id: 1,
      imgurl: "http://127.0.0.1:3000/images/mainClassify/recommend/01.gif",
      title: "爆款优惠"
    },
    {
      id: 2,
      imgurl: "http://127.0.0.1:3000/images/mainClassify/recommend/02.webp",
      title: "运动鞋"
    },
    {
      id: 3,
      imgurl: "http://127.0.0.1:3000/images/mainClassify/recommend/03.webp",
      title: "凉鞋"
    },
    {
      id: 4,
      imgurl: "http://127.0.0.1:3000/images/mainClassify/recommend/04.webp",
      title: "板鞋"
    },
    {
      id: 5,
      imgurl: "http://127.0.0.1:3000/images/mainClassify/recommend/05.webp",
      title: "皮鞋"
    }
  ];
  res.send(arr);
})

// 田定茂
// 轮播接口
router.get('/tcarousel', function (req, res, next) {
  var arr = [{
      id: 1,
      imgurl: "http://127.0.0.1:3000/images/appliance/lunbo/1.jpg"
    },
    {
      id: 2,
      imgurl: "http://127.0.0.1:3000/images/appliance/lunbo/2.jpg"
    }
  ]
  res.send(arr);
});
//手机
router.get('/tcellphone', function (req, res, next) {
  var arr = [
    'http://127.0.0.1:3000/images/appliance/shouji/1.jpg',
    'http://127.0.0.1:3000/images/appliance/shouji/2.jpg',
    'http://127.0.0.1:3000/images/appliance/shouji/3.jpg'
  ]
  res.send(arr)
});

// 广告
router.get('/tfenlei', function (req, res, next) {
  var arr = [
    "http://127.0.0.1:3000/images/appliance/classify/1.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/2.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/3.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/4.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/5.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/6.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/7.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/8.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/9.jpg",
    "http://127.0.0.1:3000/images/appliance/classify/10.jpg"
  ]
  res.send(arr)
});
//快抢
router.get('/tkuai', function (req, res, next) {
  var arr = [{
      imgUrl: "http://127.0.0.1:3000/images/appliance/jiadian/1.gif",
      id: 0,
      img: "http://127.0.0.1:3000/images/appliance/jiadian/1.jpg",
      imgurl: "http://127.0.0.1:3000/images/appliance/jiadian/1.png",
      text: "快抢价",
      money: "￥99"
    },
    {
      id: 1,
      img: "http://127.0.0.1:3000/images/appliance/jiadian/2.jpg",
      imgurl: "http://127.0.0.1:3000/images/appliance/jiadian/2.png",
      text: "快抢价",
      money: "￥39"
    },
    {
      id: 2,
      img: "http://127.0.0.1:3000/images/appliance/jiadian/3.jpg",
      imgurl: "http://127.0.0.1:3000/images/appliance/jiadian/3.png",
      text: "快抢价",
      money: "￥99"
    },
    {
      id: 3,
      img: "http://127.0.0.1:3000/images/appliance/jiadian/4.jpg",
      imgurl: "http://127.0.0.1:3000/images/appliance/jiadian/4.png",
      text: "快抢价",
      money: "￥79"
    },
  ]
  res.send(arr)
});

// 小米1
router.get('/tmi1', function (req, res, next) {
  var arr = [
    "http://127.0.0.1:3000/images/appliance/qijian/1.jpg",
    "http://127.0.0.1:3000/images/appliance/qijian/2.gif"
  ]
  res.send(arr)
});

router.get('/tmi2', function (req, res, next) {
  var arr = [
    'http://127.0.0.1:3000/images/appliance/qijian/3.jpg',
    "http://127.0.0.1:3000/images/appliance/qijian/4.jpg",
    'http://127.0.0.1:3000/images/appliance/qijian/5.jpg',
    "http://127.0.0.1:3000/images/appliance/qijian/6.gif",
  ]
  res.send(arr)
});
// 展示
router.get('/show', function (req, res, next) {
  var arr = [{
      imgUrl: "http://127.0.0.1:3000/images/appliance/zuiho/1.jpg",
      title: "清凉一夏 风扇钜惠",
      zhekou: "1.8",
      total: "折起"
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/appliance/zuiho/2.jpg",
      title: "华为HUAWEI平板电脑专场",
      zhekou: "8",
      total: "折起"
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/appliance/zuiho/3.jpg",
      title: "小米手机专场",
      zhekou: "6.9",
      total: "折起"
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/appliance/zuiho/4.jpg",
      title: "OPPO全系列套餐专场",
      zhekou: "5.8",
      total: "折起"
    },
    {
      imgUrl: "http://127.0.0.1:3000/images/appliance/zuiho/5.jpg",
      title: "富士FUJIFILM-拍立得专场",
      zhekou: "4.2",
      total: "折起"
    }
  ]
  res.send(arr)
})

module.exports = router;