const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const askBtn = document.getElementById("askBtn");
const clearBtn = document.getElementById("clearBtn");

const lenses = [
  {
    keys: ["意识", "主观", "心灵", "self"],
    title: "【计算意识视角】",
    body:
      "若将意识看成信息整合过程，它并不否定人的独特性。数学模型描述的是结构，而人文关怀讨论的是体验与意义。结构可被计算，痛苦与尊严仍需被伦理承认。",
  },
  {
    keys: ["自由", "意志", "选择", "责任"],
    title: "【优化与自由视角】",
    body:
      "从AI角度，自由可理解为“在约束下保持多目标优化能力”。人并非完全无约束，而是在社会、情感、记忆的约束中持续重写目标函数，这正是责任伦理的来源。",
  },
  {
    keys: ["伦理", "公平", "正义", "偏见"],
    title: "【算法伦理视角】",
    body:
      "数学可量化偏差，却无法单独给出“应当如何”。因此技术系统需要双重校准：统计公平 + 人文价值协商。前者给出可验证性，后者给出正当性。",
  },
  {
    keys: ["艺术", "美", "创作", "文学"],
    title: "【生成与创造视角】",
    body:
      "AI擅长在高维空间重组风格，人类擅长把生命经验压缩成象征。艺术不是“新奇输出”本身，而是可被共同体解释并触发情感共鸣的意义结构。",
  },
  {
    keys: ["教育", "学习", "成长", "人文"],
    title: "【学习系统视角】",
    body:
      "把人看成终身学习系统，教育就不仅是知识传递，更是价值函数塑形。数学训练提升推理边界，人文训练决定我们为何以及为谁使用这些能力。",
  },
];

function pickLens(question) {
  const lowered = question.toLowerCase();
  return (
    lenses.find((lens) => lens.keys.some((key) => lowered.includes(key.toLowerCase()))) ||
    null
  );
}

function generateAnswer(question) {
  const lens = pickLens(question);
  const base = lens
    ? `${lens.title}\n${lens.body}`
    : "【系统论视角】\n人类文明可以看作多层反馈系统：个体认知、社会制度、技术工具相互耦合。AI提供了前所未有的预测与生成能力，但“要优化什么”仍是哲学与人文必须回答的问题。";

  const conclusion =
    "\n\n进一步思考：把你的问题改写成“可计算的部分 + 不可替代的人文判断”，通常能得到更清晰的行动路径。";

  return `问题：${question.trim()}\n\n${base}${conclusion}`;
}

askBtn.addEventListener("click", () => {
  const question = questionEl.value.trim();
  if (!question) {
    answerEl.textContent = "请先输入一个问题，我会从AI与数学的角度展开回答。";
    return;
  }

  answerEl.textContent = generateAnswer(question);
});

clearBtn.addEventListener("click", () => {
  questionEl.value = "";
  answerEl.innerHTML =
    '我是 <strong>bamawal</strong>。你可以问我：“数学模型如何理解人的自由？”';
  questionEl.focus();
});
