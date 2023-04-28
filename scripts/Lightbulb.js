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

export { Lightbulb };
