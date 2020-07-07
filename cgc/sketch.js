// Climate Generations Calculator
// by Olaf Val

var myName = 'Ich';
var myKidsNr;
var myKidsName = 'Kind';
var myKidsAge = 2005;
var myAge = 1980;

var fontS;
var page = 7; // 7
var xPage = 0;
var ifGoNext = 0;
var i1;
var f, oneYear;
var st;
var language = 1; // 0=english 1=german

var nextPage, ram, inName, inAge, inKidsNr, inKidsName, inKidsAge, co2BugetWiki, co2BugetMcc, demography;
var time2100;
var kidYour, kidFriend, kidAverage;

var back1, back2, back3, back4, back5, back6, back7, back8, back9, back10, back11, back12;

function preload() {
    i1 = loadImage('a/Clima-Generations-Calculator-co2.png');
    back1 = loadImage('a/wald-sky.jpg');
    back2 = loadImage('a/Erde-01.jpg');
    back3 = loadImage('a/Bach-01.jpg');
    back4 = loadImage('a/BaumBlatt.jpg');
    back5 = loadImage('a/NebelBaum.jpg');
    back6 = loadImage('a/Bienen.jpg');
    back7 = loadImage('a/Himmel-01.jpg');
    back8 = loadImage('a/Teich.jpg');
    back9 = loadImage('a/Wald.jpg');
    back10 = loadImage('a/Strom.jpg');
    back11 = loadImage('a/Schienen.jpg');
}

function setup() {

    if (windowWidth * 1.4 > windowHeight) {
        createCanvas(windowHeight * 0.56, windowHeight);
    } else {
        createCanvas(windowWidth, windowHeight);
    }

    fontS = width / 14;

    nextPage = createButton('Next');
    nextPage.position(0, height / 16 * 10);
    nextPage.style('opacity', 0.0); // <----- fade in to edit!
    nextPage.size(width, height / 16 * 1.4);
    nextPage.mousePressed(goNext);
    nextPage.hide();

    engPage = createButton('english');
    engPage.position(0, height / 16 * 10);
    engPage.style('opacity', 0.0); // <----- fade in to edit!
    engPage.size(width, height / 16 * 1.4);
    engPage.mousePressed(goNextEng);
    engPage.hide();

    kidYour = createButton('Your Kid');
    kidYour.position(0, height / 16 * 10);
    kidYour.style('opacity', 0.0); // <----- fade in to edit!
    kidYour.size(width, height / 16 * 2);
    kidYour.mousePressed(goKidYour);
    kidYour.hide();

    kidFriend = createButton('Friends Kid');
    kidFriend.position(0, height / 16 * 10);
    kidFriend.style('opacity', 0.0); // <----- fade in to edit!
    kidFriend.size(width, height / 16 * 2);
    kidFriend.mousePressed(goKidFriend);
    kidFriend.hide();

    kidAverage = createButton('Average Kid');
    kidAverage.position(0, height / 16 * 10);
    kidAverage.style('opacity', 0.0); // <----- fade in to edit!
    kidAverage.size(width, height / 16 * 2);
    kidAverage.mousePressed(goKidAverage);
    kidAverage.hide();

    inName = createInput('');
    inName.position(width / 20, height / 16 * 3);
    inName.size(width / 20 * 18, height / 16 * 1);
    inName.style('font-size', fontS + 'px');
    inName.hide();

    inAge = createInput('');
    inAge.position(width / 20, height / 16 * 3);
    inAge.size(width / 20 * 10, height / 16 * 1);
    inAge.style('font-size', fontS + 'px');
    inAge.hide();

    inKidsNr = createInput('0');
    inKidsNr.position(width / 20, height / 16 * 3);
    inKidsNr.size(width / 20 * 10, height / 16 * 1);
    inKidsNr.style('font-size', fontS + 'px');
    inKidsNr.hide();

    inKidsName = createInput('');
    inKidsName.position(width / 20, height / 16 * 3);
    inKidsName.size(width / 20 * 18, height / 16 * 1);
    inKidsName.style('font-size', fontS + 'px');
    inKidsName.hide();

    inKidsAge = createInput('');
    inKidsAge.position(width / 20, height / 16 * 3);
    inKidsAge.size(width / 20 * 10, height / 16 * 1);
    inKidsAge.style('font-size', fontS + 'px');
    inKidsAge.hide();

    ram = createA('https://de.wikipedia.org/wiki/Static_random-access_memory', 'Alle Daten werden in dieser App  nicht gespeichert');
    ram.position(width / 20, height / 16 * 15);
    ram.style('font-size', fontS / 2 + 'px');
    ram.hide();

    co2BugetWiki = createA('https://de.wikipedia.org/wiki/CO2-Budget', 'de.wikipedia.org/wiki/CO2-Budget');
    co2BugetWiki.position(width / 20, height / 16 * 14);
    co2BugetWiki.style('font-size', fontS / 2 + 'px');
    co2BugetWiki.hide();

    co2BugetMcc = createA('https://www.mcc-berlin.net/en/research/co2-budget.html', 'www.mcc-berlin.net/en/research/co2-budget.html');
    co2BugetMcc.position(width / 20, height / 16 * 15);
    co2BugetMcc.style('font-size', fontS / 2 + 'px');
    co2BugetMcc.hide();

    demography = createA('https://de.wikipedia.org/wiki/Demografie_Deutschlands', 'de.wikipedia.org/wiki/Demografie_Deutschlands');
    demography.position(width / 20, height / 16 * 15);
    demography.style('font-size', fontS / 2 + 'px');
    demography.hide();

    germanzero = createA('https://germanzero.de/mach-mit', 'germanzero.de');
    germanzero.position(width / 20, height / 16 * 15);
    germanzero.style('font-size', fontS / 1 + 'px');
    germanzero.hide();

    greenpeace = createA('https://www.greenpeace.de', 'greenpeace.de');
    greenpeace.position(width / 20, height / 16 * 15);
    greenpeace.style('font-size', fontS / 1 + 'px');
    greenpeace.hide();

    greenpeaceOrg = createA('https://www.greenpeace.org/', 'greenpeace.org');
    greenpeaceOrg.position(width / 20, height / 16 * 15);
    greenpeaceOrg.style('font-size', fontS / 1 + 'px');
    greenpeaceOrg.hide();

    fridaysforfuture = createA('https://fridaysforfuture.de/', 'fridaysforfuture.de');
    fridaysforfuture.position(width / 20, height / 16 * 15);
    fridaysforfuture.style('font-size', fontS / 1 + 'px');
    fridaysforfuture.hide();

    fridaysforfutureOrg = createA('https://fridaysforfuture.org/', 'fridaysforfuture.org');
    fridaysforfutureOrg.position(width / 20, height / 16 * 15);
    fridaysforfutureOrg.style('font-size', fontS / 1 + 'px');
    fridaysforfutureOrg.hide();

    conservationOrg = createA('https://www.conservation.org/', 'conservation.org');
    conservationOrg.position(width / 20, height / 16 * 15);
    conservationOrg.style('font-size', fontS / 1 + 'px');
    conservationOrg.hide();
}

