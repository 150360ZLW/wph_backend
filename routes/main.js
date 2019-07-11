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


//lfz
//美妆专区

//轮播接口
router.get('/banner', function(req, res, next) {
  var arr = [
    'http://127.0.0.1:3000/images/meizhuang1/lunbo/01.jpg',
    'http://127.0.0.1:3000/images/meizhuang1/lunbo/02.jpg'
        
  ]
    res.send(arr)
});

// 分类列表接口
router.get('/category', function(req, res, next) {
  var arr = [
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/01.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/02.gif',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/03.gif',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/04.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/05.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/06.gif',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/07.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/08.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/09.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/meizhuang1/fenleiliebiao/10.jpg',
      href: ''
    }

  ]
    res.send(arr)
});

//地区馆接口
router.get('/brandList', function(req, res, next) {
  var arr = [
    'http://127.0.0.1:3000/images/meizhuang1/diquguan/01.png',
    'http://127.0.0.1:3000/images/meizhuang1/diquguan/02.jpg',
    'http://127.0.0.1:3000/images/meizhuang1/diquguan/03.jpg'
  ]
    res.send(arr)
});


//唯品快抢接口
router.get('/weipinkuaiqiang', function(req, res, next) {
  var arr = [
    {
      img1: 'http://127.0.0.1:3000/images/meizhuang1/weipinkuaiqiang/1_1.jpg',
      img2: 'http://127.0.0.1:3000/images/meizhuang1/weipinkuaiqiang/1_2.png',
      price: 289
    },
    {
      img1: 'http://127.0.0.1:3000/images/meizhuang1/weipinkuaiqiang/2_1.jpg',
      img2: 'http://127.0.0.1:3000/images/meizhuang1/weipinkuaiqiang/2_2.png',
      price: 58
    },
    {
      img1: 'http://127.0.0.1:3000/images/meizhuang1/weipinkuaiqiang/3_1.jpg',
      img2: 'http://127.0.0.1:3000/images/meizhuang1/weipinkuaiqiang/3_2.png',
      price: 46
    },
    {
      img1: 'http://127.0.0.1:3000/images/meizhuang1/weipinkuaiqiang/4_1.jpg',
      img2: 'http://127.0.0.1:3000/images/meizhuang1/weipinkuaiqiang/4_2.png',
      price: 159
    }
  ]
    res.send(arr)
});

// 猜你喜欢接口
router.get('/cainixihuan', function(req, res, next) {
  var arr = [
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/cainixihuan/01.jpg',
      title:'海外包包'
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/cainixihuan/02.jpg',
      title:'面膜'
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/cainixihuan/03.jpg',
      title:'防晒隔离'
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/cainixihuan/04.jpg',
      title:'口红'
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/cainixihuan/05.jpg',
      title:'面部精华'
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/cainixihuan/06.jpg',
      title:'护肤套装'
    }
  ]
    res.send(arr)
});
//更多推荐接口
router.get('/gengduotuijian', function(req, res, next) {
  var arr = [
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/01.jpg',
      dongxi:'贝玲妃Benefit彩妆专场  ',
      youhui:3,
      time:7    
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/02.jpg',
      dongxi:'SK-II化妆品专场',
      youhui:5.2,
      time:3    
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/03.jpg',
      dongxi:'古驰GUCCI香水专场',
      youhui:3,
      time:3    
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/04.jpg',
      dongxi:'祖玛珑JO MALONE香水专场',
      youhui:6.1,
      time:2    
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/05.jpg',
      dongxi:'IPSA茵芙莎化妆品专场',
      youhui:5.2,
      time:3    
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/06.jpg',
      dongxi:'安娜苏ANNASUI香水彩妆专场',
      youhui:4.7,
      time:2  
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/07.jpg',
      dongxi:'施华洛世奇SWAROVSKI 璀璨水晶饰品专场',
      youhui:7.5,
      time:3    
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/08.jpg',
      dongxi:'美国Origins悦木之源高端植物护肤专场',
      youhui:6.1,
      time:2    
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/09.jpg',
      dongxi:'加拿大MAC玩转色彩专场',
      youhui:3.7,
      time:2    
    },
    {
      imgurl:'http://127.0.0.1:3000/images/meizhuang1/gengduotuijian/10.jpg',
      dongxi:'韩国WHOO宫廷护肤专场',
      youhui:3,
      time:2    
    }
  ]
    res.send(arr)
});

//最后疯抢专区

// yetou接口
router.get('/yetou', function(req, res, next) {
  var arr = [
    'http://127.0.0.1:3000/images/meizhuang1/yetou/01.webp',
    'http://127.0.0.1:3000/images/meizhuang1/yetou/02.webp'   
  ]
    res.send(arr)
});



