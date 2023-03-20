
function winCondition1() {
    cond00 = document.getElementById('0-0').src == result + "1" + quality;
    cond01 = document.getElementById('0-1').src == result + "2" + quality;
    cond02 = document.getElementById('0-2').src == result + "3" + quality;
    //cond03=document.getElementById('0-3').src==result+""+quality;
    cond10 = document.getElementById('1-0').src == result + "4" + quality;
    cond11 = document.getElementById('1-1').src == result + "5" + quality;
    cond12 = document.getElementById('1-2').src == result + "6" + quality;
    cond20 = document.getElementById('2-0').src == result + "7" + quality;
    cond21 = document.getElementById('2-1').src == result + "8" + quality;
    cond22 = document.getElementById('2-2').src == result + "50" + quality;
    console.log(cond00 && cond01 && cond02 && cond10 && cond11 && cond12 && cond20 && cond21 && cond22);
    return cond00 && cond01 && cond02 && cond10 && cond11 && cond12 && cond20 && cond21 && cond22;
  
  }
  function winCondition2() {
    cond00 = document.getElementById('0-0').src == result + "1" + quality;
    cond01 = document.getElementById('0-1').src == result + "2" + quality;
    cond02 = document.getElementById('0-2').src == result + "3" + quality;
    cond03 = document.getElementById('0-3').src == result + "4" + quality;
    cond10 = document.getElementById('1-0').src == result + "5" + quality;
    cond11 = document.getElementById('1-1').src == result + "6" + quality;
    cond12 = document.getElementById('1-2').src == result + "7" + quality;
    cond13 = document.getElementById('1-3').src == result + "8" + quality;
    cond20 = document.getElementById('2-0').src == result + "9" + quality;
    cond21 = document.getElementById('2-1').src == result + "10" + quality;
    cond22 = document.getElementById('2-2').src == result + "11" + quality;
    cond23 = document.getElementById('2-3').src == result + "12" + quality;
    cond30 = document.getElementById('3-0').src == result + "13" + quality;
    cond31 = document.getElementById('3-1').src == result + "14" + quality;
    cond32 = document.getElementById('3-2').src == result + "15" + quality;
    cond33 = document.getElementById('3-3').src == result + "50" + quality;
  
    return cond00 && cond01 && cond02 && cond03 && cond10 && cond11 && cond12 && cond13 && cond20 && cond21 && cond22 && cond23 && cond30 && cond31 && cond32 && cond33;
  }
  
  function winCondition3() {
    cond00 = document.getElementById('0-0').src == result + "01" + quality;
    cond01 = document.getElementById('0-1').src == result + "02" + quality;
    cond02 = document.getElementById('0-2').src == result + "03" + quality;
    cond03 = document.getElementById('0-3').src == result + "04" + quality;
    cond04 = document.getElementById('0-4').src == result + "05" + quality;
    cond10 = document.getElementById('1-0').src == result + "06" + quality;
    cond11 = document.getElementById('1-1').src == result + "07" + quality;
    cond12 = document.getElementById('1-2').src == result + "08" + quality;
    cond13 = document.getElementById('1-3').src == result + "09" + quality;
    cond14 = document.getElementById('1-4').src == result + "10" + quality;
    cond20 = document.getElementById('2-0').src == result + "11" + quality;
    cond21 = document.getElementById('2-1').src == result + "12" + quality;
    cond22 = document.getElementById('2-2').src == result + "13" + quality;
    cond23 = document.getElementById('2-3').src == result + "14" + quality;
    cond24 = document.getElementById('2-4').src == result + "15" + quality;
    cond30 = document.getElementById('3-0').src == result + "16" + quality;
    cond31 = document.getElementById('3-1').src == result + "17" + quality;
    cond32 = document.getElementById('3-2').src == result + "18" + quality;
    cond33 = document.getElementById('3-3').src == result + "19" + quality;
    cond34 = document.getElementById('3-4').src == result + "20" + quality;
    cond40 = document.getElementById('4-0').src == result + "21" + quality;
    cond41 = document.getElementById('4-1').src == result + "22" + quality;
    cond42 = document.getElementById('4-2').src == result + "23" + quality;
    cond43 = document.getElementById('4-3').src == result + "24" + quality;
    cond44 = document.getElementById('4-4').src == result + "50" + quality;
    console.log(cond00 && cond01 && cond02 && cond03 && cond04 && cond10 && cond11 && cond12 && cond13 && cond14 && cond20 && cond21 && cond22 && cond23 && cond24 && cond30 && cond31 && cond32 && cond33 && cond34 && cond40 && cond41 && cond42 && cond43 && cond44);
    return cond00 && cond01 && cond02 && cond03 && cond04 && cond10 && cond11 && cond12 && cond13 && cond14 && cond20 && cond21 && cond22 && cond23 && cond24 && cond30 && cond31 && cond32 && cond33 && cond34 && cond40 && cond41 && cond42 && cond43 && cond44;
  }




  function CustomWinCondition1() {
    cond00 = document.getElementById('0-0').style.backgroundPosition == "0px 0px";
    cond01 = document.getElementById('0-1').style.backgroundPosition == "-196px 0px";
    cond02 = document.getElementById('0-2').style.backgroundPosition == "-392px 0px";
    cond10 = document.getElementById('1-0').style.backgroundPosition == "0px -196px";
    cond11 = document.getElementById('1-1').style.backgroundPosition == "-196px -196px";
    cond12 = document.getElementById('1-2').style.backgroundPosition == "-392px -196px";
    cond20 = document.getElementById('2-0').style.backgroundPosition == "0px -392px";
    cond21 = document.getElementById('2-1').style.backgroundPosition == "-196px -392px";
    cond22 = document.getElementById('2-2').style.backgroundPosition == "0px 0px";
    console.log(cond00 && cond01 && cond02 && cond10 && cond11 && cond12 && cond20 && cond21 && cond22);
    return cond00 && cond01 && cond02 && cond10 && cond11 && cond12 && cond20 && cond21 && cond22;
  
  }
  function CustomWinCondition2() {
    cond00 = document.getElementById('0-0').style.backgroundPosition == "0px 0px";
    cond01 = document.getElementById('0-1').style.backgroundPosition == "-196px 0px";
    cond02 = document.getElementById('0-2').style.backgroundPosition == "-392px 0px";
    cond03 = document.getElementById('0-3').style.backgroundPosition=="-588px 0px";   

     cond10 = document.getElementById('1-0').style.backgroundPosition == "0px -196px";
    cond11 = document.getElementById('1-1').style.backgroundPosition == "-196px -196px";
    cond12 = document.getElementById('1-2').style.backgroundPosition == "-392px -196px";
    cond13 = document.getElementById('1-3').style.backgroundPosition=="-588px -196px";  

      cond20 = document.getElementById('2-0').style.backgroundPosition == "0px -392px";
    cond21 = document.getElementById('2-1').style.backgroundPosition == "-196px -392px";
    cond22 = document.getElementById('2-2').style.backgroundPosition == "-392px -392px";
    cond23 = document.getElementById('2-3').style.backgroundPosition=="-588px -392px";

    cond30 = document.getElementById('3-0').style.backgroundPosition=="0px -588px";
    cond31 = document.getElementById('3-1').style.backgroundPosition=="-196px -588px";
    cond32 = document.getElementById('3-2').style.backgroundPosition=="-392px -588px";
    cond33 = document.getElementById('3-3').style.backgroundPosition=="0px 0px";  
    return cond00 && cond01 && cond02 && cond03 && cond10 && cond11 && cond12 && cond13 && cond20 && cond21 && cond22 && cond23 && cond30 && cond31 && cond32 && cond33;
  }

  function CustomWinCondition3() {
    cond00 = document.getElementById('0-0').style.backgroundPosition == "0px 0px";
    cond01 = document.getElementById('0-1').style.backgroundPosition == "-156px 0px";
    cond02 = document.getElementById('0-2').style.backgroundPosition == "-312px 0px";
    cond03 = document.getElementById('0-3').style.backgroundPosition=="-468px 0px";   
    cond04 = document.getElementById('0-4').style.backgroundPosition=="-624px 0px";
   
    
    cond10 = document.getElementById('1-0').style.backgroundPosition == "0px -156px";
    cond11 = document.getElementById('1-1').style.backgroundPosition == "-156px -156px";
    cond12 = document.getElementById('1-2').style.backgroundPosition == "-312px -156px";
    cond13 = document.getElementById('1-3').style.backgroundPosition=="-468px -156px";  
    cond14 = document.getElementById('1-4').style.backgroundPosition=="-624px -156px";
   
    cond20 = document.getElementById('2-0').style.backgroundPosition == "0px -312px";
    cond21 = document.getElementById('2-1').style.backgroundPosition == "-156px -312px";
    cond22 = document.getElementById('2-2').style.backgroundPosition == "-312px -312px";
    cond23 = document.getElementById('2-3').style.backgroundPosition=="-468px -312px";
    cond24 = document.getElementById('2-4').style.backgroundPosition=="-624px -312px";
   
    cond30 = document.getElementById('3-0').style.backgroundPosition=="0px -468px";
    cond31 = document.getElementById('3-1').style.backgroundPosition=="-156px -468px";
    cond32 = document.getElementById('3-2').style.backgroundPosition=="-312px -468px";
    cond33 = document.getElementById('3-3').style.backgroundPosition=="-468px -468px";  
    cond34 = document.getElementById('3-4').style.backgroundPosition=="-624px -468px";
    
    cond40 = document.getElementById('4-0').style.backgroundPosition=="0px -624px";
    cond41 = document.getElementById('4-1').style.backgroundPosition=="-156px -624px";
    cond42 = document.getElementById('4-2').style.backgroundPosition=="-312px -624px";
    cond43 = document.getElementById('4-3').style.backgroundPosition=="-468px -624px";
    cond44 = document.getElementById('4-4').style.backgroundPosition=="0px 0px"
    console.log(cond00 && cond01 && cond02 && cond03 && cond04 && cond10 && cond11 && cond12 && cond13 && cond14 && cond20 && cond21 && cond22 && cond23 && cond24 && cond30 && cond31 && cond32 && cond33 && cond34 && cond40 && cond41 && cond42 && cond43 && cond44);
    return cond00 && cond01 && cond02 && cond03 && cond04 && cond10 && cond11 && cond12 && cond13 && cond14 && cond20 && cond21 && cond22 && cond23 && cond24 && cond30 && cond31 && cond32 && cond33 && cond34 && cond40 && cond41 && cond42 && cond43 && cond44;
  }