function draw() {
    background(245, 215, 155);
    fontS = width / 14;

    if (page == 7) halloTitle();
    if (page == 8) getName();
    if (page == 9) getAge();
    if (page == 10) getKidsNr();
    if (page == 11) getKidsName();
    if (page == 12) getKidsAge();

    if (page == 13) halloAverageKids();

    if (page == 14) halloGt();
    if (page == 15) halloTime();
    if (page == 16) halloEndEge();

    if (page == 17) halloTimeLine();

    if (page == 18) halloAktiv();
    if (page == 19) halloEngage();
    if (page == 20) halloChange();

    if (page == 21) halloAbout();



    if (page == 22) tryAgain();
    if (page >= 23) page = 7;

    // display internal info
    textSize(14);
    fill(0);
    // text('page = ' + page + ' ' + xPage, 10, 20);
}

function halloTitle() {

    imageMode(CENTER);
    image(back1, width / 2, height / 2, height, height);
    textSize(fontS * 2);
    fill(0);
    noStroke();
    textAlign(LEFT);
    text('Climate', width / 20, height / 16 * 2);
    text('Generations', width / 20, height / 16 * 4);
    text('Calculator', width / 20, height / 16 * 6);

    // (Next) German Button
    textSize(fontS);
    fill(0);
    nextPage.position(0, height / 16 * 8);
    nextPage.show();
    text('German >>', width / 20, height / 16 * 9);

    // (Next) English Button
    textSize(fontS);
    fill(0);
    engPage.position(0, height / 16 * 10);
    engPage.show();
    text('English >>', width / 20, height / 16 * 11);

}