//聂苗苗 国际data
//轮播组件
router.get('/banner1', function(req, res, next) {
  var arr = [
      'http://127.0.0.1:3000/images/international/carasel/carasel.jpg'
  ]
    res.send(arr)
});
//展示图组件
router.get('/playList', function(req, res, next) {
  var arr = [
    {
      imgurl: 'http://127.0.0.1:3000/images/international/play/show1.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/play/show2.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/play/show3.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/play/show4.jpg',
      href: ''
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/play/show5.jpg',
      href: ''
    }
  ]
    res.send(arr)
});
//左滑轮播
router.get('/leftslide', function(req, res, next) {
  var arr = [
    {
      img: 'http://127.0.0.1:3000/images/international/leftslide/slide1.jpg'
    },
    {
      img: 'http://127.0.0.1:3000/images/international/leftslide/slide2.jpg'
    },
    {
      img: 'http://127.0.0.1:3000/images/international/leftslide/slide3.jpg'
    },
    {
      img: 'http://127.0.0.1:3000/images/international/leftslide/slide4.jpg'
    },
    {
      img: 'http://127.0.0.1:3000/images/international/leftslide/slide5.jpg'
    },
    {
      img: 'http://127.0.0.1:3000/images/international/leftslide/slide6.jpg'
    }
  ]
    res.send(arr)
});
//快抢组件
router.get('/grabList', function(req, res, next) {
  var arr = [
    {
      id: 0,
      img: 'http://127.0.0.1:3000/images/international/grab/grab1.jpg',
      imgurl: 'http://127.0.0.1:3000/images/international/grab/grab2.png',
      text: '快抢价',
      money: '￥289'
      },
      {
      id: 1,
      img: 'http://127.0.0.1:3000/images/international/grab/grab3.jpg',
      imgurl: 'http://127.0.0.1:3000/images/international/grab/grab4.png',
      text: '快抢价',
      money: '￥59'
      },
      {
      id: 2,
      img: 'http://127.0.0.1:3000/images/international/grab/grab5.jpg',
      imgurl: 'http://127.0.0.1:3000/images/international/grab/grab6.png',
      text: '快抢价',
      money: '￥49'
      },
      {
      id: 3,
      img: 'http://127.0.0.1:3000/images/international/grab/grab7.jpg',
      imgurl: 'http://127.0.0.1:3000/images/international/grab/grab8.png',
      text: '快抢价',
      money: '￥159'
      }   
  ]
    res.send(arr)
});
//猜你喜欢组件
router.get('/guessLike', function(req, res, next) {
  var arr = [
    {
      imgurl: 'http://127.0.0.1:3000/images/international/guess/guess2.jpg',
      text: '海外包包'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/guess/guess3.jpg',
      text: '面膜'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/guess/guess4.jpg',
      text: '防晒隔离'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/guess/guess5.jpg',
      text: '口红'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/guess/guess6.jpg',
      text: '面部精华'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/guess/guess7.jpg',
      text: '护肤套装'
    }   
  ]
    res.send(arr)
});
//唯品国际组件
router.get('/onlyproduct', function(req, res, next) {
  var arr = [
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product1.jpg',
      text: '德国MCM箱包专场',
      time: '剩8时',
      discount: '7.7',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product2.jpg',
      text: 'Tory Burch经典轻奢箱包专场',
      time: '剩1天',
      discount: '5.2',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product3.jpg',
      text: '意大利Emporio Armani阿玛尼奢品手表',
      time: '剩1天',
      discount: '7',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product4.jpg',
      text: '丹麦潘多拉Pandora轻奢饰品特卖专场',
      time: '剩1天',
      discount: '5.3',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product5.jpg',
      text: '美国Tiffany经典轻奢珠宝特卖专场',
      time: '剩1天',
      discount: '4.9',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product6.jpg',
      text: 'KENZO时尚鞋包混场',
      time: '剩1天',
      discount: '5.6',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product7.jpg',
      text: '加拿大MAC玩转色彩专场',
      time: '剩2天',
      discount: '3.7',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product8.jpg',
      text: '奢华洛世期SWAROVSKI璀璨水晶饰品专场',
      time: '剩1天',
      discount: '7.5',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product9.jpg',
      text: '美国Origins悦木之源高端植物护肤砖茶女',
      time: '剩2天',
      discount: '6.1',
      distext: '折起'
    },
    {
      imgurl: 'http://127.0.0.1:3000/images/international/product/product10.jpg',
      text: 'JBL时尚酷炫影音专场',
      time: '剩28天',
      discount: '4.7',
      distext: '折起'
    }   
  ]
    res.send(arr)
});

//豆欣欣生活data
/* 轮播 */
router.get('/banner2', function(req, res, next) {
    var arr = [
        'http://127.0.0.1:3000/images/household/banner/01-banner.jpg'
    ]
  res.send(arr)
});

