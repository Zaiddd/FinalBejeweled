const container = document.getElementById("container");

let cell = [];
var nbHoriz = 0;
var nbHoriz2 = 0;
var nbVertic = 0;
var nbVertic3 = 0;
var nbVertic2 = 0;
var score = 0;
var niveau = 1;
var nbEssais = 5;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Génération grille
function creerGrille() {
    container.style.setProperty('--grid-rows', 8);
    container.style.setProperty('--grid-cols', 8);
	

    for (i = 0; i < 64; i++) {
        cell = document.createElement("div");
        cell.setAttribute("id",i);
        container.appendChild(cell).className = "grid-item";     
    };
};

var img = [
        "resources/bleu.png",
        "resources/bleuRond.png",
        "resources/jauneTest.png",
        "resources/orange.png",
        "resources/rouge.png",
        "resources/rougeCoeur.png",
        "resources/vert.png",
        "resources/violet.png"
    ];

var elem = new Array();
// Génération images
var lImg = [];
function afficherImages(){
	
    var j = 0;
    var k = 0;
    

    for(x = 0; x < 8; x++){
    	elem[x] = new Image();
    	elem[x].src = img[x];
    	elem[x].setAttribute("height", "70");
	 	elem[x].setAttribute("width", "70");
    };

    for (i = 0; i < 64; i++) {
        document.getElementById(i).appendChild(elem[getRandomInt(8)].cloneNode(true));
        lImg.push(document.getElementById(i).getElementsByTagName("img")[0].src);
    }

    ifCombi();
    ifCombi();
    ifCombi();
    ifCombi();
    ifCombi();
    ifCombi();
}

function ifCombi(){
    for (i = 0; i < 62; i++) {
        if(lImg[i] == lImg[i+1] && lImg[i] == lImg[i+2]){
            document.getElementById(i).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            document.getElementById(i+2).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            document.getElementById(i+3).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            score = 0;
        }
    }

    for (i = 0; i < 48; i++) {
        if(lImg[i] == lImg[i+8] && lImg[i] == lImg[i+16]){
            document.getElementById(i).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            document.getElementById(i+8).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            document.getElementById(i+16).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            score = 0;
        }
    }
}

function ifCombiNewGame(){
    for (i = 0; i < 62; i++) {
        if(newListImg[i] == newListImg[i+1] && newListImg[i] == newListImg[i+2]){
            document.getElementById(i).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            document.getElementById(i+2).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            document.getElementById(i+3).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            score = 0;
        }
    }

    for (i = 0; i < 48; i++) {
        if(newListImg[i] == newListImg[i+8] && newListImg[i] == newListImg[i+16]){
            document.getElementById(i).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            document.getElementById(i+8).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            document.getElementById(i+16).getElementsByTagName("img")[0].src = img[getRandomInt(8)];
            score = 0;
        }
    }
}

