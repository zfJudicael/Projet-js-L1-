/*var a1 = [2, 3, 4];
var a2 = [-2, -2, -2];
var a3 = [2, 5, 10];
var b = [3, -4, -1];
console.log(matrice);*/


var solution = document.getElementsByClassName("solution");
var erreur = document.getElementById("error");
var res = document.getElementById("res");
var del = document.getElementById("del");

res.onclick = function(){ 
    var i;
    var ligne1 = document.getElementsByClassName("a1");
    var a1 = new Array();
    for(i=0;i<ligne1.length;i++){
        a1[i] = ligne1[i].value;
    };

    var ligne2 = document.getElementsByClassName("a2");
    var a2 = new Array();
    for(i=0;i<ligne2.length;i++){
        a2[i] = ligne2[i].value;
    };

    var ligne3 = document.getElementsByClassName("a3");
    var a3 = new Array();
    for(i=0;i<ligne3.length;i++){
        a3[i] = ligne3[i].value;
    };

    var sol = document.getElementsByClassName("b");
    var b = new Array();
    for(i=0;i<sol.length;i++){
        b[i] = sol[i].value;
    };
    console.log(b);

    var  matrice = [a1, a2, a3];
    console.log(matrice);

    //Calcul du determinant A
    var min1 = a1[0]*((a2[1]*a3[2])-(a3[1]*a2[2]));
    var min2 = a2[0]*((a1[1]*a3[2])-(a3[1]*a1[2]));
    var min3 = a3[0]*((a1[1]*a2[2])-(a2[1]*a1[2]));
    var determinant = min1 - min2 + min3;
    console.log(determinant);

    if(isNaN(determinant)){
        erreur.innerHTML = "Veuillez bien remplir les cases svp";
        for(i=0;i<solution.length;i++){
            solution[i].value="";
        };
    }else if(determinant == 0){
        erreur.innerHTML = "Le système n'admet pas de solution";
        for(i=0;i<solution.length;i++){
            solution[i].value = "";
        };
    }else{
        //Calcul du determiant A1
        var m1 = b[0]*((a2[1]*a3[2])-(a3[1]*a2[2]));
        var m2 = b[1]*((a1[1]*a3[2])-(a3[1]*a1[2]));
        var m3 = b[2]*((a1[1]*a2[2])-(a2[1]*a1[2]));
        var determinantA1 = m1 - m2 + m3;
        
        //Calcul du determinant A2
        var M1 = a1[0]*((b[1]*a3[2])-(b[2]*a2[2]));
        var M2 = a2[0]*((b[0]*a3[2])-(b[2]*a1[2]));
        var M3 = a3[0]*((b[0]*a2[2])-(b[1]*a1[2]));
        var determinantA2 = M1 - M2 + M3;
        
        //Calcul du determinant A3
        var mi1 = a1[0]*((a2[1]*b[2])-(a3[1]*b[1]));
        var mi2 = a2[0]*((a1[1]*b[2])-(a3[1]*b[0]));
        var mi3 = a3[0]*((a1[1]*b[1])-(a2[1]*b[0]));
        var determinantA3 = mi1 - mi2 + mi3;
        
        //Calcul des x
        var x1 = determinantA1/determinant;
        var x2 = determinantA2/determinant;
        var x3 = determinantA3/determinant;

        //Affiche des résultats
        erreur.innerHTML = "";
        solution[0].value = x1;
        solution[1].value = x2;
        solution[2].value = x3;
    };    
}

del.onclick = function(){
    erreur.innerHTML="";
}
