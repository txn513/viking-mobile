
// 6艘河轮简介

	var ship =  [
			{
				"chName":"维京艾斯特拉号",
				"enName":"VIKIN  Eistla",
				"firstTrip":"2013年",
				"synopsis":"维京Eistla号有4层甲板，顶层以日光甲板和用餐区域为主，其他3层分布着95间客房和船上各项设施。为您提供8种高质感的房间选择，每间房内都配备了完善的硬件设施，设计感和艺术感将其装饰的各具特色。您可在房间内安心休憩或欣赏两岸美景。"
			},
			{
				"chName":"维京奥丁号",
				"enName":"VIKIN  Odin",
				"firstTrip":"2014年",
				"synopsis":"奥丁号船名来源于北欧神话的众神之父奥丁 (Odin)，奥丁是拥有智慧和预言能力的神，参加父亲的战争并取得胜利。奥丁号有2间奢享家套房，面积达到41平方米，套房拥有270°私人全景阳台和起居室，另有浪漫法式露台房、精选标准客房等5种类型房间。 "
			},
			{
				"chName":"维京贝斯特拉号",
				"enName":"VIKIN  Bestla",
				"firstTrip":"2014年",
				"synopsis":"维京贝斯特拉号是由原来世鹏邮轮的造船工程团队- Yran Storbra aten设计的。维京系列长船通过多种方式打造您专属的旅行。两间探索者套房拥有私人环绕式阳台，可以欣赏270海景。阳台套房居室拥有一个走廊阳台，卧室中还设有法式阳台。"
			},
			{
				"chName":"维京芙蕾雅号",
				"enName":"VIKIN  Freya",
				"firstTrip":"2012年",
				"synopsis":"弗雷娅号船名来自于北欧神话的爱与美之神。两间“探索者”套房拥有私人环绕式阳台，阳台套房休息室带阳台，卧室还设有法式阳台。弗雷娅号美食多样，午餐和晚餐都有免费饮品，菜单随航线改变，提供当地美食，牛排、鸡肉及三文鱼是不变的旋律。"
			},
			{
				"chName":"维京尼奥尔德",
				"enName":"VIKIN  Njord",
				"firstTrip":"2012年",
				"synopsis":"维京尼奥尔德号美食多样，午晚餐均免费饮品，菜单随航线改变，提供当地美食，牛排、鸡肉及三文鱼是不变旋律。您在船首白兰地露台品尝美食美酒，或在阳光甲板休闲放松。"
			},
			{
				"chName":"维京伊敦号",
				"enName":"VIKIN  Idun",
				"firstTrip":"2012年",
				"synopsis":"维京伊敦号名称来源于挪威神话中的春之女神Idun，她拥有青春之苹果，吃了这苹果的人，能常葆青春的美丽、活泼，已老者亦能返老还童。伊敦号在2012年首次亮相，为各个年龄段专门设计的舱房简洁舒适，木制橱柜、白色羽绒被等室内配置，为乘客造就舒适的睡眠环境。"
			},
	]

module.exports.ship = ship;


