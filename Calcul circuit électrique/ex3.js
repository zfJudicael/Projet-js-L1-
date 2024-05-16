var solU = document.getElementsByClassName("solU");
var solI = document.getElementsByClassName("solI");
var Calculer = document.getElementById("Calculer");
var msgError = document.getElementById("msgError");

Calculer.onclick = function(){
    var resistances = document.getElementsByClassName("resistances");
    var U = document.getElementById("tension");
    var R = new Array();
    for(let i=0;i<resistances.length;i++){
        R[i] = resistances[i].value;
    };

    //Calcul de le resistance équivalente
    let R1 = parseFloat(R[0]);
    let R2 = parseFloat(R[1]);
    let R3 = parseFloat(R[2]);
    let R4 = parseFloat(R[3]);
    var Req = (R1+R4+((R2*R3)/(R2+R3)));

    if(isNaN(Req)){
        msgError.innerHTML = "Veuillez bien remplir les cases svp";
    }else if(Req==0|| Req < 0){
        msgError.innerHTML = "Il n'y a pas de solution possible";
    }else{
        //Calcul des Intensités
        var I1 = U.value/Req;
        function calculI(A, B, i){
            var I = (A/(A+B))*i;
            return I;
        };
        var I2 = calculI(R3, R2, I1);
        var I3 = calculI(R2, R3, I1);

        solI[0].value = I1;
        solI[1].value = I2;
        solI[2].value = I3;

        //Calcul des tensions
        function calculU(R, i){
           var U = R*i;
           return U;
        };
        var U1 = calculU(R[0], I1);
        var U2 = calculU(R[1], I2);
        var U3 = calculU(R[3], I1);

        solU[0].value = U1;
        solU[1].value = U2;
        solU[2].value = U3;

        msgError.innerHTML = "";
    }
}
