var team1={
    name:"Real Madrid",
    score:0,
    runs:[]
};

var team2={
    name:"Huesca",
    score:0,
    runs:[]
};

var score=[0,1];

var toss;

window.onload=()=>{
    selectToss();
    updateName();
    updateButtontext();
    updateScores();
}

function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss);
}

function updateName(){
    console.log("Team 1 name - "+team1.name);
    console.log("Team 2 name - "+team2.name);
    document.getElementById("team1name").textContent=team1.name;
    document.getElementById("team2name").textContent=team2.name;
}

function updateButtontext(){ 
    var button =document.getElementById("strikebutton");
    var result =document.getElementById("result");
    if(team1.runs.length==6 && team2.runs.length==6){
        console.log("Both team finished Superover");
        button.remove();
        //console.log(team1.score===team2.score?"Draw":`${team1.score>team2.score?team1.name:team2.name} Wins`);
        result.textContent=team1.score==team2.score?"Draw":`${team1.score>team2.score?team1.name:team2.name} Wins`;
    }
   else{
       toss=toss===1?2:1;
    }
   console.log(`${toss===1?team1.name:team2.name} Strike`);
   document.getElementById("strikebutton").textContent= `${toss===1?team1.name:team2.name} Strike`;
}

handlestrike=()=>{
    var runs=score[Math.floor(Math.random()*score.length)]
    if(toss==1){
        team1.runs.push(runs);
        console.log(runs);
        team1.score=calculatescore(team1.runs);
    }
    else{
        team2.runs.push(runs)
        console.log(runs)
        team2.score=calculatescore(team2.runs)
    }
    updateScores();
    updateButtontext();
}

function updateScores(){
    console.log("Team 1 Score : "+team1.score);
    console.log("Team 2 Score : "+team2.score);
    document.getElementById("team1score").textContent=team1.score;
    document.getElementById("team2score").textContent=team2.score;
    updateRuns();
}

var calculatescore=(runs)=>{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}

function updateRuns(){
    var team1runs = document.getElementById("team1goals").children;

    team1.runs.forEach((run,index)=>{
        run===1? team1runs[index].style.backgroundColor="#135813" :team1runs[index].style.backgroundColor = "#d00c0c";
    });

    var team2runs = document.getElementById("team2goals").children;

    team2.runs.forEach((run,index)=>{
        run === 1 ? team2runs[index].style.backgroundColor = "#135813" : team2runs[index].style.backgroundColor = "#d00c0c";
    });
}
/*
window.onload = () =>{
    selectToss();
    updateButtonText();
    updateNames();
    updateScore();
}


var updateButtonText = () =>{
    var button = document.getElementById("strike-button");
    console.log(button);
    var result = document.getElementById("result");
    var btn1 = document.getElementById("btn1");
    result.style.visibility ="";
    
    
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove();
        btn1.textContent = "Try Again";
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} Wins`;
    }
    else{
        toss = toss === 1 ? 2 : 1;
    }


    button.textContent = `${toss%2 === 1 ? team1.name:team2.name} Strike`;
};

var updateNames = () =>{
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}

var updateScore = () =>{
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    updateRuns();
}

var handleStrikeButtonClick = () =>{
 var runs = score[Math.floor(Math.random()*score.length)];
 console.log(runs);

 runs = runs === 5?"W": runs;
 console.log(runs);

 if (toss ===1)
   {
    team1.runs.push(runs);
   team1.score= calculateScore(team1.runs);
    
   } 
   else{
    team2.runs.push(runs);
    team2.score = calculateScore(team2.runs);

   }

   updateButtonText();
   updateScore();
}

var calculateScore = (runs) =>{
console.log("Calculate score method");

return runs.map(num =>{
    
return num =='W'? 0: num;

}).reduce((total,num) => total + num

);

};
        
var updateRuns = () =>{
    var teamOneRunsElement = document.getElementById("iteam1goals").children;
    var teamTwoRunsElement = document.getElementById("team2goals").children;

    team1.runs.forEach((run,index)=>{
        run === 1 ? teamOneRunsElement[index].style.backgroundColor = "#135813" :teamOneRunsElement[index].style.backgroundColor = "#d00c0c";
    });
    team2.runs.forEach((run,index)=>{
        run === 1 ? teamTwoRunsElement[index].style.backgroundColor = "#135813" : teamTwoRunsElement[index].style.backgroundColor = "#d00c0c";

    });
}
*/