/* SPACE ECHOES - beginner-friendly vanilla JavaScript
   Main flow: Home -> Gender -> Character & Name -> Destination -> Equipment -> Video -> Quiz -> Discovery Log
   Progress and profile are saved in this browser using localStorage.
*/
"use strict";

const STORAGE_KEY = "spaceEchoes_v2";

const BASE_DESTS = [
  { id:"moon", name:"MOON", title:"The Moon", icon:"moon", art:"moon", description:"Quiet footprints. Giant discoveries.", color:"blue",
    items:[
      {id:"apollo11",name:"Apollo 11 Lunar Module (Eagle)",icon:"lm",mission:"Apollo 11",year:"1969",place:"Sea of Tranquility, Moon",summary:"The lunar spacecraft that carried the first astronauts to the Moon’s surface.",story:"Apollo 11 launched on July 16, 1969, carrying Neil Armstrong, Buzz Aldrin and Michael Collins. Collins remained in lunar orbit in the Command Module while the Lunar Module, named Eagle, descended to the Sea of Tranquility on July 20. Armstrong stepped onto the Moon first, followed by Aldrin. The astronauts spent about 21 hours and 36 minutes on the surface, collected lunar samples and deployed scientific experiments. The ascent stage then lifted off and reunited with the Command Module. The descent stage remained on the Moon.",video:{ en:"https://www.youtube-nocookie.com/embed/e_NIj5jBW8E",ar:"https://www.youtube-nocookie.com/embed/06Zokw2FGR4"},questions:[
        {q:"What was the name of the Lunar Module that carried Armstrong and Aldrin?",a:["Eagle","Columbia","Apollo"],c:0},
        {q:"Where did Eagle land?",a:["Ocean of Storms","Sea of Tranquility","Gusev Crater"],c:1},
        {q:"What did the Passive Seismometer measure?",a:["Lunar vibrations and seismic activity","Sunlight intensity","The astronauts’ heart rates"],c:0},
        {q:"What happened to the Lunar Module’s descent stage after the astronauts lifted off?",a:["It returned to Earth","It stayed on the Moon","It entered solar orbit"],c:1}]},
      {id:"lrv",name:"Lunar Roving Vehicle (LRV)",icon:"lrv",mission:"Apollo 15, 16 and 17",year:"1971–1972",place:"Hadley–Apennine region and later Apollo landing sites, Moon",summary:"A battery-powered electric rover that helped astronauts travel farther across the Moon.",story:"The Lunar Roving Vehicle was first used on the Moon during Apollo 15 in 1971. Astronauts David Scott and James Irwin drove it around the Hadley–Apennine region, while Alfred Worden remained in the Command Module in lunar orbit. Across three excursions, the rover travelled about 27.9 kilometres and helped the astronauts collect 77.31 kilograms of lunar samples. The LRV was also used on Apollo 16 and Apollo 17. The rovers were left on the Moon when their missions ended.",video:{en:"https://www.youtube-nocookie.com/embed/zsdEIr2SpKU",ar:"https://www.youtube-nocookie.com/embed/3tuDEhRiSjE"},questions:[
        {q:"Which mission first used the Lunar Roving Vehicle on the Moon?",a:["Apollo 11","Apollo 15","Apollo 17"],c:1},
        {q:"How far did the rover travel during its three Apollo 15 excursions?",a:["2.9 km","17 km","27.9 km"],c:2},
        {q:"What did astronaut Alfred Worden do during Apollo 15?",a:["He stayed in the Command Module orbiting the Moon","He drove the lunar rover","He remained on Earth"],c:0},
        {q:"How much lunar material did the Apollo 15 astronauts collect with the rover’s help?",a:["21.55 kg","77.31 kg","100 kg"],c:1}]}
    ]},
  { id:"mars",name:"MARS",title:"Mars",icon:"mars",art:"mars",description:"A red planet full of clues.",color:"orange",
    items:[
      {id:"near",name:"NEAR Shoemaker",icon:"lander",mission:"NEAR Shoemaker mission",year:"1996–2001",place:"433 Eros asteroid",summary:"The first spacecraft to orbit an asteroid, later making a gentle landing on Eros.",story:"NASA launched NEAR Shoemaker on February 17, 1996, to study the near-Earth asteroid Eros. During its journey, it flew past asteroid Mathilde in 1997 and used an Earth flyby in January 1998 to adjust its path. It entered orbit around Eros on February 14, 2000, becoming the first spacecraft to orbit an asteroid. Although it was not designed to land, it made a gentle touchdown on Eros on February 12, 2001, and continued sending data until February 28. The mission returned about 160,000 images. NEAR Shoemaker explored asteroid Eros; it did not travel to Mars.",video:{en:"https://www.youtube-nocookie.com/embed/gPCQCVcNayA",ar:"https://www.youtube-nocookie.com/embed/wJCfvnURmM0"},questions:[
        {q:"What was NEAR Shoemaker’s main target?",a:["Mars","Asteroid Eros","The Moon"],c:1},
        {q:"Why did NEAR Shoemaker fly past Earth in January 1998?",a:["To use Earth’s gravity to adjust its path","To deliver astronauts","To take samples from Earth"],c:0},
        {q:"What achievement did it reach on February 14, 2000?",a:["It became the first spacecraft to orbit an asteroid","It landed on Mars","It discovered Saturn’s rings"],c:0},
        {q:"About how many images did NEAR Shoemaker send?",a:["1,600","16,000","160,000"],c:2}]},
      {id:"ingenuity",name:"Ingenuity Mars Helicopter",icon:"rover",mission:"Mars 2020 / Perseverance",year:"2021–2024",place:"Jezero Crater, Mars",summary:"The first aircraft to make a powered, controlled flight on another planet.",story:"Ingenuity arrived on Mars with the Perseverance rover on February 18, 2021. On April 19, 2021, it made the first powered, controlled flight on another planet. Flying was difficult because the Martian atmosphere is very thin, so its rotor blades had to spin at high speed to generate lift. The helicopter was originally planned for five flights over 30 days, but it completed 72 flights and travelled about 17 kilometres in total. Its solar panel charged its batteries. After its final flight on January 18, 2024, NASA announced the end of the mission on January 25, 2024.",video:{en:"https://www.youtube-nocookie.com/embed/xpYm5tE3jpE",ar:"https://www.youtube-nocookie.com/embed/dw1ccrc-nrU"},questions:[
        {q:"What historic achievement did Ingenuity make on April 19, 2021?",a:["The first powered, controlled flight on another planet","The first landing on the Moon","The first flight around Earth"],c:0},
        {q:"Why was flying on Mars especially challenging?",a:["The atmosphere is very thin","Mars has no gravity","The planet is too close to the Sun"],c:0},
        {q:"How many flights did Ingenuity complete?",a:["5","27","72"],c:2},
        {q:"How did Ingenuity recharge its batteries?",a:["With a solar panel","With fuel from Perseverance","With wind power"],c:0}]},
      {id:"kepler",name:"Kepler Space Telescope",icon:"lander",mission:"Kepler / K2 missions",year:"2009–2018",place:"Earth-trailing heliocentric orbit",summary:"A space telescope that discovered planets orbiting stars beyond our Solar System.",story:"NASA launched the Kepler Space Telescope on March 6, 2009, to search for exoplanets. It continuously measured the brightness of stars. Using the transit method, scientists looked for tiny dips in a star’s light when a planet passed in front of it. Kepler discovered thousands of candidate and confirmed planets, including the six-planet Kepler-11 system. After two reaction wheels failed in 2013, engineers used the pressure of sunlight to help steady the telescope, enabling the extended K2 mission. Kepler completed 19 K2 observing campaigns and studied more than half a million stars. The mission ended on October 30, 2018, after the spacecraft ran out of fuel. Kepler was a space telescope, not a Mars lander.",video:{en:"https://www.youtube-nocookie.com/embed/xF4RaEUfN-w",ar:"https://www.youtube-nocookie.com/embed/ii74i8Om5Jc"},questions:[
        {q:"What was the Kepler Space Telescope designed to search for?",a:["Exoplanets","New moons of Earth","Asteroids near Mars"],c:0},
        {q:"How did Kepler detect planets it could not see directly?",a:["The transit method","Listening for radio messages","Measuring ocean tides"],c:0},
        {q:"What problem affected Kepler in 2013?",a:["Reaction wheels failed, affecting its pointing","Its solar panels melted","It landed on the Moon"],c:0},
        {q:"What was the extended mission called, and how many observing campaigns did it complete?",a:["Apollo; 11","K2; 19","Voyager; 5"],c:1}]}
    ]},
];

