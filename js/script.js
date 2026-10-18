
"use strict";

/* =========================================================
   مِداد | مراجعة Python
   JavaScript — درس، بحث، تصفية، تشغيل Python، واختبار
   ========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

/* =========================
   1. دروس Python
   ========================= */

const topics = [
  {
    id: "print",
    name: "print()",
    symbol: "🖨️",
    category: "basics",
    description: "عرض النصوص والقيم والنتائج على الشاشة.",
    code: 'print("مرحباً بالعالم")\nprint(10 + 5)',
    task: "اعرض اسمك على الشاشة، ثم اطبع نتيجة 20 + 10.",
    tip: "تُستخدم print() لعرض النتائج في المخرجات."
  },
  {
    id: "comments",
    name: "التعليقات Comments",
    symbol: "💬",
    category: "basics",
    description: "كتابة ملاحظات داخل الكود لا ينفذها Python.",
    code: '# هذا تعليق\nprint("Hello")',
    task: "أضف تعليقاً ثم اطبع رسالة.",
    tip: "يبدأ التعليق بعلامة #."
  },
  {
    id: "variables",
    name: "المتغيرات Variables",
    symbol: "📦",
    category: "basics",
    description: "تخزين البيانات داخل أسماء يمكن استخدامها لاحقاً.",
    code: 'name = "Ahmad"\nage = 16\nprint(name)\nprint(age)',
    task: "أنشئ متغيراً للاسم وآخر للعمر ثم اطبعهما.",
    tip: "استخدم علامة = لإسناد قيمة إلى متغير."
  },
  {
    id: "int",
    name: "int — الأعداد الصحيحة",
    symbol: "🔢",
    category: "types",
    description: "تمثيل الأعداد الصحيحة دون جزء عشري.",
    code: 'age = 16\nprint(age)\nprint(type(age))',
    task: "أنشئ عدداً صحيحاً واطبع نوعه.",
    tip: "مثال: 5 و -12 و 100."
  },
  {
    id: "float",
    name: "float — الأعداد العشرية",
    symbol: "🎯",
    category: "types",
    description: "تمثيل الأعداد التي تحتوي على جزء عشري.",
    code: 'price = 12.5\nprint(price)\nprint(type(price))',
    task: "أنشئ متغيراً عشرياً واطبع نوعه.",
    tip: "استخدم النقطة العشرية، مثل 3.14."
  },
  {
    id: "complex",
    name: "complex — الأعداد المركبة",
    symbol: "🧮",
    category: "types",
    description: "أعداد تتكون من جزء حقيقي وجزء تخيلي.",
    code: 'number = 3 + 4j\nprint(number)\nprint(number.real)\nprint(number.imag)',
    task: "أنشئ العدد 2 + 5j واطبع جزأيه الحقيقي والتخيلي.",
    tip: "يستخدم Python الحرف j للجزء التخيلي."
  },
  {
    id: "str",
    name: "str — النصوص",
    symbol: "📝",
    category: "types",
    description: "تخزين الكلمات والجمل والنصوص.",
    code: 'name = "Python"\nprint(name)\nprint(type(name))\nprint(len(name))',
    task: "أنشئ نصاً واطبع عدد حروفه.",
    tip: "يمكن كتابة النص بين علامتي اقتباس مفردتين أو مزدوجتين."
  },
  {
    id: "bool",
    name: "bool — القيم المنطقية",
    symbol: "⚖️",
    category: "types",
    description: "نوع بيانات له قيمتان: True و False.",
    code: 'is_student = True\nis_finished = False\nprint(is_student)\nprint(type(is_student))',
    task: "أنشئ متغيراً منطقياً واطبع قيمته ونوعه.",
    tip: "اكتب True و False بحرف أول كبير."
  },
  {
    id: "type",
    name: "type()",
    symbol: "🔍",
    category: "basics",
    description: "معرفة نوع قيمة أو متغير.",
    code: 'print(type(10))\nprint(type(3.5))\nprint(type("Hello"))\nprint(type(True))',
    task: "استخدم type() لمعرفة نوع عدد مركب ونص.",
    tip: "تُظهر type() نوع البيانات الذي يتعامل معه Python."
  },
  {
    id: "casting",
    name: "تحويل أنواع البيانات",
    symbol: "🔄",
    category: "types",
    description: "تحويل قيمة من نوع إلى نوع آخر باستخدام int و float و str وغيرها.",
    code: 'number = "25"\nprint(int(number))\nprint(float(number))\nprint(str(100))',
    task: "حوّل النص '42' إلى عدد صحيح.",
    tip: "لا يمكن تحويل كل النصوص إلى أعداد؛ النص غير الرقمي قد يسبب ValueError."
  },
  {
    id: "input",
    name: "input()",
    symbol: "⌨️",
    category: "basics",
    description: "قراءة قيمة يكتبها المستخدم أثناء تشغيل البرنامج.",
    code: 'name = input("Enter your name: ")\nprint("Hello", name)',
    task: "جرّب قراءة الاسم ثم طباعته.",
    tip: "input() يعيد نصاً دائماً. في هذه الصفحة لا تتوفر نافذة إدخال تفاعلية أثناء التشغيل.",
  },
  {
    id: "arithmetic",
    name: "العمليات الحسابية",
    symbol: "➗",
    category: "operators",
    description: "إجراء عمليات الجمع والطرح والضرب والقسمة وغيرها.",
    code: 'print(10 + 3)\nprint(10 - 3)\nprint(10 * 3)\nprint(10 / 3)\nprint(10 // 3)\nprint(10 % 3)\nprint(2 ** 3)',
    task: "احسب باقي قسمة 17 على 5.",
    tip: "+ جمع، - طرح، * ضرب، / قسمة، // قسمة صحيحة، % باقي القسمة، ** أس."
  },
  {
    id: "comparison",
    name: "عمليات المقارنة",
    symbol: "⚖️",
    category: "operators",
    description: "مقارنة قيمتين وإرجاع True أو False.",
    code: 'print(5 == 5)\nprint(5 != 3)\nprint(8 > 4)\nprint(2 < 1)\nprint(5 >= 5)\nprint(3 <= 2)',
    task: "قارن بين 12 و 7 باستخدام >.",
    tip: "== للمساواة، != لعدم المساواة، و > و < للمقارنة."
  },
  {
    id: "logical",
    name: "العمليات المنطقية",
    symbol: "🧠",
    category: "operators",
    description: "دمج الشروط باستخدام and و or و not.",
    code: 'print(True and True)\nprint(True and False)\nprint(True or False)\nprint(not True)',
    task: "اكتب مثالاً يستخدم and ومثالاً يستخدم or.",
    tip: "and تتطلب تحقق الشرطين، وor تتطلب تحقق أحدهما على الأقل."
  },
  {
    id: "if",
    name: "if / elif / else",
    symbol: "🚦",
    category: "conditions",
    description: "تنفيذ كود مختلف حسب تحقق الشروط.",
    code: 'grade = 85\n\nif grade >= 90:\n    print("Excellent")\nelif grade >= 60:\n    print("Passed")\nelse:\n    print("Failed")',
    task: "اكتب شرطاً يحدد هل العدد موجب أم غير موجب.",
    tip: "يجب وضع : بعد الشرط واستخدام المسافات البادئة داخل الكتل."
  },
  {
    id: "while",
    name: "حلقة while",
    symbol: "🔁",
    category: "loops",
    description: "تكرار الكود ما دام الشرط صحيحاً.",
    code: 'number = 1\nwhile number <= 5:\n    print(number)\n    number += 1',
    task: "اطبع الأعداد من 1 إلى 3 باستخدام while.",
    tip: "تأكد من تحديث المتغير حتى لا تدخل في حلقة لا نهائية."
  },
  {
    id: "for",
    name: "حلقة for",
    symbol: "🔂",
    category: "loops",
    description: "التكرار على عناصر سلسلة أو قائمة أو مدى من الأعداد.",
    code: 'for number in range(1, 6):\n    print(number)',
    task: "اطبع الأعداد من 1 إلى 5 باستخدام for.",
    tip: "الحد الأعلى في range() غير مشمول."
  },
  {
    id: "range",
    name: "range()",
    symbol: "📏",
    category: "loops",
    description: "إنشاء مدى من الأعداد يُستخدم غالباً مع الحلقات.",
    code: 'print(list(range(5)))\nprint(list(range(1, 6)))\nprint(list(range(2, 11, 2)))',
    task: "اعرض الأعداد الزوجية من 2 إلى 10.",
    tip: "يمكن أن تستقبل range() بداية ونهاية وخطوة."
  },
  {
    id: "break",
    name: "break و continue",
    symbol: "⏯️",
    category: "loops",
    description: "التحكم في سير الحلقات وإيقافها أو تخطي دورة.",
    code: 'for number in range(1, 6):\n    if number == 3:\n        continue\n    print(number)',
    task: "عدّل المثال ليتوقف عند العدد 4 باستخدام break.",
    tip: "break تنهي الحلقة، بينما continue تتخطى الدورة الحالية."
  },
  {
    id: "list",
    name: "list — القوائم",
    symbol: "📚",
    category: "collections",
    description: "مجموعة مرتبة وقابلة للتعديل من العناصر.",
    code: 'numbers = [10, 20, 30]\nnumbers.append(40)\nprint(numbers)\nprint(numbers[0])\nprint(len(numbers))',
    task: "أنشئ قائمة من ثلاثة أعداد وأضف إليها عدداً رابعاً.",
    tip: "يبدأ فهرس العناصر من 0، ويمكن تعديل عناصر القائمة."
  },
  {
    id: "tuple",
    name: "tuple — الصفوف",
    symbol: "🔒",
    category: "collections",
    description: "مجموعة مرتبة لا يمكن تغيير عناصرها بعد إنشائها.",
    code: 'colors = ("red", "green", "blue")\nprint(colors)\nprint(colors[1])\nprint(len(colors))',
    task: "أنشئ tuple من ثلاثة ألوان واطبع العنصر الأول.",
    tip: "تُكتب العناصر عادةً بين قوسين دائريين."
  },
  {
    id: "set",
    name: "set — المجموعات",
    symbol: "🧩",
    category: "collections",
    description: "مجموعة من العناصر الفريدة غير المرتبة.",
    code: 'numbers = {1, 2, 2, 3}\nprint(numbers)\nprint(len(numbers))',
    task: "أنشئ مجموعة تحتوي على قيم مكررة ولاحظ النتيجة.",
    tip: "المجموعات لا تحتفظ بالعناصر المكررة."
  },
  {
    id: "dict",
    name: "dict — القواميس",
    symbol: "📖",
    category: "collections",
    description: "تخزين البيانات في أزواج من المفتاح والقيمة.",
    code: 'student = {"name": "Ali", "age": 16}\nprint(student["name"])\nprint(student["age"])',
    task: "أنشئ قاموساً يحتوي على اسم طالب وعمره.",
    tip: "يمكن الوصول إلى قيمة باستخدام مفتاحها."
  },
  {
    id: "functions",
    name: "الدوال Functions",
    symbol: "⚙️",
    category: "functions",
    description: "تجميع التعليمات في جزء قابل لإعادة الاستخدام.",
    code: 'def greet(name):\n    return "Hello " + name\n\nprint(greet("Ali"))',
    task: "أنشئ دالة تجمع عددين وتعيد الناتج.",
    tip: "تُعرّف الدالة باستخدام def، ويمكنها إرجاع قيمة باستخدام return."
  }
];

