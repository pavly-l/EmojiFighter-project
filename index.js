let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    rand1=Math.floor(Math.random()*17)
    rand2=Math.floor(Math.random()*17)
    stageEl.textContent = fighters[rand()] + " vs " + fighters[rand()]
    //.textContent(fighters[rand()])
    
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
})
function rand(){
    let randam =Math.floor(Math.random()*fighters.length)
    return randam
}