/*分类 */
router.get('/category2', function(req, res, next) {
    var arr = [
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/1.png',
            href:'零食'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/2.png',
            href:'茗茶'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/3.png',
            href:'保健营养'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/4.png',
            href:'食材速食'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/5.png',
            href:'美酒'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/6.jpg',
            href:'滋补'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/7.png',
            href:'谷物冲调'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/8.png',
            href:'海外营养'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/9.png',
            href:'宠物生活'
        },
        {
            imgurl:'http://127.0.0.1:3000/images/household/livecategory/10.jpg',
            href:'更多'
        }
    ]
  res.send(arr)
});

/*第三部分 */
router.get('/three', function(req, res, next) {
    var arr = [
        { 
            id:0,
            img:'http://127.0.0.1:3000/images/household/livethree/live-1.jpg',
            imgg:'http://127.0.0.1:3000/images/household/livethree/live-1-1.png',
            wenzi:'抢购价',
            price:88
        },
        {
            id:1,
            img:'http://127.0.0.1:3000/images/household/livethree/live-2.jpg',
            imgg:'http://127.0.0.1:3000/images/household/livethree/live-2-2.png',
            wenzi:'抢购价',
            price:49
        },
        {
            id:2,
            img:'http://127.0.0.1:3000/images/household/livethree/live-3.jpg',
            imgg:'http://127.0.0.1:3000/images/household/livethree/live-3-3.png',
            wenzi:'抢购价',
            price:39
        },
        {
            id:3,
            img:'http://127.0.0.1:3000/images/household/livethree/live-4.jpg',
            imgg:'http://127.0.0.1:3000/images/household/livethree/live-4-4.png',
            wenzi:'抢购价',
            price:99
        }
    ]
  res.send(arr)
});

// 第四部分
router.get('/four', function(req, res, next) {
    var arr = [
               'http://127.0.0.1:3000/images/household/livefour/01-four.jpg',
               'http://127.0.0.1:3000/images/household/livefour/03-four.jpg'  
    ]
  res.send(arr)
});

// 第五部分
router.get('/five', function(req, res, next) {
    var arr = [
        {
          id:0,
          fiveimg:'http://127.0.0.1:3000/images/household/livefive/01-five.jpg'
        },
        {
          id:1,
          fiveimg: 'http://127.0.0.1:3000/images/household/livefive/02-five.jpg'
        } 
    ]
  res.send(arr)
});

// 第六部分重复
router.get('/six', function(req, res, next) {
    var arr = [
       {
        id:0,
        img:'http://127.0.0.1:3000/images/household/livesix/01-six.jpg',
        title:'贡天下优选健康美食专场',
        day:'剩2天',
        discount:1.7,
        zhe:'折起'
       },
       {
        id:1,
        img:'http://127.0.0.1:3000/images/household/livesix/02-six.jpg',
        title:'百草味休闲零食专场',
        day:'剩1天',
        discount:1.8,
        zhe:'折起'
       },
       {
        id:2,
        img:'http://127.0.0.1:3000/images/household/livesix/03-six.jpg',
        title:'澳洲德运天然牧场乳品专场',
        day:'剩9时',
        discount:2.8,
        zhe:'折起'
       },
       {
        id:3,
        img:'http://127.0.0.1:3000/images/household/livesix/04-six.jpg',
        title:'日本医食同源膳食营养专场',
        day:'剩2天',
        discount:2.6,
        zhe:'折起'
       },
       {
        id:4,
        img:'http://127.0.0.1:3000/images/household/livesix/05-six.jpg',
        title:'海底捞-好火锅自己会说话',
        day:'剩1天',
        discount:2.3,
        zhe:'折起'
       },
       {
        id:5,
        img:'http://127.0.0.1:3000/images/household/livesix/06-six.jpg',
        title:'小罐茶常态专场',
        day:'剩3天',
        discount:'一口价',
       },
       {
        id:6,
        img:'http://127.0.0.1:3000/images/household/livesix/07-six.jpg',
        title:'三浦堂美味专场',
        day:'剩3时',
        discount:2.7,
        zhe:'折起'
       },
       {
        id:7,
        img:'http://127.0.0.1:3000/images/household/livesix/08-six.jpg',
        title:'轩尼诗洋酒专场',
        day:'剩2天',
        discount:5.7,
        zhe:'折起'
       },
       {
        id:8,
        img:'http://127.0.0.1:3000/images/household/livesix/09-six.jpg',
        title:'甄选健康零食专场',
        day:'剩1天',
        discount:6.8,
        zhe:'折起'
       },
       {
        id:9,
        img:'http://127.0.0.1:3000/images/household/livesix/10-six.jpg',
        title:'一粥一饭品味生活专场',
        day:'剩8时',
        discount:2.3,
        zhe:'折起'
       }
    ]
  res.send(arr)
});
module.exports = router;