/* =========================
   2. أسئلة الاختبار
   ========================= */

const questions = [
  {
    question: "ما نوع القيمة 10؟",
    options: ["str", "int", "float", "bool"],
    answer: 1,
    explanation: "العدد 10 عدد صحيح، ونوعه int."
  },
  {
    question: "ما ناتج 3 ** 2؟",
    options: ["6", "9", "5", "8"],
    answer: 1,
    explanation: "** تعني الأس، ولذلك 3 ** 2 تساوي 9."
  },
  {
    question: "أي دالة تُستخدم لعرض النتيجة؟",
    options: ["input()", "type()", "print()", "range()"],
    answer: 2,
    explanation: "تُستخدم print() لعرض النصوص والقيم."
  },
  {
    question: "ما أول فهرس في قائمة Python؟",
    options: ["1", "-1", "0", "2"],
    answer: 2,
    explanation: "تبدأ فهارس القوائم من الصفر."
  },
  {
    question: "ما ناتج 10 // 3؟",
    options: ["3", "3.33", "1", "0"],
    answer: 0,
    explanation: "// تُجري القسمة الصحيحة، والناتج هنا 3."
  },
  {
    question: "أي كلمة تُستخدم لتعريف دالة؟",
    options: ["function", "define", "def", "fun"],
    answer: 2,
    explanation: "تبدأ تعريفات الدوال في Python بالكلمة def."
  },
  {
    question: "ما نوع True؟",
    options: ["int", "str", "bool", "float"],
    answer: 2,
    explanation: "True وFalse قيمتان من النوع bool."
  },
  {
    question: "أي حلقة تناسب التكرار على عناصر قائمة؟",
    options: ["for", "if", "def", "type"],
    answer: 0,
    explanation: "تُستخدم for للتكرار على عناصر مجموعة أو سلسلة."
  },
  {
    question: "ما ناتج len('Python')؟",
    options: ["5", "6", "7", "Python"],
    answer: 1,
    explanation: "تحتوي كلمة Python على ستة أحرف."
  },
  {
    question: "ماذا تعيد المقارنة 5 == 5؟",
    options: ["False", "5", "None", "True"],
    answer: 3,
    explanation: "القيمتان متساويتان، ولذلك النتيجة True."
  }
];