function getName() {
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back2, width / 2, height / 2, height, height);

    // Hallo Name
    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (language == 0) {
        text('What is your first name?', width / 20, height / 16 * 2);
    } else {
        text('Wie lautet dein Vorname?', width / 20, height / 16 * 2);
    }

    inName.position(width / 20, height / 16 * 3);
    inName.show();

    // Next Button
    if (inName.value().length > 1) {
        fill(0);
        nextPage.position(0, height / 16 * 5);
        nextPage.size(width, height / 16 * 3);
        nextPage.show();
        ifGoNext = 1;
    } else {
        ifGoNext = 0;
        fill(180);
    }
    text('>>', width / 20, height / 16 * 6);
    // footnotes
    ram.show();
}

function getAge() {
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back4, width / 2, height / 2, height, height);

    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (language == 0) {
        text('What year are you ', width / 20, height / 16 * 2);
        text('born in? (e.g. 2001)', width / 20, height / 16 * 3);

    } else {
        text('In welchem Jahr bist Du', width / 20, height / 16 * 2);
        text('geboren? (z.B. 2001)', width / 20, height / 16 * 3);
    }

    inAge.position(width / 20, height / 16 * 4);
    inAge.show();

    // Next Button
    if ((inAge.value() > year() - 200) && (inAge.value() < year())) {
        fill(0);
        nextPage.position(0, height / 16 * 6);
        nextPage.show();
        ifGoNext = 1;
    } else {
        fill(180);
        ifGoNext = 0;
    }
    text('>>', width / 20, height / 16 * 7);

    // footnotes
    ram.show();
}

function getKidsNr() {
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back5, width / 2, height / 2, height, height);

    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);

    if (language == 0) {
        text('Who do you think ', width / 20 * 1, height / 16 * 2);
        text('represents the next ', width / 20 * 1, height / 16 * 3);
        text('generation?', width / 20 * 1, height / 16 * 4);
        text('Your own child', width / 20 * 3, height / 16 * 6);
        text('A child of your ', width / 20 * 3, height / 16 * 8);
        text('friends or ', width / 20 * 3, height / 16 * 9);
        text('acquaintances', width / 20 * 3, height / 16 * 10);
    } else {
        text('Wer steht aus deiner', width / 20 * 1, height / 16 * 2);
        text('Sicht für die nächste', width / 20 * 1, height / 16 * 3);
        text('Generation?', width / 20 * 1, height / 16 * 4);
        text('Ein eigenes Kind', width / 20 * 3, height / 16 * 6);
        text('Ein Kind in deinem', width / 20 * 3, height / 16 * 8);
        text('Freundes- oder ', width / 20 * 3, height / 16 * 9);
        text('Bekanntenkreis', width / 20 * 3, height / 16 * 10);
    }

    // text('Ein "statistisches', width / 20 * 3, height / 16 * 11);
    // text('Kind" ', width / 20 * 3, height / 16 * 12);

    // Radio Buttons
    ellipseMode(CENTER);
    noFill();
    stroke(0);
    strokeWeight(fontS * 0.08);
    ellipse(width / 20 * 1.7, height / 16 * 5.8, fontS * 0.64, fontS * 0.64);
    ellipse(width / 20 * 1.7, height / 16 * 7.8, fontS * 0.64, fontS * 0.64);
    // ellipse(width / 20 * 1.7, height / 16 * 10.8, fontS * 0.64, fontS * 0.64);

    noStroke();
    fill(0);
    if (myKidsNr == 1) ellipse(width / 20 * 1.7, height / 16 * 5.8, fontS * 0.4, fontS * 0.4);
    if (myKidsNr == 2) ellipse(width / 20 * 1.7, height / 16 * 7.8, fontS * 0.4, fontS * 0.4);
    if (myKidsNr == 3) ellipse(width / 20 * 1.7, height / 16 * 10.8, fontS * 0.4, fontS * 0.4);

    kidYour.position(0, height / 16 * 5);
    kidYour.show();

    kidFriend.position(0, height / 16 * 7.2);
    kidFriend.show();

    // kidAverage.position(0, height / 16 * 10.3);
    // kidAverage.show();

    // Next Button
    noStroke();
    if (myKidsNr > 0) {
        fill(0);
        nextPage.position(0, height / 16 * 13);
        nextPage.show();
        ifGoNext = 1;
    } else {
        ifGoNext = 0;
        fill(180);
    }
    text('>>', width / 20, height / 16 * 14);

    // footnotes
    ram.show();
}

