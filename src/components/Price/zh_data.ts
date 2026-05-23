export type PriceBaseOption = {
    value: number;
    label: string;
    id: string;
    description: string;
    symbol: "￥" | "X100%";
};

// ========== 系数类（symbol: "X100%"）==========

// 裤长选项 - 系数
const lengthOptions: PriceBaseOption[] = [
    {
        value: 0.62,
        label: "短裤",
        id: "short",
        description: "裤长约为标准长裤的62%，适合夏季或运动休闲场景",
        symbol: "X100%"
    },
    {
        value: 0.91,
        label: "中裤",
        id: "middle",
        description: "裤长约为标准长裤的91%，介于短裤与长裤之间，四季可穿",
        symbol: "X100%"
    },
    {
        value: 1,
        label: "长裤",
        id: "long",
        description: "标准裤长基准值，覆盖脚踝，适合正式及日常穿着",
        symbol: "X100%"
    },
    {
        value: 1.21,
        label: "超长裤",
        id: "longger",
        description: "裤长约为标准长裤的121%，盖住鞋面，营造街头/拖地风格",
        symbol: "X100%"
    },
];

// 版型选项 - 耗料系数
const fitOptions: PriceBaseOption[] = [
    {
        label: "束脚",
        value: 0.93,
        id: "slim",
        description: "裤脚收窄设计，贴合脚踝，显腿长且防风，运动休闲首选",
        symbol: "X100%"
    },
    {
        label: "直筒",
        value: 1.0,
        id: "regular",
        description: "裤管上下等宽，经典百搭版型，修饰腿型不挑身材",
        symbol: "X100%"
    },
    {
        label: "宽松",
        value: 1.2,
        id: "loose",
        description: "裤管宽松有余量，舒适透气，适合街头潮流或宽松穿搭风格",
        symbol: "X100%"
    },
];

// 缩水率选项 - 放码系数
const shrinkageOptions: PriceBaseOption[] = [
    {
        label: "无需预缩（化纤/预缩面料）",
        value: 1.0,
        id: "none",
        description: "化纤或已预缩面料，成衣尺寸稳定，水洗后基本无缩水",
        symbol: "X100%"
    },
    {
        label: "低缩水（涤纶/混纺）",
        value: 1.02,
        id: "low",
        description: "涤纶/混纺面料，建议预留2%缩水余量，日常机洗尺寸变化小",
        symbol: "X100%"
    },
    {
        label: "中缩水（纯棉/常规针织）",
        value: 1.05,
        id: "medium",
        description: "纯棉/常规针织面料，建议预留5%缩水余量，首次水洗后趋于稳定",
        symbol: "X100%"
    },
    {
        label: "高缩水（牛仔/未预缩棉）",
        value: 1.06,
        id: "high",
        description: "牛仔布/未预缩棉，建议预留6%缩水余量，需冷水洗涤避免过度收缩",
        symbol: "X100%"
    },
    {
        label: "极高缩水（手工染/特殊工艺）",
        value: 1.12,
        id: "extreme",
        description: "手工染色/特殊工艺面料，建议预留12%缩水余量，建议专业护理",
        symbol: "X100%"
    },
];

// 口袋款式选项 - 耗料系数
const pocketOptions: PriceBaseOption[] = [
    {
        label: "四袋款",
        value: 4.8,
        id: "Classic4Pocket",
        description: "经典两前插袋+两后贴袋设计，简洁实用，适合商务休闲裤",
        symbol: "X100%"
    },
    {
        label: "五袋款",
        value: 5,
        id: "Classic5Pocket",
        description: "标准牛仔裤配置：两前插袋+两后贴袋+1小表袋，功能与复古兼顾",
        symbol: "X100%"
    },
    {
        label: "侧边双袋",
        value: 7,
        id: "cargoPocket",
        description: "大腿两侧加装立体工装袋，容量大、风格硬朗，适合户外/潮流款式",
        symbol: "X100%"
    },
];

