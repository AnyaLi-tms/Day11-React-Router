# React Router Demo

这是一个使用React Router构建的示例项目，展示了推荐的React项目目录结构。

## 项目结构

```
src/
├── components/         # 可复用组件
│   └── layout/        # 布局组件
│       └── Header.jsx # 页面头部导航
├── pages/             # 页面组件
│   ├── Home.jsx       # 首页
│   └── About.jsx      # 关于页面
├── hooks/             # 自定义Hooks
│   └── useLocalStorage.js # 本地存储Hook
├── utils/             # 工具函数
│   └── constants.js   # 常量定义
├── styles/            # 样式文件
│   └── global.css     # 全局样式
├── assets/            # 静态资源
├── App.jsx            # 主应用组件（路由配置）
└── main.jsx           # 应用入口
```

## 特性

- ✅ React Router 路由管理
- ✅ 推荐的目录结构
- ✅ 组件化开发
- ✅ 自定义Hooks
- ✅ 全局样式管理
- ✅ 常量管理

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 路由

- `/` - 首页
- `/about` - 关于页面

## 技术栈

- React 19
- React Router
- Vite
- ESLint
