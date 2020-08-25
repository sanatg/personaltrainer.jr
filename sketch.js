var canvas;
var logotrainer;
var logotrainerImg;
var suryalogo,suryalogoImg;
var agebutton1;
var agebutton2;
var agebutton3;
var agebutton4;
var inputbox;
var agebutton6;
var exercise1;
var exercise2;
var continuebutton;
var continuebutton2;
var namelogoI;
var namelogo;
var discription,discriptionImg;
var discription2,discription2Img;
var discription3,discription3Img;
var discription4,discription4Img;
var discription5,discription5Img;
var discription7,discription7Img;
var discription9,discription9Img;
var discription10;
var discription11,discription11Img;
var discription12;
var discription13,discription13Img;
var discription14;
var discription15,discription15Img;
var discription16;
var discription17,discription17Img;
var discription18;
var discription19,discription19Img;
var discription20;
var discription21,discription21Img;
var discription22;
var discription23;
var discription24;
var discription25;
var discription26;
var discription27;
var discription28;
var discription29;
var discription30;
var discription31,discription31Img;
var discription32;
var discription33;
var discription34;
var discription35;
var discription36,discription36Img;
var discription37;
var discription38,discription38Img;
var discription39;
var discription40,discription40Img;
var discription41;
var discription42,discription42Img;
var discription43;
var discription44,discription44Img;
var discription45;
var discription46,discription46Img;
var discription47;
var discription48,discription48Img;
var discription49;
var discription50,discription50Img;
var discription51;
var discription52,discription52Img;
var discription53;
var discription54,discription54Img;
var discription55;
var discription56,discription56Img;
var discription6;
var discription8;
var stepsButton;
var stepsButton2;
var stepsButton3;
var stepsButton4;
var stepsButton5;
var stepsButton6;
var stepsButton7;
var stepsButton8;
var stepsButton9;
var stepsButton10;
var stepsButton11;
var stepsButton12;
var stepsButton13;
var stepsButton14;
var stepsButton15;
var stepsButton16;
var stepsButton17;
var stepsButton18;
var stepsButton19;
var stepsButton20;
var stepsButton22;
var stepsButton23;
function preload() {
 logotrainerImg = loadImage("./logo.png");
 discriptionImg = loadImage("./logo2.png");
 namelogoI = loadImage("./logo3.png");
  discription2Img = loadImage("./logo5.png");
 discription3Img = loadImage("./logo4.png");
 discription4Img = loadImage("./logo6.png");
 discription5Img = loadImage("./logo7.png");
 discription7Img = loadImage("./step1.jpg");
 discription9Img = loadImage("./step2.jpg");
 discription11Img = loadImage("./step3.jpg");
 discription13Img = loadImage("./step4.jpg");
 discription15Img = loadImage("./step5.jpg");
 discription17Img = loadImage("./step6.jpg");
 discription19Img = loadImage("./step7.jpg");
 discription21Img = loadImage("./step8.jpg");
 discription31Img = loadImage("./logo8.png");
 discription36Img = loadImage("./logo9.png");
 discription38Img = loadImage("./oats.jpeg");
 discription40Img = loadImage("./oats2.jpeg");
 discription42Img = loadImage("./oats3.jpeg");
 discription44Img = loadImage("./oats4.jpeg");
 discription46Img = loadImage("./oats5.jpeg");
 discription48Img = loadImage("./oats6.jpeg");
 discription50Img = loadImage("./oats7.jpeg");
 discription52Img = loadImage("./oats8.jpeg");
 discription54Img = loadImage("./oats9.jpeg");
 discription56Img = loadImage("./oats10.jpeg");
}
function setup(){
canvas = createCanvas(windowWidth,windowHeight);
screen1();
continuebutton.mousePressed(hidedata1);
}

