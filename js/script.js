
"use strict";

/* =====================================================
   مِداد | مراجعة Python
   Topics + Search + Filters + Python Runner + Quiz
   ===================================================== */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const SUN_ICON = `
<svg viewBox="0 0 24 24" width="21" height="21" fill="none"
stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
<circle cx="12" cy="12" r="4"/>
<path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42
M17.65 17.65l1.42 1.42M2 12h2M20 12h2
M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"/>
</svg>`;

const MOON_ICON = `
<svg viewBox="0 0 24 24" width="21" height="21" fill="none"
stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
stroke-linejoin="round">
<path d="M20.8 14.2A8.5 8.5 0 0 1 9.8 3.2
8.5 8.5 0 1 0 20.8 14.2Z"/>
</svg>`;

/* =========================
   1. دروس Python
   ========================= */

const topics = [
  {
    id: "print", name: "print()", symbol: "print",
    category: "basics",
    description: "عرض النصوص والقيم والنتائج.",
    code: 'print("مرحباً بالعالم")\nprint(10 + 5)',
    task: "اعرض اسمك ثم اطبع نتيجة 20 + 10.",
    tip: "تُستخدم print() لعرض النتائج على الشاشة."
  },
  {
    id: "comments", name: "Comments — التعليقات", symbol: "#",
    category: "basics",
    description: "كتابة ملاحظات لا ينفذها Python.",
    code: '# هذا تعليق\nprint("Hello")',
    task: "أضف تعليقاً ثم اطبع رسالة.",
    tip: "تبدأ التعليقات في Python بالرمز #."
  },
  {
    id: "variables", name: "Variables — المتغيرات", symbol: "x =",
    category: "basics",
    description: "تخزين القيم لاستخدامها لاحقاً.",
    code: 'name = "Ali"\nage = 16\nprint(name)\nprint(age)',
    task: "أنشئ متغيراً للاسم وآخر للعمر واطبعهما.",
    tip: "تُستخدم علامة = لإسناد قيمة إلى متغير."
  },
  {
    id: "type", name: "type()", symbol: "type",
    category: "basics",
    description: "معرفة نوع قيمة أو متغير.",
    code: 'print(type(10))\nprint(type(3.5))\nprint(type("Hello"))\nprint(type(True))',
    task: "اعرف نوع عدد مركب ونص.",
    tip: "تُعيد type() نوع البيانات."
  },
  {
    id: "input", name: "input()", symbol: "in",
    category: "basics",
    description: "قراءة قيمة من المستخدم.",
    code: 'name = "Ali"\nprint("Hello", name)',
    task: "ضع اسماً في متغير ثم اطبعه.",
    tip: "input() تعيد نصاً. المشغل هنا لا يدعم الإدخال التفاعلي."
  },
  {
    id: "casting", name: "Type Casting — التحويل", symbol: "↔",
    category: "types",
    description: "تحويل قيمة من نوع بيانات إلى نوع آخر.",
    code: 'number = "25"\nprint(int(number))\nprint(float(number))\nprint(str(100))',
    task: "حوّل النص '42' إلى عدد صحيح.",
    tip: "تُستخدم int() وfloat() وstr() للتحويل."
  },
  {
    id: "int", name: "int — الأعداد الصحيحة", symbol: "int",
    category: "types",
    description: "أعداد صحيحة دون جزء عشري.",
    code: 'age = 16\nnumber = -12\nprint(age)\nprint(type(number))',
    task: "أنشئ عدداً صحيحاً واطبع نوعه.",
    tip: "أمثلة: 5 و-12 و100."
  },
  {
    id: "float", name: "float — الأعداد العشرية", symbol: "3.5",
    category: "types",
    description: "أعداد تحتوي على جزء عشري.",
    code: 'price = 12.5\nprint(price)\nprint(type(price))',
    task: "أنشئ عدداً عشرياً واطبع نوعه.",
    tip: "استخدم النقطة العشرية مثل 3.14."
  },
  {
    id: "complex", name: "complex — الأعداد المركبة", symbol: "j",
    category: "types",
    description: "عدد يتكون من جزء حقيقي وآخر تخيلي.",
    code: 'number = 2 + 5j\nprint(number)\nprint(number.real)\nprint(number.imag)\nprint(type(number))',
    task: "أنشئ العدد 2 + 5j واطبع الجزأين الحقيقي والتخيلي.",
    tip: "يستخدم Python الحرف j للجزء التخيلي."
  },
  {
    id: "str", name: "str — النصوص", symbol: "str",
    category: "types",
    description: "تخزين الكلمات والجمل.",
    code: 'name = "Python"\nprint(name)\nprint(type(name))\nprint(len(name))',
    task: "أنشئ نصاً واطبع عدد حروفه.",
    tip: "يمكن وضع النص بين اقتباسين مفردين أو مزدوجين."
  },
  {
    id: "bool", name: "bool — القيم المنطقية", symbol: "T/F",
    category: "types",
    description: "قيمتان منطقيتان: True وFalse.",
    code: 'is_student = True\nis_finished = False\nprint(is_student)\nprint(type(is_student))',
    task: "أنشئ قيمة منطقية واطبع نوعها.",
    tip: "اكتب True وFalse بحرف أول كبير."
  },
  {
    id: "none", name: "None — القيمة الفارغة", symbol: "None",
    category: "types",
    description: "تمثيل غياب قيمة محددة.",
    code: 'result = None\nprint(result)\nprint(type(result))',
    task: "أنشئ متغيراً قيمته None واطبع نوعه.",
    tip: "نوع None هو NoneType."
  },
  {
    id: "arithmetic", name: "العمليات الحسابية", symbol: "+ −",
    category: "operators",
    description: "الجمع والطرح والضرب والقسمة والأس.",
    code: 'print(10 + 3)\nprint(10 - 3)\nprint(10 * 3)\nprint(10 / 3)\nprint(10 // 3)\nprint(10 % 3)\nprint(2 ** 3)',
    task: "احسب باقي قسمة 17 على 5.",
    tip: "+ جمع، - طرح، * ضرب، / قسمة، // قسمة صحيحة، % باقي القسمة، ** أس."
  },
  {
    id: "comparison", name: "عمليات المقارنة", symbol: "==",
    category: "operators",
    description: "مقارنة قيمتين وإرجاع True أوFalse.",
    code: 'print(5 == 5)\nprint(5 != 3)\nprint(8 > 4)\nprint(2 < 1)\nprint(5 >= 5)\nprint(3 <= 2)',
    task: "قارن بين 12 و7 باستخدام >.",
    tip: "تشمل المقارنات == و!= و> و< و>= و<=."
  },
  {
    id: "logical", name: "and / or / not", symbol: "and",
    category: "operators",
    description: "دمج الشروط والتحكم المنطقي.",
    code: 'print(True and True)\nprint(True and False)\nprint(True or False)\nprint(not True)',
    task: "اكتب مثالاً يستخدم and ومثالاً يستخدم or.",
    tip: "and تتطلب تحقق الشرطين؛ or تتطلب تحقق أحدهما."
  },
  {
    id: "assignment", name: "Assignment Operators", symbol: "+=",
    category: "operators",
    description: "إسناد القيم وتحديث المتغيرات.",
    code: 'number = 10\nnumber += 5\nprint(number)\nnumber *= 2\nprint(number)',
    task: "استخدم += لإضافة 3 إلى متغير.",
    tip: "من الأمثلة: += و-= و*= و/=."
  },
  {
    id: "if", name: "if / elif / else", symbol: "if",
    category: "conditions",
    description: "تنفيذ التعليمات وفقاً للشروط.",
    code: 'grade = 85\nif grade >= 90:\n    print("Excellent")\nelif grade >= 60:\n    print("Passed")\nelse:\n    print("Failed")',
    task: "اكتب شرطاً يحدد هل العدد موجب أم غير موجب.",
    tip: "ضع : بعد الشرط واستخدم المسافات البادئة."
  },
  {
    id: "nested-if", name: "Nested if", symbol: "if+",
    category: "conditions",
    description: "وضع شرط داخل شرط آخر.",
    code: 'age = 18\nhas_id = True\nif age >= 18:\n    if has_id:\n        print("Allowed")',
    task: "اكتب شرطاً داخل شرط للتحقق من قيمتين.",
    tip: "كل مستوى من الشروط يحتاج إلى مسافة بادئة مناسبة."
  },
  {
    id: "while", name: "حلقة while", symbol: "while",
    category: "loops",
    description: "التكرار ما دام الشرط صحيحاً.",
    code: 'number = 1\nwhile number <= 5:\n    print(number)\n    number += 1',
    task: "اطبع الأعداد من 1 إلى 3 باستخدام while.",
    tip: "حدّث المتغير حتى لا تدخل في حلقة لا نهائية."
  },
  {
    id: "for", name: "حلقة for", symbol: "for",
    category: "loops",
    description: "التكرار على عناصر مجموعة أو سلسلة.",
    code: 'for number in range(1, 6):\n    print(number)',
    task: "اطبع الأعداد من 1 إلى 5 باستخدام for.",
    tip: "تُستخدم for كثيراً مع range() والقوائم."
  },
  {
    id: "range", name: "range()", symbol: "range",
    category: "loops",
    description: "إنشاء مدى من الأعداد.",
    code: 'print(list(range(5)))\nprint(list(range(1, 6)))\nprint(list(range(2, 11, 2)))',
    task: "اعرض الأعداد الزوجية من 2 إلى 10.",
    tip: "range(start, stop, step)، ولا تشمل stop."
  },
  {
    id: "break", name: "break", symbol: "break",
    category: "loops",
    description: "إيقاف الحلقة فوراً.",
    code: 'for number in range(1, 6):\n    if number == 4:\n        break\n    print(number)',
    task: "اجعل الحلقة تتوقف عندما يصل العدد إلى 3.",
    tip: "تُنهي break الحلقة الحالية."
  },
  {
    id: "continue", name: "continue", symbol: "continue",
    category: "loops",
    description: "تخطي دورة من دورات الحلقة.",
    code: 'for number in range(1, 6):\n    if number == 3:\n        continue\n    print(number)',
    task: "تخطَّ العدد 2 أثناء التكرار.",
    tip: "لا تنهي continue الحلقة كلها."
  },
  {
    id: "list", name: "list — القوائم", symbol: "[]",
    category: "collections",
    description: "مجموعة مرتبة قابلة للتعديل.",
    code: 'numbers = [10, 20, 30]\nnumbers.append(40)\nprint(numbers)\nprint(numbers[0])\nprint(len(numbers))',
    task: "أنشئ قائمة وأضف إليها عنصراً رابعاً.",
    tip: "يبدأ الفهرس من 0، ويمكن تعديل عناصر القائمة."
  },
  {
    id: "list-methods", name: "List Methods", symbol: ".append",
    category: "collections",
    description: "إضافة العناصر وحذفها وترتيبها.",
    code: 'numbers = [3, 1, 2]\nnumbers.append(4)\nnumbers.insert(0, 9)\nnumbers.remove(1)\nnumbers.sort()\nprint(numbers)',
    task: "استخدم append() لإضافة عنصر إلى قائمة.",
    tip: "من الدوال: append وinsert وremove وpop وsort وreverse وcount وindex."
  },
  {
    id: "list-index", name: "Index & Slicing", symbol: "[0]",
    category: "collections",
    description: "الوصول إلى العناصر واستخراج أجزاء القائمة.",
    code: 'items = [10, 20, 30, 40, 50]\nprint(items[0])\nprint(items[-1])\nprint(items[1:4])\nprint(items[:3])',
    task: "اطبع أول عنصر وآخر عنصر من قائمة.",
    tip: "الفهرس السالب يبدأ العد من نهاية القائمة."
  },
  {
    id: "tuple", name: "tuple — الصفوف", symbol: "()",
    category: "collections",
    description: "مجموعة مرتبة غير قابلة للتعديل.",
    code: 'colors = ("red", "green", "blue")\nprint(colors)\nprint(colors[1])\nprint(len(colors))',
    task: "أنشئ tuple من ثلاثة ألوان واطبع العنصر الأول.",
    tip: "تُكتب العناصر عادةً بين قوسين دائريين."
  },
  {
    id: "tuple-methods", name: "Tuple Methods", symbol: ".count",
    category: "collections",
    description: "البحث عن العناصر وعدّ تكرارها.",
    code: 'numbers = (1, 3, 7, 3, 5)\nprint(numbers.count(3))\nprint(numbers.index(7))',
    task: "استخدم count() لحساب عدد مرات ظهور عنصر.",
    tip: "من أشهر الدوال count() وindex()."
  },
  {
    id: "set", name: "set — المجموعات", symbol: "{ }",
    category: "collections",
    description: "مجموعة من العناصر الفريدة.",
    code: 'numbers = {1, 2, 2, 3}\nprint(numbers)\nprint(len(numbers))',
    task: "أنشئ set فيها قيم مكررة ولاحظ النتيجة.",
    tip: "لا تحتفظ set بالعناصر المكررة ولا تضمن ترتيباً ثابتاً."
  },
  {
    id: "set-methods", name: "Set Methods", symbol: ".add",
    category: "collections",
    description: "إضافة العناصر ودمج المجموعات ومقارنتها.",
    code: 'a = {1, 2, 3}\nb = {3, 4, 5}\na.add(6)\nprint(a)\nprint(a.union(b))\nprint(a.intersection(b))\nprint(a.difference(b))',
    task: "استخدم add() لإضافة عنصر إلى set.",
    tip: "من الدوال: add وremove وdiscard وunion وintersection وdifference."
  },
  {
    id: "dict", name: "dict — القواميس", symbol: "{k:v}",
    category: "collections",
    description: "تخزين أزواج من المفتاح والقيمة.",
    code: 'student = {"name": "Ali", "age": 16}\nprint(student["name"])\nprint(student["age"])\nprint(student.get("name"))',
    task: "أنشئ قاموساً يحتوي على اسم طالب وعمره.",
    tip: "استخدم المفتاح للوصول إلى القيمة المرتبطة به."
  },
  {
    id: "dict-methods", name: "Dictionary Methods", symbol: ".keys",
    category: "collections",
    description: "قراءة المفاتيح والقيم وتحديث القاموس.",
    code: 'student = {"name": "Ali", "age": 16}\nprint(student.keys())\nprint(student.values())\nprint(student.items())\nstudent["age"] = 17\nstudent["grade"] = 90\nprint(student)',
    task: "أضف مفتاحاً جديداً إلى قاموس.",
    tip: "من الدوال: get وkeys وvalues وitems وupdate وpop."
  },
  {
    id: "dict-loop", name: "Loop Through Dictionary", symbol: "items()",
    category: "collections",
    description: "التكرار على مفاتيح القاموس وقيمه.",
    code: 'student = {"name": "Ali", "age": 16}\nfor key, value in student.items():\n    print(key, value)',
    task: "اطبع كل مفتاح وقيمته باستخدام items().",
    tip: "يمكن استخدام keys() للمفاتيح وvalues() للقيم."
  },
  {
    id: "strings-methods", name: "String Methods", symbol: ".upper",
    category: "strings",
    description: "تغيير حالة الأحرف والبحث واستبدال النصوص.",
    code: 'text = "hello python"\nprint(text.upper())\nprint(text.capitalize())\nprint(text.title())\nprint(text.replace("hello", "Hi"))',
    task: "حوّل نصاً إلى أحرف كبيرة باستخدام upper().",
    tip: "من الدوال: upper وlower وcapitalize وtitle وreplace وstrip."
  },
  {
    id: "strings-search", name: "String Search Methods", symbol: ".find",
    category: "strings",
    description: "البحث داخل النصوص وعدّ الأحرف.",
    code: 'text = "banana"\nprint(text.count("a"))\nprint(text.find("n"))\nprint(text.index("b"))\nprint(len(text))',
    task: "احسب عدد مرات ظهور الحرف a في كلمة banana.",
    tip: "count() تعد التكرارات، وfind() تبحث عن موضع النص."
  },
  {
    id: "strings-check", name: "String Check Methods", symbol: ".is",
    category: "strings",
    description: "التحقق من خصائص النص.",
    code: 'print("hello".isalpha())\nprint("123".isdigit())\nprint("hello123".isalnum())\nprint("HELLO".isupper())\nprint("hello".islower())',
    task: "تحقق هل النص يتكون من أرقام فقط.",
    tip: "من الدوال: isalpha وisdigit وisalnum وislower وisupper."
  },
  {
    id: "strings-split", name: "split() & join()", symbol: ".split",
    category: "strings",
    description: "تقسيم النص وربط مجموعة نصوص.",
    code: 'text = "red,green,blue"\ncolors = text.split(",")\nprint(colors)\nprint("-".join(colors))',
    task: "قسّم نصاً باستخدام split().",
    tip: "split() تُقسّم النص وjoin() تربط النصوص."
  },
  {
    id: "functions", name: "Functions — الدوال", symbol: "def",
    category: "functions",
    description: "تجميع التعليمات لإعادة استخدامها.",
    code: 'def greet(name):\n    return "Hello " + name\n\nprint(greet("Ali"))',
    task: "أنشئ دالة تجمع عددين وتعيد الناتج.",
    tip: "تُعرّف الدالة بـ def، وتُعيد return قيمة."
  },
  {
    id: "parameters", name: "Parameters & return", symbol: "return",
    category: "functions",
    description: "تمرير القيم إلى الدوال وإرجاع النتائج.",
    code: 'def add(a, b):\n    return a + b\n\nresult = add(5, 7)\nprint(result)',
    task: "أنشئ دالة تستقبل رقمين وتعيد مجموعهما.",
    tip: "المعاملات تستقبل القيم، وreturn تعيد نتيجة الدالة."
  },
  {
    id: "builtins", name: "Built-in Functions", symbol: "len",
    category: "functions",
    description: "دوال جاهزة توفرها Python.",
    code: 'numbers = [4, 8, 2]\nprint(len(numbers))\nprint(max(numbers))\nprint(min(numbers))\nprint(sum(numbers))\nprint(sorted(numbers))',
    task: "استخدم len() لمعرفة عدد عناصر قائمة.",
    tip: "من الدوال: len وmax وmin وsum وsorted وabs وround."
  },
  {
    id: "exceptions", name: "try / except", symbol: "try",
    category: "conditions",
    description: "معالجة الأخطاء دون إيقاف البرنامج مباشرة.",
    code: 'try:\n    number = int("abc")\nexcept ValueError:\n    print("Invalid number")',
    task: "عالج خطأ ValueError باستخدام try وexcept.",
    tip: "ضع الكود المحتمل أن يسبب خطأ داخل try."
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
    explanation: "العدد 10 عدد صحيح ونوعه int."
  },
  {
    question: "ما ناتج 3 ** 2؟",
    options: ["6", "9", "5", "8"],
    answer: 1,
    explanation: "** تعني الأس؛ لذلك 3 ** 2 تساوي 9."
  },
  {
    question: "أي دالة تعرض النتيجة على الشاشة؟",
    options: ["input()", "type()", "print()", "range()"],
    answer: 2,
    explanation: "تُستخدم print() لعرض القيم."
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
    explanation: "// تُجري القسمة الصحيحة."
  },
  {
    question: "أي كلمة تستخدم لتعريف دالة؟",
    options: ["function", "define", "def", "fun"],
    answer: 2,
    explanation: "تبدأ تعريفات الدوال بالكلمة def."
  },
  {
    question: "ما نوع True؟",
    options: ["int", "str", "bool", "float"],
    answer: 2,
    explanation: "True وFalse من النوع bool."
  },
  {
    question: "ما ناتج len('Python')؟",
    options: ["5", "6", "7", "Python"],
    answer: 1,
    explanation: "تحتوي Python على ستة أحرف."
  },
  {
    question: "ما ناتج [1, 2, 2, 3] بعد تحويلها إلى set؟",
    options: ["{1, 2, 2, 3}", "{1, 2, 3}", "[1, 2, 3]", "Error"],
    answer: 1,
    explanation: "set لا تحتفظ بالقيم المكررة."
  },
  {
    question: "كيف تصل إلى قيمة المفتاح name في قاموس student؟",
    options: ["student.name", 'student["name"]', "student( name )", "student[0]"],
    answer: 1,
    explanation: 'يمكن الوصول إلى القيمة باستخدام student["name"].'
  },
  {
    question: "ما ناتج 7 % 3؟",
    options: ["2", "1", "3", "0"],
    answer: 1,
    explanation: "% تعيد باقي القسمة، وباقي 7 على 3 هو 1."
  },
  {
    question: "أي دالة تحوّل النص إلى أحرف كبيرة؟",
    options: ["lower()", "title()", "upper()", "capitalize_all()"],
    answer: 2,
    explanation: "upper() تحول أحرف النص إلى أحرف كبيرة."
  },
  {
    question: "ما نوع 3 + 4j؟",
    options: ["int", "float", "complex", "bool"],
    answer: 2,
    explanation: "الأعداد التي تحتوي على جزء تخيلي من النوع complex."
  },
  {
    question: "أي دالة تضيف عنصراً إلى نهاية القائمة؟",
    options: ["append()", "count()", "keys()", "upper()"],
    answer: 0,
    explanation: "append() تضيف عنصراً إلى نهاية القائمة."
  },
  {
    question: "ماذا تفعل break داخل الحلقة؟",
    options: ["تتخطى دورة واحدة", "تنهي الحلقة", "تعيد الحلقة للبداية", "تطبع النتيجة"],
    answer: 1,
    explanation: "break تنهي الحلقة الحالية."
  }
];

