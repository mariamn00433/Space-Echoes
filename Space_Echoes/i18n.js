/* SPACE ECHOES - English / Arabic support.
   Static page text: translated by matching the English text to the AR dictionary below.
   Dynamic text: app.js calls t("English text"). Story data: AR_ITEMS (same answer order as English). */
"use strict";
const LANG_KEY="spaceEchoes_lang";
let arabicMode=false;
try{arabicMode=localStorage.getItem(LANG_KEY)==="ar";}catch(e){}

const AR={
"Space Echoes | Explore the forgotten pioneers":"أصداء الفضاء | استكشف الرواد المنسيّين",
"SPACE ECHOES":"صدى الفضاء","Explore":"استكشف","Our Mission":"مهمتنا","My Log":"سجلّي","Explorer":"مستكشف","XP":"نقطة",
"AN INTERACTIVE SPACE EXPLORATION":"رحلة تفاعلية لاستكشاف الفضاء",
"Their mission ended.":"انتهت مهمتهم.","Their discoveries":"لكنّ اكتشافاتهم","live on.":"ما زالت حيّة.",
"Travel across the Moon and Mars to meet the machines that changed what we know about space.":"سافر عبر القمر والمريخ لتتعرّف على الآلات التي غيّرت ما نعرفه عن الفضاء.",
"LET'S LAUNCH":"هيّا ننطلق","Real missions. Remarkable discoveries.":"مهمات حقيقية. اكتشافات مذهلة.",
"YOUR JOURNEY STARTS HERE":"رحلتك تبدأ من هنا","SCROLL TO BEGIN ↓":"مرّر للأسفل للبدء ↓",
"FIRST, MEET YOUR EXPLORER":"أولًا، تعرّف على مستكشفك","Who is joining the mission?":"من سينضم إلى المهمة؟",
"Choose your explorer identity to begin your journey.":"اختر هوية مستكشفك لتبدأ رحلتك.",
"Girl":"بنت","Boy":"ولد","Ready to explore":"هيا نستكشف","CONTINUE →":"متابعة ←",
"EXPLORER PROFILE / START":"ملف المستكشف / البداية","Welcome,":"مرحبًا،","Space Explorer!":"يا مستكشف الفضاء!",
"Every great discovery starts with curiosity.":"كل اكتشاف عظيم يبدأ بالفضول.",
"Enter your explorer name":"اكتب اسم المستكشف","Choose your character and enter your name.":"اختر شخصيتك واكتب اسمك.",
"START MY MISSION →":"ابدأ مهمتي ←",
"MISSION CONTROL / DESTINATION SELECT":"مركز التحكم / اختيار الوجهة","Where will your story begin?":"أين تبدأ قصتك؟",
"Choose a destination and uncover the secrets hidden there.":"اختر وجهة واكتشف الأسرار المخبّأة هناك.",
"← Back to destinations":"→ العودة إلى الوجهات","PLANET EQUIPMENT EXPLORER":"مستكشف معدّات الكواكب",
"Explore the forgotten pioneers":"استكشف الرواد المنسيّين","Choose a mission marker to uncover its story.":"اختر معلمًا من المهمة لتكتشف قصته.",
"YOUR DISCOVERIES":"اكتشافاتك","MISSION CLUES":"أدلّة المهمة",
"These machines explored, collected data, and helped scientists understand our solar system.":"استكشفت هذه الآلات وجمعت البيانات وساعدت العلماء على فهم نظامنا الشمسي.",
"← Back to equipment":"→ العودة إلى المعدّات","EQUIPMENT STORY / VIDEO":"قصة المعدّة / الفيديو",
"Your browser does not support HTML video.":"متصفحك لا يدعم الفيديو.","YOUR VIDEO GOES HERE":"ضع الفيديو هنا",
"Replace the video source in index.html":"استبدل مصدر الفيديو في index.html","SPACE ECHOES STORY":"قصة أصداء الفضاء",
"A STORY INSPIRED BY A REAL NASA MISSION":"قصة مستوحاة من مهمة حقيقية لناسا","DISCOVER THE SCIENCE ↗":"اكتشف العلم ↖",
"I FINISHED WATCHING →":"أنهيت المشاهدة ←","After the video, you will answer a short mission quiz and earn XP.":"بعد الفيديو ستجيب عن اختبار قصير وتكسب نقاط خبرة.",
"← Back to story":"→ العودة إلى القصة","SCIENCE FILE / NASA RESEARCH":"ملف علمي / أبحاث ناسا","Read more from NASA ↗":"اقرأ المزيد من ناسا ↖",
"MISSION CHALLENGE / KNOWLEDGE CHECK":"تحدّي المهمة / اختبار المعرفة","One last challenge,":"تحدٍّ أخير،","Explorer!":"أيها المستكشف!",
"Answer the questions, earn points, and add this story to your discovery log.":"أجب عن الأسئلة واكسب النقاط وأضف هذه القصة إلى سجل اكتشافاتك.",
"MISSION REWARD":"مكافأة المهمة","Mission Explorer":"مستكشف المهمة","Earn up to":"اكسب حتى","80 XP":"80 نقطة",
"by answering all four questions correctly.":"بالإجابة عن الأسئلة الأربعة بشكل صحيح.","+20 XP":"+20 نقطة","per correct answer":"لكل إجابة صحيحة",
"PERSONAL ARCHIVE":"أرشيفك الشخصي","Your discovery":"سجل","log.":"اكتشافاتك.","TOTAL EXPERIENCE":"إجمالي الخبرة",
"STORIES DISCOVERED":"القصص المكتشفة","EXPLORER":"المستكشف","My discovered stories":"القصص التي اكتشفتها",
"Mission levels":"مستويات المهمة","My badges":"أوسمتي","Reset my progress":"إعادة ضبط تقدّمي",
"Explore responsibly. Stay curious.":"استكشف بمسؤولية. وابقَ فضوليًا.",
"Educational prototype · Mission facts should be checked against NASA primary sources.":"نموذج تعليمي · يُرجى التحقق من معلومات المهمات من مصادر ناسا الأساسية.",
/* dynamic text (app.js) */
"Astronaut":"رائد فضاء","Explorer Robot":"روبوت مستكشف","Space Alien":"كائن فضائي",
"girl explorer":"مستكشفة","boy explorer":"مستكشف","Explorer profile":"ملف المستكشف",
"MOON":"القمر","The Moon":"القمر","MARS":"المريخ","Mars":"المريخ",
"Quiet footprints. Giant discoveries.":"خطوات هادئة. اكتشافات عملاقة.","A red planet full of clues.":"كوكب أحمر مليء بالأدلة.",
"LEVEL COMPLETED":"اكتمل المستوى","UNLOCKED":"مفتوح","LOCKED":"مقفل","EXPLORE":"استكشف","COMPLETE PREVIOUS LEVEL":"أكمل المستوى السابق",
"Complete the previous level to unlock this destination.":"أكمل المستوى السابق لفتح هذه الوجهة.",
"STORY COMPLETED":"اكتملت القصة","OPEN STORY →":"افتح القصة ←","MISSION":"المهمة","YEAR":"السنة","LOCATION":"الموقع","MISSION VIDEO":"فيديو المهمة",
"QUESTION":"السؤال","20 XP":"20 نقطة","Correct! +20 XP":"صحيح! +20 نقطة","Correct! This question's XP was already collected.":"صحيح! سبق أن حصلت على نقاط هذا السؤال.",
"Not quite! The correct answer is highlighted.":"ليست صحيحة تمامًا! الإجابة الصحيحة مظلّلة.",
"CHECK ANSWER →":"تحقّق من الإجابة ←","FINISH MISSION →":"أنهِ المهمة ←","SEE RESULTS →":"اعرض النتيجة ←","NEXT QUESTION →":"السؤال التالي ←",
"MISSION COMPLETE":"اكتملت المهمة","XP EARNED":"نقطة مكتسبة","Your discovery is saved on this device.":"تم حفظ اكتشافك على هذا الجهاز.",
"BACK TO EQUIPMENT →":"العودة إلى المعدّات ←","Completed":"مكتمل","Unlocked":"مفتوح","Locked":"مقفل","stories":"قصص",
"First Discovery":"أول اكتشاف","Moon Explorer":"مستكشف القمر","Mars Explorer":"مستكشف المريخ","Space Historian":"مؤرّخ الفضاء",
"No discoveries yet. Start your mission to build your archive.":"لا توجد اكتشافات بعد. ابدأ مهمتك لتبني أرشيفك.",
"Are you sure you want to reset your explorer profile and all progress?":"هل أنت متأكد أنك تريد إعادة ضبط ملفك وكل تقدّمك؟",
"Your mission has been reset.":"تمت إعادة ضبط مهمتك."
};