function screen1(){
  logotrainer = createSprite(width/2,height/2-150,30,30);
  logotrainer.addImage(logotrainerImg);
  discription = createSprite(width/2,height/2-50,30,30);
  discription.addImage(discriptionImg);
  agebutton1 = createButton("Age:3 - 5");
  agebutton2 = createButton("Age:6 - 9");
  agebutton3 = createButton("Age:10 - 13");
  agebutton4 = createButton("Age:13 - 16");
  continuebutton = createButton("Getting started");
}
function screen2(){
  namelogo = createSprite(width/2-100,height/2,30,30);
  namelogo.addImage(namelogoI);
  discription2 = createSprite(width/2,height/2-50,30,30);
  discription2.addImage(discription2Img);
  inputbox = createInput();
  inputbox.position(width/2,height/2-10);
  discription3 = createSprite(width/2,height/2+50,30,30);
  discription3.addImage(discription3Img);
  exercise1 = createButton("Height Building");
  exercise2 = createButton("Weight Loss");
  exercise1.position(width/2, height/2+100);
  exercise2.position(width/2, height/2+150);
  continuebutton2 = createButton("Next Step");
  continuebutton2.mousePressed(hidedata2);
  continuebutton2.position(width/2+300, height/2+150);
}
function screen3(){
discription4 = createSprite(width/2,height/2-70,30,30);
discription4.addImage(discription4Img);
discription5 = createSprite(width/2-450,height/2-30,30,30);
discription5.addImage(discription5Img);
discription6 = createElement('h4');
discription6.position(width/2-530,height/2);
discription6.html("In the morning the best exercise is yoga and that also surya namskar.Surya Namaskar or Sun Salutation is a sequence of 12 powerful yoga poses. Besides being a great cardiovascular workout, Surya Namaskar is also known to have an immensely positive impact on the body and mind.It is best to do empty stomach however to find best results you have to do 5 rounds a day and for 20 days.")
stepsButton = createButton("Step1. Pranamasana");
stepsButton.position(width/2+300, height/2+150);
stepsButton.mousePressed(hidedata3)
}
function screen4() {
  discription7 = createSprite(width/2,height/2);
  discription7.addImage(discription7Img);
  discription8 = createElement('h4');
  discription8.html("keep your feet together and balance your weight equally on both the feet. Expand your chest and relax your shoulders. As you breathe in, lift both arms up from the sides, and as you exhale, bring your palms together in front of the chest in prayer position.")
  discription8.position(width/2-530,height/2+100);
  stepsButton2 = createButton("Step2. Hastauttanasana");
  stepsButton2.position(width/2+300,height/2+150);
  stepsButton2.mousePressed(hidedata4);
}
function screen5() {
  discription9 = createSprite(width/2,height/2);
  discription9.addImage(discription9Img);
  discription10 = createElement('h4');
  discription10.html("Breathing in, lift the arms up and back, keeping the biceps close to the ears. In this pose, the effort is to stretch the whole body up from the heels to the tips of the fingers.");
  discription10.position(width/2-530,height/2+100);
  stepsButton3 = createButton("Step 3. Hastapadasana");
  stepsButton3.position(width/2+300, height/2+150);
  stepsButton3.mousePressed(hidedata5);
}
function screen6() {
discription11 = createSprite(width/2,height/2);
discription11.addImage(discription11Img);
discription12 = createElement('h4');
discription12.html("Breathing out, bend forward from the waist keeping the spine erect. As you exhale completely, bring the hands down to the floor beside the feet.");
discription12.position(width/2-530,height/2+100);
stepsButton4 = createButton("Step 4. Ashwa Sanchalanasana");
stepsButton4.position(width/2+300, height/2+150);
stepsButton4.mousePressed(hidedata6);
}
function screen7() {
discription13 = createSprite(width/2,height/2);
discription13.addImage(discription13Img);
discription14 = createElement('h4');
discription14.html("Breathing in, push your right leg back, as far back as possible. Bring the right knee to the floor and look up.");
discription14.position(width/2-530,height/2+100);
stepsButton5 = createButton("Step 5. Dandasana");
stepsButton5.position(width/2+300, height/2+150);
stepsButton5.mousePressed(hidedata7);
}
function screen8() {
  discription15 = createSprite(width/2,height/2);
  discription15.addImage(discription15Img);
  discription16 = createElement('h4');
  discription16.html("As you breathe in, take the left leg back and bring the whole body in a straight line.");
  discription16.position(width/2-530,height/2+100);
  stepsButton6 = createButton("Step 6. Ashtanga Namaskara");
  stepsButton6.position(width/2+300, height/2+150);
  stepsButton6.mousePressed(hidedata8);
}
function screen9() {
  discription17 = createSprite(width/2,height/2);
  discription17.addImage(discription17Img);
  discription18 = createElement('h4');
  discription18.html("Gently bring your knees down to the floor and exhale. Take the hips back slightly, slide forward, rest your chest and chin on the floor. Raise your posterior a little bit. The two hands, two feet, two knees, chest and chin (eight parts of the body) should touch the floor.");
  discription18.position(width/2-530,height/2+100);
  stepsButton7 = createButton("Step 7. Bhujangasana");
  stepsButton7.position(width/2+300, height/2+150);
  stepsButton7.mousePressed(hidedata9);
}
function screen10() {
  discription19 = createSprite(width/2,height/2);
  discription19.addImage(discription19Img);
  discription20 = createElement('h4');
  discription20.html("Slide forward and raise the chest up into the Cobra pose. You may keep your elbows bent in this pose with the shoulders away from the ears. Look up at the ceiling.");
  discription20.position(width/2-530,height/2+100);
  stepsButton8 = createButton("Step 8. Adho Mukha Svanasana");
  stepsButton8.position(width/2+300, height/2+150);
  stepsButton8.mousePressed(hidedata10);
}
function screen11() {
  discription21 = createSprite(width/2,height/2);
  discription21.addImage(discription21Img);
  discription22 = createElement('h4');
  discription22.html("Breathing out, lift the hips and the tailbone up to bring the body into an inverted ‘V’ pose.");
  discription22.position(width/2-530,height/2+100);
  stepsButton9 = createButton("Step 9. Ashwa Sanchalanasana");
  stepsButton9.position(width/2+300, height/2+150);
  stepsButton9.mousePressed(hidedata11);
}
function screen12() {
discription23 = createSprite(width/2,height/2);
discription23.addImage(discription13Img);
discription24 = createElement('h4');
discription24.html("Breathing in, push your right leg back, as far back as possible. Bring the right knee to the floor and look up.");
discription24.position(width/2-530,height/2+100);
stepsButton10 = createButton("Step 10. Hastapadasana");
stepsButton10.position(width/2+300, height/2+150);
stepsButton10.mousePressed(hidedata12);
}
function screen13() {
discription25 = createSprite(width/2,height/2);
discription25.addImage(discription11Img);
discription26 = createElement('h4');
discription26.html("Breathing out, bend forward from the waist keeping the spine erect. As you exhale completely, bring the hands down to the floor beside the feet.");
discription26.position(width/2-530,height/2+100);
stepsButton11 = createButton("Step 11. Hastauttanasana");
stepsButton11.position(width/2+300, height/2+150);
stepsButton11.mousePressed(hidedata13);
}
function screen14() {
  discription27 = createSprite(width/2,height/2);
  discription27.addImage(discription9Img);
  discription28= createElement('h4');
  discription28.html("Breathing in, lift the arms up and back, keeping the biceps close to the ears. In this pose, the effort is to stretch the whole body up from the heels to the tips of the fingers.");
  discription28.position(width/2-530,height/2+100);
  stepsButton12= createButton("Step 12. Tadasana");
  stepsButton12.position(width/2+300, height/2+150);
  stepsButton12.mousePressed(hidedata14);
}
function screen15() {
  discription29 = createSprite(width/2,height/2);
  discription29.addImage(discription7Img);
  discription30 = createElement('h4');
  discription30.html("keep your feet together and balance your weight equally on both the feet. Expand your chest and relax your shoulders. As you breathe in, lift both arms up from the sides, and as you exhale, bring your palms together in front of the chest in prayer position.")
  discription30.position(width/2-530,height/2+100);
  stepsButton13 = createButton("Evening Routine");
  stepsButton13.position(width/2+300,height/2+150);
  stepsButton13.mousePressed(hidedata15);
}
function screen16(){
discription31 = createSprite(width/2-450,height/2-30,30,30);
discription31.addImage(discription31Img);
discription32 = createElement('h4');
discription32.position(width/2-530,height/2);
discription32.html("In the evening the exercises to do the best is squats which can be a quite a workout for belly fat.it will also increase blood flow to the brain which helps with cognitive function.Doing squats helps to build strong muscles and bones After you get a grasp of it you can start doing 100 squats a day as a set of 50 each.");
stepsButton14 = createButton("Directions-");
stepsButton14.position(width/2+300, height/2+150);
stepsButton14.mousePressed(hidedata16);
}
function screen17() {
  discription33 = createElement('h4');
  discription33.html("1. Start by standing with your feet shoulder-width apart, resting your arms down at your sides.")
  discription33.position(width/2-530,height/2-100);
  discription34 = createElement('h4');
  discription34.html("2. While bracing yourself and keeping your chest up and neck neutral, bend your knees and push your hips back as if you're going to sit in a chair.")
  discription34.position(width/2-530,height/2-50);
  discription35 = createElement('h4');
  discription35.html("3. When your thighs are parallel to the floor,Go as much down you can and then get up")
  discription35.position(width/2-530,height/2);
  stepsButton15 = createButton("Tasty weight reduction recipies");
  stepsButton15.position(width/2+300,height/2+150);
  stepsButton15.mousePressed(hidedata17);
}
function screen18() {
discription36 = createSprite(width/2-400,height/2-30,30,30)
discription36.addImage(discription36Img);
discription37 = createElement('h4')
discription37.html("1.We will be going to make oats chilla,Firstly dry roast 1 cup rolled oats. take unflavoured oats as we are adding spices.");
discription37.position(width/2-400,height/2);
discription38 = createSprite(width/2,height/2+130,30,30);
discription38.addImage(discription38Img);
stepsButton16 = createButton("Step2");
stepsButton16.position(width/2+300,height/2+150);
stepsButton16.mousePressed(hidedata18);
}
function screen19() {
discription39 = createElement('h4')
discription39.html("2.Roast until the oats turn crisp.");
discription39.position(width/2-400,height/2);
discription40 = createSprite(width/2,height/2+130,30,30);
discription40.addImage(discription40Img);
stepsButton17 = createButton("Step3");
stepsButton17.position(width/2+300,height/2+150);
stepsButton17.mousePressed(hidedata19);
}
function screen20() {
discription41 = createElement('h4')
discription41.html("3.cool the oats completely and blend to a fine powder without adding any water.");
discription41.position(width/2-400,height/2);
discription42 = createSprite(width/2,height/2+130,30,30);
discription42.addImage(discription42Img);
stepsButton18 = createButton("Step4");
stepsButton18.position(width/2+300,height/2+150);
stepsButton18.mousePressed(hidedata20);
}
function screen21() {
discription43 = createElement('h4')
discription43.html("4.transfer the powdered oats into a large mixing bowl.also, add 2 tbsp rava/semolina/suji for binding.");
discription43.position(width/2-400,height/2);
discription44 = createSprite(width/2,height/2+130,30,30);
discription44.addImage(discription44Img);
stepsButton19 = createButton("Step5");
stepsButton19.position(width/2+300,height/2+150);
stepsButton19.mousePressed(hidedata21);
}
function screen22() {
discription45 = createElement('h4')
discription45.html("5.now add ¼ cup curd and 1 cup water.");
discription45.position(width/2-400,height/2);
discription46 = createSprite(width/2,height/2+130,30,30);
discription46.addImage(discription46Img);
stepsButton20 = createButton("Step6");
stepsButton20.position(width/2+300,height/2+150);
stepsButton20.mousePressed(hidedata22);
}
function screen23() {
discription47 = createElement('h4')
discription47.html("6.whisk and mix make smooth lump free batter additionally, add ¼ tsp turmeric, ½ tsp ginger paste, 2 chilli, ½ tsp crushed cumin.");
discription47.position(width/2-400,height/2);
discription48 = createSprite(width/2,height/2+130,30,30);
discription48.addImage(discription48Img);
stepsButton21 = createButton("Step7");
stepsButton21.position(width/2+300,height/2+150);
stepsButton21.mousePressed(hidedata23);
}
function screen24() {
discription49 = createElement('h4')
discription49.html("7.also add 2 tbsp onion, 2 tbsp tomato and ½ tsp salt.");
discription49.position(width/2-400,height/2);
discription50 = createSprite(width/2,height/2+130,30,30);
discription50.addImage(discription50Img);
stepsButton22 = createButton("Step8");
stepsButton22.position(width/2+300,height/2+150);
stepsButton22.mousePressed(hidedata24);
}
function screen25() {
discription51 = createElement('h4')
discription51.html("8.mix well forming thick flowing consistency chilla batter.further, pour a ladleful of batter onto a hot tawa and spread gently.then pour ½ tsp of olive oil over chilla");
discription51.position(width/2-400,height/2);
discription52 = createSprite(width/2,height/2+130,30,30);
discription52.addImage(discription52Img);
stepsButton23 = createButton("Step9");
stepsButton23.position(width/2+300,height/2+150);
stepsButton23.mousePressed(hidedata25);
}
function screen26() {
discription53 = createElement('h4')
discription53.html("9.cover and allow cooking on a medium flame for a minute after that now flip the chilla and cook both sides pressing gently.");
discription53.position(width/2-400,height/2);
discription54 = createSprite(width/2,height/2+130,30,30);
discription54.addImage(discription54Img);
stepsButton24 = createButton("Step10");
stepsButton24.position(width/2+300,height/2+150);
stepsButton24.mousePressed(hidedata26);
}
function screen27() {
discription55 = createElement('h4')
discription55.html("10.Finally, oats chilla is ready to serve with green chutney.");
discription55.position(width/2-400,height/2);
discription56 = createSprite(width/2,height/2+130,30,30);
discription56.addImage(discription56Img);
}
function draw(){
 background("#fddb3a");
 agebutton1.position(width/2, height/2);
 agebutton2.position(width/2, height/2+50);
 agebutton3.position(width/2, height/2+100);
 agebutton4.position(width/2, height/2+150);
 continuebutton.position(width/2+300, height/2+150);
 drawSprites();
}
function hidedata1() {
  discription.visible = false;
  agebutton1.hide();
  agebutton2.hide();
  agebutton3.hide();
  agebutton4.hide();
  continuebutton.hide();
  screen2();
}
function hidedata2() {
  namelogo.visible = false;
  discription2.visible = false;
  discription3.visible = false;
  inputbox.hide();
  exercise1.hide();
  exercise2.hide();
  continuebutton2.hide();
  screen3();
}
 function hidedata3() {
   discription4.visible = false;
   discription5.visible = false;
   discription6.hide();
   stepsButton.hide();
   screen4();
 }
