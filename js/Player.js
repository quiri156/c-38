class Player {
  constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;
  }
getcount(){
  var playerCountref=database.ref("playercount")
  playerCountref.on("value",function(data){
    playercount=data.val()
  })
}
updatecount(count){
  database.ref("/").update({
    playercount:count
  })
}

update(name){
  
  var playerIndex="players/player"+this.index
  database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
  })
}
static getplayerinfo(){
  var playerinforef=database.ref("players")
  playerinforef.on("value",(data)=>{
    allplayers=data.val()
  })
}
}
