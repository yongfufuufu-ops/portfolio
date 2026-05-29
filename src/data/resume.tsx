import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import type { ReactNode } from "react";
import { SITE, withBasePath } from "@/lib/site";

const HACKLINE_BASE_URL = "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline";

const hacklineImage = (fileName: string) => `${HACKLINE_BASE_URL}/${fileName}`;

type HackathonLink = {
  href: string;
  title: string;
  icon?: ReactNode;
};

type HackathonItem = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  links: HackathonLink[];
};

const HACKATHONS: HackathonItem[] = [
  {
    title: "造石手作",
    dates: "",
    location: "",
    description: "面向用户 DIY 的微信小程序，帮助用户在小程序内完成手作定制与个性化选择。",
    image: withBasePath("/zaoshi-shouzuo.png"),
    links: [],
  },
  {
    title: "Hack The North",
    dates: "",
    location: "",
    description: "开发了一款移动应用，向全校学生实时推送大学校园活动信息。",
    image: hacklineImage("hack-the-north.png"),
    links: [],
  },
  {
    title: "FirstNet Public Safety Hackathon",
    dates: "",
    location: "",
    description: "开发了一款移动应用，可将救护车内受害者的医疗数据传递给医院里的医生。",
    image: hacklineImage("firstnet.png"),
    links: [],
  },
  {
    title: "DeveloperWeek Hackathon",
    dates: "2018 年 2 月 3 日 - 4 日",
    location: "",
    description: "开发了一款 Web 应用，聚合社交媒体上的加密货币相关数据并预测未来价格。",
    image: hacklineImage("developer-week.jpg"),
    links: [],
  },
  {
    title: "HackDavis",
    dates: "2018 年 1 月 20 日 - 21 日",
    location: "美国 加利福尼亚州 戴维斯",
    description: "开发了一款移动应用，为用户分配每日碳排放额度，帮助人们朝更可持续的环境迈进。",
    image: hacklineImage("hack-davis.png"),
    links: [],
  },
  {
    title: "ETH Waterloo",
    dates: "2017 年 10 月 13 日 - 15 日",
    location: "",
    description: "开发了一款区块链应用，让医生和药剂师能够进行无需信任的交易，并避免患者用药过量。",
    image: hacklineImage("eth-waterloo.png"),
    links: [],
  },
  {
    title: "Hack The North",
    dates: "2017 年 9 月 15 日 - 17 日",
    location: "",
    description: "开发了一款虚拟现实应用，让用户能以第三人称视角看到自己。",
    image: hacklineImage("hack-the-north.png"),
    links: [],
  },
  {
    title: "Hack The 6ix",
    dates: "2017 年 8 月 26 日 - 27 日",
    location: "加拿大 安大略省 多伦多",
    description: "开发了一个开放平台，让寄往同一地点的人可以合并运费、节省成本。",
    image: hacklineImage("hack-the-6ix.jpg"),
    links: [],
  },
  {
    title: "Stupid Hack Toronto",
    dates: "2017 年 7 月 23 日",
    location: "加拿大 安大略省 多伦多",
    description: "开发了一个 Chrome 扩展，用来追踪你访问过哪些 Facebook 主页；如果你看了别的女生主页，它会立刻给你女朋友发短信。",
    image: hacklineImage("stupid-hackathon.png"),
    links: [],
  },
  {
    title: "Global AI Hackathon - Toronto",
    dates: "2017 年 6 月 23 日 - 25 日",
    location: "加拿大 安大略省 多伦多",
    description: "开发了一个 Python 库，可接入任意 Python 游戏，并根据玩家实时情绪动态调整游戏难度。项目使用 OpenCV 和摄像头做人脸识别，并基于 Kaggle 情绪数据集，使用 TensorFlow 和 Keras 训练了自定义机器学习模型。这个项目在 Global AI Hackathon - Toronto 获得了一等奖，并受邀在 NextAI Canada 现场演示。",
    image: hacklineImage("global-ai-hackathon.jpg"),
    links: [],
  },
  {
    title: "McGill AI for Social Innovation Hackathon",
    dates: "2017 年 6 月 17 日 - 18 日",
    location: "加拿大 魁北克省 蒙特利尔",
    description: "开发了一个使用 AI 的实时面部微表情分析器。",
    image: hacklineImage("ai-for-social-good.jpg"),
    links: [],
  },
  {
    title: "Open Source Circular Economy Days Hackathon",
    dates: "2017 年 6 月 10 日",
    location: "加拿大 安大略省 多伦多",
    description: "为食物浪费创业公司 Genecis 开发了一个定制后台界面，用于管理数据并提供分析能力。",
    image: hacklineImage("open-source-circular-economy-days.jpg"),
    links: [],
  },
  {
    title: "Make School's Student App Competition 2017",
    dates: "2017 年 5 月 19 日 - 21 日",
    location: "国际线上",
    description: "改进了 PocketDoc，并提交到线上比赛。",
    image: hacklineImage("make-school-hackathon.png"),
    links: [],
  },
  {
    title: "HackMining",
    dates: "2017 年 5 月 12 日 - 14 日",
    location: "加拿大 安大略省 多伦多",
    description: "开发了一个用于优化采矿流程的神经网络。",
    image: hacklineImage("hack-mining.png"),
    links: [],
  },
  {
    title: "Waterloo Equithon",
    dates: "2017 年 5 月 5 日 - 7 日",
    location: "",
    description: "开发了 Pocketdoc：用户拍摄实体伤口照片后，应用会返回常见处理方案或疾病治疗建议。",
    image: hacklineImage("waterloo-equithon.png"),
    links: [],
  },
  {
    title: "SpaceApps Waterloo",
    dates: "2017 年 4 月 28 日 - 30 日",
    location: "",
    description: "开发了 Earthwatch，一个 Web 应用，让飞机上的用户可以虚拟查看下方世界的重要兴趣点；他们甚至可以偏离既定航线飞出去，再按需飞回来。特别感谢 CesiumJS 提供开源的地球和飞机模型。",
    image: hacklineImage("space-apps.png"),
    links: [],
  },
  {
    title: "MHacks 9",
    dates: "2017 年 3 月 24 日 - 26 日",
    location: "美国 密歇根州 安娜堡",
    description: "开发了 Super Graphic Air Traffic，一个用于向大众介绍空中交通管制世界的 VR 网站。项目完全基于 THREE.js 和 Node 后端服务构建。",
    image: hacklineImage("mhacks-9.png"),
    links: [],
  },
  {
    title: "StartHacks I",
    dates: "2017 年 3 月 4 日 - 5 日",
    location: "",
    description: "在 StartHacks 2017 开发了 Recipic：用户拍下家里现有的食材，应用会调用 ClarifAI 图像识别 API 识别食材，并返回可制作的菜谱。Recipic 在该 Hackathon 获得了最佳展示和最佳作品的一等奖。",
    image: hacklineImage("starthacks.png"),
    links: [],
  },
  {
    title: "QHacks II",
    dates: "2017 年 2 月 3 日 - 5 日",
    location: "加拿大 安大略省 金斯顿",
    description: "开发了一款移动游戏，通过随机大厅机制在全城范围内进行“真人追逃”。",
    image: hacklineImage("qhacks.png"),
    links: [],
  },
  {
    title: "Terrible Hacks V",
    dates: "2016 年 11 月 26 日",
    location: "",
    description: "开发了一个 Windows 11 的恶搞版原型，带有一些有趣的通知和功能。",
    image: hacklineImage("terrible-hacks-v.png"),
    links: [],
  },
  {
    title: "Portal Hackathon",
    dates: "2016 年 10 月 29 日",
    location: "加拿大 安大略省 金斯顿",
    description: "开发了一个用于通过滑铁卢 Portal 应用上传作业的内部组件。",
    image: hacklineImage("portal-hackathon.png"),
    links: [],
  },
];