function hidedata4() {
  discription7.visible  = false;
  discription8.hide();
  stepsButton2.hide();
  screen5();
}
function hidedata5() {
  discription9.visible = false;
  discription10.hide();
  stepsButton3.hide();
  screen6();
}
function hidedata6() {
  discription11.visible = false;
  discription12.hide();
  stepsButton4.hide();
  screen7();
}
function hidedata7() {
  discription13.visible = false;
  discription14.hide();
  stepsButton5.hide();
  screen8();
}
function hidedata8() {
  discription15.visible = false;
  discription16.hide();
  stepsButton6.hide();
  screen9();
}
function hidedata9() {
  discription17.visible = false;
  discription18.hide();
  stepsButton7.hide();
  screen10();
}
function hidedata10() {
  discription19.visible = false;
  discription20.hide();
  stepsButton8.hide();
  screen11();
}
function hidedata11() {
  discription21.visible = false;
  discription22.hide();
  stepsButton9.hide();
  screen12();
}
function hidedata12() {
  discription23.visible = false;
  discription24.hide();
  stepsButton10.hide();
  screen13();
}
function hidedata13() {
  discription25.visible = false;
  discription26.hide();
  stepsButton11.hide();
  screen14();
}
function hidedata14() {
  discription27.visible = false;
  discription28.hide();
  stepsButton12.hide();
  screen15();
}
function hidedata15() {
  discription29.visible = false;
  discription30.hide();
  stepsButton13.hide();
  screen16();
}
function hidedata16() {
  discription31.visible = false;
  discription32.hide();
  stepsButton14.hide();
 screen17();
}
function hidedata17() {
  discription33.hide();
  discription34.hide();
  discription35.hide();
  stepsButton15.hide();
  screen18();
}
function hidedata18() {
  discription36.visible = false;
  discription37.hide();
  discription38.visible = false;
  stepsButton16.hide();
  screen19();
}
function hidedata19() {
  discription39.hide();
  discription40.visible = false;
  stepsButton17.hide();
  screen20();
}
function hidedata20() {
  discription41.hide();
  discription42.visible = false;
  stepsButton18.hide();
  screen21();
}
function hidedata21() {
  discription43.hide();
  discription44.visible = false;
  stepsButton19.hide();
  screen22();
}
function hidedata22() {
  discription45.hide();
  discription46.visible = false;
  stepsButton20.hide();
  screen23();
}
function hidedata23() {
  discription47.hide();
  discription48.visible = false;
  stepsButton21.hide();
  screen24();
}
function hidedata24() {
  discription49.hide();
  discription50.visible = false;
  stepsButton22.hide();
  screen25();
}
function hidedata25() {
  discription51.hide();
  discription52.visible = false;
  stepsButton23.hide();
  screen26();
}
function hidedata26() {
  discription53.hide();
  discription54.visible = false;
  stepsButton24.hide();
  screen27();
}
function hidedata27() {
  discription55.hide();
  discription56.visible = false;
  //screen27();
}