/* Story data in Arabic: [name, mission, place, summary, story, [q,[answers]] x3] - answers keep the English order */
const AR_ITEMS={
apollo11:["وحدة الهبوط القمرية أبولو 11 (النسر)","أبولو 11","بحر الهدوء، القمر","المركبة القمرية التي حملت أول روّاد فضاء إلى سطح القمر.","انطلقت أبولو 11 في 16 يوليو 1969 وعلى متنها نيل أرمسترونغ وباز ألدرن ومايكل كولينز. بقي كولينز في مدار القمر داخل وحدة القيادة، بينما هبطت المركبة القمرية المسماة النسر في بحر الهدوء يوم 20 يوليو. أصبح أرمسترونغ أول إنسان يطأ سطح القمر، ثم تبعه ألدرن. قضى الرائدان نحو 21 ساعة و36 دقيقة على السطح، وجمعا عينات قمرية ونشرا تجارب علمية. بعد ذلك أقلعت مرحلة الصعود والتحمت بوحدة القيادة، بينما بقيت مرحلة الهبوط على القمر.",
 ["ما اسم المركبة القمرية التي حملت أرمسترونغ وألدرن؟",["النسر","كولومبيا","أبولو"]],
 ["أين هبطت المركبة النسر؟",["محيط العواصف","بحر الهدوء","فوهة غوسيف"]],
 ["ماذا كان يقيس جهاز قياس الزلازل السلبي؟",["اهتزازات القمر ونشاطه الزلزالي","شدة ضوء الشمس","معدل ضربات قلب الرواد"]],
 ["ماذا حدث لمرحلة الهبوط بعد إقلاع الرواد؟",["عادت إلى الأرض","بقيت على القمر","دخلت في مدار حول الشمس"]]],
lrv:["مركبة الاستكشاف القمرية (LRV)","أبولو 15 و16 و17","منطقة هادلي-أبينين ومواقع هبوط أبولو اللاحقة، القمر","مركبة كهربائية تعمل بالبطاريات ساعدت الرواد على قطع مسافات أبعد فوق القمر.","استُخدمت مركبة الاستكشاف القمرية لأول مرة على القمر خلال مهمة أبولو 15 عام 1971. قادها رائدا الفضاء ديفيد سكوت وجيمس إيروين في منطقة هادلي-أبينين، بينما بقي ألفرد ووردن في وحدة القيادة يدور حول القمر. قطعت المركبة نحو 27.9 كيلومترًا خلال ثلاث رحلات، وساعدت الرواد على جمع 77.31 كيلوجرامًا من العينات القمرية. واستُخدمت أيضًا في أبولو 16 وأبولو 17، ثم تُركت المركبات على القمر عند انتهاء المهمات.",
 ["في أي مهمة استُخدمت المركبة القمرية لأول مرة؟",["أبولو 11","أبولو 15","أبولو 17"]],
 ["كم كيلومترًا قطعت المركبة خلال رحلات أبولو 15 الثلاث؟",["2.9 كم","17 كم","27.9 كم"]],
 ["ماذا فعل رائد الفضاء ألفرد ووردن خلال أبولو 15؟",["بقي في وحدة القيادة التي تدور حول القمر","قاد المركبة القمرية","بقي على الأرض"]],
 ["كم كيلوغرامًا من المواد القمرية جمع رواد أبولو 15 بمساعدة المركبة؟",["21.55 كجم","77.31 كجم","100 كجم"]]],
near:["NEAR Shoemaker","مهمة NEAR Shoemaker","الكويكب 433 إيروس","أول مركبة فضائية تدور حول كويكب، ثم هبطت عليه بهدوء.","أطلقت ناسا مركبة NEAR Shoemaker في 17 فبراير 1996 لدراسة الكويكب القريب من الأرض إيروس. مرّت بالقرب من الكويكب ماثيلد عام 1997، ثم استخدمت مرورًا بالقرب من الأرض في يناير 1998 لتعديل مسارها. دخلت مدار إيروس في 14 فبراير 2000، لتصبح أول مركبة تدور حول كويكب. ورغم أنها لم تُصمّم للهبوط، فقد هبطت بهدوء على إيروس في 12 فبراير 2001، واستمرت في إرسال البيانات حتى 28 فبراير. أرسلت نحو 160 ألف صورة. استكشفت NEAR Shoemaker الكويكب إيروس، ولم تذهب إلى المريخ.",
 ["ما الهدف الأساسي لمركبة NEAR Shoemaker؟",["المريخ","الكويكب إيروس","القمر"]],
 ["لماذا مرّت المركبة بالقرب من الأرض في يناير 1998؟",["لاستخدام جاذبية الأرض لتعديل مسارها","لنقل رواد فضاء","لجمع عينات من الأرض"]],
 ["ما الإنجاز الذي حققته في 14 فبراير 2000؟",["أصبحت أول مركبة تدور حول كويكب","هبطت على المريخ","اكتشفت حلقات زحل"]],
 ["كم صورة تقريبًا أرسلتها NEAR Shoemaker؟",["1,600","16,000","160,000"]]],
ingenuity:["مروحية إنجينيويتي المريخية","مهمة المريخ 2020 / بيرسيفيرانس","فوهة جيزيرو، المريخ","أول طائرة تنفذ رحلة طيران مُتحكَّمًا بها وبقوة دفع على كوكب آخر.","وصلت إنجينيويتي إلى المريخ مع المركبة الجوالة بيرسيفيرانس في 18 فبراير 2021. وفي 19 أبريل 2021 نفذت أول رحلة طيران مُتحكَّم بها وبقوة دفع على كوكب آخر. كان الطيران صعبًا لأن الغلاف الجوي للمريخ رقيق جدًا، لذلك دارت شفراتها بسرعة عالية لتوليد قوة الرفع. خُطط لها في البداية خمس رحلات خلال 30 يومًا، لكنها أكملت 72 رحلة وقطعت نحو 17 كيلومترًا إجمالًا. استخدمت لوحًا شمسيًا لشحن بطارياتها. انتهت مهمتها بعد آخر رحلة في 18 يناير 2024، وأعلنت ناسا انتهاء المهمة في 25 يناير 2024.",
 ["ما الإنجاز التاريخي الذي حققته إنجينيويتي في 19 أبريل 2021؟",["أول رحلة طيران مُتحكَّم بها وبقوة دفع على كوكب آخر","أول هبوط على القمر","أول رحلة حول الأرض"]],
 ["لماذا كان الطيران على المريخ صعبًا؟",["لأن غلافه الجوي رقيق جدًا","لأن المريخ بلا جاذبية","لأن الكوكب قريب جدًا من الشمس"]],
 ["كم رحلة طيران أكملتها إنجينيويتي؟",["5","27","72"]],
 ["كيف كانت إنجينيويتي تعيد شحن بطارياتها؟",["باستخدام لوح شمسي","باستخدام وقود من بيرسيفيرانس","باستخدام طاقة الرياح"]]],
kepler:["تلسكوب كيبلر الفضائي","مهمتا كيبلر وK2","مدار حول الشمس يتبع الأرض","تلسكوب فضائي اكتشف كواكب تدور حول نجوم خارج مجموعتنا الشمسية.","أطلقت ناسا تلسكوب كيبلر الفضائي في 6 مارس 2009 للبحث عن الكواكب الخارجية. كان يقيس سطوع النجوم باستمرار. وباستخدام طريقة العبور، بحث العلماء عن انخفاضات صغيرة في ضوء النجم عندما يمر كوكب أمامه. اكتشف كيبلر آلاف الكواكب المرشحة والمؤكدة، ومنها نظام كيبلر-11 الذي يضم ستة كواكب. وبعد تعطل عجلتي رد الفعل في 2013، استخدم المهندسون ضغط ضوء الشمس للمساعدة في تثبيت التلسكوب، ما أتاح مهمة K2 الممتدة. أكمل كيبلر 19 حملة رصد ودرس أكثر من نصف مليون نجم. انتهت المهمة في 30 أكتوبر 2018 بعد نفاد الوقود. كيبلر تلسكوب فضائي وليس مركبة هبوط على المريخ.",
 ["ما الهدف الذي صُمّم تلسكوب كيبلر للبحث عنه؟",["الكواكب الخارجية","أقمار جديدة للأرض","كويكبات قرب المريخ"]],
 ["كيف اكتشف كيبلر كواكب لا يستطيع رؤيتها مباشرة؟",["طريقة العبور","الاستماع إلى الرسائل اللاسلكية","قياس المد والجزر"]],
 ["ما المشكلة التي واجهت كيبلر عام 2013؟",["تعطلت عجلات رد الفعل وتأثر توجيهه","ذابت ألواحه الشمسية","هبط على القمر"]],
 ["ما اسم المهمة الممتدة وكم حملة رصد أكملها؟",["أبولو؛ 11","K2؛ 19","فوياجر؛ 5"]]]
};