/* =========================
   3. حالة التطبيق
   ========================= */

let selectedTopic = topics[0];
let activeFilter = "all";
let showAllTopics = false;
let pyodidePromise = null;
let isRunning = false;
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;

/* =========================
   4. أدوات عامة
   ========================= */

function showToast(message) {
  const toast = $("#toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

/* =========================
   5. تحميل الصفحة
   ========================= */

function createLoader() {
  if ($("#medadLoader")) return;

  const loader = document.createElement("div");
  loader.id = "medadLoader";
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-logo">مِداد</div>
      <div class="loader-spinner"></div>
      <p>نجهّز مساحة مراجعتك...</p>
    </div>
  `;

  document.body.appendChild(loader);

  document.body.classList.add("is-loading");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
    document.body.classList.remove("is-loading");

    setTimeout(() => loader.remove(), 650);
  }, 2000);
}

/* =========================
   6. عرض الدروس والفلترة
   ========================= */

function getFilteredTopics() {
  const search = ($("#searchInput")?.value || "")
    .trim()
    .toLowerCase();

  return topics.filter((topic) => {
    const categoryMatches =
      activeFilter === "all" ||
      topic.category === activeFilter ||
      (activeFilter === "core" &&
        ["basics", "types", "operators"].includes(topic.category)) ||
      (activeFilter === "logic" &&
        ["conditions", "loops", "operators"].includes(topic.category));

    const searchMatches =
      !search ||
      topic.name.toLowerCase().includes(search) ||
      topic.description.toLowerCase().includes(search) ||
      topic.id.toLowerCase().includes(search) ||
      topic.code.toLowerCase().includes(search);

    return categoryMatches && searchMatches;
  });
}

function ensureMoreButton() {
  const grid = $("#topicGrid");
  if (!grid) return;

  let button = $("#showMoreTopics");

  if (!button) {
    button = document.createElement("button");
    button.id = "showMoreTopics";
    button.type = "button";
    button.className = "btn btn-secondary show-more-topics";
    grid.insertAdjacentElement("afterend", button);

    button.addEventListener("click", () => {
      showAllTopics = !showAllTopics;
      renderTopics();

      if (!showAllTopics) {
        $("#topicGrid")?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }
}

function renderTopics() {
  const grid = $("#topicGrid");
  if (!grid) return;

  const filtered = getFilteredTopics();
  const countElement = $("#topicCount");
  const visibleCountElement = $("#visibleCount");

  if (countElement) countElement.textContent = topics.length;
  if (visibleCountElement) visibleCountElement.textContent = filtered.length;

  ensureMoreButton();

  const showMoreButton = $("#showMoreTopics");
  const searchActive = Boolean(($("#searchInput")?.value || "").trim());
  const shouldShowAll = showAllTopics || searchActive ||
    activeFilter !== "all";

  const visible = shouldShowAll ? filtered : filtered.slice(0, 12);

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        لم يتم العثور على دروس مطابقة للبحث.
      </div>`;
  } else {
    grid.innerHTML = visible.map((topic) => `
      <button
        type="button"
        class="topic-card ${selectedTopic.id === topic.id ? "selected active" : ""}"
        data-topic-id="${topic.id}"
        aria-pressed="${selectedTopic.id === topic.id}"
      >
        <span class="topic-symbol">${escapeHTML(topic.symbol)}</span>
        <span class="topic-name">${escapeHTML(topic.name)}</span>
        <span class="topic-description">${escapeHTML(topic.description)}</span>
        <span class="topic-arrow" aria-hidden="true">↙</span>
      </button>
    `).join("");
  }

  grid.querySelectorAll("[data-topic-id]").forEach((card) => {
    card.addEventListener("click", () => {
      selectTopic(card.dataset.topicId, true);
    });
  });

  if (showMoreButton) {
    const canExpand = !shouldShowAll && filtered.length > 12;
    showMoreButton.hidden = !canExpand && !showAllTopics;
    showMoreButton.textContent = showAllTopics
      ? "عرض عدد أقل ↑"
      : `عرض المزيد من الدروس (${filtered.length - 12}) ↓`;

    if (searchActive || activeFilter !== "all") {
      showMoreButton.hidden = true;
    }
  }
}

function selectTopic(id, scrollToPractice = false) {
  const topic = topics.find((item) => item.id === id);
  if (!topic) return;

  selectedTopic = topic;

  const title = $("#lessonTitle");
  const description = $("#lessonDescription");
  const task = $("#lessonTask");
  const tip = $("#lessonTip");
  const editor = $("#codeEditor");
  const output = $("#consoleOutput");
  const status = $("#runStatus");

  if (title) title.textContent = topic.name;
  if (description) description.textContent = topic.description;
  if (task) task.textContent = topic.task;
  if (tip) tip.textContent = topic.tip;
  if (editor) editor.value = topic.code;

  if (output) {
    output.textContent = "ستظهر النتيجة هنا بعد تشغيل الكود.";
    output.classList.remove("error");
  }

  if (status) status.textContent = "جاهز للتشغيل";

  updateLineNumbers();
  renderTopics();

  if (scrollToPractice) {
    setTimeout(() => {
      const target = $("#lessonTitle")?.closest(".practice-section") ||
        $("#lessonTitle")?.closest("section") ||
        $("#codeEditor");

      target?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 80);
  }
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
   7. أرقام الأسطر
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
   8. تحميل وتشغيل Python
   ========================= */

async function getPyodide() {
  if (typeof loadPyodide !== "function") {
    throw new Error(
      "تعذر تحميل Python. تحقق من الإنترنت ومن وجود مكتبة Pyodide في HTML."
    );
  }

  if (!pyodidePromise) {
    pyodidePromise = (async () => {
      const pyodide = await loadPyodide();

      await pyodide.runPythonAsync(`
import ast
import io
import contextlib

_medad_globals = {"__name__": "__main__"}

def _medad_run(source):
    tree = ast.parse(source)
    last_expr = None

    if tree.body and isinstance(tree.body[-1], ast.Expr):
        last_expr = tree.body.pop()

    output = io.StringIO()

    with contextlib.redirect_stdout(output), contextlib.redirect_stderr(output):
        exec(compile(tree, "<python-editor>", "exec"), _medad_globals)

        if last_expr is not None:
            result = eval(
                compile(ast.Expression(last_expr.value), "<python-editor>", "eval"),
                _medad_globals
            )
            if result is not None:
                print(repr(result))

    return output.getvalue()
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

function explainPythonError(message) {
  const hints = [
    ["SyntaxError", "راجع كتابة الجملة والأقواس وعلامات الاقتباس."],
    ["NameError", "تأكد من كتابة أسماء المتغيرات والدوال بشكل صحيح."],
    ["TypeError", "راجع أنواع البيانات التي تستخدمها في العملية."],
    ["IndentationError", "راجع المسافات البادئة داخل الشروط والحلقات."],
    ["ValueError", "القيمة التي أدخلتها غير مناسبة للعملية."],
    ["ZeroDivisionError", "لا يمكن القسمة على صفر."],
    ["ModuleNotFoundError", "قد تحتاج إلى مكتبة غير متوفرة في بيئة المتصفح."]
  ];

  const found = hints.find(([name]) => message.includes(name));
  return found ? `\n\nتلميح: ${found[1]}` : "";
}

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

  if (/\binput\s*\(/.test(code)) {
    output.textContent =
      "المشغل لا يدعم input() التفاعلية حالياً.\n\n" +
      'جرّب وضع القيمة مباشرة في متغير، مثلاً:\nname = "Ali"\nprint(name)';
    output.classList.add("error");
    if (status) status.textContent = "إدخال تفاعلي غير مدعوم";
    return;
  }

  isRunning = true;
  if (runButton) runButton.disabled = true;

  if (status) status.textContent = "جارٍ التشغيل...";
  output.textContent = "جارٍ تشغيل Python...";
  output.classList.remove("error");

  try {
    const pyodide = await getPyodide();
    pyodide.globals.set("_medad_source", code);

    try {
      const result = await pyodide.runPythonAsync(
        "_medad_run(_medad_source)"
      );

      output.textContent = result && String(result).length
        ? String(result)
        : "(لم ينتج الكود أي مخرجات)";

      if (status) status.textContent = "اكتمل التنفيذ ✓";
    } finally {
      pyodide.globals.delete("_medad_source");
    }
  } catch (error) {
    const message = String(error?.message || error);
    output.textContent = message + explainPythonError(message);
    output.classList.add("error");
    if (status) status.textContent = "حدث خطأ";
  } finally {
    isRunning = false;
    if (runButton) runButton.disabled = false;
  }
}

/* =========================
   9. الاختبار — IDs مطابقة لـ HTML
   ========================= */

function renderQuestion() {
  const questionText = $("#quizQuestion");
  const optionsContainer = $("#quizOptions");
  const progressText = $("#quizProgressText");
  const progressBar = $("#quizProgressBar");
  const scoreElement = $("#quizScore");
  const feedback = $("#quizFeedback");
  const checkButton = $("#checkAnswerBtn");
  const nextButton = $("#nextQuestionBtn");
  const restartButton = $("#restartQuizBtn");

  if (!questionText || !optionsContainer) return;

  if (scoreElement) {
    scoreElement.textContent = `${score} / ${questions.length}`;
  }

  if (currentQuestion >= questions.length) {
    questionText.textContent = "انتهى الاختبار!";
    optionsContainer.innerHTML = "";

    if (progressText) {
      progressText.textContent = `النتيجة النهائية: ${score} من ${questions.length}`;
    }

    if (progressBar) progressBar.style.width = "100%";

    if (feedback) {
      feedback.className = "quiz-feedback";
      feedback.textContent = `أجبت إجابة صحيحة عن ${score} من أصل ${questions.length} سؤالاً.`;
    }

    if (checkButton) checkButton.hidden = true;
    if (nextButton) nextButton.hidden = true;
    if (restartButton) restartButton.hidden = false;

    return;
  }

  answered = false;
  selectedAnswer = null;

  const question = questions[currentQuestion];
  questionText.textContent = question.question;

  if (progressText) {
    progressText.textContent =
      `السؤال ${currentQuestion + 1} من ${questions.length}`;
  }

  if (progressBar) {
    progressBar.style.width =
      `${(currentQuestion / questions.length) * 100}%`;
  }

  if (feedback) {
    feedback.textContent = "";
    feedback.className = "quiz-feedback";
  }

  if (checkButton) {
    checkButton.hidden = false;
    checkButton.disabled = true;
    checkButton.textContent = "تحقق من الإجابة";
  }

  if (nextButton) {
    nextButton.hidden = false;
    nextButton.disabled = true;
    nextButton.textContent = "السؤال التالي";
  }

  if (restartButton) restartButton.hidden = true;

  optionsContainer.innerHTML = question.options.map((option, index) => `
    <button type="button" class="quiz-option"
      data-answer="${index}" aria-pressed="false">
      ${escapeHTML(option)}
    </button>
  `).join("");

  optionsContainer.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      if (answered) return;

      selectedAnswer = Number(button.dataset.answer);

      optionsContainer.querySelectorAll(".quiz-option").forEach((item) => {
        item.classList.remove("selected");
        item.setAttribute("aria-pressed", "false");
      });

      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");

      if (checkButton) checkButton.disabled = false;
    });
  });
}

function checkAnswer() {
  if (answered || selectedAnswer === null) {
    if (!answered) showToast("اختر إجابة أولاً.");
    return;
  }

  const question = questions[currentQuestion];
  const correct = selectedAnswer === question.answer;
  const feedback = $("#quizFeedback");
  const checkButton = $("#checkAnswerBtn");
  const nextButton = $("#nextQuestionBtn");
  const scoreElement = $("#quizScore");

  answered = true;

  if (correct) score++;

  $$(".quiz-option").forEach((button) => {
    button.disabled = true;

    const value = Number(button.dataset.answer);

    if (value === question.answer) {
      button.classList.add("correct");
    } else if (value === selectedAnswer) {
      button.classList.add("wrong");
    }
  });

  if (feedback) {
    feedback.className = `quiz-feedback ${correct ? "good" : "bad"}`;
    feedback.textContent =
      `${correct ? "إجابة صحيحة! " : "إجابة غير صحيحة. "}${question.explanation}`;
  }

  if (scoreElement) {
    scoreElement.textContent = `${score} / ${questions.length}`;
  }

  if (checkButton) checkButton.disabled = true;
  if (nextButton) nextButton.disabled = false;
}

function nextQuestion() {
  if (currentQuestion >= questions.length) return;

  if (!answered) {
    showToast("تحقق من إجابتك أولاً.");
    return;
  }

  currentQuestion++;
  renderQuestion();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  answered = false;
  renderQuestion();

  $("#quizQuestion")?.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

/* =========================
   10. الوضع الداكن بأيقونات SVG
   ========================= */

function applyTheme(isDark) {
  document.body.classList.toggle("dark-mode", isDark);
  document.body.classList.toggle("dark", isDark);

  const button = $("#themeBtn");

  if (button) {
    button.innerHTML = isDark ? SUN_ICON : MOON_ICON;
    button.setAttribute(
      "aria-label",
      isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"
    );
    button.setAttribute("title", isDark ? "الوضع الفاتح" : "الوضع الداكن");
  }

  try {
    localStorage.setItem("medad-theme", isDark ? "dark" : "light");
  } catch (_) {}
}

function toggleTheme() {
  applyTheme(!document.body.classList.contains("dark-mode"));
}

function loadTheme() {
  let savedTheme = "light";

  try {
    savedTheme = localStorage.getItem("medad-theme") || "light";
  } catch (_) {}

  applyTheme(savedTheme === "dark");
}

/* =========================
   11. شريط التقدم وزر الأعلى
   ========================= */

function updateScrollUI() {
  const progressBar = $("#progressBar") || $("#scrollProgress");
  const topButton = $("#topButton");

  const scrollTop = window.scrollY ||
    document.documentElement.scrollTop;

  const scrollHeight = document.documentElement.scrollHeight -
    window.innerHeight;

  const percentage = scrollHeight > 0
    ? (scrollTop / scrollHeight) * 100
    : 0;

  if (progressBar) {
    progressBar.style.width = `${percentage}%`;
  }

  if (topButton) {
    topButton.classList.toggle("visible", scrollTop > 350);
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================
   12. Fade-in أثناء التمرير
   ========================= */

function setupScrollAnimations() {
  const selectors = [
    ".hero > *",
    ".feature-strip > div",
    ".section-heading",
    ".lesson-toolbar",
    ".topic-card",
    ".practice-info",
    ".editor-card",
    ".quiz-card",
    ".final-cta > *"
  ];

  const elements = $$(selectors.join(","));

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -35px 0px"
  });

  elements.forEach((element, index) => {
    element.classList.add("fade-in");
    element.style.setProperty("--fade-delay", `${(index % 4) * 65}ms`);
    observer.observe(element);
  });
}

/* =========================
   13. ربط الأحداث
   ========================= */

function bindEvents() {
  const searchInput = $("#searchInput");
  const editor = $("#codeEditor");

  searchInput?.addEventListener("input", () => {
    showAllTopics = false;
    renderTopics();
  });

  $$("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      showAllTopics = false;

      $$("[data-filter]").forEach((item) => {
        item.classList.toggle("active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });

      renderTopics();
    });
  });

  editor?.addEventListener("input", updateLineNumbers);
  editor?.addEventListener("scroll", syncEditorScroll);

  editor?.addEventListener("keydown", (event) => {
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

  $("#runBtn")?.addEventListener("click", runCode);
  $("#resetBtn")?.addEventListener("click", resetCode);
  $("#themeBtn")?.addEventListener("click", toggleTheme);
  $("#topButton")?.addEventListener("click", scrollToTop);
  $("#checkAnswerBtn")?.addEventListener("click", checkAnswer);
  $("#nextQuestionBtn")?.addEventListener("click", nextQuestion);
  $("#restartQuizBtn")?.addEventListener("click", restartQuiz);

  $("#clearConsole")?.addEventListener("click", () => {
    const output = $("#consoleOutput");
    if (output) {
      output.textContent = "تم مسح المخرجات.";
      output.classList.remove("error");
    }
  });

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  window.addEventListener("resize", updateScrollUI);
}

/* =========================
   14. تشغيل التطبيق
   ========================= */

function init() {
  createLoader();
  loadTheme();
  bindEvents();

  renderTopics();
  renderQuestion();
  updateLineNumbers();
  updateScrollUI();
  setupScrollAnimations();

  selectTopic(selectedTopic.id, false);

  const total = $("#topicCount");
  if (total) total.textContent = topics.length;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