function echangerImages() {
    var clics = [];
    for(i = 0; i < 64; i++){
        var imageCliquee = document.getElementById(i);

        imageCliquee.onclick = function(){
            console.log("id : " + this.id);
            this.style.backgroundColor = "green";

            clics.push(this.id);
            console.log(clics);
            var imgDiv1 = document.getElementById(clics[0]).getElementsByTagName("img")[0].src;
            //console.log(imgDiv1);
            // Debut changement
            if(clics.length == 2){
                var imgCompC0 = document.getElementById(clics[0]).getElementsByTagName("img")[0].src;

                var listeImg = [];
                for(x = 0; x < 64; x++){
                    listeImg.push(document.getElementById(x).getElementsByTagName("img")[0].src);
                }


                var imgCompC1 = document.getElementById(clics[1]).getElementsByTagName("img")[0].src;
                
                
                document.getElementById(clics[0]).style.backgroundColor = '#f9ffba';
                document.getElementById(clics[1]).style.backgroundColor = '#f9ffba';

                if(((imgCompC0 == listeImg[parseInt(clics[1])+1] && imgCompC0 == listeImg[parseInt(clics[1])+2]) || (imgCompC0 == listeImg[parseInt(clics[1])-2] && imgCompC0 == listeImg[parseInt(clics[1])-1]) || (imgCompC0 == listeImg[parseInt(clics[1])-1] && imgCompC0 == listeImg[parseInt(clics[1])+1]) || (imgCompC0 == listeImg[parseInt(clics[1])+8] && imgCompC0 == listeImg[parseInt(clics[1])+16]) || (imgCompC0 == listeImg[parseInt(clics[1])-16] && imgCompC0 == listeImg[parseInt(clics[1])-8]) || (imgCompC0 == listeImg[parseInt(clics[1])-8] && imgCompC0 == listeImg[parseInt(clics[1])+8])) || 

                    ((imgCompC1 == listeImg[parseInt(clics[0])+1] && imgCompC1 == listeImg[parseInt(clics[0])+2]) || (imgCompC1 == listeImg[parseInt(clics[0])-2] && imgCompC1 == listeImg[parseInt(clics[0])-1]) || (imgCompC1 == listeImg[parseInt(clics[0])-1] && imgCompC1 == listeImg[parseInt(clics[0])+1]) || (imgCompC1 == listeImg[parseInt(clics[0])+8] && imgCompC1 == listeImg[parseInt(clics[0])+16]) || (imgCompC1 == listeImg[parseInt(clics[0])-16] && imgCompC1 == listeImg[parseInt(clics[0])-8]) || (imgCompC1 == listeImg[parseInt(clics[0])-8] && imgCompC1 == listeImg[parseInt(clics[0])+8]))) {
                    console.log(document.getElementById(parseInt(clics[0])+1).getElementsByTagName('img')[0].src);
                    var tmp = document.getElementById(clics[0]).getElementsByTagName("img")[0].src;
                    document.getElementById(clics[0]).getElementsByTagName("img")[0].src = document.getElementById(clics[1]).getElementsByTagName("img")[0].src;
                    document.getElementById(clics[1]).getElementsByTagName("img")[0].src = tmp;
                }
                else if(imgCompC0 == imgCompC1){
                    console.log("Même case");
                    document.getElementById(clics[0]).style.backgroundColor = '#f9ffba';
                }
                else{
                    // var tmp = document.getElementById(clics[0]).getElementsByTagName("img")[0].src;
                    // document.getElementById(clics[0]).getElementsByTagName("img")[0].src = document.getElementById(clics[1]).getElementsByTagName("img")[0].src;
                    // document.getElementById(clics[1]).getElementsByTagName("img")[0].src = tmp;

                    // var tmp = document.getElementById(clics[1]).getElementsByTagName("img")[0].src;
                    // document.getElementById(clics[1]).getElementsByTagName("img")[0].src = document.getElementById(clics[0]).getElementsByTagName("img")[0].src;
                    // document.getElementById(clics[0]).getElementsByTagName("img")[0].src = tmp;

                    console.log("Pas de combinaison");
                    nbEssais--;
                    document.getElementById("essais").innerHTML = nbEssais;
                }
            }
            else{
                console.log("Sélectionnez une deuxième case");
            }

            

            if(clics.length == 2){
                clics = [];
            }
        }
    }
}

function isAligne(gemme1, gemme2, gemme3){
    if(gemme1 == gemme2 && gemme2 == gemme3){
        return true;
    }
    return false;
}