function getKidsName() {
    imageMode(CENTER);
    image(back6, width / 2, height / 2, height, height);

    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (myKidsNr == 2) {
        if (language == 0) {
            text("What is the name of ", width / 20, height / 16 * 2);
            text("your friends' child?", width / 20, height / 16 * 3);
        } else {
            text('Wie heißt das Kind', width / 20, height / 16 * 2);
            text('in deinem Freundeskreis?', width / 20, height / 16 * 3);
        }

    } else {
        if (language == 0) {
            text('What is the name of ', width / 20, height / 16 * 2);
            text('your youngest child?', width / 20, height / 16 * 3);
        } else {
            text('Wie heißt dein jüngstes', width / 20, height / 16 * 2);
            text('Kind?', width / 20, height / 16 * 3);
        }

    }
    inKidsName.position(width / 20, height / 16 * 4);
    inKidsName.show();

    // Next Button
    if (inKidsName.value().length > 1) {
        fill(0);
        nextPage.position(0, height / 16 * 6);
        nextPage.show();
        ifGoNext = 1;
    } else {
        ifGoNext = 0;
        fill(180);
    }
    text('>>', width / 20, height / 16 * 7);

    // footnotes
    ram.show();
}

function getKidsAge() {
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back7, width / 2, height / 2, height, height);

    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (myKidsNr == 2) {
        if (language == 0) {
            text("The child's year of ", width / 20, height / 16 * 2);
            text('birth?', width / 20, height / 16 * 3);
        } else {
            text('Das Geburtsjahr des', width / 20, height / 16 * 2);
            text('Kindes?', width / 20, height / 16 * 3);
        }

    } else {
        if (language == 0) {
            text('The year your youngest', width / 20, height / 16 * 2);
            text('child was born?', width / 20, height / 16 * 3);
        } else {
            text('Das Geburtsjahr deines', width / 20, height / 16 * 2);
            text('jüngsten Kindes?', width / 20, height / 16 * 3);
        }
    }

    inKidsAge.position(width / 20, height / 16 * 4);
    inKidsAge.show();

    // Next Button
    if ((inKidsAge.value() > 1800) && (inAge.value() < 4000)) {
        fill(0);
        nextPage.position(0, height / 16 * 6);
        nextPage.show();
        ifGoNext = 1;
    } else {
        ifGoNext = 0;
        fill(180);
    }
    text('>>', width / 20, height / 16 * 7);

    // footnotes
    ram.show();
}

function halloAverageKids() {
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back8, width / 2, height / 2, height, height);

    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    text('Ausgehend vom Durschnitt', width / 20, height / 16 * 2);
    text('der Bevökerung in', width / 20, height / 16 * 3);
    text('Deutschland nehmen wir', width / 20, height / 16 * 4);
    if (year() - myAge >= 30) {
        text('mal an, Du hättest mit', width / 20, height / 16 * 5);

    } else {
        text('mal an, Du würdest mit', width / 20, height / 16 * 5);
    }
    fill(255, 0, 0);
    text("30 Jahren", width / 20, height / 16 * 6);
    text("1 Kind", width / 20, height / 16 * 7);
    fill(0);
    text('bekommen.', width / 20, height / 16 * 8);
    // text('das wäre jetzt ' + (year() - myAge - 30), width / 20, height / 16 * 9);

    // Next Button
    fill(0);
    nextPage.position(0, height / 16 * 10);
    nextPage.show();
    text('>>', width / 20, height / 16 * 12);

    // footnotes
    demography.show();
}


function halloGt() {
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back9, width / 2, height / 2, height, height);

    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (language == 0) {
        text('Hello ' + myName + ',', width / 20, height / 16 * 2);
        text('if we want to limit global ', width / 20, height / 16 * 3);
        text('warming to 1,5° C,', width / 20, height / 16 * 4);
        text('today there remains a ', width / 20, height / 16 * 5);
        text('CO2 budget of', width / 20, height / 16 * 6);
        fill(255, 0, 0);
        text(getGigaTonnes() + " Gt", width / 20, height / 16 * 7);
        fill(0);
        text('for the whole earth.', width / 20, height / 16 * 8);
    } else {
        text('Hallo ' + myName + ',', width / 20, height / 16 * 2);
        text('wenn wir die Erderwärmung', width / 20, height / 16 * 3);
        text('auf 1,5° C begrenzen wollen,', width / 20, height / 16 * 4);
        text('verbleibt heute für die', width / 20, height / 16 * 5);
        text('gesamte Erde ein', width / 20, height / 16 * 6);
        text('CO2 Budget von ', width / 20, height / 16 * 7);
        fill(255, 0, 0);
        text(getGigaTonnes() + " Gt", width / 20, height / 16 * 8);
    }



    // Next Button
    fill(0);
    nextPage.position(0, height / 16 * 10);
    nextPage.show();
    text('>>', width / 20, height / 16 * 12);

    // footnotes
    co2BugetWiki.show();
    co2BugetMcc.show();
}

