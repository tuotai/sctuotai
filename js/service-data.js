var serviceData = [
    {
        "id": "1",
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
        "id": "2",
        "name": "刑事辩护",
        "slug": "criminal-defense",
        "icon": "fa-gavel",
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
        "id": "3",
        "name": "政府实务",
        "slug": "government-affairs",
        "icon": "fa-landmark",
        "description": "行政复议、政府信息公开、行政诉讼等政府法律服务。",
        "details": [
            "行政复议代理",
            "行政诉讼代理",
            "政府信息公开",
            "行政处罚听证",
            "国家赔偿申请",
            "行政合规咨询"
        ]
    },
    {
        "id": "4",
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
        "id": "5",
        "name": "城市更新",
        "slug": "urban-renewal",
        "icon": "fa-city",
        "description": "城市更新项目的土地征收、补偿安置、拆迁纠纷等法律服务。",
        "details": [
            "土地征收补偿",
            "拆迁纠纷处理",
            "安置协议审查",
            "旧改项目合规",
            "权属纠纷解决",
            "更新项目融资"
        ]
    },
    {
        "id": "6",
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
        "id": "7",
        "name": "合规风控",
        "slug": "compliance-risk",
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
        "id": "8",
        "name": "投资并购",
        "slug": "investment-ma",
        "icon": "fa-right-left",
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
        "id": "9",
        "name": "证券财税",
        "slug": "securities-tax",
        "icon": "fa-chart-line",
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
        "id": "10",
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
        "id": "11",
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
        "id": "12",
        "name": "建设工程",
        "slug": "construction-engineering",
        "icon": "fa-hammer",
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
        "id": "13",
        "name": "能源资源",
        "slug": "energy-resources",
        "icon": "fa-bolt",
        "description": "能源项目开发、资源勘探开采、环境保护等法律服务。",
        "details": [
            "能源项目开发",
            "矿产勘探开采",
            "环境保护合规",
            "能源项目融资",
            "资源权转让",
            "新能源法律服务"
        ]
    },
    {
        "id": "14",
        "name": "特许经营",
        "slug": "franchise",
        "icon": "fa-handshake-simple",
        "description": "特许经营协议审查、许可申请、品牌授权等法律服务。",
        "details": [
            "特许经营协议",
            "许可申请服务",
            "品牌授权管理",
            "连锁加盟合规",
            "特许经营纠纷",
            "区域代理服务"
        ]
    },
    {
        "id": "15",
        "name": "国际贸易",
        "slug": "international-trade",
        "icon": "fa-globe",
        "description": "跨境贸易、进出口合规、贸易救济等法律服务。",
        "details": [
            "国际贸易合同",
            "进出口合规",
            "贸易救济措施",
            "海关事务处理",
            "跨境投资服务",
            "外贸纠纷解决"
        ]
    }
];