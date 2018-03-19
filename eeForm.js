
// <![CDATA[
 jQuery(document).ready(function ($) {
var maritalstatus = 0; //0为attached 1为single
var result02 = 0;
var result03 = 0;
var result04 = 0;
var result05 = 0;
var result06 = 0;
var result07 = 0;
var result08 = 0;
var result09 = 0;
var result10 = 0;
var result11 = 0;
var result12 = 0;
var age, agetext;
var agescore = new Array(21);
agescore[0] = new Array(0, 0, 0);
agescore[1] = new Array(18, 90, 99);
agescore[2] = new Array(19, 95, 105);
agescore[3] = new Array(20, 100, 110);
agescore[4] = new Array(30, 95, 105);
agescore[5] = new Array(31, 90, 99);
agescore[6] = new Array(32, 85, 94);
agescore[7] = new Array(33, 80, 88);
agescore[8] = new Array(34, 75, 83);
agescore[9] = new Array(35, 70, 77);
agescore[10] = new Array(36, 65, 72);
agescore[11] = new Array(37, 60, 66);
agescore[12] = new Array(38, 55, 61);
agescore[13] = new Array(39, 50, 55);
agescore[14] = new Array(40, 45, 50);
agescore[15] = new Array(41, 35, 39);
agescore[16] = new Array(42, 25, 28);
agescore[17] = new Array(43, 15, 17);
agescore[18] = new Array(44, 5, 6);
agescore[19] = new Array(45, 0, 0);
agescore[20] = new Array(130, 0, 0);
var edu = -1;
var spoedu = -1;
var eduscore = new Array(8);
eduscore[0] = new Array(0, 0, 0);
eduscore[1] = new Array(28, 30, 2);
eduscore[2] = new Array(84, 90, 6);
eduscore[3] = new Array(91, 98, 7);
eduscore[4] = new Array(112, 120, 8);
eduscore[5] = new Array(119, 128, 9);
eduscore[6] = new Array(126, 135, 10);
eduscore[7] = new Array(140, 150, 10);
var clblis = new Array(13);
var clbspe = new Array(13);
var clbrea = new Array(13);
var clbwri = new Array(13);
var clball = new Array(clblis, clbspe, clbrea, clbwri);
clblis[1] = new Array(1, 1, 0);
clblis[2] = new Array(2, 2, 0);
clblis[3] = new Array(3.5, 3, 0);
clblis[4] = new Array(4.5, 4, 145);
clblis[5] = new Array(5, 5, 181);
clblis[6] = new Array(5.5, 6, 217);
clblis[7] = new Array(6, 7, 249);
clblis[8] = new Array(7.5, 8, 280);
clblis[9] = new Array(8, 9, 298);
clblis[10] = new Array(8.5, 10, 316);
clblis[11] = new Array(9, 11, 0);
clblis[12] = new Array(9, 12, 0);
clbspe[1] = new Array(1, 1, 0);
clbspe[2] = new Array(2, 2, 0);
clbspe[3] = new Array(3, 3, 0);
clbspe[4] = new Array(4, 4, 181);
clbspe[5] = new Array(5, 5, 226);
clbspe[6] = new Array(5.5, 6, 271);
clbspe[7] = new Array(6, 7, 310);
clbspe[8] = new Array(6.5, 8, 349);
clbspe[9] = new Array(7, 9, 371);
clbspe[10] = new Array(7.5, 10, 393);
clbspe[11] = new Array(8, 11, 0);
clbspe[12] = new Array(9, 12, 0);
clbrea[1] = new Array(1, 1, 0);
clbrea[2] = new Array(1.5, 2, 0);
clbrea[3] = new Array(2.5, 3, 0);
clbrea[4] = new Array(3.5, 4, 121);
clbrea[5] = new Array(4, 5, 151);
clbrea[6] = new Array(5, 6, 181);
clbrea[7] = new Array(6, 7, 207);
clbrea[8] = new Array(6.5, 8, 233);
clbrea[9] = new Array(7, 9, 248);
clbrea[10] = new Array(8, 10, 263);
clbrea[11] = new Array(8.5, 11, 0);
clbrea[12] = new Array(9, 12, 0);
clbwri[1] = new Array(1, 1, 0);
clbwri[2] = new Array(2, 2, 0);
clbwri[3] = new Array(3, 3, 0);
clbwri[4] = new Array(4, 4, 181);
clbwri[5] = new Array(5, 5, 226);
clbwri[6] = new Array(5.5, 6, 271);
clbwri[7] = new Array(6, 7, 310);
clbwri[8] = new Array(6.5, 8, 349);
clbwri[9] = new Array(7, 9, 371);
clbwri[10] = new Array(7.5, 10, 393);
clbwri[11] = new Array(8, 11, 0);
clbwri[12] = new Array(9, 12, 0);
var mainlangexam = -1; //第一语言的考试种类
var seclangexam = -1; //第二语言的考试种类
var spolangexam = -1; //配偶语言的考试种类
var score = new Array(3); //考试成绩
score[0] = new Array(0, 0, 0, 0);
score[1] = new Array(0, 0, 0, 0);
score[2] = new Array(0, 0, 0, 0);
var clblevels = new Array(2); //CLB的最后获得的级别。保存第一和第二语言。CLB级别，3-记为2,10+记为10
clblevels[0] = new Array(0, 0, 0, 0);
clblevels[1] = new Array(0, 0, 0, 0);
var clbscore = new Array(2); //这是该门的得分。
clbscore[0] = new Array(0, 0, 0, 0);
clbscore[1] = new Array(0, 0, 0, 0);
clbscore[2] = new Array(0, 0, 0, 0);
var langscore = new Array(11);
langscore[0] = new Array(0, 0, 0, 0);
langscore[3] = new Array(0, 0, 0, 0);
langscore[4] = new Array(6, 6, 0, 0);
langscore[5] = new Array(6, 6, 1, 1);
langscore[6] = new Array(8, 9, 1, 1);
langscore[7] = new Array(16, 17, 3, 3);
langscore[8] = new Array(22, 23, 3, 3);
langscore[9] = new Array(29, 31, 6, 5);
langscore[10] = new Array(32, 34, 6, 5);
var userworkexpcanada = -1;
var userworkexpoverseas = -1;
var spoworkexpcanada = -1;
var workexp = new Array(6);
workexp[0] = new Array(0, 0, 0);
workexp[1] = new Array(35, 40, 5);
workexp[2] = new Array(46, 53, 7);
workexp[3] = new Array(56, 64, 8);
workexp[4] = new Array(63, 72, 9);
workexp[5] = new Array(70, 80, 10);
var edutransfer = 0;
var mainlangtransfer = 0;
var userworkexpcanadatransfer = 0;
var userworkexpoverseastransfer = 0;
//策略：刷新页面时清空所有输入防止bug，设置默认输入
$('.inputtext').val('');
$('[type="radio"]:not(.checked)').removeAttr("checked");
$('[type="checkbox"]').removeAttr("checked");
//END
$('[name="ques01"]').click(function () { //marriage
    var p1 = $(this).val();
    if (p1 == 'attached') {
   maritalstatus = 0; //default
   $('.spouseres').show();
    } else if (p1 == 'single') {
   maritalstatus = 1;
   $('.spouseres').hide();
    }
    updateageresult();
    updateeduresult();
    updateclb($('#ques041'));
    updateclb($('#ques042'));
    updateclb($('#ques043'));
    updateclb($('#ques044'));
    updatelangresult(0);
    updateclb($('#ques051'));
    updateclb($('#ques052'));
    updateclb($('#ques053'));
    updateclb($('#ques054'));
    updatelangresult(1);
    updateworkresult();
    updatefinalresult();
})
$('#ques02').change(function () { //age
    agetext = $(this).val();
    age = parseInt(agetext);
    if (isNaN(age) || age < 0) {
   agetext = '';
   age = 0;
    }
    $(this).val(agetext);
    updateageresult();
    updatefinalresult();
})
$('[name="ques03"]').click(function () { //edu
    edu = $(this).val();
    updateeduresult();
    updatetransferedu();
    updatefinalresult();
})
$('[name="ques04"]').click(function () { //mainlang
    mainlangexam = $(this).val();
    updateclb($('#ques041'));
    updateclb($('#ques042'));
    updateclb($('#ques043'));
    updateclb($('#ques044'));
    updatelangresult(0);
    updatetransferedu();
    updatetransferoverseas();
    updateaddresult();
    updatefinalresult();
})
$('[name="ques05"]').click(function () { //2nd lang
    seclangexam = $(this).val();
    if (seclangexam == 3) {
   $('.seclangres').html('');
    }
    updateclb($('#ques051'));
    updateclb($('#ques052'));
    updateclb($('#ques053'));
    updateclb($('#ques054'));
    updatelangresult(1);
    updateaddresult();
    updatefinalresult();
})
$('.lang').change(function () { //某一科语言分改变时
    isseclang = updateclb($(this)); //更新某个语言分显示的CLB级别，返回第一语言或第二语言
    updatelangresult(isseclang); //update result03
    updatetransferedu();
    updatetransferoverseas();
    updateaddresult();
    updatefinalresult();
})
$('#ques061').change(function () {
    userworkexpcanada = $(this).val();
    userworkexpcanada = parseInt(userworkexpcanada);
    userworkexpcanada = userworkexpcanada > 0 ?
   userworkexpcanada : 0;
    if (userworkexpcanada > 5) {
   userworkexpcanada = 5;
    }
    updateworkresult();
    updatetransferedu();
    updatetransferoverseas();
    updatefinalresult();
})
$('#ques062').change(function () { //overseas
    userworkexpoverseas = $(this).val();
    userworkexpoverseas = parseInt(userworkexpoverseas);
    userworkexpoverseas = userworkexpoverseas > 0 ?
   userworkexpoverseas : 0;
    userworkexpoverseastransfer = 0;
    if (userworkexpoverseas > 0) {
   userworkexpoverseastransfer = 1;
   if (userworkexpoverseas > 2) {
  userworkexpoverseastransfer = 2;
   }
    }
    updatetransferoverseas();
    updatefinalresult();
})
$('[name="ques07"]').click(function () {
    spoedu = $(this).val();
    updatespoeduresult();
    updatefinalresult();
})
$('[name="ques08"]').click(function () {
    spolangexam = $(this).val();
    if (spolangexam == 3) {
   $('.spolangres').html('');
    }
    updateclb($('#ques081'));
    updateclb($('#ques082'));
    updateclb($('#ques083'));
    updateclb($('#ques084'));
    updatelangresult(2);
    updatefinalresult();
})
$('#ques091').change(function () {
    spoworkexpcanada = $(this).val();
    spoworkexpcanada = parseInt(spoworkexpcanada);
    spoworkexpcanada = spoworkexpcanada > 0 ?
   spoworkexpcanada : 0;
    if (spoworkexpcanada > 5) {
   spoworkexpcanada = 5;
    }
    updatespoworkresult();
    updatefinalresult();
})
$('#ques12 input').click(function () {
    updateaddresult();
    updatefinalresult();
})
//
function updateageresult() {
    var index = 0;
    while (index < agescore.length) {
   if (age >= agescore[index][0])
  if (age < agescore[index + 1][0]) {
 result02 = agescore[index][maritalstatus + 1];
 break;
  }
   index++;
    }
    $('#result02').html(result02);
}

function updateeduresult() {
    var au = 'yaott@xinshengdai';
    if (edu == -1) return;
    result03 = eduscore[edu][maritalstatus];
    $('#result03').html(result03);
    edutransfer = 0;
    if (edu > 1) {
   edutransfer = 1;
   if (edu > 4) {
  edutransfer = 2;
   }
    }
}

function updateclb(obj) {
    //以下判断第一语言或者第二语言或者配偶语言
    var isseclang, langexam;
    var name = obj.attr('name');
    if (name == 'mainlangque') {
   isseclang = 0;
   langexam = mainlangexam;
   //if(mainlangexam ===''){;}  //第一语言种类没选怎么处理
    } else if (name == 'seclangque') {
   isseclang = 1;
   langexam = seclangexam; //第二语言
    } else {
   isseclang = 2;
   langexam = spolangexam; //配偶语言
    }
    var subid = obj.attr('subid');
    var tempscore = obj.val();
    tempscore = parseFloat(tempscore);
    if (isNaN(tempscore)) { //为空或者不是数
   tempscore = -1;
    } else if (langexam == 3 || langexam == -1) { //考试类型选择了无或者未选择
   tempscore = -1;
    }
    //score[isseclang][subid] = tempscore;
    var clblevel = 0;
    if (tempscore >= 0) clblevel = 3;
    index = 4;
    while (index < 10) {
   if (tempscore >= clball[subid][index][langexam]) {
  if (tempscore < clball[subid][index + 1][langexam]) {
 clblevel = index;
 break;
  }
   }
   index++;
    }
    if (index == 10) {
   if (tempscore >= clball[subid][index][langexam]) {
  clblevel = index;
   }
    }
    var targetid = obj.attr('targetid');
    var clbstring;
    if (clblevel == 3) {
   clbstring = "CLB3-"
    } else if (clblevel == 10) {
   clbstring = "CLB10+"
    } else {
   clbstring = "CLB" + clblevel;
    }
    //查询本项实际的语言分数
    var tempspan;
    if (!isseclang) { //如果是第一语言
   tempspan = 0;
   if (maritalstatus)
  tempspan = 1;
    } else if (isseclang == 1) {
   tempspan = 2;
    } else if (1) {
   tempspan = 3;
    }
    clbscore[isseclang][subid] = langscore[clblevel][tempspan];
    clbstring = clbstring + "：" + clbscore[isseclang][subid] + "分";
    if (tempscore == -1) {
   clbstring = '';
    } else if (isseclang == 0 || isseclang == 1) {
   clblevels[isseclang][subid] = clblevel;
    }
    $('#' + targetid).html(clbstring);
    return isseclang;
}

function updatelangresult(isseclang) {
    //isseclang 0:第一语言；1:第二语言；2:配偶语言。
    //第二语言、配偶语言选无时0分；已婚22分上限；
    //计算变量 mainlangtransfer 供“C. 迁移能力因素（交叉项）”使用。
    //seclangexam和spolangexam  选3为无；选0,1,2对应雅思、思陪、TEF；-1为未填写
    while (1) {
   currentlangscore = 0;
   if (isseclang == 1) {
  if (seclangexam == 3) {
 break; //if中没有办法用AND &#038;&#038;符号。currentlangscore置零。
  } else if (seclangexam == -1) {
 return; //未填写时不更新
  }
   } else if (isseclang == 2) {
  if (spolangexam == 3) {
 break; //if中没有办法用AND &#038;&#038;符号。currentlangscore置零。同上
  } else if (spolangexam == -1) {
 return; //未填写时不更新 同上
  }
   } else if (mainlangexam == -1) {
  return; //未填写时不更新
   }
   for (i = 0; i < 4; i++) {
  currentlangscore += clbscore[isseclang][i];
   }
   break;
    }
    if (isseclang == 1) { //第二语言四项合计分
   if (maritalstatus == 0) {
  if (currentlangscore > 22) {
 currentlangscore = 22;
  }
   }
   result05 = currentlangscore;
   $('#result05').html(currentlangscore);
    } else if (isseclang == 0) { //第一语言四项合计分
   result04 = currentlangscore;
   $('#result04').html(currentlangscore);
   mainlangtransfer = 0;
   var matrix7 = 0;
   var matrix9 = 0;
   for (i = 0; i < 4; i++) {
  if (clblevels[0][i] >= 7) {
 matrix7++;
 if (clblevels[0][i] >= 9) {
matrix9++;
 }
  }
   }
   if (matrix7 >= 4) { //第一语言听说读写四项CLB级别达到7
  mainlangtransfer = 1;
  if (matrix9 >= 4) {
 mainlangtransfer = 2;
  }
   } // END
    } else { //配偶语言四项合计分
   result08 = currentlangscore;
   $('#result08').html(currentlangscore);
    }
    //更新20170606新政，法语CLB7以上加15分的政策
    if (isseclang == 2) {
   return; //配偶语言则不更新
    }
    var fr_clb7 = -1; //clblevels的第一下标，0表示主语言为法语TEF、1表示第二语言为法语
    var en_clb5 = -1;
    matrix7 = 0; //复用变量， 法语有几门达到了CLB7
    var matrix5 = 0; //英语有几门达到了CLB5
    if (mainlangexam == 2) {
   fr_clb7 = 0;
   if (seclangexam == 0 || seclangexam == 1) {
  en_clb5 = 1;
   }
    } else if (seclangexam == 2) {
   fr_clb7 = 1;
   en_clb5 = 0;
    }
    if (fr_clb7 == -1) {
   return; //没有法语
    }
    for (i = 0; i < 4; i++) {
   if (clblevels[fr_clb7][i] >= 7) {
  matrix7++;
  if (en_clb5 > -1) {
 if (clblevels[en_clb5][i] >= 5) {
matrix5++;
 }
  }
   }
    }
    var t = 0;
    if (matrix7 >= 4) {
   t = 15;
   if (matrix5 >= 4) {
  t = 30;
   }
    }
    $('#ques12_fr').html(t + "分");
}

function updateworkresult() {
    if (userworkexpcanada == -1) {
   return;
    }
    result06 = workexp[userworkexpcanada][maritalstatus];
    $('#result06').html(result06);
    userworkexpcanadatransfer = 0; //userworkexpcanadatransfer TODO
    if (userworkexpcanada > 0) {
   userworkexpcanadatransfer = 1;
   if (userworkexpcanada > 1) {
  userworkexpcanadatransfer = 2;
   }
    }
}

function updatespoeduresult() {
    if (spoedu == -1) return;
    result07 = eduscore[spoedu][2];
    $('#result07').html(result07);
}

function updatespoworkresult() {
    if (spoworkexpcanada == -1) {
   return;
    }
    result09 = workexp[spoworkexpcanada][2];
    $('#result09').html(result09);
}

function updatetransferedu() {
    //两个分支，分别计算可以获得的分数，并写到内联的得分后面
    //最后汇总，判断不得超出50分
    //transferoverseas同
    m = new Array(0, 13, 25, -1, 50);
    /* if(mainlangtransfer + userworkexpcanadatransfer == -2){
if(edutransfer == -1){
return;
}
}*/
    var trans1 = 0;
    trans1 = m[edutransfer * mainlangtransfer];
    var trans2 = m[edutransfer * userworkexpcanadatransfer];
    result10 = trans1 + trans2;
    if (result10 > 50) {
   result10 = 50;
    }
    $('#result101').html(trans1 + '分');
    $('#result102').html(trans2 + '分');
    $('#result10').html(result10);
}

function updatetransferoverseas() {
    m = new Array(0, 13, 25, -1, 50);
    /* if(mainlangtransfer + userworkexpcanadatransfer == -2){
if(userworkexpoverseastransfer == -1){
return;
}
}*/
    var trans1 = m[userworkexpoverseastransfer * mainlangtransfer];
    var trans2 = m[userworkexpoverseastransfer *
   userworkexpcanadatransfer];
    result11 = trans1 + trans2;
    if (result11 > 50) {
   result11 = 50;
    }
    $('#result111').html(trans1 + '分');
    $('#result112').html(trans2 + '分');
    $('#result11').html(result11);
}

function updateaddresult() { //(#ques12) ques12_fr需要由函数updatelangresult提供，所以必须在其之后运行
    if ($('#ques12_pnp:checked').length >= 1) {
   result12 = 600;
    } else {
   var ques12_offer = parseInt($(
  '[name="ques12_offer"]:checked').val());
   if (isNaN(ques12_offer)) {
  ques12_offer = 0;
   }
   var ques12_diploma = parseInt($(
  '[name="ques12_diploma"]:checked').val());
   if (isNaN(ques12_diploma)) {
  ques12_diploma = 0;
   }
   var ques12_fr = parseInt($('#ques12_fr').html());
   if (isNaN(ques12_fr)) {
  ques12_fr = 0;
   }
   var ques12_sib = parseInt($('#ques12_sib:checked').val());
   if (isNaN(ques12_sib)) {
  ques12_sib = 0;
   }
   result12 = ques12_offer + ques12_diploma + ques12_fr +
  ques12_sib;
   if (result12 > 600) {
  result12 = 600;
   }
    }
    $('#result12').html(result12);
}

function updatefinalresult() {
    var finalresult = 0;
    if (maritalstatus == 0) { //attached
   finalresult = 0 + result02 + result03 + result04 + result05 +
  result06 + result07 + result08 + result09 + result10 +
  result11 + result12;
    } else {
   finalresult = 0 + result02 + result03 + result04 + result05 +
  result06 + result10 + result11 + result12;
    }
    $('#finalresult').html(finalresult);
}
 })
 // ]]&gt;
  