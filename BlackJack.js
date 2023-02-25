
const taliaTestowa = [
    {name:"As Karo", value: 11},
    {name:"Król Karo", value: 4},
    {name:"Dama Karo", value: 3},
    {name:"Walet Karo", value: 2},
    {name:"10 Karo", value: 10},
    {name:"9 Karo", value: 9},
    {name:"8 Karo", value: 8},
    {name:"7 Karo", value: 7},
    {name:"6 Karo", value: 6},
    {name:"5 Karo", value: 5},
    {name:"4 Karo", value: 4},
    {name:"3 Karo", value: 3},
    {name:"2 Karo", value: 2},
    {name:"As Pik", value: 11},
    {name:"Król Pik", value: 4},
    {name:"Dama Pik", value: 3},
    {name:"Walet Pik", value: 2},
    {name:"10 Pik", value: 10},
    {name:"9 Pik", value: 9},
    {name:"8 Pik", value: 8},
    {name:"7 Pik", value: 7},
    {name:"6 Pik", value: 6},
    {name:"5 Pik", value: 5},
    {name:"4 Pik", value: 4},
    {name:"3 Pik", value: 3},
    {name:"2 Pik", value: 2},
    {name:"As Trefl", value: 11},
    {name:"Król Trefl", value: 4},
    {name:"Dama Trefl", value: 3},
    {name:"Walet Trefl", value: 2},
    {name:"10 Trefl", value: 10},
    {name:"9 Trefl", value: 9},
    {name:"8 Trefl", value: 8},
    {name:"7 Trefl", value: 7},
    {name:"6 Trefl", value: 6},
    {name:"5 Trefl", value: 5},
    {name:"4 Trefl", value: 4},
    {name:"3 Trefl", value: 3},
    {name:"2 Trefl", value: 2},
    {name:"As Kier", value: 11},
    {name:"Król Kier", value: 4},
    {name:"Dama Kier", value: 3},
    {name:"Walet Kier", value: 2},
    {name:"10 Kier", value: 10},
    {name:"9 Kier", value: 9},
    {name:"8 Kier", value: 8},
    {name:"7 Kier", value: 7},
    {name:"6 Kier", value: 6},
    {name:"5 Kier", value: 5},
    {name:"4 Kier", value: 4},
    {name:"3 Kier", value: 3},
    {name:"2 Kier", value: 2}
     ];


function tasowanieKart(talia){
    let taliaRandom = [];
    let taliaPoTasowaniu = [];
    let randomTalia

    //kopiowanie zawartości taliaTestowa do taliaRandom
    taliaRandom=talia.slice();
  for(let el = taliaRandom.length; el> 0;el--){
   //losowanie kart z pośredniej tablicy taliaRandom
    randomTalia = taliaRandom[Math.floor(Math.random()*taliaRandom.length)];
    //przypisanie karty wylosowanej 
    taliaPoTasowaniu.push(randomTalia);
    //szukanie indexu wylosowanej karty w celu późniejszej jej eliminacji z talii taliaRandom
    let index = taliaRandom.indexOf(randomTalia);
    //usuwanie wylosowanego elementu z tablicy pośredniej taliaRandom
    taliaRandom.splice(index,1);
  }

   return taliaPoTasowaniu;

}

 function dodajUczestników(uczestnicy){
   //let members = prompt("Podaj liczbę uczestników");
   // let a = Number(members);
   let a = uczestnicy;
   
   return a;
 }

 function rozdajKarty(members, talia){

   let uczestnicy = [];
   let uczestnik = 0;

    //deklaracja tablicy obiektów
for (let i = 0; i<= members; i++){
    uczestnicy [i] = {
    suma:0,
    karty:[]
    }
}

//Cel: rozdanie kart i sumowanie wartości
let cartNumber = talia.length;
//console.log("Długość talii na początku " + cartNumber)

//dodatkowa zmienna aby przeglądać tablicę od 0 w górę
let cartNumberPlus = cartNumber;
while(cartNumber){
    uczestnicy[uczestnik].karty.push(talia[cartNumberPlus - cartNumber].name);
    uczestnicy[uczestnik].suma += talia[cartNumberPlus - cartNumber].value;
  
    if(uczestnicy[uczestnik].suma < 21){
        uczestnik++;
        //warunek pilnujący żeby rozdawanie kart nie wychodziło poza zakres tablicy uczestników
        if(uczestnik>members){
          uczestnik=0;
        }
      }else{
        console.log("Gracz "+ uczestnik +" zdobył "+ uczestnicy[uczestnik].suma + " punktów")
        break;
      }
      cartNumber--;
  }
    return uczestnicy;
 }

//Główna część programu

console.log("Ilość graczy to: " + (dodajUczestników(3)))
console.log(rozdajKarty(dodajUczestników(3), tasowanieKart(taliaTestowa)))

//koniec