export const DATA = {
  name: "Yongfu Shi",
  initials: "YS",
  url: SITE.url,
  location: "Shenzhen, China",
  locationLink: "https://www.google.com/maps/place/Shenzhen",
  description:
    "AI 全栈工程师",
  summary:
    "具备 4 年以上全栈研发经验，长期聚焦 AI 应用工程化落地，能够独立完成从需求分析、方案设计到开发上线的端到端交付。熟悉 OpenAI SDK、LangGraph、MCP、RAG、Tool Calling 与长上下文管理，重点关注 Agent 架构、工作流编排，以及 AI 在真实业务中的稳定性和边界处理。前端使用 React、Next.js、TypeScript，后端以 Java / Spring 为主，同时具备 Python、PHP、Node.js 多语言开发能力，熟悉缓存、消息队列、异步流程、系统集成与区块链/P2P 网络协议实验。参与过铁路货运数字化平台、工业多模态识别系统和企业级管理平台建设，也会结合 Claude Code、Codex 等 AI 工具提升开发和排障效率。",
  avatarUrl: withBasePath("/avatar-yongfu.jpg"),
  skills: [
    { name: "Java", icon: Java },
    { name: "Spring Boot" },
    { name: "Spring Cloud Alibaba" },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "PHP" },
    { name: "LangGraph" },
    { name: "OpenAI SDK", icon: Icons.openai },
    { name: "MCP" },
    { name: "RAG" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MySQL" },
    { name: "Redis" },
    { name: "Kafka" },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
  ],
  navbar: [
    { href: withBasePath("/"), icon: HomeIcon, label: "首页" },
    { href: withBasePath("/blog"), icon: NotebookIcon, label: "博客" },
  ],
  contact: {
    email: "3210333433@qq.com",
    tel: "16625147103",
    social: {
      Email: {
        name: "Email",
        url: "mailto:3210333433@qq.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: withBasePath("/resume.pdf"),
        icon: Icons.googleDrive,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "深圳市平方科技股份有限公司",
      href: "https://www.pingfang.net/",
      badges: [],
      location: "深圳",
      title: "Backend Engineer",
      logoUrl: withBasePath("/logo-pingfang.ico"),
      start: "2024.08",
      end: "至今",
      description:
        "负责铁路货运数字化平台与工业视觉识别相关项目的后端研发与交付，承担需求分析、方案设计、接口开发、联调自测与上线支持。主导多系统对接、设备接入与核心业务链路打通，并参与核心模块稳定性与性能优化。在日常研发中持续使用 Codex、Cursor、MCP、Agent 等工具辅助代码理解、问题排查、方案整理与文档输出。",
    },
    {
      company: "中国人民保险成都研发中心",
      href: "https://www.picc.com.cn/",
      badges: [],
      location: "成都",
      title: "服务端开发工程师",
      logoUrl: withBasePath("/logo-picc.ico"),
      start: "2022.01",
      end: "2024.06",
      description:
        "参与保险预算管理平台核心业务研发，覆盖预算发起、审核反馈、预算下达、统计分析等关键流程。基于 Spring Cloud Alibaba 微服务架构承担后端模块设计与开发，并参与缓存优化、异步导出、动态表单、OA 工作流改造和历史数据迁移等系统优化工作。",
    },
  ],
  education: [
    {
      school: "成都东软学院",
      href: "https://www.nsu.edu.cn/",
      degree: "本科 · 计算机科学",
      logoUrl: withBasePath("/logo-nsu.ico"),
      start: "2018",
      end: "",
    },
  ],
  projects: [
    {
      title: "GraduMate",
      href: "",
      dates: "2026.04 - 至今",
      description:
        "基于 Supabase + LangGraph 构建多 Agent 论文生成平台，支持源码工程、论文模板与目录结构上传，完成任务编排、状态追踪、图表生成、DOCX 渲染与结果交付。通过结构化上下文治理、Schema 校验、Quality Gate 与 Python 确定性渲染降低长文本生成幻觉，沉淀约 18 个可插拔模块与 50+ 自动化测试。",
      technologies: [
        "Node.js",
        "Supabase",
        "Postgres",
        "LangGraph",
        "OpenAI SDK",
        "Codex SDK",
        "Python",
        "Zod",
        "JSON Schema",
        "Mermaid",
        "PlantUML",
        "python-docx",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Bitcoin Java 节点与 P2P 网络实验项目",
      href: "https://github.com/yongfufuufu-ops/bitcoin_java",
      dates: "2025.12 - 2026.05",
      description:
        "基于 Java 21 + Spring Boot 构建比特币节点实验项目，围绕区块、交易、UTXO、TxPool、RBF 替换、挖矿与链同步等核心能力实现基础链路。设计 RocksDB 本地存储、地址/交易索引、区块浏览接口和静态监控页面，并实现基于 QUIC/P2P 的节点连接、DHT 路由、广播、黑名单、流控与拥塞控制等网络模块。",
      technologies: [
        "Java 21",
        "Spring Boot",
        "bitcoinj",
        "RocksDB",
        "Netty",
        "QUIC",
        "P2P",
        "UTXO",
        "RBF",
        "Protobuf",
        "CUDA",
        "OpenCL",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "智能龙门吊集装箱识别系统",
      href: "",
      dates: "2025.01 - 至今",
      description:
        "面向港口龙门吊作业场景建设集装箱识别系统，设计四相机并行识别架构，并用 CompletableFuture 实现异步编排。围绕 PLC 高度、锁状态、坐标变化构建状态流转和自动触发机制，叠加置信度阈值、格式校验、频次统计与加权投票，提升复杂现场下的识别稳定性。",
      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
        "CompletableFuture",
        "Modbus",
        "Hikvision SDK",
        "C++",
      ],
      links: [],
      image: "",
      video: withBasePath("/videos/dongchuan-gantry.mp4"),
    },
    {
      title: "铁路货运全流程数字化微服务平台",
      href: "",
      dates: "2024.08 - 至今",
      description:
        "面向铁路货运全流程数字化改造，主导装卸车、设备作业等核心模块的后端设计、接口开发与联调上线。参与 10+ 外部系统协同并优化设备与装卸车模块的数据同步链路，将关键同步延迟从 30 分钟缩短到 1 分钟，支撑单股道日均装卸车数量从 15 辆提升到 24 辆。",
      technologies: [
        "Java",
        "Spring Cloud",
        "Nacos",
        "Seata",
        "Kafka",
        "MySQL",
        "Redis",
        "Vue2",
        "Uniapp",
      ],
      links: [],
      image: "",
      video: withBasePath("/videos/railway-platform.mp4"),
    },
    {
      title: "中国人民保险固定费用系统",
      href: "",
      dates: "2022.01 - 2024.06",
      description:
        "面向 36 家省公司及地市公司的固定费用预算管理平台，负责预算发起、审核反馈、预算下达与调整等核心模块。搭建 Caffeine + Redis 二级缓存优化统计查询，并通过异步批处理与任务拆分将万级数据导出时间从 120 秒缩短到 8 秒。",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Cloud Alibaba",
        "Dubbo",
        "Nacos",
        "Sentinel",
        "MySQL",
        "Redis",
        "Kafka",
        "Docker",
        "Kubernetes",
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: HACKATHONS,
} as const;