/* =========================
   3. حالة التطبيق
   ========================= */

let selectedTopic = topics[0];
let activeFilter = "all";
let pyodidePromise = null;
let isRunning = false;
let currentQuestion = 0;
let score = 0;
let answered = false;

/* =========================
   4. إشعارات بسيطة
   ========================= */

function showToast(message) {
  const toast = $("#toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* =========================
   5. عرض الدروس
   ========================= */

function renderTopics() {
  const grid = $("#topicGrid");
  if (!grid) return;

  const search = ($("#searchInput")?.value || "")
    .trim()
    .toLowerCase();

  const filtered = topics.filter((topic) => {
    const matchesFilter =
      activeFilter === "all" ||
      topic.category === activeFilter;

    const matchesSearch =
      !search ||
      topic.name.toLowerCase().includes(search) ||
      topic.description.toLowerCase().includes(search) ||
      topic.id.toLowerCase().includes(search);

    return matchesFilter && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        لم يتم العثور على دروس مطابقة للبحث.
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((topic) => `
    <button
      type="button"
      class="topic-card ${selectedTopic.id === topic.id ? "active" : ""}"
      data-topic-id="${topic.id}"
      aria-pressed="${selectedTopic.id === topic.id}"
    >
      <span class="topic-symbol">${topic.symbol}</span>
      <span class="topic-name">${topic.name}</span>
      <span class="topic-description">${topic.description}</span>
    </button>
  `).join("");

  $$(".topic-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectTopic(card.dataset.topicId);
    });
  });
}

function selectTopic(id) {
  const topic = topics.find((item) => item.id === id);
  if (!topic) return;

  selectedTopic = topic;

  const title = $("#lessonTitle");
  const description = $("#lessonDescription");
  const task = $("#lessonTask");
  const tip = $("#lessonTip");
  const editor = $("#codeEditor");

  if (title) title.textContent = topic.name;
  if (description) description.textContent = topic.description;
  if (task) task.textContent = topic.task;
  if (tip) tip.textContent = topic.tip;
  if (editor) editor.value = topic.code;

  const output = $("#consoleOutput");
  if (output) {
    output.textContent = "ستظهر النتيجة هنا بعد تشغيل الكود.";
    output.classList.remove("error");
  }

  const status = $("#runStatus");
  if (status) status.textContent = "جاهز للتشغيل";

  renderTopics();
  updateLineNumbers();
}

function resetCode() {
  const editor = $("#codeEditor");
  const output = $("#consoleOutput");
  const status = $("#runStatus");

  if (editor) editor.value = selectedTopic.code;

  if (output) {
    output.textContent = "تمت إعادة الكود إلى المثال الأصلي.";
    output.classList.remove("error");
  }

  if (status) status.textContent = "جاهز للتشغيل";

  updateLineNumbers();
}

/* =========================
   6. أرقام الأسطر
   ========================= */

function updateLineNumbers() {
  const editor = $("#codeEditor");
  const lineNumbers = $("#lineNumbers");

  if (!editor || !lineNumbers) return;

  const count = Math.max(editor.value.split("\n").length, 1);

  lineNumbers.textContent = Array.from(
    { length: count },
    (_, index) => index + 1
  ).join("\n");
}

function syncEditorScroll() {
  const editor = $("#codeEditor");
  const lineNumbers = $("#lineNumbers");

  if (editor && lineNumbers) {
    lineNumbers.scrollTop = editor.scrollTop;
  }
}

/* =========================
   7. تحميل Python عبر Pyodide
   ========================= */

async function getPyodide() {
  if (typeof loadPyodide !== "function") {
    throw new Error(
      "تعذر تحميل Python. تأكد من اتصال الإنترنت ومن وجود مكتبة Pyodide في ملف HTML."
    );
  }

  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      const pyodide = await loadPyodide();

      await pyodide.runPythonAsync(`
import ast
import io
import contextlib

_medad_globals = {
    "__name__": "__main__",
}

def _medad_run(source):
    tree = ast.parse(source)

    last_expr = None

    if tree.body and isinstance(tree.body[-1], ast.Expr):
        last_expr = tree.body.pop()

    output = io.StringIO()
    result = None

    with contextlib.redirect_stdout(output), contextlib.redirect_stderr(output):
        exec(
            compile(tree, "<python-editor>", "exec"),
            _medad_globals
        )

        if last_expr is not None:
            result = eval(
                compile(
                    ast.Expression(last_expr.value),
                    "<python-editor>",
                    "eval"
                ),
                _medad_globals
            )

    text = output.getvalue()

    if result is not None:
        if text and not text.endswith("\\n"):
            text += "\\n"

        text += repr(result)

    return text
`);

      return pyodide;
    })();
  }

  try {
    return await pyodidePromise;
  } catch (error) {
    pyodidePromise = null;
    throw error;
  }
}

