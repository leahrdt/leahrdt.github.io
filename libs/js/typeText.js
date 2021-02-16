var i, textxType;
i=0;
textxType="Desarrollador Javascript";

function typing(){
    if(i<text.length){
        document.getElementById("texxtType").innerHTML += texxtType.charAt(i);
        i++;
        setTimeout(typing,70)
    }
}
typing();

