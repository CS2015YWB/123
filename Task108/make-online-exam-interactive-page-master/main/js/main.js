window.onload = function(){
    document.getElementById("submit").onclick = function(){
        main();
    };
};

function main(){
    let sum = blankScore() + radioScore() + checkboxScore() + judgeScore() + shortAnswerScore();
    alert("测验成绩为：" + sum.toString() + "分");
    document.getElementById("score").value = sum;
}

function blankScore(){
    let sum = 0;
    if(document.getElementById("blank1").value === "统一建模语言"){
        sum  = sum + 5;
    }
    if(document.getElementById("blank2").value === '封装性'){
        sum  = sum + 5;
    }
    if(document.getElementById("blank3").value === '继承性'){
        sum  = sum + 5;
    }
    if(document.getElementById("blank4").value === '多态性'){
        sum  = sum + 5;
    }
    return sum;
}

function radioScore(){
    let sum = 0;
    if(document.getElementById("radio2").checked === true){
        sum = sum + 10;
    }
    if(document.getElementById("radio5").checked === true){
        sum = sum + 10;
    }
    return sum;
}

function checkboxScore(){
    let sum = 0;
    if((document.getElementById("checkbox1").checked === true) && (document.getElementById("checkbox2").checked === true) && (document.getElementById("checkbox4").checked === true) && (document.getElementById("checkbox3").checked === false)){
        sum = sum + 10;
    }
    if((document.getElementById("checkbox5").checked === true) && (document.getElementById("checkbox6").checked === true) && (document.getElementById("checkbox7").checked === true) && (document.getElementById("checkbox8").checked === false)){
        sum = sum + 10;
    }
    return sum;
}

function judgeScore(){
    let sum = 0;
    if(document.getElementById("radio12").checked === true){
        sum = sum + 10;
    }
    if(document.getElementById("radio13").checked === true){
        sum = sum + 10;
    }
    return sum;
}

function shortAnswerScore(){
    let sum = 0;
    if(document.getElementById("shortanswer").value === "模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；也可以是某种图形；或者是一种数学表达式。"){
        sum = sum + 20;
    }
    return sum;
}