const characters = {
  girl:[{id:"astronaut",name:"Astronaut",img:"images/girl-astronaut.png"},{id:"robot",name:"Explorer Robot",img:"images/girl-robot.png"},{id:"alien",name:"Space Alien",img:"images/girl-alien.png"}],
  boy:[{id:"astronaut",name:"Astronaut",img:"images/boy-astronaut.png"},{id:"robot",name:"Explorer Robot",img:"images/boy-robot.png"},{id:"alien",name:"Space Alien",img:"images/boy-alien.png"}]
};
const charArt=c=>c?`<img class="char-img" src="${c.img}" alt="">`:I("rocket");
let destinations=localizeDests(BASE_DESTS);
const TOTAL_STORIES=BASE_DESTS.reduce((n,d)=>n+d.items.length,0);
const VALID_STORY_IDS=BASE_DESTS.flatMap(d=>d.items.map(i=>i.id));

function freshState(){return {gender:"",character:"",name:"",xp:0,found:[],profileDone:false,levels:{moon:{open:true,done:false},mars:{open:false,done:false}},badges:[],xpAwarded:[]};}
function loadState(){try{const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||"{}");const base=freshState();return {...base,...saved,levels:{...base.levels,...(saved.levels||{})},badges:saved.badges||[],xpAwarded:saved.xpAwarded||[]};}catch(error){return freshState();}}
let state=loadState();
let selectedGender=state.gender||"";
let selectedCharacter=state.character||"";
let currentDestination=null;
let currentItem=null;
let questionIndex=0;
let correctCount=0;
let selectedAnswer=null;
let quizFinished=false;
let answeredCurrentQuestion=false;