function casserCases(){
    var newImage  = Boolean(true);
    var imgDiv1 = document.getElementById(nbHoriz).getElementsByTagName('img')[0].src;
    var imgDiv2 = document.getElementById(nbHoriz+1).getElementsByTagName('img')[0].src;
    var imgDiv3 = document.getElementById(nbHoriz+2).getElementsByTagName('img')[0].src;
    var imgDiv4 = document.getElementById(nbHoriz+3).getElementsByTagName('img')[0].src;
    var imgDiv5 = document.getElementById(nbHoriz+4).getElementsByTagName('img')[0].src;

    var imgDiv1Horiz = document.getElementById(nbHoriz2).getElementsByTagName('img')[0].src;
    var imgDiv2Horiz = document.getElementById(nbHoriz2+1).getElementsByTagName('img')[0].src;
    var imgDiv3Horiz = document.getElementById(nbHoriz2+2).getElementsByTagName('img')[0].src;

    var imgDiv1Vertic = document.getElementById(nbVertic).getElementsByTagName('img')[0].src;
    var imgDiv2Vertic = document.getElementById(nbVertic+8).getElementsByTagName('img')[0].src;
    var imgDiv3Vertic = document.getElementById(nbVertic+16).getElementsByTagName('img')[0].src;
    var imgDiv4Vertic = document.getElementById(nbVertic+24).getElementsByTagName('img')[0].src;
    var imgDiv5Vertic = document.getElementById(nbVertic+32).getElementsByTagName('img')[0].src;

    var imgDiv1Vertic2 = document.getElementById(nbVertic2).getElementsByTagName('img')[0].src;
    var imgDiv2Vertic2 = document.getElementById(nbVertic2+8).getElementsByTagName('img')[0].src;
    var imgDiv3Vertic2 = document.getElementById(nbVertic2+16).getElementsByTagName('img')[0].src;
    var imgDiv4Vertic2 = document.getElementById(nbVertic2+24).getElementsByTagName('img')[0].src;

    var imgDiv1Vertic3 = document.getElementById(nbVertic3).getElementsByTagName('img')[0].src;
    var imgDiv2Vertic3 = document.getElementById(nbVertic3+8).getElementsByTagName('img')[0].src;
    var imgDiv3Vertic3 = document.getElementById(nbVertic3+16).getElementsByTagName('img')[0].src;

    // Horizontal 5
    if(imgDiv1 == imgDiv2 && imgDiv2 == imgDiv3 && imgDiv3 == imgDiv4 && imgDiv4 == imgDiv5){
        document.getElementById(nbHoriz).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz+1).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz+2).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz+3).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz+4).getElementsByTagName('img')[0].src = null;
        imgDiv1 = null;
        imgDiv2 = null;
        imgDiv3 = null;  
        imgDiv4 = null;  
        imgDiv5 = null;
        score += niveau * 1000;
        console.log("trouvé horizontalement");
        

        if(imgDiv1 == null && imgDiv2 == null && imgDiv3 == null && imgDiv4 == null && imgDiv5 == null){
            if(nbHoriz < 8){
                document.getElementById(nbHoriz).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz+1).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz+2).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz+3).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz+4).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                console.log("Nouvelles images horizontalement");
            }
            else{
                document.getElementById(nbHoriz).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-8).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz+1).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-7).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz+2).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-6).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz+3).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-5).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz+4).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-4).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz-8).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz-7).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz-6).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz-5).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz-4).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                score -= niveau * 1000;
                document.getElementById('timer').value -= 5 * niveau;
            }
        }
        
        nbHoriz++;
        
    }

    // Horizontal 4
    else if(imgDiv1 == imgDiv2 && imgDiv2 == imgDiv3 && imgDiv3 == imgDiv4){
        document.getElementById(nbHoriz).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz+1).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz+2).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz+3).getElementsByTagName('img')[0].src = null;
        imgDiv1 = null;
        imgDiv2 = null;
        imgDiv3 = null;  
        imgDiv4 = null;  
        console.log("trouvé horizontalement");
        score += niveau * 300;
        document.getElementById("score").innerHTML = niveau * score;
        incrementerTemps();

        if(imgDiv1 == null && imgDiv2 == null && imgDiv3 == null && imgDiv4 == null){
            if(nbHoriz < 8){
                document.getElementById(nbHoriz).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz+1).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz+2).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz+3).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                console.log("Nouvelles images horizontalement");
            }
            else{
                document.getElementById(nbHoriz).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-8).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz+1).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-7).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz+2).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-6).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz+3).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz-5).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz-8).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz-7).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz-6).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz-5).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                score -= niveau * 300;
                document.getElementById('timer').value -= 5 * niveau;
            }
        }
        nbHoriz++;
    }

    // Horizontal 3
    else if(imgDiv1Horiz == imgDiv2Horiz && imgDiv2Horiz == imgDiv3Horiz){
        document.getElementById(nbHoriz2).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz2+1).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbHoriz2+2).getElementsByTagName('img')[0].src = null;
        imgDiv1Horiz = null;
        imgDiv2Horiz = null;
        imgDiv3Horiz = null;
        console.log("trouvé horizontalement");
        score += niveau * 100;
        document.getElementById("score").innerHTML = niveau * score;
        incrementerTemps();
        
        if(imgDiv1Horiz == null && imgDiv2Horiz == null && imgDiv3Horiz == null){
            if(nbHoriz2 < 8){
                document.getElementById(nbHoriz2).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz2+1).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbHoriz2+2).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                console.log("Nouvelles images horizontalement");
            }
            else{
                document.getElementById(nbHoriz2).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz2-8).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz2+1).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz2-7).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz2+2).getElementsByTagName('img')[0].src = document.getElementById(nbHoriz2-6).getElementsByTagName('img')[0].src;
                document.getElementById(nbHoriz2-8).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz2-7).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbHoriz2-6).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                score -= niveau * 100;
                document.getElementById('timer').value -= 5 * niveau;
            }
        }
        nbHoriz++;
        nbHoriz2++;
    }
    
    else{
        nbHoriz2++;
        nbHoriz++;
        console.log("pas trouvé");
    }

    if(nbHoriz == 60)
        nbHoriz = 0;
    if(nbHoriz2 == 62)
        nbHoriz2 = 0;

    // Vertical 5
    if(imgDiv1Vertic == imgDiv2Vertic && imgDiv2Vertic == imgDiv3Vertic && imgDiv3Vertic == imgDiv4Vertic && imgDiv4Vertic == imgDiv5Vertic){
        document.getElementById(nbVertic).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic+8).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic+16).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic+24).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic+32).getElementsByTagName('img')[0].src = null;
        imgDiv1Vertic = null;
        imgDiv2Vertic = null;
        imgDiv3Vertic = null;
        imgDiv4Vertic = null;
        imgDiv5Vertic = null;
        console.log("Trouvé verticalement");
        score += niveau * 1000;
        document.getElementById("score").innerHTML = niveau * score;
        incrementerTemps();
    
        if(imgDiv1Vertic == null && imgDiv2Vertic == null && imgDiv3Vertic == null && imgDiv4Vertic == null && imgDiv5Vertic == null){
            if(nbVertic < 16){
                document.getElementById(nbVertic).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic+8).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic+16).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic+24).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic+32).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                console.log("Nouvelles images verticalement");
            }
            else{
                document.getElementById(nbVertic).getElementsByTagName('img')[0].src = document.getElementById(nbVertic-32).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic+8).getElementsByTagName('img')[0].src = document.getElementById(nbVertic-24).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic+16).getElementsByTagName('img')[0].src = document.getElementById(nbVertic-16).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic+24).getElementsByTagName('img')[0].src = document.getElementById(nbVertic-8).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic+32).getElementsByTagName('img')[0].src = document.getElementById(nbVertic).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic-8).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic-16).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic-24).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic-32).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                score -= niveau * 1000;
                document.getElementById('timer').value -= 5 * niveau;
            }
        }
        nbVertic++;
    }

    // Vertical 4
    else if(imgDiv1Vertic2 == imgDiv2Vertic2 && imgDiv2Vertic2 == imgDiv3Vertic2 && imgDiv3Vertic2 == imgDiv4Vertic2){
        document.getElementById(nbVertic2).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic2+8).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic2+16).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic2+24).getElementsByTagName('img')[0].src = null;
        imgDiv1Vertic2 = null;
        imgDiv2Vertic2 = null;
        imgDiv3Vertic2 = null;
        imgDiv4Vertic2 = null;
        console.log("Trouvé verticalement");
        score += niveau * 300;
        document.getElementById("score").innerHTML = niveau * score;
        incrementerTemps();
    
        if(imgDiv1Vertic2 == null && imgDiv2Vertic2 == null && imgDiv3Vertic2 == null && imgDiv4Vertic2 == null){
            if(nbVertic2 < 16){
                document.getElementById(nbVertic2).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic2+8).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic2+16).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic2+24).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                console.log("Nouvelles images verticalement");
            }
            else if(nbVertic2 > 7 && nbVertic2 < 16){
                document.getElementById(nbVertic2).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic2+8).getElementsByTagName('img')[0].src = document.getElementById(nbVertic2-24).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic2+16).getElementsByTagName('img')[0].src = document.getElementById(nbVertic2-16).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic2+24).getElementsByTagName('img')[0].src = document.getElementById(nbVertic2-8).getElementsByTagName('img')[0].src;
                
                document.getElementById(nbVertic2).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic2-8).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic2-16).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic2-24).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                score -= niveau * 300;
                document.getElementById('timer').value -= 5 * niveau;
            }
            else{
                document.getElementById(nbVertic2).getElementsByTagName('img')[0].src = document.getElementById(nbVertic2-24).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic2+8).getElementsByTagName('img')[0].src = document.getElementById(nbVertic2-16).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic2+16).getElementsByTagName('img')[0].src = document.getElementById(nbVertic2-8).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic2+24).getElementsByTagName('img')[0].src = document.getElementById(nbVertic2).getElementsByTagName('img')[0].src;
                
                document.getElementById(nbVertic2).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic2-8).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic2-16).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic2-24).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                score -= niveau * 300;
                document.getElementById('timer').value -= 5 * niveau;
            }
        }
        if(nbVertic2 == 48)
            nbVertic2 = 0;
        nbVertic++;
    }

    

    // Vertical 3
    else if(imgDiv1Vertic3 == imgDiv2Vertic3 && imgDiv2Vertic3 == imgDiv3Vertic3){
        document.getElementById(nbVertic3).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic3+8).getElementsByTagName('img')[0].src = null;
        document.getElementById(nbVertic3+16).getElementsByTagName('img')[0].src = null;
        imgDiv1Vertic3 = null;
        imgDiv2Vertic3 = null;
        imgDiv3Vertic3 = null;
        console.log("Trouvé verticalement");
        score += niveau * 100;
        document.getElementById("score").innerHTML = niveau * score;
        incrementerTemps();
    
        if(imgDiv1Vertic3 == null && imgDiv2Vertic3 == null && imgDiv3Vertic3 == null){
            if(nbVertic3 < 16){
                document.getElementById(nbVertic3).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic3+8).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                document.getElementById(nbVertic3+16).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
                console.log("Nouvelles images verticalement");
            }
            else if(nbVertic3 > 15 && nbVertic3 < 24){
                document.getElementById(nbVertic3+8).getElementsByTagName('img')[0].src = document.getElementById(nbVertic3-16).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic3+16).getElementsByTagName('img')[0].src = document.getElementById(nbVertic3-8).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic3).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic3-8).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic3-16).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                score -= niveau * 100;
                document.getElementById('timer').value -= 5 * niveau;
            }
            else{
                document.getElementById(nbVertic3).getElementsByTagName('img')[0].src = document.getElementById(nbVertic3-24).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic3+8).getElementsByTagName('img')[0].src = document.getElementById(nbVertic3-16).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic3+16).getElementsByTagName('img')[0].src = document.getElementById(nbVertic3-8).getElementsByTagName('img')[0].src;
                document.getElementById(nbVertic3).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic3-8).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                document.getElementById(nbVertic3-16).getElementsByTagName('img')[0].src = "resources/testBlanc.png";
                score -= niveau * 100;
                document.getElementById('timer').value -= 5 * niveau;
            }
        }
        nbVertic3++;
    }
    else{
        nbVertic++;
        nbVertic3++;
    }

    if(nbVertic == 32)
        nbVertic = 0;
    if(nbVertic3 == 48)
        nbVertic3 = 0;
}