function halloTime() {
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back10, width / 2, height / 2, height, height);

    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (language == 0) {
        text('Humanity is running out of', width / 20, height / 16 * 2);
        text("time. If we don't reduce ", width / 20, height / 16 * 3);
        text('CO2 emissions significantly,', width / 20, height / 16 * 4);
        text('the budget in', width / 20, height / 16 * 5);
        fill(255, 0, 0);
        text(co2Budget(1.5, 1).years + ' years', width / 20, height / 16 * 6);
        text(co2Budget(1.5, 1).months + ' months', width / 20, height / 16 * 7);
        text(co2Budget(1.5, 1).days + ' days', width / 20, height / 16 * 8);
        fill(0);
        text('is used up.', width / 20, height / 16 * 9);
    } else {
        text('Der Menschheit läuft die', width / 20, height / 16 * 2);
        text('Zeit davon. Wenn wir den', width / 20, height / 16 * 3);
        text('CO2 Ausstoß nicht deutlich', width / 20, height / 16 * 4);
        text('verringern, ist das Budget in', width / 20, height / 16 * 5);
        fill(255, 0, 0);
        text(co2Budget(1.5, 1).years + " Jahren", width / 20, height / 16 * 6);
        text(co2Budget(1.5, 1).months + " Monaten", width / 20, height / 16 * 7);
        text(co2Budget(1.5, 1).days + " Tagen", width / 20, height / 16 * 8);
        fill(0);
        text('aufgebraucht.', width / 20, height / 16 * 9);
    }

    // Next Button
    fill(0);
    nextPage.position(0, height / 16 * 10);
    nextPage.show();
    text('>>', width / 20, height / 16 * 12);

    // footnotes
    co2BugetWiki.show();
    co2BugetMcc.show();
}

function halloEndEge() {
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back11, width / 2, height / 2, height, height);

    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (language == 0) {
        text('You will be', width / 20, height / 16 * 2);
        fill(255, 0, 0);
        text(2028 - myAge + ' years', width / 20, height / 16 * 3);
        fill(0);
        text('old when the global ', width / 20, height / 16 * 4);
        text('CO2 budget is exhausted.', width / 20, height / 16 * 5);

        text('Then', width / 20, height / 16 * 7);
        text(myKidsName, width / 20, height / 16 * 8);
        // text('Dein Kind', width / 20, height / 16 * 8);
        text('will only be', width / 20, height / 16 * 9);
        fill(255, 0, 0);
        text(2028 - myKidsAge + ' years', width / 20, height / 16 * 10);
        fill(0);
        text('old.', width / 20, height / 16 * 11);

    } else {
        text('Du wirst', width / 20, height / 16 * 2);
        fill(255, 0, 0);
        text(2028 - myAge + ' Jahre', width / 20, height / 16 * 3);
        fill(0);
        text('alt sein, wenn das globale', width / 20, height / 16 * 4);
        text('CO2 Budget ausgeschöpft', width / 20, height / 16 * 5);
        text('ist.', width / 20, height / 16 * 6);
        text(myKidsName, width / 20, height / 16 * 8);
        // text('Dein Kind', width / 20, height / 16 * 8);
        text('wird dann erst', width / 20, height / 16 * 9);
        fill(255, 0, 0);
        if (2028 - myKidsAge > 0) {
            text(2028 - myKidsAge + ' Jahre', width / 20, height / 16 * 10);
            fill(0);
            text('alt sein.', width / 20, height / 16 * 11);
        }
        if (2028 - myKidsAge < 0) {
            // text('in ' + (myKidsAge) + ' Jahren', width / 20, height / 16 * 10);
            text('in ' + ((2028 - myKidsAge) * -1) + ' Jahren', width / 20, height / 16 * 10);
            fill(0);
            text('gebohren.', width / 20, height / 16 * 11);
        }
        if (2028 - myKidsAge == 0) {
            // text('in ' + (myKidsAge) + ' Jahren', width / 20, height / 16 * 10);
            text('im gleichen Jahr', width / 20, height / 16 * 10);
            fill(0);
            text('gebohren.', width / 20, height / 16 * 11);
        }

    }

    // Next Button
    fill(0);
    nextPage.position(0, height / 16 * 11);
    nextPage.show();
    text('>>', width / 20, height / 16 * 13);

    // footnotes
    co2BugetWiki.show();
    co2BugetMcc.show();
}

