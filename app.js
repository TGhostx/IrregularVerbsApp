// Sample list of irregular verbs
const irregularVerbs = {"arise":[["arose","arisen"]],"awake":[["awakened","awakened"],["awoke","awoken"]],"backslide":[["backslid","backslidden"],["backslid","backslid"]],"be":[["was","been"],["were","been"]],"bear":[["bore","born"],["bore","borne"]],"beat":[["beat","beaten"],["beat","beat"]],"become":[["became","become"]],"begin":[["began","begun"]],"bend":[["bent","bent"]],"bet":[["bet","bet"],["betted","betted"]],"bid":[["bid","bidden"],["bade","bidden"],["bid","bid"]],"bind":[["bound","bound"]],"bite":[["bit","bitten"]],"bleed":[["bled","bled"]],"blow":[["blew","blown"]],"break":[["broke","broken"]],"breed":[["bred","bred"]],"bring":[["brought","brought"]],"broadcast":[["broadcast","broadcast"],["broadcasted","broadcasted"]],"browbeat":[["browbeat","browbeaten"],["browbeat","browbeat"]],"build":[["built","built"]],"burn":[["burned","burned"],["burnt","burnt"]],"burst":[["burst","burst"]],"bust":[["busted","busted"],["bust","bust"]],"buy":[["bought","bought"]],"cast":[["cast","cast"]],"catch":[["caught","caught"]],"choose":[["chose","chosen"]],"cling":[["clung","clung"]],"clothe":[["clothed","clothed"],["clad","clad"]],"come":[["came","come"]],"cost":[["cost","cost"]],"creep":[["crept","crept"]],"crossbreed":[["crossbred","crossbred"]],"cut":[["cut","cut"]],"daydream":[["daydreamed","daydreamed"],["daydreamt","daydreamt"]],"deal":[["dealt","dealt"]],"dig":[["dug","dug"]],"disprove":[["disproved","disproved"],["disproved","disproven"]],"dive":[["dove","dived"],["dived","dived"]],"do":[["did","done"]],"draw":[["drew","drawn"]],"dream":[["dreamed","dreamed"],["dreamt","dreamt"]],"drink":[["drank","drunk"]],"drive":[["drove","driven"]],"dwell":[["dwelt","dwelt"],["dwelled","dwelled"]],"eat":[["ate","eaten"]],"fall":[["fell","fallen"]],"feed":[["fed","fed"]],"feel":[["felt","felt"]],"fight":[["fought","fought"]],"find":[["found","found"]],"fit":[["fitted","fitted"],["fit","fit"]],"flee":[["fled","fled"]],"fling":[["flung","flung"]],"fly":[["flew","flown"]],"forbid":[["forbade","forbidden"]],"forecast":[["forecast","forecast"]],"forego":[["forewent","foregone"]],"foresee":[["foresaw","foreseen"]],"foretell":[["foretold","foretold"]],"forget":[["forgot","forgotten"],["forgot","forgot"]],"forgive":[["forgave","forgiven"]],"forsake":[["forsook","forsaken"]],"freeze":[["froze","frozen"]],"frostbite":[["frostbit","frostbitten"]],"get":[["got","gotten"],["got","got"]],"give":[["gave","given"]],"go":[["went","gone"]],"grind":[["ground","ground"]],"grow":[["grew","grown"]],"hand-feed":[["hand-fed","hand-fed"]],"handwrite":[["handwrote","handwritten"]],"hang":[["hung","hung"]],"have":[["had","had"]],"hear":[["heard","heard"]],"hew":[["hewed","hewn"],["hewed","hewed"]],"hide":[["hid","hidden"]],"hit":[["hit","hit"]],"hold":[["held","held"]],"hurt":[["hurt","hurt"]],"inbreed":[["inbred","inbred"]],"inlay":[["inlaid","inlaid"]],"input":[["input","input"],["inputted","inputted"]],"interbreed":[["interbred","interbred"]],"interweave":[["interwove","interwoven"],["interweaved","interweaved"]],"interwind":[["interwound","interwound"]],"jerry-build":[["jerry-built","jerry-built"]],"keep":[["kept","kept"]],"kneel":[["knelt","knelt"],["kneeled","kneeled"]],"knit":[["knitted","knitted"],["knit","knit"]],"know":[["knew","known"]],"lay":[["laid","laid"]],"lead":[["led","led"]],"lean":[["leaned","leaned"],["leant","leant"]],"leap":[["leaped","leaped"],["leapt","leapt"]],"learn":[["learned","learned"],["learnt","learnt"]],"leave":[["left","left"]],"lend":[["lent","lent"]],"let":[["let","let"]],"lie":[["lay","lain"]],"light":[["lit","lit"],["lighted","lighted"]],"lip-read":[["lip-read","lip-read"]],"lose":[["lost","lost"]],"make":[["made","made"]],"mean":[["meant","meant"]],"meet":[["met","met"]],"miscast":[["miscast","miscast"]],"misdeal":[["misdealt","misdealt"]],"misdo":[["misdid","misdone"]],"mishear":[["misheard","misheard"]],"mislay":[["mislaid","mislaid"]],"mislead":[["misled","misled"]],"mislearn":[["mislearned","mislearned"],["mislearnt","mislearnt"]],"misread":[["misread","misread"]],"misset":[["misset","misset"]],"misspeak":[["misspoke","misspoken"]],"misspell":[["misspelled","misspelled"],["misspelt","misspelt"]],"misspend":[["misspent","misspent"]],"mistake":[["mistook","mistaken"]],"misteach":[["mistaught","mistaught"]],"misunderstand":[["misunderstood","misunderstood"]],"miswrite":[["miswrote","miswritten"]],"mow":[["mowed","mowed"],["mowed","mown"]],"offset":[["offset","offset"]],"outbid":[["outbid","outbid"]],"outbreed":[["outbred","outbred"]],"outdo":[["outdid","outdone"]],"outdraw":[["outdrew","outdrawn"]],"outdrink":[["outdrank","outdrunk"]],"outdrive":[["outdrove","outdriven"]],"outfight":[["outfought","outfought"]],"outfly":[["outflew","outflown"]],"outgrow":[["outgrew","outgrown"]],"outleap":[["outleaped","outleaped"],["outleapt","outleapt"]],"outride":[["outrode","outridden"]],"outrun":[["outran","outrun"]],"outsell":[["outsold","outsold"]],"outshine":[["outshined","outshined"],["outshone","outshone"]],"outshoot":[["outshot","outshot"]],"outsing":[["outsang","outsung"]],"outsit":[["outsat","outsat"]],"outsleep":[["outslept","outslept"]],"outsmell":[["outsmelled","outsmelled"],["outsmelt","outsmelt"]],"outspeak":[["outspoke","outspoken"]],"outspeed":[["outsped","outsped"]],"outspend":[["outspent","outspent"]],"outswear":[["outswore","outsworn"]],"outswim":[["outswam","outswum"]],"outthink":[["outthought","outthought"]],"outthrow":[["outthrew","outthrown"]],"outwrite":[["outwrote","outwritten"]],"overbid":[["overbid","overbid"]],"overbreed":[["overbred","overbred"]],"overbuild":[["overbuilt","overbuilt"]],"overbuy":[["overbought","overbought"]],"overcome":[["overcame","overcome"]],"overdo":[["overdid","overdone"]],"overdraw":[["overdrew","overdrawn"]],"overdrink":[["overdrank","overdrunk"]],"overeat":[["overate","overeaten"]],"overfeed":[["overfed","overfed"]],"overhang":[["overhung","overhung"]],"overhear":[["overheard","overheard"]],"overlay":[["overlaid","overlaid"]],"overpay":[["overpaid","overpaid"]],"override":[["overrode","overridden"]],"overrun":[["overran","overrun"]],"oversee":[["oversaw","overseen"]],"oversell":[["oversold","oversold"]],"oversew":[["oversewed","oversewn"],["oversewed","oversewed"]],"overshoot":[["overshot","overshot"]],"oversleep":[["overslept","overslept"]],"overspeak":[["overspoke","overspoken"]],"overspend":[["overspent","overspent"]],"overspill":[["overspilled","overspilled"],["overspilt","overspilt"]],"overtake":[["overtook","overtaken"]],"overthink":[["overthought","overthought"]],"overthrow":[["overthrew","overthrown"]],"overwind":[["overwound","overwound"]],"overwrite":[["overwrote","overwritten"]],"partake":[["partook","partaken"]],"pay":[["paid","paid"]],"plead":[["pleaded","pleaded"],["pled","pled"]],"prebuild":[["prebuilt","prebuilt"]],"predo":[["predid","predone"]],"premake":[["premade","premade"]],"prepay":[["prepaid","prepaid"]],"presell":[["presold","presold"]],"preset":[["preset","preset"]],"preshrink":[["preshrank","preshrunk"]],"proofread":[["proofread","proofread"]],"prove":[["proved","proven"],["proved","proved"]],"put":[["put","put"]],"quick-freeze":[["quick-froze","quick-frozen"]],"quit":[["quit","quit"],["quitted","quitted"]],"read":[["read","read"]],"reawake":[["reawoke","reawaken"]],"rebid":[["rebid","rebid"]],"rebind":[["rebound","rebound"]],"rebroadcast":[["rebroadcast","rebroadcast"],["rebroadcasted","rebroadcasted"]],"rebuild":[["rebuilt","rebuilt"]],"recast":[["recast","recast"]],"recut":[["recut","recut"]],"redeal":[["redealt","redealt"]],"redo":[["redid","redone"]],"redraw":[["redrew","redrawn"]],"refit":[["refit","refit"],["refitted","refitted"]],"regrind":[["reground","reground"]],"regrow":[["regrew","regrown"]],"rehang":[["rehung","rehung"]],"rehear":[["reheard","reheard"]],"reknit":[["reknitted","reknitted"],["reknit","reknit"]],"relay":[["relaid","relaid"]],"relearn":[["relearned","relearned"],["relearnt","relearnt"]],"relight":[["relit","relit"],["relighted","relighted"]],"remake":[["remade","remade"]],"repay":[["repaid","repaid"]],"reread":[["reread","reread"]],"rerun":[["reran","rerun"]],"resell":[["resold","resold"]],"resend":[["resent","resent"]],"reset":[["reset","reset"]],"resew":[["resewed","resewn"],["resewed","resewed"]],"retake":[["retook","retaken"]],"reteach":[["retaught","retaught"]],"retear":[["retore","retorn"]],"retell":[["retold","retold"]],"rethink":[["rethought","rethought"]],"retread":[["retread","retread"]],"retrofit":[["retrofitted","retrofitted"],["retrofit","retrofit"]],"rewake":[["rewoke","rewaken"],["rewaked","rewaked"]],"rewear":[["rewore","reworn"]],"reweave":[["rewove","rewoven"],["reweaved","reweaved"]],"rewed":[["rewed","rewed"],["rewedded","rewedded"]],"rewet":[["rewet","rewet"],["rewetted","rewetted"]],"rewin":[["rewon","rewon"]],"rewind":[["rewound","rewound"]],"rewrite":[["rewrote","rewritten"]],"rid":[["rid","rid"]],"ride":[["rode","ridden"]],"ring":[["rang","rung"]],"rise":[["rose","risen"]],"roughcast":[["roughcast","roughcast"]],"run":[["ran","run"]],"sand-cast":[["sand-cast","sand-cast"]],"saw":[["sawed","sawed"],["sawed","sawn"]],"say":[["said","said"]],"see":[["saw","seen"]],"seek":[["sought","sought"]],"sell":[["sold","sold"]],"send":[["sent","sent"]],"set":[["set","set"]],"sew":[["sewed","sewn"],["sewed","sewed"]],"shake":[["shook","shaken"]],"shave":[["shaved","shaved"],["shaved","shaven"]],"shear":[["sheared","sheared"],["sheared","shorn"]],"shed":[["shed","shed"]],"shine":[["shined","shined"],["shone","shone"]],"shit":[["shit","shit"],["shat","shat"],["shitted","shitted"]],"shoot":[["shot","shot"]],"show":[["showed","shown"],["showed","showed"]],"shrink":[["shrank","shrunk"],["shrunk","shrunk"]],"shut":[["shut","shut"]],"sight-read":[["sight-read","sight-read"]],"sing":[["sang","sung"]],"sink":[["sank","sunk"],["sunk","sunk"]],"sit":[["sat","sat"]],"slay":[["slew","slain"],["slayed","slayed"]],"sleep":[["slept","slept"]],"slide":[["slid","slid"]],"sling":[["slung","slung"]],"slink":[["slinked","slinked"],["slunk","slunk"]],"slit":[["slit","slit"]],"smell":[["smelled","smelled"],["smelt","smelt"]],"sneak":[["sneaked","sneaked"],["snuck","snuck"]],"sow":[["sowed","sown"],["sowed","sowed"]],"speak":[["spoke","spoken"]],"speed":[["sped","sped"],["speeded","speeded"]],"spell":[["spelled","spelled"],["spelt","spelt"]],"spend":[["spent","spent"]],"spill":[["spilled","spilled"],["spilt","spilt"]],"spin":[["spun","spun"]],"spit":[["spit","spit"],["spat","spat"]],"split":[["split","split"]],"spoil":[["spoiled","spoiled"],["spoilt","spoilt"]],"spoon-feed":[["spoon-fed","spoon-fed"]],"spread":[["spread","spread"]],"spring":[["sprang","sprung"],["sprung","sprung"]],"stand":[["stood","stood"]],"steal":[["stole","stolen"]],"stick":[["stuck","stuck"]],"sting":[["stung","stung"]],"stink":[["stunk","stunk"],["stank","stunk"]],"strew":[["strewed","strewn"],["strewed","strewed"]],"stride":[["strode","stridden"]],"strike":[["struck","stricken"],["struck","struck"]],"string":[["strung","strung"]],"strive":[["strove","striven"],["strived","strived"]],"sublet":[["sublet","sublet"]],"sunburn":[["sunburned","sunburned"],["sunburnt","sunburnt"]],"swear":[["swore","sworn"]],"sweat":[["sweat","sweat"],["sweated","sweated"]],"sweep":[["swept","swept"]],"swell":[["swelled","swollen"],["swelled","swelled"]],"swim":[["swam","swum"]],"swing":[["swung","swung"]],"take":[["took","taken"]],"teach":[["taught","taught"]],"tear":[["tore","torn"]],"telecast":[["telecast","telecast"]],"tell":[["told","told"]],"test-drive":[["test-drove","test-driven"]],"test-fly":[["test-flew","test-flown"]],"think":[["thought","thought"]],"throw":[["threw","thrown"]],"thrust":[["thrust","thrust"]],"tread":[["trod","trodden"],["trod","trod"]],"typecast":[["typecast","typecast"]],"typeset":[["typeset","typeset"]],"typewrite":[["typewrote","typewritten"]],"unbend":[["unbent","unbent"]],"unbind":[["unbound","unbound"]],"unclothe":[["unclothed","unclothed"],["unclad","unclad"]],"underbid":[["underbid","underbid"]],"undercut":[["undercut","undercut"]],"underfeed":[["underfed","underfed"]],"undergo":[["underwent","undergone"]],"underlie":[["underlay","underlain"]],"undersell":[["undersold","undersold"]],"underspend":[["underspent","underspent"]],"understand":[["understood","understood"]],"undertake":[["undertook","undertaken"]],"underwrite":[["underwrote","underwritten"]],"undo":[["undid","undone"]],"unfreeze":[["unfroze","unfrozen"]],"unhang":[["unhung","unhung"]],"unhide":[["unhid","unhidden"]],"unknit":[["unknitted","unknitted"],["unknit","unknit"]],"unlearn":[["unlearned","unlearned"],["unlearnt","unlearnt"]],"unsew":[["unsewed","unsewn"],["unsewed","unsewed"]],"unsling":[["unslung","unslung"]],"unspin":[["unspun","unspun"]],"unstick":[["unstuck","unstuck"]],"unstring":[["unstrung","unstrung"]],"unweave":[["unwove","unwoven"],["unweaved","unweaved"]],"unwind":[["unwound","unwound"]],"uphold":[["upheld","upheld"]],"upset":[["upset","upset"]],"wake":[["woke","woken"],["waked","waked"]],"waylay":[["waylaid","waylaid"]],"wear":[["wore","worn"]],"weave":[["wove","woven"],["weaved","weaved"]],"wed":[["wed","wed"],["wedded","wedded"]],"weep":[["wept","wept"]],"wet":[["wet","wet"],["wetted","wetted"]],"win":[["won","won"]],"wind":[["wound","wound"]],"withdraw":[["withdrew","withdrawn"]],"withhold":[["withheld","withheld"]],"withstand":[["withstood","withstood"]],"wring":[["wrung","wrung"]],"write":[["wrote","written"]]}