var casser;
casser = setInterval(casserCases, 3);

var res;
var timerValue;
var interval;

function decrementerTimer(){
    timerValue = document.getElementById('timer').value;
    console.log(timerValue + ", niveau : " + niveau);
    if(enPause == true){
        document.getElementById('timer').value = timerValue;
    }
    else{
        document.getElementById('timer').value -= niveau;
        
        if(timerValue == 0){
            console.log("Partie terminée. Le temps est écoulé");
            for(i = 0; i < 64; i++){
                document.getElementById(i).style.display = "none";
            }
            res = prompt("Partie terminée, Le temps est écoulé. Votre score : " + score + ", niveau : "+ niveau + ". Saisissez votre nom : ");
            clearInterval(interval);
            clearInterval(casser);
            if(res=="")
        	res = "Player";
            document.getElementById('pause').disabled = true;
            classement(res, score);
        }
    }
}

interval = setInterval(decrementerTimer , 3000);

function incrementerTemps(){
    document.getElementById('timer').value += 5 * niveau;

    for(i = 1; i < 50; i++){
        if(timerValue > 90 && niveau == i){
            document.getElementById('timer').value = 10;
            timerValue = 40;
            niveau = i+1;
            document.getElementById("labelNiveau").innerHTML = niveau;
        }
    }
}

