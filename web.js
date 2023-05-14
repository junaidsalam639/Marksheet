function submit(){
    let let1 = document.getElementById("num1").value;
    let let2 = document.getElementById("num2").value;
    let let3 = +document.getElementById("num3").value;
    let let4 = +document.getElementById("num4").value;
    let let5 = +document.getElementById("num5").value;
    let let6 = +document.getElementById("num6").value;
    
    var name1 = document.getElementById("name").innerHTML = let1;
    var roll = document.getElementById("roll").innerHTML = let2;
    var grade = document.getElementById("grad")
    var total = let3+let4+let5+let6;
    var cal = +Math.round(total / 400 * 100);
    console.log(cal);
    var calcu = document.getElementById("tot").innerHTML = "400" + "/" + total;
    var per = document.getElementById("Percentage").innerHTML = cal;
    console.log(per);

    if(per >= 80 && per<=100){
       grade.innerHTML = " Aone ";
    }
    else if(per >= 70 && per < 79){
        grade.innerHTML = " A ";
    }
    else if(per >= 60 && per < 69){
        grade.innerHTML = " B "
    }
    else if(per >= 50 && per < 59){
        grade.innerHTML = " c "
    }
    else if(per >= 1 && per < 49){
        grade.innerHTML = " Fail "
    }else{
        grade.innerHTML = "Fail"
    }

}
// let sub = let3 + let4 + let5 + let6;
// let sub1 = sub / 400 * 100;
// document.write("<h1>Name: "+ let1 +"</h1>");
// document.write("<h1>RollNum: " + let2 +"</h1>");
// document.write("<h1>Percentage: " + Math.round(sub1)+"%</h1>");