// 舱房类型
var cf = [
		{
			"cfName":"浪漫法式露台客房(中层)",
			"cfSize":"面积：12.5㎡ &nbsp;可住人数：2人 &nbsp;间数：17间 &nbsp;<br> 楼层：2层 ",
			"cfLong":[
				'· 客房含法式露台及落地景观玻璃门',
				'· 客房内配有实木衣柜、卫星电话、冰柜、保险箱、以及40寸索尼平板电视',
				'· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等',
				'· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱',
				'· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等',
				'· 根据不同需求提供浴袍及拖鞋（包括洗衣袋和洗衣单），中文控制器，优选中国茶包，水壶，每日提供免费的瓶装饮用水 ',
				'· 中英文船舱引导标示，中文指南/手册/说明，房间可独立调节温度，电压: 220V 和 110V ',
				],
			
		},
		{
			"cfName":"标准客房",
			"cfSize":"面积：13㎡ &nbsp;可住人数：2人 &nbsp;间数：7间 &nbsp;<br> 楼层：1层 ",
			"cfLong":[
				'· 客房内配有实木衣柜、卫星电话、冰柜、保险箱、以及40寸索尼平板电视',
				'· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等',
				'· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱',
				'· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等',
				'· 根据不同需求提供浴袍及拖鞋（包括洗衣袋和洗衣单），中文控制器，优选中国茶包，水壶，每日提供免费的瓶装饮用水 ',
				'· 中英文船舱引导标示，中文指南/手册/说明，房间可独立调节温度，电压: 220V 和 110V ',
				],
			
		},
		{
			"cfName":"精选标准客房",
			"cfSize":"面积：13㎡ &nbsp;可住人数：2人 &nbsp;间数：10间 &nbsp;<br> 楼层：1层 ",
			"cfLong":[
				'· 客房含景观窗台',
				'· 客房内配有实木衣柜、卫星电话、冰柜、保险箱、以及40寸索尼平板电视',
				'· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等',
				'· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱',
				'· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等',
				'· 根据不同需求提供浴袍及拖鞋（包括洗衣袋和洗衣单），中文控制器，优选中国茶包，水壶，每日提供免费的瓶装饮用水 ',
				'· 中英文船舱引导标示，中文指南/手册/说明，房间可独立调节温度，电压: 220V 和 110V ',
				],
			
		},
		{
			"cfName":"浪漫法式露台房(上层)",
			"cfSize":"面积：12.5㎡ &nbsp;可住人数：2人 &nbsp;间数：5间 &nbsp;<br> 楼层：3层 ",
			"cfLong":[
				'· 客房含法式露台及落地景观玻璃门',
				'· 客房内配有实木衣柜、卫星电话、冰柜、保险箱、以及40寸索尼平板电视',
				'· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等',
				'· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱',
				'· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等',
				'· 根据不同需求提供浴袍及拖鞋（包括洗衣袋和洗衣单），中文控制器，优选中国茶包，水壶，每日提供免费的瓶装饮用水 ',
				'· 中英文船舱引导标示，中文指南/手册/说明，房间可独立调节温度，电压: 220V 和 110V ',
				],
			
		},
		{
			"cfName":"精致阳台房(中层)",
			"cfSize":"面积：19㎡ &nbsp;可住人数：2人 &nbsp;间数：19间 &nbsp;<br> 楼层：2层 ",
			"cfLong":[
				'· 客房含景观阳台及落地景观玻璃门',
				'· 客房内配有实木衣柜、卫星电话、冰柜、保险箱、以及40寸索尼平板电视',
				'· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等',
				'· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱',
				'· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等',
				'· 根据不同需求提供浴袍及拖鞋（包括洗衣袋和洗衣单），中文控制器，优选中国茶包，水壶，每日提供免费的瓶装饮用水 ',
				'· 中英文船舱引导标示，中文指南/手册/说明，房间可独立调节温度，电压: 220V 和 110V ',
				],
			
		},
		{
			"cfName":"精致阳台房(上层)",
			"cfSize":"面积：19㎡ &nbsp;可住人数：2人 &nbsp;间数：20间 &nbsp;<br> 楼层：3层 ",
			"cfLong":[
				'· 客房含景观阳台及落地景观玻璃门',
				'· 客房内配有实木衣柜、卫星电话、冰柜、保险箱、以及40寸索尼平板电视',
				'· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等',
				'· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱',
				'· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等',
				'· 根据不同需求提供浴袍及拖鞋（包括洗衣袋和洗衣单），中文控制器，优选中国茶包，水壶，每日提供免费的瓶装饮用水 ',
				'· 中英文船舱引导标示，中文指南/手册/说明，房间可独立调节温度，电压: 220V 和 110V ',
				],
			
		},
		{
			"cfName":"豪华阳台套房",
			"cfSize":"面积：25.5㎡ &nbsp;可住人数：2人 &nbsp;间数：7间 &nbsp;<br> 楼层：3层甲板中部 ",
			"cfLong":[
				'· 套房拥有开放式起居室及景观阳台',
				'· 套房内配有宽敞的实木衣柜、卫星电话、免费餐食迷你吧、保险箱、以及2台40寸索尼平板电视',
				'· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等',
				'· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱',
				'· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等',
				'· 欢迎香槟/尊尼获加[蓝牌]极品威士忌/草莓巧克力/黑鱼子酱/水果篮-（没有限制）-需要预定',
				'· 根据不同需求提供浴袍及拖鞋（包括洗衣袋和洗衣单），中文控制器，优选中国茶包，水壶，每日提供免费的瓶装饮用水 ',
				'· 中英文船舱引导标示，中文指南/手册/说明，房间可独立调节温度，电压: 220V 和 110V ',
				],
			
		},
		{
			"cfName":"奢享家套房",
			"cfSize":"面积：41㎡ &nbsp;可住人数：2人 &nbsp;间数：2间 &nbsp;<br> 楼层：3层 ",
			"cfLong":[
				'· 套房拥有270°私人全景阳台及开放式起居室，卧室含法式露台和落地景观玻璃门',
				'· 套房内配有宽敞的实木衣柜、卫星电话、免费餐食迷你吧、保险箱、以及2台40寸索尼平板电视',
				'· 可通过电视娱乐系统收看电影电视：超过30部电影（配有中文字幕），CCTV频道，专门购物频道以及相关港口城市频道等',
				'· 200cm X 160cm豪华大床 (提供双床选择)，床下空间可容纳行李箱',
				'· 卫浴间配有淋浴房、吹风机和高级沐浴用品，中文盥洗包，剃须工具包等',
				'· 欢迎香槟/尊尼获加[蓝牌]极品威士忌/草莓巧克力/黑鱼子酱/水果篮-（没有限制）-需要预定',
				'· 根据不同需求提供浴袍及拖鞋（包括洗衣袋和洗衣单），中文控制器，优选中国茶包，水壶，每日提供免费的瓶装饮用水 ',
				'· 中英文船舱引导标示，中文指南/手册/说明，房间可独立调节温度，电压: 220V 和 110V ',
				],
		},
];

