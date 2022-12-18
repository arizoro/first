const nama = "ari purnama panjaitan";
let usia = 25;

let biodata = document.getElementById('biodata');
// console.log(biodata);

function generateBiodata (){
    let golongan;
    
    if (usia >=2 && usia <15 ) { 
        golongan ="golongan anak anak";
    } else if(usia >=15 && usia <18) {
        golongan ="golongan remaja";
    } else if (usia >=18 && usia <24) {
        golongan ="golongan dewasa";
    } else if (usia >=24) {
        golongan ="golongan tua";
    }
    else {     
        golongan ="golongan bayi"
    }

   return biodata.innerHTML = golongan;
}

console.log(nama);
console.log(usia);

generateBiodata()