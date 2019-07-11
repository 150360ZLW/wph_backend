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

router.get("/register", function(req, res, next) {
  var arr =[ 
    {
      logo_bg: "url(http://127.0.0.1:3000/images/register/login_bg.jpg)",
      logo: "http://127.0.0.1:3000/images/register/logo.png"
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
//轮播接口
router.get('/banner', function(req, res, next) {
  var arr = [
    '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/03/01/108/15514477604822.jpg',
    '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/07/05/112/15623116975233.jpg'
        
  ]
    res.send(arr)
});

// 分类列表接口
router.get('/category', function(req, res, next) {
  var arr = [
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/113/15585166833107.jpg',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/41/15585167196394.gif',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/129/15585170806298.gif',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/115/15585170698825.jpg',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/169/15585170547480.jpg',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/197/15585171159765.gif',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/69/15585171426569.jpg',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/93/15585171698382.jpg',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/187/15585171973062.jpg',
      href: ''
    },
    {
      imgurl: '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/05/22/163/15585172238251.jpg',
      href: ''
    }

  ]
    res.send(arr)
});

//地区馆接口
router.get('/brandList', function(req, res, next) {
  var arr = [
    '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/07/04/21/15622348801616.png',
    '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/07/04/180/15622349335448.jpg',
    '//h2.appsimg.com/a.appsimg.com/upload/flow/2019/07/04/80/15622349573607.jpg'
  ]
    res.send(arr)
});


//唯品快抢接口
router.get('/weipinkuaiqiang', function(req, res, next) {
  var arr = [
    {
      img1: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/10/16/156/217440121539669150498.jpg',
      img2: 'https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/f9b56192bbfe42a497875ae810a37a23/10023058/primary.png',
      price: 289
    },
    {
      img1: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/03/15/140/514384561552632171486.jpg',
      img2: 'https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/3e563aec68604ae29c3e765f0b6f8f0f/10020534/primary.png',
      price: 58
    },
    {
      img1: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/06/11/127/14701041560243567154.jpg',
      img2: 'https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/569f15b965d448c2bb8ae49dc8e59aff/10033677/primary.png',
      price: 46
    },
    {
      img1: 'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/05/23/32/120305251558599622839.jpg',
      img2: 'https://h2.appsimg.com/a.appsimg.com/upload/brandcool/0/1aa04c8a09fa4f49a51a5e340b7d04cb/10007180/primary.png',
      price: 159
    }
  ]
    res.send(arr)
});

// 猜你喜欢接口
router.get('/cainixihuan', function(req, res, next) {
  var arr = [
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/06/11/46/288568821560246647396_5t.jpg',
      title:'海外包包'
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/06/11/160/17066991560243567626_5t.jpg',
      title:'面膜'
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/06/06/140/492613971559811192904_5t.jpg',
      title:'防晒隔离'
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2018/12/13/125/604592961544685797919_5t.jpg',
      title:'口红'
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdc/267/083/465636076499083267/2/4987241135011-5.jpg',
      title:'面部精华'
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcimg/2019/01/09/191/389027741547022659270_5t.jpg',
      title:'护肤套装'
    }
  ]
    res.send(arr)
});
//更多推荐接口
router.get('/gengduotuijian', function(req, res, next) {
  var arr = [
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/07/02/97/ias_156205115565873_1135x545_85.jpg',
      dongxi:'贝玲妃Benefit彩妆专场  ',
      youhui:3,
      time:7    
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/07/01/189/ias_156194623683048_1135x545_85.jpg',
      dongxi:'SK-II化妆品专场',
      youhui:5.2,
      time:3    
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2018/12/03/55/ias_154380810328305_1135x545_85.jpg',
      dongxi:'古驰GUCCI香水专场',
      youhui:3,
      time:3    
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/07/01/154/ias_156196224671204_1135x545_85.jpg',
      dongxi:'祖玛珑JO MALONE香水专场',
      youhui:6.1,
      time:2    
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/06/14/44/ias_156047731360509_1135x545_85.jpg',
      dongxi:'IPSA茵芙莎化妆品专场',
      youhui:5.2,
      time:3    
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/04/17/74/ias_155547296264492_1135x545_85.jpg',
      dongxi:'安娜苏ANNASUI香水彩妆专场',
      youhui:4.7,
      time:2  
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/06/06/128/ias_155981633713440_1135x545_85.jpg',
      dongxi:'施华洛世奇SWAROVSKI 璀璨水晶饰品专场',
      youhui:7.5,
      time:3    
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2018/10/31/63/ias_154097768629418_1135x545_85.jpg',
      dongxi:'美国Origins悦木之源高端植物护肤专场',
      youhui:6.1,
      time:2    
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2018/12/06/0/ias_154407900866565_1135x545_85.jpg',
      dongxi:'加拿大MAC玩转色彩专场',
      youhui:3.7,
      time:2    
    },
    {
      imgurl:'https://h2.appsimg.com/a.appsimg.com/upload/brand/upcb/2019/06/12/194/ias_156032813392174_1135x545_85.jpg',
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
    '//h2.appsimg.com/b.appsimg.com/upload/mst/2019/07/03/12/32faee1caf405379dec4cade9533e2fe.jpg!75.webp',
    '//h2.appsimg.com/b.appsimg.com/upload/mst/2019/07/03/161/3de2ea491e9f45bf7fc2bb91a32895a8.jpg!75.webp'   
  ]
    res.send(arr)
});
module.exports = router;