/* =========================
   8. تفسير الأخطاء بالعربية
   ========================= */

function explainPythonError(errorText) {
  if (errorText.includes("SyntaxError")) {
    return "\n\n💡 تلميح: يوجد خطأ في كتابة الكود أو في تركيب الجملة.";
  }

  if (errorText.includes("NameError")) {
    return "\n\n💡 تلميح: تأكد من كتابة أسماء المتغيرات والدوال بشكل صحيح.";
  }

  if (errorText.includes("TypeError")) {
    return "\n\n💡 تلميح: راجع أنواع البيانات والعملية التي تحاول تنفيذها.";
  }

  if (errorText.includes("IndentationError")) {
    return "\n\n💡 تلميح: راجع المسافات البادئة داخل الشروط والحلقات والدوال.";
  }

  if (errorText.includes("ValueError")) {
    return "\n\n💡 تلميح: القيمة التي أدخلتها غير مناسبة للعملية.";
  }

  if (errorText.includes("ZeroDivisionError")) {
    return "\n\n💡 تلميح: لا يمكن القسمة على صفر.";
  }

  if (errorText.includes("ImportError") ||
      errorText.includes("ModuleNotFoundError")) {
    return "\n\n💡 تلميح: قد تحتاج إلى مكتبة غير متوفرة في بيئة المتصفح.";
  }

  if (errorText.includes("EOFError")) {
    return "\n\n💡 تلميح: input() يحتاج إلى إدخال تفاعلي، وهو غير متاح في مشغل هذه الصفحة.";
  }

  if (errorText.includes("KeyboardInterrupt")) {
    return "\n\n💡 تلميح: تم إيقاف تنفيذ البرنامج.";
  }

  return "";
}