// 腰头工艺选项 - 耗料系数
const waistOptions: PriceBaseOption[] = [
    {
        label: '平裤头',
        value: 1,
        id: 'flatWaist',
        description: '传统平腰头+纽扣/拉链闭合，挺括有型，适合正装及修身裤款',
        symbol: "X100%"
    },
    {
        label: '松紧裤头',
        value: 1.1,
        id: 'elasticWaist',
        description: '全周松紧带设计，穿脱便捷，弹性舒适，适合运动/居家裤',
        symbol: "X100%"
    },
    {
        label: '抽绳+松紧',
        value: 1.2,
        id: 'drawElasticWaist',
        description: '松紧腰头+外置抽绳调节，兼顾弹性与自定义松紧，运动休闲首选',
        symbol: "X100%"
    },
    {
        label: '半松紧',
        value: 1.15,
        id: 'backElasticWaist',
        description: '仅后腰/侧腰采用松紧设计，前腰保持平整，平衡舒适与正式感',
        symbol: "X100%"
    }
];

// 裤耳数量选项 - 系数
const beltLoopOptions: PriceBaseOption[] = [
    {
        label: "5个裤耳/裤带袢",
        value: 1,
        id: "beltLoop5",
        description: "标准5个裤带袢分布（前2+侧2+后1），稳固腰带，经典配置",
        symbol: "X100%"
    },
    {
        label: "6个裤耳/裤带袢",
        value: 1.02,
        id: "beltLoop6",
        description: "增加1个后中裤耳，腰带固定更均匀，防止后腰下滑，提升穿着稳定性",
        symbol: "X100%"
    },
];

// ========== 成本类（symbol: "￥"）==========

// 裁布选项 - 裁剪工时成本（元/件）
const cuttingTableOptions: PriceBaseOption[] = [
    {
        id: "noInterleaving",
        label: "直接叠裁（无需隔纸）",
        value: 0.3,
        description: "面料直接叠放裁剪，效率最高，适合不易移位/不掉色/无静电的常规梭织面料",
        symbol: "￥"
    },
    {
        id: "interleavedEveryLayer",
        label: "隔纸分床（每层隔纸）",
        value: 0.4,
        description: "每层面料间垫隔纸，防滑动/染色/静电，精度最高，适合真丝/印花/深色/毛绒面料",
        symbol: "￥"
    },
];

// 后档缝工艺选项 - 加工成本（元/件）
const backRiseOptions: PriceBaseOption[] = [
    {
        label: '埋夹/双针夹缝',
        value: 0.45,
        id: 'felledSeam',
        description: '双针车缝+埋夹工艺，接缝平整牢固，耐磨性强，高端裤装常用',
        symbol: "￥"
    },
    {
        label: '包边/拷边',
        value: 0.3,
        id: 'Overlock',
        description: '锁边车缝+包边处理，工艺简洁效率高，适合日常休闲裤款',
        symbol: "￥"
    }
];

// 后袋装饰选项 - 附加成本（元/件）
const backPocketOptions: PriceBaseOption[] = [
    {
        label: "无样式",
        value: 0,
        id: "backPocketNot",
        description: "后袋保持素面设计，无额外装饰，简约百搭",
        symbol: "￥"
    },
    {
        label: "绣花",
        value: 1,
        id: "backPocketEmbroidery",
        description: "后袋采用电脑绣花工艺，图案精致立体，提升品牌辨识度与细节质感",
        symbol: "￥"
    },
    {
        label: "烫图",
        value: 1,
        id: "backPocketDTFTransfer",
        description: "使用DTF数码烫画工艺，色彩丰富、图案清晰，适合潮流印花设计",
        symbol: "￥"
    },
    {
        label: "烫标",
        value: 1,
        id: "backPocketHeatSealLabel",
        description: "后袋缝制/烫压品牌织标或皮标，简约彰显品牌身份",
        symbol: "￥"
    },
    {
        label: "压花",
        value: 1,
        id: "backPocketDebossing",
        description: "通过热压工艺在面料表面形成凹凸纹理，低调奢华，触感独特",
        symbol: "￥"
    },
];