var btn = document.getElementById("pause");
var enPause = new Boolean(false);

function pause(){
    if(enPause == false){
        btn.value = "Reprendre";
        enPause = true;
        document.getElementById('highScore').disabled = true;
        document.getElementById('newGame').disabled = true;
        for(i = 0; i < 64; i++){
            document.getElementById(i).style.display = "none";
        }
    }
    else{
        btn.value = "Pause";
        enPause = false;
        document.getElementById('highScore').disabled = false;
        document.getElementById('newGame').disabled = false;
        for(i = 0; i < 64; i++){
            document.getElementById(i).style.display = "block";
        }
    }
    console.log(btn);
}

function finPartie(){
    if(nbEssais < 1){
        console.log("Partie terminée. Vous n'avez plus d'essais");
        for(i = 0; i < 64; i++){
            document.getElementById(i).style.display = "none";
        }
        clearInterval(casser);
        clearInterval(fin);
        clearInterval(interval);
        document.getElementById('pause').disabled = true;
        res = prompt("Partie terminée, vous n'avez plus d'essais. Votre score : " + score + ", niveau : "+ niveau + ". Saisissez votre nom : ");
        localStorage.setItem("nom", res);
        if(res=="")
        	res = "Player";
        var nom = localStorage.getItem("nom");
        console.log(localStorage.length);
        classement(res, score);
    }
}
var fin;
fin = setInterval(finPartie, 500);