/* =========================
   9. تشغيل كود Python
   ========================= */

async function runCode() {
  if (isRunning) return;

  const editor = $("#codeEditor");
  const output = $("#consoleOutput");
  const status = $("#runStatus");
  const runButton = $("#runBtn");

  if (!editor || !output) return;

  const code = editor.value;

  if (!code.trim()) {
    output.textContent = "لا يوجد كود لتشغيله.";
    output.classList.add("error");

    if (status) status.textContent = "لا يوجد كود";
    return;
  }

  isRunning = true;

  if (runButton) {
    runButton.disabled = true;
    runButton.style.opacity = ".65";
  }

  if (status) status.textContent = "جارٍ التشغيل...";
  output.textContent = "جارٍ تشغيل Python...";
  output.classList.remove("error");

  try {
    // لا يمكن إدخال إجابة تفاعلية داخل هذه الصفحة.
    if (/\binput\s*\(/.test(code)) {
      throw new Error(
        "INPUT_NOT_SUPPORTED: input() يحتاج إلى إدخال تفاعلي غير متوفر في هذا المشغل."
      );
    }

    const pyodide = await getPyodide();

    pyodide.globals.set("_medad_source", code);

    try {
      const result = await pyodide.runPythonAsync(
        "_medad_run(_medad_source)"
      );

      output.textContent =
        result && String(result).length > 0
          ? String(result)
          : "(لم ينتج الكود أي مخرجات)";

      if (status) status.textContent = "اكتمل التنفيذ ✓";
    } finally {
      pyodide.globals.delete("_medad_source");
    }
  } catch (error) {
    let message = String(error?.message || error);

    if (message.includes("INPUT_NOT_SUPPORTED")) {
      message =
        "لا يمكن استخدام input() في هذا المشغل؛ لأنه لا يدعم نافذة إدخال تفاعلية.\n\n" +
        "جرّب وضع القيمة مباشرة في متغير، مثلاً:\n" +
        'name = "Ali"\nprint(name)';
    } else {
      message += explainPythonError(message);
    }

    output.textContent = message;
    output.classList.add("error");

    if (status) status.textContent = "حدث خطأ";
  } finally {
    isRunning = false;

    if (runButton) {
      runButton.disabled = false;
      runButton.style.opacity = "1";
    }
  }
}

/* =========================
   10. الاختبار
   ========================= */

function renderQuestion() {
  const questionText = $("#questionText");
  const optionsContainer = $("#quizOptions");
  const progress = $("#quizProgress");
  const nextButton = $("#nextQuestionBtn");
  const result = $("#quizResult");

  if (!questionText || !optionsContainer) return;

  if (currentQuestion >= questions.length) {
    questionText.textContent = "انتهى الاختبار!";
    optionsContainer.innerHTML = "";

    if (progress) {
      progress.textContent =
        `نتيجتك: ${score} من ${questions.length}`;
    }

    if (result) {
      result.textContent =
        `أجبت إجابة صحيحة عن ${score} من أصل ${questions.length} أسئلة.`;
    }

    if (nextButton) {
      nextButton.textContent = "إعادة الاختبار";
    }

    return;
  }

  const question = questions[currentQuestion];
  answered = false;

  questionText.textContent = question.question;

  if (progress) {
    progress.textContent =
      `السؤال ${currentQuestion + 1} من ${questions.length}`;
  }

  if (result) result.textContent = "";

  if (nextButton) {
    nextButton.textContent = "السؤال التالي";
    nextButton.disabled = true;
  }

  optionsContainer.innerHTML = question.options.map((option, index) => `
    <button
      type="button"
      class="quiz-option"
      data-answer="${index}"
    >${option}</button>
  `).join("");

  $$(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (answered) return;

      answered = true;

      const selected = Number(button.dataset.answer);
      const correct = selected === question.answer;

      if (correct) score++;

      $$(".quiz-option").forEach((optionButton) => {
        optionButton.disabled = true;

        if (Number(optionButton.dataset.answer) === question.answer) {
          optionButton.classList.add("correct");
        } else if (
          Number(optionButton.dataset.answer) === selected && !correct
        ) {
          optionButton.classList.add("incorrect");
        }
      });

      if (result) {
        result.textContent =
          (correct ? "إجابة صحيحة! " : "إجابة غير صحيحة. ") +
          question.explanation;
      }

      if (nextButton) nextButton.disabled = false;
    });
  });
}