// 袋布材质选项 - 附加成本（元/件）
const pocketBagOptions: PriceBaseOption[] = [
    {
        label: "无袋布",
        value: 0,
        id: "pocketBagNot",
        description: "口袋仅由面料反折构成，无独立袋布，轻量化设计，适合薄款/简约裤",
        symbol: "￥"
    },
    {
        label: "涤棉混纺袋布",
        value: 0.35,
        id: "pocketBagPolyesterCottonMix",
        description: "T/C混纺专用口袋布，耐磨抗皱、成本低，行业主流选择",
        symbol: "￥"
    },
    {
        label: "裤子本布袋布",
        value: 0.5,
        id: "pocketBagSelfFabric",
        description: "袋布采用与大身相同面料，内外质感统一，高端裤装常用工艺",
        symbol: "￥"
    }
];

// 拉链配置选项 - 附加成本（元/件）
const zipperOptions: PriceBaseOption[] = [
    {
        label: "无拉链",
        value: 0,
        id: "notZipper",
        description: "前门襟采用纽扣/魔术贴等闭合方式，无拉链设计，复古或特定风格需求",
        symbol: "￥"
    },
    {
        label: "铝合金拉链",
        value: 0.18,
        id: "aluminumAlloyZipper",
        description: "轻质铝合金齿+自动锁头，开合顺滑、耐腐蚀，运动/户外裤优选",
        symbol: "￥"
    },
    {
        label: "不锈钢拉链",
        value: 0.23,
        id: "StainlessSteelZipper",
        description: "304不锈钢齿+电镀处理，高强度防锈、质感高级，高端工装/牛仔首选",
        symbol: "￥"
    }
];

// 外包装选项 - 附加成本（元/件）
const polybagOptions: PriceBaseOption[] = [
    {
        label: "PE拉链袋",
        value: 0.18,
        id: "PE",
        description: "LDPE/LLDPE材质+自封拉链，可重复开合，防潮防尘，电商发货常用",
        symbol: "￥"
    },
    {
        label: "OPP不干胶自粘袋",
        value: 0.12,
        id: "OPP",
        description: "BOPP高透明材质+不干胶封口，展示效果好，成本低，零售陈列优选",
        symbol: "￥"
    },
    {
        label: "CPE磨砂拉链袋",
        value: 0.27,
        id: "CPE",
        description: "CPE磨砂质感+拉链设计，手感高级、防刮花，适合中高端品牌包装",
        symbol: "￥"
    }
];

// 纽扣选项 - 附加成本（元/件）
const buttonOptions: PriceBaseOption[] = [
    {
        label: "无扣",
        value: 0.01,
        id: "notButton",
        description: "腰头或许用松紧腰，不需要用钉扣",
        symbol: "￥"
    },
    {
        label: "不锈钢扣",
        value: 0.05,
        id: "stainlessSteelButton",
        description: "304不锈钢材质，耐腐蚀、强度高，适合工装/户外/高品质裤款",
        symbol: "￥"
    },
    {
        label: "合金扣",
        value: 0.1,
        id: "alloyButton",
        description: "锌合金压铸+电镀工艺，造型多样、成本适中，主流成衣常用",
        symbol: "￥"
    },
];

// 后袋唛选项 - 附加成本（元/件）
const backPocketLabelOptions: PriceBaseOption[] = [
    {
        label: "无后袋唛",
        value: 0,
        id: "noBackPocketLabel",
        description: "后袋无品牌标识，保持简洁外观，适合基础款或客户自定义需求",
        symbol: "￥"
    },
    {
        label: "有后袋唛",
        value: 0.05,
        id: "hasBackPocketLabel",
        description: "后袋缝制/烫压品牌唛标，强化品牌露出，提升产品辨识度",
        symbol: "￥"
    }
];

