class Game {
    constructor(){

    }

    state(){
      database.ref('/gameState').on("value",function(data){
        gameState = data.val();
      })
    }

    updateState(){
      database.ref('/').update({
        gameState: gameState
      })
    }

    async matchPlayers(){
      if(gameState === 0){
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form.display();
      }
    }
    
    scores(){
      if(player.index === 1){
        otherPlayerIndex = 2; 
      }
      else {
        otherPlayerIndex = 1;
      }
      database.ref('players/player'+otherPlayerIndex+'/name').on("value",function(data){
        otherPlayerName = data.val();
      });
      database.ref('players/player'+otherPlayerIndex+'/points').on("value",function(data){
        otherPlayerPoints = data.val();
      });
      push();
      textSize(20);
      textFont("courier new");
      fill("cyan");
      text(player.name+" (You): "+player.points,50,25);
      text(otherPlayerName+": "+otherPlayerPoints,600,25);
      pop();
    }

    cardflip(){
        for(var i in cards){
          //console.log(cards[i].mouseIsPressed);
          if(cards[i].mouseIsPressed){
            switch((cards[i].life*-1)-1){
              case 0: cards[i].changeImage("card front", cardFront1);
              break;
              case 1: cards[i].changeImage("card front", cardFront2);
                break;
              case 2: cards[i].changeImage("card front", cardFront3);
                break;
              case 3: cards[i].changeImage("card front", cardFront4);
                break;
              case 4: cards[i].changeImage("card front", cardFront5);
                break;
              case 5: cards[i].changeImage("card front", cardFront6);
                break;
              case 6: cards[i].changeImage("card front", cardFront7);
                break;
              case 7: cards[i].changeImage("card front", cardFront8);
                break;
              case 8: cards[i].changeImage("card front", cardFront9);
                break;
              case 9: cards[i].changeImage("card front", cardFront10);
                break;
              case 10: cards[i].changeImage("card front", cardFront1);
                break;
              case 11: cards[i].changeImage("card front", cardFront2);
                break;
              case 12: cards[i].changeImage("card front", cardFront3);
                break;
              case 13: cards[i].changeImage("card front", cardFront4);
                break;
              case 14: cards[i].changeImage("card front", cardFront5);
                break;
              case 15: cards[i].changeImage("card front", cardFront6);
                break;
              case 16: cards[i].changeImage("card front", cardFront7);
                break;
              case 17: cards[i].changeImage("card front", cardFront8);
                break;
              case 18: cards[i].changeImage("card front", cardFront9);
                break;
              case 19: cards[i].changeImage("card front", cardFront10);
                break;
              default: break;
            }
          }
        }
      


      push();
      fill(0);
      textSize(30);
      textFont("courier new");
      text("Card Memory",300,25);
      textSize(16);
      text("Find matching pairs to make all the cards disappear!",125,50);
      pop();

      

      drawSprites();
    }
}