function nextQuestion() {
  if (currentQuestion >= questions.length) {
    currentQuestion = 0;
    score = 0;
    answered = false;
    renderQuestion();
    return;
  }

  if (!answered) {
    showToast("اختر إجابة أولاً.");
    return;
  }

  currentQuestion++;
  renderQuestion();
}

/* =========================
   11. الوضع الداكن
   ========================= */

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  const button = $("#themeBtn");

  if (button) {
    button.textContent = isDark ? "☀️" : "🌙";
    button.setAttribute(
      "aria-label",
      isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"
    );
  }

  try {
    localStorage.setItem("medad-theme", isDark ? "dark" : "light");
  } catch (_) {
    // استمرار عمل الصفحة حتى إذا لم يتوفر التخزين.
  }
}

function loadTheme() {
  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem("medad-theme") || "light";
  } catch (_) {
    // لا حاجة إلى التخزين حتى تعمل الصفحة.
  }

  const isDark = savedTheme === "dark";

  document.body.classList.toggle("dark-mode", isDark);

  const button = $("#themeBtn");

  if (button) {
    button.textContent = isDark ? "☀️" : "🌙";
  }
}

/* =========================
   12. شريط التقدم وزر الأعلى
   ========================= */

function updateScrollUI() {
  const progressBar = $("#scrollProgress");
  const topButton = $("#topButton");

  const scrollTop =
    window.scrollY || document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage =
    scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }

  if (topButton) {
    topButton.classList.toggle("visible", scrollTop > 350);
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================
   13. ربط عناصر الصفحة
   ========================= */

function bindEvents() {
  const searchInput = $("#searchInput");
  const editor = $("#codeEditor");
  const runButton = $("#runBtn");
  const resetButton = $("#resetBtn");
  const themeButton = $("#themeBtn");
  const topButton = $("#topButton");
  const nextButton = $("#nextQuestionBtn");

  if (searchInput) {
    searchInput.addEventListener("input", renderTopics);
  }

  // تعمل مع أزرار الفلاتر التي تحمل data-filter.
  $$("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";

      $$("[data-filter]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });

      renderTopics();
    });
  });

  if (editor) {
    editor.addEventListener("input", updateLineNumbers);
    editor.addEventListener("scroll", syncEditorScroll);

    editor.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        event.preventDefault();

        const start = editor.selectionStart;
        const end = editor.selectionEnd;

        editor.setRangeText("    ", start, end, "end");
        updateLineNumbers();
      }

      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        runCode();
      }
    });
  }

  if (runButton) {
    runButton.addEventListener("click", runCode);
  }

  if (resetButton) {
    resetButton.addEventListener("click", resetCode);
  }

  if (themeButton) {
    themeButton.addEventListener("click", toggleTheme);
  }

  if (topButton) {
    topButton.addEventListener("click", scrollToTop);
  }

  if (nextButton) {
    nextButton.addEventListener("click", nextQuestion);
  }

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI);
}

/* =========================
   14. بدء التطبيق
   ========================= */

function init() {
  loadTheme();
  bindEvents();
  renderTopics();
  renderQuestion();
  updateLineNumbers();
  updateScrollUI();

  if (topics.length > 0) {
    selectTopic(selectedTopic.id);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
