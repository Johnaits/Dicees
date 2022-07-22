function random()
{
    var pache;

    var n1 = Math.floor(Math.random()*6)+1;
    document.querySelectorAll("img")[0].src = face(pache);

    var n1 = Math.floor(Math.random()*6)+1;
    document.querySelectorAll("img")[1].src = face(pache);
    //var n2 = Math.floor(Math.random()*6)+1;
    
    
   function face(pache)
   { 
    if (n1 == 1){
        pache = "images/dice1.png";
    }

    else if (n1 == 2){
         pache = "images/dice2.png";
    }

    else if (n1 == 3){
         pache = "images/dice3.png";
    }

    else if (n1 == 4){
         pache = "images/dice4.png";
    }

    if (n1 == 5){
         pache = "images/dice5.png";
    }

    if (n1 == 6){
        pache = "images/dice6.png";
    }
    return pache
    }
    

    
}




    