const $ = id => document.getElementById(id);
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}
function notify(message){$("toast").textContent=message;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2200);}
function go(screenId){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  $(screenId).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  updateHeader();
  if(screenId==="destinations")renderDestinations();
  if(screenId==="log")renderLog();
}
function updateHeader(){
  $("top-xp").textContent=state.xp;
  $("top-name").textContent=state.name||t("Explorer");
  const avatar=(characters[state.gender||"girl"]||characters.girl).find(c=>c.id===state.character);
  $("top-avatar").innerHTML=charArt(avatar);
}
document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>go(button.dataset.go)));


/* Step 1: gender */
document.querySelectorAll(".gender-choice").forEach(button=>{
  button.addEventListener("click",()=>{
    selectedGender=button.dataset.gender;
    document.querySelectorAll(".gender-choice").forEach(card=>card.classList.toggle("selected",card===button));
    $("gender-next").disabled=false;
  });
});
$("gender-next").addEventListener("click",()=>{
  state.gender=selectedGender;save();renderCharacters();go("profile");
});

/* Step 2: character and explorer name */
function renderCharacters(){
  $("character-grid").innerHTML=characters[selectedGender||"girl"].map(character=>
    `<button class="choice-card character-card ${selectedCharacter===character.id?"selected":""}" data-character="${character.id}">
      <span class="choice-emoji">${charArt(character)}</span><b>${t(character.name)}</b>
    </button>`).join("");
  document.querySelectorAll("[data-character]").forEach(button=>button.addEventListener("click",()=>{
    selectedCharacter=button.dataset.character;
    document.querySelectorAll("[data-character]").forEach(card=>card.classList.toggle("selected",card===button));
    validateProfile();
  }));
}
function validateProfile(){
  const hasName=$("explorer-name").value.trim().length>0;
  $("profile-next").disabled=!(selectedCharacter&&hasName);
}
$("explorer-name").value=state.name||"";
$("explorer-name").addEventListener("input",validateProfile);
$("profile-next").addEventListener("click",()=>{
  state.character=selectedCharacter;state.name=$("explorer-name").value.trim();state.profileDone=true;save();updateHeader();go("destinations");
});