var nom1 = "None";
var nom2 = "None";
var nom3 = "None";

var score1 = 0;
var score2 = 0;
var score3 = 0;

function classement(nom,scorePartie){
    if(scorePartie > score2 && scorePartie > score1){
        tmp = score1;
        tmpNom = nom1;
        score1 = scorePartie;
        nom1 = res;
        if(tmp > score2){
            tmp4 = score2;
            tmpNom4 = nom2;
            score2 = tmp;
            nom2 = tmpNom;
            score3 = tmp4;
            nom3 = tmpNom4;
        }
    }
    else if((scorePartie > score3 && scorePartie > score2) || (scorePartie > score2 && scorePartie < score1)){
        tmpNom2 = nom2;
        tmp2 = score2;
        score2 = scorePartie;
        nom2 = res;
        nom3 = tmpNom2;
        score3 = tmp2;
    }
    else if((scorePartie > score3 && scorePartie < score2)){
        score3 = scorePartie;
        nom3 = res;
    }
}

function highScore() {
    newwindow2=window.open('','Tableau des scores','height=150,width=250');
    var tmp = newwindow2.document;
    tmp.write('<table border="1"><thead><tr><th>Rang</th><th>Nom des joueurs</th><th>Score</th></tr></thead> <tbody><tr><td>1</td><td>'+nom1+'</td><td>'+score1+'</td></tr><tr><td>2</td><td>'+nom2+'</td><td>'+score2+'</td></tr><tr><td>3</td><td>'+nom3+'</td><td>'+score3+'</td></tr></tbody></table>');
    
    tmp.close();
}

var newListImg = [];
function newGame(){
    
    clearInterval(casser);
    clearInterval(fin);
    clearInterval(interval);
    newListImg = [];
    for(i = 0; i < 64; i++){
        document.getElementById(i).style.display = "inline";
        document.getElementById(i).getElementsByTagName('img')[0].src = img[getRandomInt(8)];
        newListImg.push(document.getElementById(i).getElementsByTagName('img')[0].src);
    }

    ifCombiNewGame();
    ifCombiNewGame();
    ifCombiNewGame();
    ifCombiNewGame();
    ifCombiNewGame();
    ifCombiNewGame();
    ifCombiNewGame();
    ifCombiNewGame();
    ifCombiNewGame();
    ifCombiNewGame();

    score = 0;
    document.getElementById("score").innerHTML = niveau * score;
    nbEssais = 5;
    document.getElementById('timer').value = 50;
    document.getElementById("essais").innerHTML = nbEssais;
    niveau = 1;
    document.getElementById("labelNiveau").innerHTML = niveau;
    casser = setInterval(casserCases, 10);
    fin = setInterval(finPartie, 500);
    interval = setInterval(decrementerTimer, 3000);
    document.getElementById('pause').disabled = false;

    
}

creerGrille();
afficherImages();
echangerImages();