const leatherPatchOptions: PriceBaseOption[] = [
    {
        id: "noLeatherPatch",
        label: "无皮牌",
        value: 0,
        description: "不配置后腰/后袋皮标，保持素面设计，适合极简风格或客户自备辅料方案",
        symbol: "￥"
    },
    {
        id: "artificialLeather",
        label: "人造革皮牌",
        value: 0.35,
        description: "采用PU/PVC合成革材质，手感柔软+易压花烫印，性价比高，适合快时尚及基础款品牌标识",
        symbol: "￥"
    },
    {
        id: "leatherPatchwithMetalHardware",
        label: "带有五金的皮牌",
        value: 1,
        description: "皮革基底搭配金属铆钉/嵌件或螺丝固定，双重质感+结构牢固，适合中高端牛仔/工装及复古系列",
        symbol: "￥"
    },
];
const careLabelOptions: PriceBaseOption[] = [
    {
        id: "noCareLabel",
        label: "无洗水标",
        value: 0,
        description: "不配置内侧护理标，适合样衣/定制单或客户自行提供标签",
        symbol: "￥"
    },
    {
        id: "printedPolyesterLabel",
        label: "涤纶印标",
        value: 0.04,
        description: "涤纶缎带+热转印/丝印工艺，单面印刷洗涤符号，成本最低，基础款常用",
        symbol: "￥"
    },
]
const hangTagStringOptions: PriceBaseOption[] = [
    {
        id: "noHangTagString",
        label: "无吊绳",
        value: 0,
        description: "吊牌直接穿绳孔悬挂或采用自粘袋包装，零附加成本，适合基础款或客户自备吊挂配件",
        symbol: "￥"
    },
    {
        id: "polyesterString",
        label: "涤纶吊绳",
        value: 0.05,
        description: "涤纶材质强力高+色牢度优，表面光滑不易起毛打结，性价比高，快时尚及常规成衣首选",
        symbol: "￥"
    },
    {
        id: "waxedString",
        label: "蜡制吊绳",
        value: 0.12,
        description: "芯线表面浸蜡处理，手感顺滑+耐磨抗拉不易散股，质感高级，适合牛仔/皮具/中高端品牌",
        symbol: "￥"
    }
];
const pocketCardOptions: PriceBaseOption[] = [
    {
        id: "noPocketCard",
        label: "无口袋卡",
        value: 0,
        description: "不配置口袋插卡，保持极简内里设计或按客户订单按需定制",
        symbol: "￥"
    },
    {
        id: "standardCoatedPocketCard",
        label: "标准铜版纸口袋卡",
        value: 0.03,
        description: "157g铜版纸双面彩印，色彩还原度高，成本最低，适合快时尚及基础款",
        symbol: "￥"
    },
]

const waistCardOptions: PriceBaseOption[] = [
    {
        id: "noWaistCard",
        label: "无口袋卡",
        value: 0,
        description: "不配置口袋插卡，保持极简内里设计或按客户订单按需定制",
        symbol: "￥"
    },
    {
        id: "standardCoatedWaistCard",
        label: "标准铜版纸口袋卡",
        value: 0.03,
        description: "157g铜版纸双面彩印，色彩还原度高，成本最低，适合快时尚及基础款",
        symbol: "￥"
    },
]

const washingFlow = {
    
}

type FabricPriceFormData = {
    lengthFactor: number;
    fitFactor: number;
    shrinkageFactor: number;
    pricePerMeter: number;
};

type ProgressPriceFormData = {
    cuttingtableCost: number;
    pocketCost: number;
    waistFactor: number;
    backRiseCost: number;
    beltLoopFactor: number;
    backPocketCost: number;
};

type TrimsAndAccessoriesPriceFormData = {
    pocketBagCost: number;
    zipperCost: number;
    polyBagCost: number;
    buttonCost: number;
    backPocketLabelCost: number;
    leatherPatchCost: number;
    careLabelCost: number;
    hangTagStringCost: number;
}



export type {
    FabricPriceFormData,
    ProgressPriceFormData,
    TrimsAndAccessoriesPriceFormData
}

export {
    lengthOptions,
    fitOptions,
    shrinkageOptions,

    cuttingTableOptions,
    pocketOptions,
    waistOptions,
    backRiseOptions,
    beltLoopOptions,
    backPocketOptions,

    pocketBagOptions,
    zipperOptions,
    polybagOptions,
    buttonOptions,
    backPocketLabelOptions,
    leatherPatchOptions,
    hangTagStringOptions,
    careLabelOptions,
}