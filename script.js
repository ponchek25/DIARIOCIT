$(document).ready(function() {
	gerarQuote(); 
 
  function gerarQuote() {
    var quoteArray = [
      '"Não desista até que você fique orgulhoso."',
      '"Certas coisas valem a pena lutar."',
      '"Não se force a ser feliz."',
      '"Ame quando estiver pronto, e não sozinho."',
      '"Permita a si mesmo se recuperar."',
      '"Faça por você e não por eles."',
      '"Seja seu próprio herói hoje."',
      '"Suas decisões determinam seu destino."',
      '"Seja a energia que você quer atrair."',
      '"Todos que você conhecer pelo caminho estão lutando as próprias batalhas. Seja gentil sempre."',
      '"Continue determinado."',
      '"Dance como se niguém estivesse te olhando."',
      '"Seja honesto com os seus desejos."',
      '"Celebre as pequenas vitórias."',
      '"Seu maior poder é ser você."',
      '"Se você não amar a si mesmo como poderá amar outra pessoa?"',
      '"Acredite em si mesmo e confie nos outros."',
      '"Se abra as possibilidades."',
      '"As coisas mais lindas em você vêm de dentro."',
      '"Tudo é possível se você tiver coragem."',
      '"A vida é uma grande aventura."',
      '"São tempos difíceis que nos ensinam as mais valiosas lições."',
      '"Você chegou até aqui, não desista agora."',
      '"Nunca interrompa suas lágrimas."',
      '"Você é mais forte do que pensa."',
      '"Não deixe a vida te derrubar."',
      '"Toda flor floresce em seu próprio tempo."',
      '"Se tropeçar, faça disso parte da dança."'
    ];
    
   var randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    document.getElementById("quote").innerHTML = randomQuote;
    var by = " %23indiretasdobem via https://codepen.io/itska/full/PzwyxZ/";
    document.getElementById("tweet").href = "https://twitter.com/intent/tweet?&text=" + randomQuote + by;
}
 
document.getElementById("quoteButton").onclick = gerarQuote;
  
});