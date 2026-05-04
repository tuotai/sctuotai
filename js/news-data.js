var newsData = [
    {
        id: 'youth-award-2026',
        title: '【拓泰动态】礼遇青年骨干，赋能新锐绽风华',
        category: '拓泰人文',
        date: '2026-04-29',
        image: 'https://picsum.photos/seed/youth/800/400',
        summary: '拓泰青年律师王瑞，凭借过硬的专业素养、务实的工作作风与优异的业务成果，荣获律所专项激励，配置专属独立办公室。',
        wechatUrl: 'https://mp.weixin.qq.com/s/W1zKCsGu-xO37nA6HvdL1g'
    },
    {
        id: 'legal-aid-2026',
        title: '【拓泰动态】千里赴援 助力孤老交通事故纠纷',
        category: '业务活动',
        date: '2026-04-24',
        image: 'https://picsum.photos/seed/legal-aid/800/400',
        summary: '我所王馨媛律师积极响应法律援助号召，为一位75岁高龄孤寡老人提供交通事故责任纠纷案件的法律援助。',
        wechatUrl: 'https://mp.weixin.qq.com/s/_rNwFlzSIZMCT5lO5FCbtA'
    },
    {
        id: 'thailand-forum-2026',
        title: '【拓泰动态】我所联合国力公证处与泰国机构座谈 推进中泰法律协作',
        category: '业务活动',
        date: '2026-04-15',
        image: 'https://picsum.photos/seed/thailand/800/400',
        summary: '我所守创团队与泰国博海翻译咨询有限公司举行交流座谈会，推进"一带一路"倡议下的法律及商事合作。',
        wechatUrl: 'https://mp.weixin.qq.com/s/cOyVKJgopQibbZY1-hE1GQ'
    },
    {
        id: 'taoyuan-lawyer-2026',
        title: '【拓泰动态】拓泰·桃园团律师受聘担任国企外部董事',
        category: '业务活动',
        date: '2026-04-10',
        image: 'https://picsum.photos/seed/taoyuan/800/400',
        summary: '我所高级合伙人黄礼律师正式受聘为眉山某国企兼职外部董事。',
        wechatUrl: 'https://mp.weixin.qq.com/s/jR48gC1FXFDLs7-faI3ueQ'
    },
    {
        id: 'yanjun-team-2026',
        title: '【拓泰动态】热烈欢迎严俊律师团队加盟 共谱拓泰律所发展新篇章',
        category: '业务活动',
        date: '2026-04-03',
        image: 'https://picsum.photos/seed/yanjun/800/400',
        summary: '拓泰律所成功引进资深律师严俊团队，为规模化、专业化发展战略筑牢人才根基。',
        wechatUrl: 'https://mp.weixin.qq.com/s/IRD3VNLSkJlbPO6vQNsoiw'
    },
    {
        id: 'life-seven-part2',
        title: '【拓泰生活】七分（二）',
        category: '拓泰人文',
        date: '2026-04-23',
        image: 'https://picsum.photos/seed/life7-2/800/400',
        summary: '岁月含情，一念温柔。七分一家迎来了新的一年，他们终于在城里有了自己的房子。',
        wechatUrl: 'https://mp.weixin.qq.com/s/_2ZhGbrfEx8PYMYWFkUr4Q'
    },
    {
        id: 'life-seven-part1',
        title: '【拓泰生活】七分（一）',
        category: '拓泰人文',
        date: '2026-04-17',
        image: 'https://picsum.photos/seed/life7-1/800/400',
        summary: '七分出生在一个贫困的年代，在家排行老三。他上面有两个哥哥、一个姐姐，下面有一个妹妹、一个弟弟。',
        wechatUrl: 'https://mp.weixin.qq.com/s/hXU5f8d29yu4OBba5vLL_w'
    },
    {
        id: 'peach-plum-tree',
        title: '【拓泰生活】难忘故乡桃李树',
        category: '拓泰人文',
        date: '2026-02-26',
        image: 'https://picsum.photos/seed/peach-plum/800/400',
        summary: '少小离家，不知不觉离开故乡已有三十余年，故乡的记忆虽已模糊，但家乡的味道却时常萦绕心头。',
        wechatUrl: 'https://mp.weixin.qq.com/s/R2LIWeKBxyXNmcAMkyGtww'
    },
    {
        id: 'annual-meeting-2026',
        title: '【拓泰动态】四川拓泰律师事务所2025年度总结暨2026年新春年会活动圆满落幕',
        category: '拓泰人文',
        date: '2026-02-01',
        image: 'https://picsum.photos/seed/meeting/800/400',
        summary: '律所同仁齐聚成都安仁福朋喜来登酒店，参加"2025年度总结暨2026新春年会"。',
        wechatUrl: 'https://mp.weixin.qq.com/s/GskCKKGaDGESR4R7IoZybA'
    },
    {
        id: 'public-welfare-honor-2025',
        title: '【拓泰动态】践行公益初心｜拓泰律所再获履职表彰',
        category: '拓泰荣誉',
        date: '2025-12-30',
        image: 'https://picsum.photos/seed/public-welfare/800/400',
        summary: '因在"法务助手"岗位上的专业履职与公益担当，我所再次获得金沙街道人大工委的表彰。',
        wechatUrl: 'https://mp.weixin.qq.com/s/oM_G7oNhmMuQ4rV8RpTkZw'
    },
    {
        id: 'chengdu-lawyer-association-2024',
        title: '【拓泰喜讯】我所主任当选成都市律师协会专业委员会副主任、多位律师当选委员',
        category: '拓泰荣誉',
        date: '2024-12-26',
        image: 'https://picsum.photos/seed/lawyer-assoc/800/400',
        summary: '我所主任吴苛政成功当选为成都市律师协会公司法专业委员会副主任。',
        wechatUrl: 'https://mp.weixin.qq.com/s/8ovCyfBJJte8-5cDAjWLxA'
    },
    {
        id: 'xiong-yi-honor-2025',
        title: '【拓泰喜报】我所高级合伙人熊艺律师荣获四川省律师行业优秀共产党员称号',
        category: '拓泰荣誉',
        date: '2025-07-03',
        image: 'https://picsum.photos/seed/xiongyi/800/400',
        summary: '熊艺律师凭借其坚定的政治立场、精湛的专业能力荣获"四川省律师行业优秀共产党员"称号。',
        wechatUrl: 'https://mp.weixin.qq.com/s/O6zb4EjK_l3TS5M2vXxrVA'
    },
    {
        id: 'company-law-category-2024',
        title: '【拓泰研究】公司法新规—类别股',
        category: '拓泰研究',
        date: '2024-10-15',
        image: 'https://picsum.photos/seed/company-law/800/400',
        summary: '2023年《公司法》正式引入了类别股制度，本文详细解析了类别股的定义、发展历程和主要类型。',
        wechatUrl: 'https://mp.weixin.qq.com/s/nXXZqrY05Bu5nKny1Qyspg'
    },
    {
        id: 'securities-dispute-2024',
        title: '【拓泰研究】证券虚假陈述责任纠纷实务争议焦点',
        category: '拓泰研究',
        date: '2024-09-25',
        image: 'https://picsum.photos/seed/securities/800/400',
        summary: '本文通过对相关案例的筛选总结，探讨实务中证券虚假陈述责任纠纷案件的争议焦点。',
        wechatUrl: 'https://mp.weixin.qq.com/s/gpzRE1S8d71rSBli4fdlWA'
    },
    {
        id: 'cdut-cooperation-2025',
        title: '【拓泰动态】成都理工大学文法学院与拓泰律所举行院所合作共建签约仪式',
        category: '业务活动',
        date: '2025-12-24',
        image: 'https://picsum.photos/seed/cdut/800/400',
        summary: '成都理工大学文法学院与拓泰律所举行院所合作共建签约仪式，推进法学教育与法律实务的紧密结合。',
        wechatUrl: 'https://mp.weixin.qq.com/s/6qeti-zgjJNenfUbvFN4dA'
    },
    {
        id: 'visit-guide-2026',
        title: '【到访指引】四川拓泰律师事务所访客路线指引',
        category: '业务活动',
        date: '2026-03-11',
        image: 'https://picsum.photos/seed/visit-guide/800/400',
        summary: '律所地址位于成都市青羊区光华南四路186号航空国创中心E4栋8层。',
        wechatUrl: 'https://mp.weixin.qq.com/s/y7Gfi2Lk7IGBzFwPDTAdKw'
    },
    {
        id: 'limengsong-2026',
        title: '【拓泰动态】执行主任李孟松履职再创佳绩，两件建议入选2026年区人大督办建议',
        category: '业务活动',
        date: '2026-03-18',
        image: 'https://picsum.photos/seed/limengsong/800/400',
        summary: '我所执行主任李孟松律师提交的两件建议双双被青羊区人大常委会评为2026年重点督办建议。',
        wechatUrl: 'https://mp.weixin.qq.com/s/InWVc9bMWU9ITn-gQ9P5Ig'
    },
    {
        id: 'party-building-honor-2026',
        title: '【拓泰党建】我所党建工作入选四川省律师行业党建工作典型案例',
        category: '拓泰荣誉',
        date: '2026-03-26',
        image: 'https://picsum.photos/seed/party-honor/800/400',
        summary: '我所申报的《以十个标准化为引领 推动党建与业务同频共振》案例成功入选。',
        wechatUrl: 'https://mp.weixin.qq.com/s/IVLh2Yap977UHTMcDDEs0A'
    }
];

function getNewsById(id) {
    return newsData.find(n => n.id === id);
}

function getNewsByCategory(category) {
    return newsData.filter(n => n.category === category).sort((a, b) => new Date(b.date) - new Date(a.date));
}

function getAllCategories() {
    return [...new Set(newsData.map(n => n.category))];
}