function populateVerbsTable(selectedOption) {
  const verbsTable = document.getElementById("verbsTable").getElementsByTagName('tbody')[0];

  // Clear existing table content
  verbsTable.innerHTML = '';

  // Loop through the irregular verbs data
  for (const verb in irregularVerbs) {
    const baseForm = verb;
    const pastSimple = irregularVerbs[verb][0][0];
    const pastParticiple = irregularVerbs[verb][0][1];

    // Check if the past participle matches the selected option
    if (selectedOption === 'all' || (selectedOption === 'never_change' && baseForm === pastSimple && pastSimple === pastParticiple) || pastParticiple.endsWith(selectedOption)) {
      // Create a new row in the table
      
      const row = verbsTable.insertRow();

      // Add cells to the row
      const baseFormCell = row.insertCell(0);
      const pastSimpleCell = row.insertCell(1);
      const pastParticipleCell = row.insertCell(2);

      // Populate cells with verb conjugations
      baseFormCell.textContent = baseForm;
      pastSimpleCell.textContent = pastSimple;
      pastParticipleCell.textContent = pastParticiple;
      
    }
  }
}

// Event listener for category change
document.getElementById('verbCategory').addEventListener('change', function () {
  const selectedOption = this.value;
  populateVerbsTable(selectedOption);
});

