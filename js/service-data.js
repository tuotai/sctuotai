var serviceData = [
  {
    "id": "1",
    "name": "行政法律",
    "slug": "administrative-law",
    "icon": "fa-gavel",
    "description": "提供行政复议、行政诉讼、政府信息公开等法律服务。",
    "details": [
      "行政复议代理",
      "行政诉讼代理",
      "政府信息公开申请",
      "行政处罚听证",
      "国家赔偿申请",
      "行政合规咨询"
    ]
  },
  {
    "id": "2",
    "name": "公司业务",
    "slug": "corporate-business",
    "icon": "fa-industry",
    "description": "涵盖公司设立、变更、并购、解散清算等全生命周期法律服务。",
    "details": [
      "公司设立与变更",
      "公司章程制定",
      "股权结构设计",
      "公司合并与分立",
      "公司解散清算",
      "股东权益保护"
    ]
  },
  {
    "id": "3",
    "name": "国资国企",
    "slug": "state-owned-assets",
    "icon": "fa-building",
    "description": "为国有企业提供改制重组、产权交易、合规管理等专业服务。",
    "details": [
      "国企改制重组",
      "国有产权交易",
      "国企合规管理",
      "混合所有制改革",
      "国企法人治理",
      "国有资产处置"
    ]
  },
  {
    "id": "4",
    "name": "合规内控",
    "slug": "compliance-internal-control",
    "icon": "fa-shield",
    "description": "帮助企业建立健全合规体系，防范法律风险，确保稳健运营。",
    "details": [
      "合规体系建设",
      "内部控制设计",
      "法律风险评估",
      "合规培训服务",
      "合规审查服务",
      "反垄断合规"
    ]
  },
  {
    "id": "5",
    "name": "投资并购",
    "slug": "investment-ma",
    "icon": "fa-exchange",
    "description": "提供尽职调查、交易结构设计、协议起草等一站式并购服务。",
    "details": [
      "法律尽职调查",
      "交易结构设计",
      "并购协议起草",
      "商务谈判支持",
      "并购交割服务",
      "并购后整合"
    ]
  },
  {
    "id": "6",
    "name": "金融证券",
    "slug": "financial-securities",
    "icon": "fa-line-chart",
    "description": "服务银行、证券、保险等金融机构，处理各类金融法律事务。",
    "details": [
      "银行法律服务",
      "证券法律服务",
      "保险法律服务",
      "信托法律服务",
      "融资租赁服务",
      "金融纠纷解决"
    ]
  },
  {
    "id": "7",
    "name": "知识产权",
    "slug": "intellectual-property",
    "icon": "fa-copyright",
    "description": "专利、商标、著作权申请与维权，知识产权战略布局咨询。",
    "details": [
      "专利申请与保护",
      "商标注册与维权",
      "著作权登记与保护",
      "知识产权诉讼",
      "商业秘密保护",
      "知识产权许可"
    ]
  },
  {
    "id": "8",
    "name": "建设工程",
    "slug": "construction-engineering",
    "icon": "fa-building-o",
    "description": "工程招投标、合同管理、索赔纠纷等建设领域法律服务。",
    "details": [
      "工程招投标服务",
      "建设工程合同",
      "工程索赔纠纷",
      "工程质量争议",
      "工程结算纠纷",
      "工程造价鉴定"
    ]
  },
  {
    "id": "9",
    "name": "执行重组",
    "slug": "execution-restructuring",
    "icon": "fa-refresh",
    "description": "企业破产清算、债务重组、强制执行等法律服务。",
    "details": [
      "破产清算服务",
      "债务重组服务",
      "强制执行代理",
      "破产重整服务",
      "资产处置服务",
      "执行异议处理"
    ]
  },
  {
    "id": "10",
    "name": "财务税收",
    "slug": "financial-tax",
    "icon": "fa-calculator",
    "description": "税务筹划、税务争议解决、财务合规等专业服务。",
    "details": [
      "税务筹划服务",
      "税务争议解决",
      "财务合规服务",
      "税务稽查应对",
      "税收优惠申请",
      "跨境税务咨询"
    ]
  },
  {
    "id": "11",
    "name": "刑事辩护",
    "slug": "criminal-defense",
    "icon": "fa-balance-scale",
    "description": "提供侦查、审查起诉、审判阶段的刑事辩护及法律帮助。",
    "details": [
      "侦查阶段辩护",
      "审查起诉辩护",
      "一审二审辩护",
      "死刑复核辩护",
      "刑事申诉代理",
      "取保候审申请"
    ]
  },
  {
    "id": "12",
    "name": "文化旅游",
    "slug": "cultural-tourism",
    "icon": "fa-plane",
    "description": "文旅项目开发、景区运营、文化产业投融资等法律服务。",
    "details": [
      "文旅项目开发",
      "景区运营服务",
      "文化产业投资",
      "文旅项目融资",
      "文旅IP保护",
      "文旅纠纷解决"
    ]
  },
  {
    "id": "13",
    "name": "民事诉讼",
    "slug": "civil-litigation",
    "icon": "fa-gavel",
    "description": "处理各类民事纠纷，包括合同争议、侵权责任等诉讼代理服务。",
    "details": [
      "合同纠纷诉讼",
      "侵权责任纠纷",
      "物权确认诉讼",
      "债务纠纷处理",
      "不当得利诉讼",
      "其他民事诉讼"
    ]
  },
  {
    "id": "14",
    "name": "劳动人事",
    "slug": "labor-employment",
    "icon": "fa-users",
    "description": "劳动争议处理、劳动合同起草、企业人力资源合规等法律服务。",
    "details": [
      "劳动争议处理",
      "劳动合同起草",
      "人力资源合规",
      "集体合同协商",
      "工伤认定处理",
      "裁员安置方案"
    ]
  },
  {
    "id": "15",
    "name": "婚姻家事",
    "slug": "marriage-family",
    "icon": "fa-home",
    "description": "婚姻家庭纠纷、继承与遗嘱、财富传承等私人法律顾问服务。",
    "details": [
      "婚姻纠纷处理",
      "离婚诉讼代理",
      "财产分割处理",
      "子女抚养权争议",
      "遗嘱继承服务",
      "财富传承规划"
    ]
  }
];

function getAllServices() { return serviceData; }
function getServiceById(id) { return serviceData.find(s => s.id === id); }
function getServiceBySlug(slug) { return serviceData.find(s => s.slug === slug); }