/* Step 3: destinations */
function renderDestinations(){
  $("destination-grid").innerHTML=destinations.map((destination,index)=>{
    const found=destination.items.filter(item=>state.found.includes(item.id)).length;
    const level=state.levels[destination.id]||{open:index===0,done:false};
    const status=level.done?I("check")+" "+t("LEVEL COMPLETED"):level.open?I("dot")+" "+t("UNLOCKED"):I("lock")+" "+t("LOCKED");
    return `<article class="destination-card ${level.open?"":"destination-locked"}" data-destination="${destination.id}">
      <div class="destination-art ${destination.art}"><span class="art-icon">${I(destination.icon)}</span></div>
      <div class="destination-info"><h2>${destination.name}</h2><p>${destination.description}</p>
      <small>${status} · ${N(found+" / "+destination.items.length)} ${t("STORIES DISCOVERED")}</small>
      <button class="btn ${destination.id==="mars"?"mars-btn":"outline"}" ${level.open?"":"disabled"}>${level.open?`${t("EXPLORE")} ${destination.name} ${arabicMode?"←":"→"}`:t("COMPLETE PREVIOUS LEVEL")+" "+I("lock")}</button></div>
    </article>`;
  }).join("");
  document.querySelectorAll("[data-destination]").forEach(card=>card.addEventListener("click",()=>{
    if(!state.levels[card.dataset.destination].open){notify(t("Complete the previous level to unlock this destination."));return;}
    openDestination(card.dataset.destination);
  }));
}
function openDestination(id){
  currentDestination=destinations.find(d=>d.id===id);
  $("equipment-heading").textContent=(arabicMode?`استكشف رواد ${currentDestination.title} المنسيّين`:`Explore the forgotten pioneers of ${currentDestination.title}`);
  renderEquipment();go("equipment-screen");
}

/* Step 4: equipment list */
function renderEquipment(){
  const discovered=currentDestination.items.filter(item=>state.found.includes(item.id)).length;
  $("level-count").textContent=N(`${discovered} / ${currentDestination.items.length}`);
  $("equipment-list").innerHTML=currentDestination.items.map(item=>{
    const done=state.found.includes(item.id);
    return `<button class="equipment-card" data-item="${item.id}">
      <span class="equipment-icon">${I(item.icon)}</span><span><h3>${item.name}</h3><p>${item.summary}</p><small>${done?I("check")+" "+t("STORY COMPLETED"):t("OPEN STORY →")}</small></span>
    </button>`;
  }).join("");
  $("mini-progress").innerHTML=currentDestination.items.map(item=>`<div class="mini-item ${state.found.includes(item.id)?"done":""}">${I(state.found.includes(item.id)?"check":"ring")} ${item.name}</div>`).join("");
  document.querySelectorAll("[data-item]").forEach(button=>button.addEventListener("click",()=>openStory(button.dataset.item)));
}
function openStory(id){
  currentItem=currentDestination.items.find(item=>item.id===id);
  if(!currentItem)return;
  $("story-title").textContent=(arabicMode?`مرحبًا يا أرض. أنا ${currentItem.name}.`:`Hello, Earth. I'm ${currentItem.name}.`);
  $("story-text").textContent=currentItem.story;
  $("story-facts").innerHTML=[[t("MISSION"),currentItem.mission],[t("YEAR"),currentItem.year],[t("LOCATION"),currentItem.place]].map(f=>`<div><small>${f[0]}</small><b>${f[1]}</b></div>`).join("");
  const video=$("mission-video");
  video.src=currentItem.video[arabicMode?"ar":"en"];
  $("science-article").onclick=()=>openScienceArticle();
  $("video-placeholder").style.display="none";
  $("video-duration").textContent=t("MISSION VIDEO");
  go("video-screen");
}