function searchVerb() {
  const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
  const searchResultTable = document.getElementById('searchResultTable');
  const searchResult = document.getElementById('searchResult');

  // Clear existing search result content
  searchResultTable.innerHTML = '';
  searchResult.textContent = '';

  if (searchInput === '') {
    alert('Please enter a verb to search.');
    populateVerbsTable('all');
    return;
  }

  // Check if the searched verb exists in the irregular verbs data
  const foundVerb = Object.keys(irregularVerbs).find(verb => verb.toLowerCase() === searchInput);

  if (foundVerb) {
    // Create a new row in the search result table
    const row = searchResultTable.insertRow();

    // Add cells to the row
    const baseFormCell = row.insertCell(0);
    const pastSimpleCell = row.insertCell(1);
    const pastParticipleCell = row.insertCell(2);

    // Populate cells with verb conjugations
    baseFormCell.textContent = foundVerb;
    pastSimpleCell.textContent = irregularVerbs[foundVerb][0][0];
    pastParticipleCell.textContent = irregularVerbs[foundVerb][0][1];

  } 
  else {
    alert(`The verb "${searchInput}" does not exist in the irregular verbs data.`);
  }
}

// Function to initialize the quiz of Past Simple
function quizPastSimple() {
    const quiz = document.getElementById('quizPS');
    const questionElement = document.getElementById('questionPS');
    const userAnswerInput = document.getElementById('userAnswerPS');
    const feedbackElement = document.getElementById('quizFeedbackPS');

    // Select a random verb for the quiz
    const randomVerb = getRandomVerb();
            
    // Display the verb in the question
    questionElement.textContent = `What is the past simple of the verb '${randomVerb}'?`;

    // Store the correct answer in a data attribute for later comparison
    userAnswerInput.dataset.correctAnswer = getPastSimple(randomVerb);

    // Clear user input and feedback
    userAnswerInput.value = '';
    feedbackElement.textContent = '';
}

