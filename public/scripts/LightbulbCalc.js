class Lightbulb {
  constructor(p, tempWatts, templumens, tempLink, tempLifespan, tShape, tSize, tBaseType, tWarmth, tFrosted, tDimmable) {
    this.price = p; // dollars
    this.watts = tempWatts;
    this.lumens = templumens;
    this.link = tempLink;
    this.lifespan = tempLifespan; // hours
    this.differential = 0;
    this.shape = tShape;
    this.size = tSize;
    this.baseType = tBaseType;
    this.warmth = tWarmth;
    this.frosted = tFrosted;
    this.dimmable = tDimmable;
    this.ppth = ((this.price + (this.lifespan * (this.watts / 1000) * Lightbulb.pricePerkWh)) / this.lifespan) * 1000;
  }

  static pricePerkWh = 0.1155;

  getLumens() {
    return this.lumens;
  }

  setLumens(lumens) {
    this.lumens = lumens;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }

  getWatts() {
    return this.watts;
  }

  setWatts(watts) {
    this.watts = watts;
  }

  getLink() {
    return this.link;
  }

  setLink(link) {
    this.link = link;
  }

  getLifespan() {
    return this.lifespan;
  }

  setLifespan(lifespan) {
    this.lifespan = lifespan;
  }

  getDifferential() {
    return this.differential;
  }

  setDifferential(differential) {
    this.differential = differential;
  }

  getPpth() {
    return this.ppth;
  }

  setPpth(ppth) {
    this.ppth = ppth;
  }

  getSize() {
    return this.size;
  }

  setSize(size) {
    this.size = size;
  }

  getBaseType() {
    return this.baseType;
  }

  setBaseType(baseType) {
    this.baseType = baseType;
  }

  getWarmth() {
    return this.warmth;
  }

  setWarmth(warmth) {
    this.warmth = warmth;
  }

  getShape() {
    return this.shape;
  }

  setShape(shape) {
    this.shape = shape;
  }

  getFrosted() {
    return this.frosted;
  }

  setFrosted(frosted) {
    this.frosted = frosted;
  }

  getDimmable() {
    return this.dimmable;
  }

  setDimmable(dimmable) {
    this.dimmable = dimmable;
  }
}


function inputLights() {
  const lightbulbs = [];
  const graceChurch100 = new Lightbulb(3.4, 4, 350, "https://amzn.to/40EcgsV", 15000, "B", 10, "E12", 2700, false, true);
  lightbulbs.push(graceChurch100);
  const a190 = new Lightbulb(2.24, 6, 450, "https://amzn.to/3YH4Qn6",10000, "A", 19, "E26", 2700,true,true);
  lightbulbs.push(a190);
  const globe0 = new Lightbulb(9.38, 5.5, 500, "https://amzn.to/3ywTpUj",15000,"G",25,"E26",2700,true,true);
  lightbulbs.push(globe0);
  const sylvania73885 = new Lightbulb(3.85, 8.5, 800,
      "https://shop.regencylighting.com/sylvania-73885-led8-5a19f82710yvrp.html", 11000, "A", 19, "E26", 2700,true,false);
  lightbulbs.push(sylvania73885);
  const geProLine = new Lightbulb(2.98, 45, 350,
      "https://www.amazon.com/GE-Lighting-73027-310-Lumen-Floodlight/dp/B00A7OXYY8?th=1", 1500, "R", 20, "E26", 2700, true,false);
  lightbulbs.push(geProLine);
  const bioluzBR20 = new Lightbulb(3.75, 6, 540, "https://tinyurl.com/2p8w746j", 25000, "BR", 20,"E26", 3000,true,true);
  lightbulbs.push(bioluzBR20);
  const energeticSmarterLightingA19 = new Lightbulb(1.12, 5, 450, "https://tinyurl.com/yzykyva2", 15000, "A", 19, "E26", 5000,true,false);
  lightbulbs.push(energeticSmarterLightingA19);
  const sylvaniaLEDFlood = new Lightbulb(3.90, 5, 325, "https://tinyurl.com/mbpsm3s6", 11000, "R", 20, "E26", 2700,true,true);
  lightbulbs.push(sylvaniaLEDFlood);
  return lightbulbs;
}