/* Step 5: play the language-specific embedded mission video, then start the quiz. */
$("video-back").addEventListener("click",()=>go("equipment-screen"));
$("finish-video").addEventListener("click",()=>startQuiz());
function startQuiz(){
  questionIndex=0;correctCount=0;selectedAnswer=null;quizFinished=false;
  renderQuestion();go("quiz-screen");
}

/* Step 6: four questions, 20 XP for each correct answer */
function renderQuestion(){
  const question=currentItem.questions[questionIndex];
  $("question-number").textContent=`${t("QUESTION")} ${N((questionIndex+1)+" / "+currentItem.questions.length)}`;
  $("question-points").textContent=t("20 XP");
  $("quiz-progress-bar").style.width=`${questionIndex/currentItem.questions.length*100}%`;
  $("question-text").textContent=question.q;
  $("answer-feedback").textContent="";
  $("check-answer").disabled=true;
  selectedAnswer=null;
  answeredCurrentQuestion=false;
  $("answer-options").innerHTML=question.a.map((option,index)=>
    `<button class="answer-option" data-answer="${index}">${option}</button>`).join("");
  document.querySelectorAll("[data-answer]").forEach(button=>button.addEventListener("click",()=>{
    selectedAnswer=Number(button.dataset.answer);
    document.querySelectorAll("[data-answer]").forEach(card=>card.classList.toggle("selected",card===button));
    $("check-answer").disabled=false;
  }));
  $("check-answer").textContent=questionIndex===currentItem.questions.length-1?t("FINISH MISSION →"):t("CHECK ANSWER →");
}
$("check-answer").addEventListener("click",()=>{
  if(quizFinished){
    renderEquipment();
    go("equipment-screen");
    return;
  }
  if(selectedAnswer===null)return;

  if(!answeredCurrentQuestion){
    const question=currentItem.questions[questionIndex];
    const buttons=[...document.querySelectorAll("[data-answer]")];
    buttons.forEach((button,index)=>{
      button.disabled=true;
      if(index===question.c)button.classList.add("correct");
      if(index===selectedAnswer&&selectedAnswer!==question.c)button.classList.add("wrong");
    });
    if(selectedAnswer===question.c){
      correctCount++;
      const rewardKey=currentItem.id+":"+questionIndex;
      if(!state.xpAwarded.includes(rewardKey)){state.xp+=20;state.xpAwarded.push(rewardKey);$("answer-feedback").textContent=t("Correct! +20 XP");}
      else {$("answer-feedback").textContent=t("Correct! This question's XP was already collected.");}
    } else {
      $("answer-feedback").textContent=t("Not quite! The correct answer is highlighted.");
    }
    answeredCurrentQuestion=true;
    save();
    updateHeader();
    $("check-answer").textContent=questionIndex===currentItem.questions.length-1?t("SEE RESULTS →"):t("NEXT QUESTION →");
    return;
  }

  if(questionIndex<currentItem.questions.length-1){
    questionIndex++;
    renderQuestion();
  } else {
    completeQuiz();
  }
});
function completeQuiz(){
  quizFinished=true;
  if(!state.found.includes(currentItem.id))state.found.push(currentItem.id);
  updateLevelProgress();
  save();updateHeader();
  $("quiz-progress-bar").style.width="100%";
  $("question-number").textContent=t("MISSION COMPLETE");
  $("question-points").textContent=(arabicMode?`ربحت ${correctCount*20} نقطة`:`${correctCount*20} XP EARNED`);
  $("question-text").textContent=(arabicMode?`عمل رائع يا ${state.name||"مستكشف"}! لقد أكملت ${currentItem.name}.`:`Great work, ${state.name||"Explorer"}! You completed ${currentItem.name}.`);
  $("answer-options").innerHTML=`<div class="empty-log">${arabicMode?`أجبت عن ${correctCount} من ${currentItem.questions.length} أسئلة بشكل صحيح وربحت ${correctCount*20} نقطة. أُضيفت هذه القصة إلى سجل اكتشافاتك.`:`You answered ${correctCount} of ${currentItem.questions.length} questions correctly and earned ${correctCount*20} XP. This story has been added to your Discovery Log.`}</div>`;
  $("answer-feedback").textContent=t("Your discovery is saved on this device.");
  $("check-answer").textContent=t("BACK TO EQUIPMENT →");
  $("check-answer").disabled=false;
}
$("quiz-back").addEventListener("click",()=>go("video-screen"));