const t=s=>(arabicMode&&AR[s]!==undefined)?AR[s]:s;
/* keeps numeric counters in the right order inside Arabic (right-to-left) text */
const N=s=>arabicMode?"\u2066"+s+"\u2069":String(s);

function localizeDests(base){
  return base.map(d=>({...d,name:t(d.name),title:t(d.title),description:t(d.description),
    items:d.items.map(item=>{
      const a=arabicMode&&AR_ITEMS[item.id];
      if(!a)return item;
      return {...item,name:a[0],mission:a[1],place:a[2],summary:a[3],story:a[4],
        questions:item.questions.map((q,n)=>({q:a[5+n][0],a:a[5+n][1],c:q.c}))};
    })}));
}

/* Static HTML: swap each text node (and placeholder) with its Arabic version, or restore English. */
const SKIP_STATIC="#destination-grid,#equipment-list,#mini-progress,#story-facts,#log-list,#log-levels,#log-badges,#profile-summary,#character-grid,#answer-options,#top-name,#story-title,#story-text,#article-title,#article-subtitle,#article-body,#question-text,#answer-feedback,#equipment-heading,#check-answer,#question-number,#question-points,#video-duration,#level-count,#log-found,#log-name,#language-toggle,script,style";
const originalText=new WeakMap();
function translateStatic(){
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
  nodes.forEach(node=>{
    if(node.parentElement&&node.parentElement.closest(SKIP_STATIC))return;
    if(!originalText.has(node))originalText.set(node,node.data);
    const original=originalText.get(node);
    const key=original.replace(/\s+/g," ").trim();
    if(!key)return;
    const lead=original.match(/^\s*/)[0],trail=original.match(/\s*$/)[0];
    node.data=(arabicMode&&AR[key]!==undefined)?lead+AR[key]+trail:original;
  });
  document.querySelectorAll("[placeholder]").forEach(el=>{
    if(!el.dataset.phEn)el.dataset.phEn=el.getAttribute("placeholder");
    el.setAttribute("placeholder",t(el.dataset.phEn));
  });
}