// Function to check the user's answer of Past Simple
function checkAnswerPS() {
    const userAnswerInput = document.getElementById('userAnswerPS');
    const feedbackElement = document.getElementById('quizFeedbackPS');

    // Get the user's answer and the correct answer from the data attribute
    const userAnswer = userAnswerInput.value.trim().toLowerCase();
    const correctAnswer = userAnswerInput.dataset.correctAnswer;

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        alert("Correct! Well done.");
        
        // Call quizPastSimple again to get another verb for the next question
        setTimeout(quizPastSimple, 10); // Delay for 1 second (1000 milliseconds) before showing the next question
    } else {
        alert("Incorrect. Try again.");
    }
}

// Function to initialize the quiz of Past Simple
function quizPastParticiple() {
    const quiz = document.getElementById('quizPP');
    const questionElement = document.getElementById('questionPP');
    const userAnswerInput = document.getElementById('userAnswerPP');
    const feedbackElement = document.getElementById('quizFeedbackPP');

    // Select a random verb for the quiz
    const randomVerb = getRandomVerb();
            
    // Display the verb in the question
    questionElement.textContent = `What is the past participle of the verb '${randomVerb}'?`;

    // Store the correct answer in a data attribute for later comparison
    userAnswerInput.dataset.correctAnswer = getPastParticiple(randomVerb);

    // Clear user input and feedback
    userAnswerInput.value = '';
    feedbackElement.textContent = '';
}

