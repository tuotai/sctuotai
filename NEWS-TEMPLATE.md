# 拓泰资讯添加模板

## 使用方法

1. 打开 GitHub 仓库：https://github.com/tuotai/sctuotai
2. 点击 `news-detail.html` 文件
3. 点击 ✏️ Edit 进入编辑模式
4. 找到文章列表末尾，复制以下模板并填写内容
5. 点击 Commit changes

---

## 文章模板（复制这段）

```javascript
'NEW-ARTICLE-ID': {
    title: '【拓泰动态】您的文章标题',
    category: '业务活动',  // 可选：业务活动、拓泰荣誉、拓泰研究、拓泰人文
    date: '2026-05-04',    // 格式：YYYY-MM-DD
    image: 'https://picsum.photos/seed/your-id/800/400',
    summary: '文章摘要内容，将显示在列表页面...',
    wechatUrl: 'https://mp.weixin.qq.com/s/...'  // 微信公众号文章链接（可选）
},
```

---

## 填写说明

| 字段 | 必填 | 说明 | 示例 |
|------|------|------|------|
| `NEW-ARTICLE-ID` | 是 | 唯一标识，不能重复 | `new-article-2026` |
| `title` | 是 | 文章标题 | `【拓泰动态】新文章标题` |
| `category` | 是 | 分类 | `业务活动` |
| `date` | 是 | 发布日期 | `2026-05-04` |
| `image` | 是 | 封面图片URL | `https://picsum.photos/seed/xxx/800/400` |
| `summary` | 是 | 文章摘要 | 简介内容... |
| `wechatUrl` | 否 | 微信公众号链接 | `https://mp.weixin.qq.com/s/...` |

---

## 分类选项

- **业务活动**：律所业务动态、对外合作、会议交流等
- **拓泰荣誉**：获得的奖项、荣誉称号等
- **拓泰研究**：法律研究、专业文章等
- **拓泰人文**：律所文化、团队活动、生活随笔等

---

## 示例

```javascript
'new-article-2026-05': {
    title: '【拓泰动态】我所举办企业合规培训讲座',
    category: '业务活动',
    date: '2026-05-04',
    image: 'https://picsum.photos/seed/training-2026/800/400',
    summary: '5月4日，我所成功举办企业合规管理专题培训讲座，邀请业内专家为企业代表解读最新合规政策。',
    wechatUrl: 'https://mp.weixin.qq.com/s/abc123'
},
```