// import { Lightbulb } from './Lightbulb.js';

function findAlternatives() {
  //Get info from form to pass into constructor fro lightbulb
  //Call lightbulb constructor
  //create variavles for lightbulb
  // let page_header = document.getElementById("page_header");
  // page_header.innerHTML =  "Alternative Results";
  
  const current = new Lightbulb();
  

  let quantity = document.getElementById('QuantityForm').value;
  console.log(quantity);

  let wattage = document.getElementById('WattageForm').value;
  console.log(wattage);

  let luminage = document.getElementById('LuminageForm').value;
  console.log(luminage);

  let cost = document.getElementById('CostForm').value;
  console.log(cost);

  let lifespan = document.getElementById('LifespanForm').value;
  console.log(lifespan);

  let frosted = document.querySelector('#frosted').value;
  console.log(frosted);

  let shape = document.querySelector('#shape').value;
  console.log(shape);

  let size = document.getElementById('SizeForm').value;
  console.log(size);

  let base = document.querySelector('#base').value;
  console.log(base);

  let warmth = document.querySelector('#warmth').value;
  console.log(warmth);

  let dimmable = document.querySelector('#dimmable').value;
  console.log(dimmable);

  current.setWatts(wattage);
  current.setLumens(luminage);
  current.setPrice(cost);
  current.setLifespan(lifespan);
  current.setFrosted(frosted);
  current.setShape(shape);
  current.setSize(size);
  current.setBaseType(base);
  current.setWarmth(warmth);
  current.setDimmable(dimmable);

  let minLumens = current.getLumens() * 0.7;
  let maxLumens = current.getLumens() * 1.3;

  let lightbulbs = inputLights();

  let possibilities = [];

  //create an array with all the possibilities of alternative
  for (let i = 0; i < lightbulbs.length; i++){
    //checks for +-2 size, +- 25% lumenage, same base type, same shape, +-300K warmth, same dimmability and frost
    if (lightbulbs[i].getShape() === current.getShape() && 
        lightbulbs[i].getLumens() > minLumens && 
        lightbulbs[i].getLumens() < maxLumens && 
        Math.abs(lightbulbs[i].getSize()-current.getSize()) <= 2 && 
        lightbulbs[i].getBaseType() === current.getBaseType() && 
        Math.abs(lightbulbs[i].getWarmth()-current.getWarmth()) <= 300 && 
        lightbulbs[i].getFrosted() === current.getFrosted() && 
        lightbulbs[i].getDimmable() === current.getDimmable()) {
      possibilities.push(lightbulbs[i]); // narrows to possibilities based on above criteria
    }
  } 
  
  //get all the differences in prices from their current lightbulb and the possibilities
  for (let i = 0; i < possibilities.length; i++) {
    possibilities[i].setDifferential(current.getPpth() - possibilities[i].getPpth());
  }

   return possibilities;
}

// function printInfo(){
//   // var w3r_text = "This text will be added to HTML";
//   // var newParagraph = document.createElement("p"); //creates a new paragraph element
//   // var newText = document.createTextNode(w3r_text); //creates text along with output to be displayed 
//   // newParagraph.appendChild(newText); //created text is appended to the paragraph element created
//   // document.body.appendChild(newParagraph); // created paragraph and text along with output is appended to the document body
//   var shdata = document.getElementById('shtxt').innerHTML;
//   alert(shdata);
//}
  

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j].getDifferential() < arr[lowest]getDifferential()) {
//         lowest = j
//       }
//     }
//     if (lowest !== i) {
//       // Swap
//       ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
//     }
//   }
//   return arr
// }