function halloAbout() {
    imageMode(CENTER);
    image(i1, width / 2, height / 4, width / 2, width / 2);
    textSize(fontS / 4 * 3);
    fill(0);
    noStroke();
    textAlign(CENTER);
    text('Climate Generations Calculator', width / 2, height / 16 * 8);
    textSize(fontS / 5 * 3);
    text('by Olaf Val', width / 2, height / 16 * 9);
    text('based on an idea by Florian Bremer', width / 2, height / 16 * 10);
    text('CC BY-SA4.0 Olaf Val 2020', width / 2, height / 16 * 15);

    // Next Button
    textSize(fontS);
    fill(0);
    nextPage.position(0, height / 16 * 11);
    nextPage.show();
    text('>>', width / 2, height / 16 * 12);
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - T i m e L i n e - - - 
function halloTimeLine() {
    resizeCanvas(windowWidth, windowWidth * 0.56);
    fontS = height / 24;
    background(245, 215, 155);

    textSize(fontS * 1.5);
    fill(0);
    noStroke();
    textAlign(LEFT);
    text('TimeLine', width / 20, height / 16 * 2);
    textSize(fontS * 1.0);
    time2100 = year() + 100;
    text(year() + ' - ' + time2100, width / 20, height / 16 * 3);

    // Years 
    textSize(fontS * 1);
    fill(75);
    textAlign(LEFT);
    text(year(), width / 20 * 1.7, height / 16 * 13.5);
    textAlign(CENTER);
    text(year() + 50, width / 20 * 10, height / 16 * 13.5);
    textAlign(RIGHT);
    text(time2100, width / 20 * 18.3, height / 16 * 13.5);

    // Lables CO2
    fill(0);
    textAlign(RIGHT);
    text(int(getGigaTonnes()) + ' Gt', width / 20 * 1.5, height / 16 * 5);
    text(0 + ' Gt', width / 20 * 1.5, height / 16 * 12);

    // Lables glabalWarming
    fill(255, 0, 0);
    textAlign(LEFT);
    text('4,7 °C', width / 20 * 18.5, height / 16 * 5);
    text('0,9 °C', width / 20 * 18.5, height / 16 * 11);

    // myLife
    fill(0, 155, 0);
    oneYear = (width - (width / 20 * 2)) / 100;
    for (f = 0; f < 81 - (year() - myAge); f++) {
        if(f == 81 - (year() - myAge) - 3) fill(0, 155, 0, 125);
        if(f == 81 - (year() - myAge) - 2) fill(0, 155, 0, 80);
        if(f == 81 - (year() - myAge) - 1) fill(0, 155, 0, 35);
        
        ellipse((width / 20 * 1.7) + (oneYear * f), height / 16 * 7, 10, 10);
    }

    // kidsLife
    fill(0, 215, 0);
    oneYear = (width - (width / 20 * 2)) / 100;
    if (myKidsAge <= year()) {
        for (f = 0; f < 81 - (year() - myKidsAge); f++) {
            if(f == 81 - (year() - myKidsAge) - 3) fill(0, 215, 0, 105);
            if(f == 81 - (year() - myKidsAge) - 2) fill(0, 215, 0, 70);
            if(f == 81 - (year() - myKidsAge) - 1) fill(0, 215, 0, 35);
            ellipse((width / 20 * 1.7) + (oneYear * f), height / 16 * 8, 10, 10);
        }
    } else {
        for (f = (myKidsAge - year()); f < 80 - (myKidsAge - year()); f++) {
            ellipse((width / 20 * 1.7) + (oneYear * f), height / 16 * 8, 10, 10);
        }
    }

    // co2Budget
    stroke(0);
    noFill();
    strokeWeight(3);
    bezier(width / 20 * 1.7, height / 16 * 5,
        width / 20 * 2.5, height / 16 * 5,
        width / 20 * 1.7 + ((2028 - year()) * oneYear) - (width / 20), height / 16 * 12,
        width / 20 * 1.7 + ((2028 - year()) * oneYear), height / 16 * 12
    );

    // globalWarming
    stroke(255, 0, 0);
    noFill();
    strokeWeight(3);
    bezier(
        width / 20 * 1.7, height / 16 * 11,
        width / 20 * 3, height / 16 * 11,
        width / 20 * 15, height / 16 * 5,
        width / 20 * 18.3, height / 16 * 5
    );

    // TimeScale
    fill(75);
    stroke(0);
    strokeWeight(1);
    line(width / 20 * 1.7, height / 16 * 12, width / 20 * 18.3, height / 16 * 12);
    line(width / 20 * 1.7, height / 16 * 12, width / 20 * 1.7, height / 16 * 12.5);
    line(width / 20 * 10, height / 16 * 12, width / 20 * 10, height / 16 * 12.5);
    line(width / 20 * 18.3, height / 16 * 12, width / 20 * 18.3, height / 16 * 12.5);
    noStroke();

    // Legend
    noStroke();
    textAlign(LEFT);
    fill(0, 155, 0);
    rect(width / 20 * 7, height / 16 * 1.35, fontS, fontS);
    fill(0);
    text(myName, width / 20 * 7.6, height / 16 * 1.35 + (fontS * 0.8));

    fill(0, 215, 0);
    rect(width / 20 * 7, height / 16 * 2.35, fontS, fontS);
    fill(0);
    text(myKidsName, width / 20 * 7.6, height / 16 * 2.35 + (fontS * 0.8));

    fill(0);
    rect(width / 20 * 12, height / 16 * 1.35, fontS, fontS);
    fill(0);
    text('CO2-Budget', width / 20 * 12.6, height / 16 * 1.35 + (fontS * 0.8));

    fill(255, 0, 0);
    rect(width / 20 * 12, height / 16 * 2.35, fontS, fontS);
    fill(0);
    text('Global-Warming', width / 20 * 12.6, height / 16 * 2.35 + (fontS * 0.8));

    // Next Button
    fill(0);
    textAlign(LEFT);
    textSize(fontS * 1.9);
    nextPage.position(0, height / 16 * 13);
    nextPage.show();
    text('>>', width / 20, height / 16 * 15);
}

function halloAktiv() {
    resizeCanvas(windowHeight * 0.56, windowHeight);
    imageMode(CENTER);
    image(back3, width / 2, height / 2, height, height);
    textSize(fontS * 1.5);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (language == 0) {
        text('Get active!', width / 20, height / 16 * 2);
        textSize(fontS);
        text('The most effective means', width / 20, height / 16 * 4);
        text('of realizing the urgently', width / 20, height / 16 * 5);
        text('needed change lies in your', width / 20, height / 16 * 6);
        text('voice in regional and ', width / 20, height / 16 * 7);
        text('national elections.', width / 20, height / 16 * 8);
    } else {
        text('Werde aktiv!', width / 20, height / 16 * 2);
        textSize(fontS);
        text('Das wirkungsvollste Mittel,', width / 20, height / 16 * 4);
        text('zur Realisation der dringend', width / 20, height / 16 * 5);
        text('nötigen Veränderungen, ', width / 20, height / 16 * 6);
        text('liegt in deiner Stimme bei ', width / 20, height / 16 * 7);
        text('regionalen und ', width / 20, height / 16 * 8);
        text('überregionalen Wahlen.', width / 20, height / 16 * 9);
    }


    // Next Button
    fill(0);
    nextPage.position(0, height / 16 * 14);
    nextPage.show();
    text('>>', width / 20, height / 16 * 15);
}

function halloEngage() {
    resizeCanvas(windowHeight * 0.56, windowHeight);
    imageMode(CENTER);
    image(back3, width / 2, height / 2, height, height);
    textSize(fontS * 1.5);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (language == 0) {
        text('Get involved', width / 20, height / 16 * 2);
        textSize(fontS);
        text('in organizations', width / 20, height / 16 * 3);
        text('such as:', width / 20, height / 16 * 4);

        greenpeaceOrg.position(width / 20, height / 16 * 5.5);
        greenpeaceOrg.style('font-size', fontS / 1 + 'px');
        greenpeaceOrg.show();

        fridaysforfutureOrg.position(width / 20, height / 16 * 7.5);
        fridaysforfutureOrg.style('font-size', fontS / 1 + 'px');
        fridaysforfutureOrg.show();

        conservationOrg.position(width / 20, height / 16 * 9.5);
        conservationOrg.style('font-size', fontS / 1 + 'px');
        conservationOrg.show();

    } else {
        text('Beteilige dich', width / 20, height / 16 * 2);
        textSize(fontS);
        text('bei Organisationen', width / 20, height / 16 * 3);
        text('wie zum Beipiel:', width / 20, height / 16 * 4);

        greenpeace.position(width / 20, height / 16 * 5.5);
        greenpeace.style('font-size', fontS / 1 + 'px');
        greenpeace.show();

        fridaysforfuture.position(width / 20, height / 16 * 7.5);
        fridaysforfuture.style('font-size', fontS / 1 + 'px');
        fridaysforfuture.show();

        germanzero.position(width / 20, height / 16 * 9.5);
        germanzero.style('font-size', fontS / 1 + 'px');
        germanzero.show();
    }

    // Next Button
    fill(0);
    nextPage.position(0, height / 16 * 14);
    nextPage.show();
    text('>>', width / 20, height / 16 * 15);
}

function halloChange() {
    resizeCanvas(windowHeight * 0.56, windowHeight);
    imageMode(CENTER);
    // image(back1, width/2, height/2, height * 0.56, height);
    image(back3, width / 2, height / 2, height, height);
    textSize(fontS * 1.5);
    fill(0);
    noStroke();
    textAlign(LEFT);
    if (language == 0) {
        text('You can ', width / 20, height / 16 * 2);
        text('improve your ', width / 20, height / 16 * 4);
        text('CO2 balance!!', width / 20, height / 16 * 6);
        textSize(fontS);
        text('In the areas of:', width / 20, height / 16 * 8);
        text('nutrition, mobility', width / 20, height / 16 * 9);
        text('heating, and consumption', width / 20, height / 16 * 10);
        text('of fast fashion and also', width / 20, height / 16 * 11);
        text('digital entertainment.', width / 20, height / 16 * 12);
    } else {
        text('Du kannst deinen', width / 20, height / 16 * 2);
        text('CO2 Bilanz', width / 20, height / 16 * 4);
        text('verbessern!', width / 20, height / 16 * 6);
        textSize(fontS);
        text('In den Bereichen:', width / 20, height / 16 * 8);
        text('Ernährung, Mobilität', width / 20, height / 16 * 9);
        text('Heizung und den ', width / 20, height / 16 * 10);
        text('Konsum von Fast-Fashion', width / 20, height / 16 * 11);
        text('so wie digitalem', width / 20, height / 16 * 12);
        text('Entertainment.', width / 20, height / 16 * 13);
    }

    // Next Button
    fill(0);
    nextPage.position(0, height / 16 * 14);
    nextPage.show();
    text('>>', width / 20, height / 16 * 15);
}

function tryAgain() {
    textSize(fontS);
    fill(0);
    noStroke();
    textAlign(LEFT);
    text('...try again?', width / 20, height / 16 * 2);

    // Next Button
    fill(0);
    nextPage.position(0, height / 16 * 8);
    nextPage.show();
    text('>>', width / 20, height / 16 * 9);
}

function goKidYour() {
    myKidsNr = 1;
}

function goKidFriend() {
    myKidsNr = 2;
}

function goKidAverage() {
    myKidsNr = 3;
}

function goNextEng() {
    language = 0;
    goNext();
}

function goNext() {
    xPage = 0;
    if (page == 8) myName = inName.value();
    if (page == 9) myAge = inAge.value();
    if (page == 10) {
        if (myKidsNr == 3) {
            page = 13;
            xPage = 1;
            myKidsNr = 1;
            myKidsName = 'Dein Kind';
            myKidsAge = int(myAge) + 30;
            nextPage.hide();
        }
    }
    if (page == 11) myKidsName = inKidsName.value();
    if (page == 12) {
        myKidsAge = inKidsAge.value();
        page = 14;
        xPage = 1;
    }

    inName.hide();
    inAge.hide();
    inKidsNr.hide();
    inKidsName.hide();
    inKidsAge.hide();
    ram.hide();
    co2BugetWiki.hide();
    co2BugetMcc.hide();
    demography.hide();
    kidYour.hide();
    kidFriend.hide();
    kidAverage.hide();
    germanzero.hide();
    greenpeace.hide();
    fridaysforfuture.hide();
    greenpeaceOrg.hide();
    fridaysforfutureOrg.hide();
    conservationOrg.hide();
    engPage.hide();
    if (xPage == 0) {
        page = page + 1;
        nextPage.hide();
    }
    xPage = 0;
}

function keyPressed() {
    if (keyCode == 13) {
        if (ifGoNext == 1) {
            goNext();
        }
    }
}

function getGigaTonnes() {
    var c1 = co2Budget(1.5, 1).budget;
    var c2 = int(c1);
    var c3 = c2 / 1000000000;
    //var c3 = round(c2 / 1000);
    var c4 = c3.toFixed(2);
    return c4;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function windowResized() {
    if ((page < 1) || (page > 16)) {
        if (page == 17) {
            resizeCanvas(windowWidth, windowWidth * 0.56);
        } else {

            if (windowWidth * 1.4 > windowHeight) {
                resizeCanvas(windowHeight * 0.56, windowHeight);

            } else {
                resizeCanvas(windowWidth, windowHeight);
            }
        }
    }


}


// the end