/* Discovery log and reset */
function updateLevelProgress(){
  state.found=state.found.filter(id=>VALID_STORY_IDS.includes(id));
  destinations.forEach((destination,index)=>{
    const complete=destination.items.every(item=>state.found.includes(item.id));
    state.levels[destination.id].done=complete;
    state.levels[destination.id].open=index===0 || destinations[index-1].items.every(item=>state.found.includes(item.id));
  });
  const earned=[];
  if(state.found.length)earned.push("first");
  if(state.levels.moon.done)earned.push("moon");
  if(state.levels.mars.done)earned.push("mars");
  if(state.found.length===TOTAL_STORIES)earned.push("all");
  state.badges=earned;
}
function openScienceArticle(){
  if(!currentItem)return;
  const articles={
    apollo11:["Apollo 11 Lunar Module: descent and ascent","The Lunar Module had two stages. The descent stage slowed the spacecraft and carried the crew to the lunar surface. The ascent stage later lifted Armstrong and Aldrin back to lunar orbit to reunite with Michael Collins in the Command Module. The descent stage remained on the Moon.","https://www.nasa.gov/mission/apollo-11/"],
    lrv:["Lunar Roving Vehicle: exploring farther","The battery-powered Lunar Roving Vehicle extended the range of Apollo astronauts on the lunar surface. Apollo 15, 16 and 17 crews used it to travel across rough terrain, investigate geological features and collect samples. Apollo 15’s landing region was Hadley–Apennine.","https://www.nasa.gov/"],
    near:["NEAR Shoemaker: the first asteroid orbiter","NEAR Shoemaker studied the near-Earth asteroid 433 Eros. It entered orbit in February 2000 and, after completing its orbital mission, made a gentle touchdown in February 2001. Its observations helped scientists understand the composition and geology of a primitive asteroid.","https://science.nasa.gov/mission/near-shoemaker/"],
    ingenuity:["Ingenuity: powered flight on another world","Ingenuity was a technology demonstration carried to Mars by Perseverance. Its first flight on April 19, 2021, proved that powered, controlled flight was possible in the thin Martian atmosphere. It completed 72 flights before its mission ended in January 2024.","https://science.nasa.gov/mission/mars-2020-perseverance/"],
    kepler:["Kepler: finding worlds through starlight","Kepler searched for exoplanets by measuring tiny, repeated decreases in a star’s brightness as a planet crossed in front of it. After mechanical failures ended its original pointing mode, the K2 mission used sunlight pressure to help control the spacecraft and continue observations.","https://science.nasa.gov/mission/kepler/"],
  };
  const article=articles[currentItem.id]||["Science behind the mission",currentItem.story,"https://science.nasa.gov/"];
  $("article-title").textContent=article[0];$("article-subtitle").textContent=currentItem.name;$("article-body").textContent=article[1];$("article-source").href=article[2];go("article-screen");
}
$("article-back").addEventListener("click",()=>go("video-screen"));
function renderLog(){
  updateLevelProgress();
  $("profile-summary").innerHTML=`<div class="profile-avatar">${charArt((characters[state.gender||"girl"]||characters.girl).find(c=>c.id===state.character))}</div><div><b>${state.name||t("Explorer")}</b><small>${state.gender?t(state.gender+" explorer"):t("Explorer profile")}</small></div>`;
  $("log-levels").innerHTML=destinations.map(d=>{const l=state.levels[d.id];const n=d.items.filter(i=>state.found.includes(i.id)).length;return `<div class="log-row"><span>${I(l.open?d.icon:"lock")}</span><div><b>${d.title}</b><small>${t(l.done?"Completed":l.open?"Unlocked":"Locked")} · ${N(n+"/"+d.items.length)} ${t("stories")}</small></div></div>`}).join("");
  const badgeNames={first:["spark","First Discovery"],moon:["moon","Moon Explorer"],mars:["mars","Mars Explorer"],all:["trophy","Space Historian"]};
  $("log-badges").innerHTML=Object.entries(badgeNames).map(([id,[ic,name]])=>`<span class="earned-badge ${state.badges.includes(id)?"earned":""}">${I(state.badges.includes(id)?ic:"starO","inline")} ${t(name)}</span>`).join("");
  $("log-xp").textContent=state.xp;$("log-found").textContent=N(`${state.found.length} / ${TOTAL_STORIES}`);$("log-name").textContent=state.name||t("Explorer");
  const foundItems=destinations.flatMap(destination=>destination.items.filter(item=>state.found.includes(item.id)).map(item=>({item,destination})));
  $("log-list").innerHTML=foundItems.length?foundItems.map(entry=>`<div class="log-row"><span>${I(entry.item.icon)}</span><div><b>${entry.item.name}</b><small>${entry.destination.title} · ${entry.item.mission}</small></div></div>`).join(""):`<div class="empty-log">${t("No discoveries yet. Start your mission to build your archive.")}</div>`;
}
$("reset-progress").addEventListener("click",()=>{
  if(confirm(t("Are you sure you want to reset your explorer profile and all progress?"))){
    state=freshState();selectedGender="";selectedCharacter="";$("explorer-name").value="";save();updateHeader();go("home");notify(t("Your mission has been reset."));
  }
});