module.exports.cf = cf;

// 美食荟萃
var food = [
		{
			"name":'刘一帆定制菜单',
			"describe":[
					'名厨刘一帆将中餐与西餐结合的理念贯穿于整个维京菜单中',
					'作为蓝带大师和《顶级厨师》的评委',
					'他致力于将中西美食融合荟萃',
					'带给每一位维京贵宾舌尖上的感动',
					'每艘内河游轮的厨师团队都汇聚了各地大厨',
					'包括一名广东大厨 一名四川大厨和一名外国大厨',
			],
		},
		{
			"name":'中西自助',
			"describe":[
					'每天都吃自助餐，一定单调又不好吃吧？',
					'维京的船上餐饮会让您对此彻底改观。',
					'【早餐】',
					'早餐让暖香的皮蛋瘦肉粥滋养宁的身心',
					'唤醒一天的好心情 还有各式包子 油条',
					'甚至还能吃到中式煎饼  当然也少不了西式的面包 香煎培根 花式煎蛋等',
					'【午餐&晚餐】',
					'午餐或晚餐相较而言 更为丰盛',
					'补进有哦荤素搭配的中式炒菜 精心炖煮的广式煲汤 地道的汤面炒饭',
					'也能吃到鲜嫩多汁的牛排 当地著名的海鲜 不同风味的芝士切片',
					'【甜点】',
					'船上的甜点也十分出彩',
					'甜点师结合当地特色',
					'带来每天三款不同口味的精巧美味',
			],
		},
		{
			"name":'欢迎晚宴',
			"describe":[
					'相较于平时的中西自助餐，欢迎晚宴显得更为正式。',
					'餐厅准备了从前菜到甜点的四道式餐点，并搭配白葡萄酒以佐美味',
					'整个晚餐以中西结合为概念，西式的摆盘和呈现方式，中式的菜肴及风味。',
					'在航程即将结束的前一晚，餐厅以盛情款待，为诸位贵宾奉上了海鲜自助大餐',
					'生蚝 帝王蟹 南美大虾 被装满盘中 大快朵颐',
					'如此肆意的畅吃海鲜 叫人倍感尽兴',
			],
		},
		{
			"name":'当地美食',
			"describe":[
					'如果您担心一直在船上用餐会不会很单调，那么您大可不必担心。',
					'因为维京不仅每日更新船上菜品，还为您安排了岸上的当地知名餐厅，品尝那里的美食。',
					'诸如德国猪脚、香肠、德国啤酒、瑞士芝士火锅、法式大餐等。',
			],
		},
		{
			"name":'畅饮美酒',
			"describe":[
					'维京认为，船上的每一位贵宾就如同家中的贵客，因此美酒配美食是必不可少的',
					'您在船上的每一餐都能享受到免费畅饮的葡萄酒、啤酒和各类果汁软饮。',
					'在内河游轮航行至著名的葡萄酒产区时，我们还会为您准备当地的葡萄酒，让您对当地的葡萄酒文化产生更浓厚的兴趣。',
			],
		},
		{
			"name":'现煮面档',
			"describe":[
					'船上的面档从每天早6点至凌晨12点都将为您服务。',
					'您可以在这里尝到现煮面食，每天三款选择，定期更换品种。',
					'因此，只要当您感觉有些饿了，',
					'就可以来这里让大厨为您煮上一碗热气腾腾的面条。',
			],
		},
];

module.exports.food = food;

// 餐厅酒廊