// Function to check the user's answer of Past Participle
function checkAnswerPP() {
    const userAnswerInput = document.getElementById('userAnswerPP');
    const feedbackElement = document.getElementById('quizFeedbackPP');

    // Get the user's answer and the correct answer from the data attribute
    const userAnswer = userAnswerInput.value.trim().toLowerCase();
    const correctAnswer = userAnswerInput.dataset.correctAnswer;

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        alert("Correct! Well done.");
        
        // Call quizPastSimple again to get another verb for the next question
        setTimeout(quizPastSimple, 10); // Delay for 1 second (1000 milliseconds) before showing the next question
    } else {
        alert("Incorrect. Try again.");
    }
}

// Function to get a random verb from the irregular verbs data
function getRandomVerb() {
    const verbsArray = Object.keys(irregularVerbs);
    const randomIndex = Math.floor(Math.random() * verbsArray.length);
    return verbsArray[randomIndex];
}

// Function to get the past tense of a given verb
function getPastSimple(verb) {
    return irregularVerbs[verb][0][0];
}

function getPastParticiple(verb) {
    return irregularVerbs[verb][0][1];
}

// Call function to populate the table and initializeQuiz to set up the first question when the page loads
window.onload = function () {
  populateVerbsTable('all');
  quizPastSimple();
  quizPastParticiple();
};




// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");
searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});
// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}
// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}