/* Restore saved explorer profile on refresh */
function restoreFlow(){
  updateLevelProgress();save();updateHeader();
  if(state.profileDone&&state.gender&&state.character&&state.name){
    selectedGender=state.gender;selectedCharacter=state.character;
  }
}
restoreFlow();
/* Language: English <-> Arabic (texts live in i18n.js) */
function applyLang(){
  document.documentElement.lang=arabicMode?"ar":"en";
  document.documentElement.dir=arabicMode?"rtl":"ltr";
  $("language-toggle").textContent=arabicMode?"English":"العربية";
  document.title=t("Space Echoes | Explore the forgotten pioneers");
  translateStatic();hydrateIcons();
  destinations=localizeDests(BASE_DESTS);
  if(currentDestination)currentDestination=destinations.find(d=>d.id===currentDestination.id);
  if(currentItem&&currentDestination)currentItem=currentDestination.items.find(i=>i.id===currentItem.id);
  updateHeader();
  const active=document.querySelector(".screen.active").id;
  if(active==="profile")renderCharacters();
  if(active==="destinations")renderDestinations();
  if(active==="log")renderLog();
  if(active==="equipment-screen"&&currentDestination)openDestination(currentDestination.id);
  if(active==="video-screen"&&currentItem)openStory(currentItem.id);
  if(active==="article-screen"&&currentItem)openScienceArticle();
  if(active==="quiz-screen"&&currentItem&&!quizFinished&&!answeredCurrentQuestion)renderQuestion();
  $("article-body").parentElement.dir=$("article-body").parentElement.lang="";
  if(arabicMode&&active==="article-screen"){$("article-body").parentElement.dir="ltr";$("article-body").parentElement.lang="en";}
}
$("language-toggle").addEventListener("click",()=>{
  arabicMode=!arabicMode;
  try{localStorage.setItem(LANG_KEY,arabicMode?"ar":"en");}catch(e){}
  applyLang();
});
applyLang();
