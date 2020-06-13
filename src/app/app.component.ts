import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock-Paper-Scissors';
  bool=false;
  head="blue"
  messages;
  image;
  autoimage;
  rule=false;
  rules(){
    this.rule=true
  }
  reset(){
    this.bool=false
  }
  rpsGame(yourChoice){
   console.log(yourChoice.id)
   
   var yourChoice, botChoice;
   var humanChoice=yourChoice.id
   this.image=yourChoice.src;
   botChoice=(this.numberOfChoice(this.randomBot()));
   console.log("Computer Choice",botChoice)
   var result=(this.winner(humanChoice,botChoice));
   console.log(result);
   var y=result[0];
   var z=result[1]
    
   this.messages=(this.finalMessage(y,z))
   console.log(this.messages)
   this.autoimage=this.computerImage(botChoice)
   this.bool=true;
  }

  randomBot(){
    return Math.floor(Math.random()*3)
  }

  numberOfChoice(number){
    return ["rock","paper","scissors"][number]
  }

  winner(yourChoice,computerChoice){
   var dataBase={
     "rock":{"rock":0.5,"paper":0,"scissors":1},
     "paper":{"rock":1,"paper":0.5,"scissors":0},
     "scissors":{"rock":0,"paper":1,"scissors":0.5}
   }
   var yourScore=dataBase[yourChoice][computerChoice];
   var computerScore=dataBase[computerChoice][yourChoice]

   return [yourScore,computerScore]
  }

 finalMessage(yoursScore,computersScore){
if(yoursScore===0){
  return {"message":"You Lost!","color":"red"}
}
 else if(yoursScore===0.5){
  return {"message":"You Tie!","color":"yellow"}
}
else{
  return {"message":"You Win!","color":"green"}
}
 }

 computerImage(value){
  if(value=="rock"){
    return "assets/image/rock.jpg"
  }
   else if(value=="paper"){
    return "assets/image/paper.jpg"
  }
  else if(value=="scissors"){
    return "assets/image/scissors.jpg"
  }
 }

  
}
