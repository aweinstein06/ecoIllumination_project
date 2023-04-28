class Lightbulb
  @@pricePerkWh = 0.1155

  attr_accessor :price, :watts, :lumens, :link, :lifespan, :differential, :shape, :size, :baseType, :warmth, :frosted, :dimmable, :ppth

  def initialize(p, tempWatts, templumens, tempLink, tempLifespan, tShape, tSize, tBaseType, tWarmth, tFrosted, tDimmable)
    @price = p # dollars
    @watts = tempWatts
    @lumens = templumens
    @link = tempLink
    @lifespan = tempLifespan # hours
    @differential = 0
    @shape = tShape
    @size = tSize
    @baseType = tBaseType
    @warmth = tWarmth
    @frosted = tFrosted
    @dimmable = tDimmable
    @ppth = ((@price + (@lifespan * (@watts / 1000) * Lightbulb.pricePerkWh)) / @lifespan) * 1000
  end

  def self.pricePerkWh
    @@pricePerkWh
  end

  def self.pricePerkWh=(value)
    @@pricePerkWh = value
  end

  def getLumens
    @lumens
  end

  def setLumens(lumens)
    @lumens = lumens
  end

  def getPrice
    @price
  end

  def setPrice(price)
    @price = price
  end

  def getWatts
    @watts
  end

  def setWatts(watts)
    @watts = watts
  end

  def getLink
    @link
  end

  def setLink(link)
    @link = link
  end

  def getLifespan
    @lifespan
  end

  def setLifespan(lifespan)
    @lifespan = lifespan
  end

  def getDifferential
    @differential
  end

  def setDifferential(differential)
    @differential = differential
  end

  def getPpth
    @ppth
  end

  def setPpth(ppth)
    @ppth = ppth
  end

  def getSize
    @size
  end

  def setSize(size)
    @size = size
  end

  def getBaseType
    @baseType
  end

  def setBaseType(baseType)
    @baseType = baseType
  end

  def getWarmth
    @warmth
  end

  def setWarmth(warmth)
    @warmth = warmth
  end

  def getShape
    @shape
  end

  def setShape(shape)
    @shape = shape
  end

  def getFrosted
    @frosted
  end

  def setFrosted(frosted)
    @frosted = frosted
  end

  def getDimmable
    @dimmable
  end

  def setDimmable(dimmable)
    @dimmable = dimmable
  end
end

def inputLights()
  lightbulbs = []
  graceChurch100 = Lightbulb.new(3.4, 4, 350, "https://amzn.to/40EcgsV", 15000, "B", 10, "E12", 2700, false, true)
  lightbulbs.push(graceChurch100)
  a190 = Lightbulb.new(2.24, 6, 450, "https://amzn.to/3YH4Qn6",10000, "A", 19, "E26", 2700,true,true)
  lightbulbs.push(a190)
  globe0 = Lightbulb.new(9.38, 5.5, 500, "https://amzn.to/3ywTpUj",15000,"G",25,"E26",2700,true,true)
  lightbulbs.push(globe0)
  sylvania73885 = Lightbulb.new(3.85, 8.5, 800, "https://shop.regencylighting.com/sylvania-73885-led8-5a19f82710yvrp.html", 11000, "A", 19, "E26", 2700,true,false)
  lightbulbs.push(sylvania73885)
  geProLine = Lightbulb.new(2.98, 45, 350, "https://www.amazon.com/GE-Lighting-73027-310-Lumen-Floodlight/dp/B00A7OXYY8?th=1", 1500, "R", 20, "E26", 2700, true,false)
  lightbulbs.push(geProLine)
  bioluzBR20 = Lightbulb.new(3.75, 6, 540, "https://tinyurl.com/2p8w746j", 25000, "BR", 20,"E26", 3000,true,true)
  lightbulbs.push(bioluzBR20)
  energeticSmarterLightingA19 = Lightbulb.new(1.12, 5, 450, "https://tinyurl.com/yzykyva2", 15000, "A", 19, "E26", 5000,true,false)
  lightbulbs.push(energeticSmarterLightingA19)
  sylvaniaLEDFlood = Lightbulb.new(3.90, 5, 325, "https://tinyurl.com/mbpsm3s6", 11000, "R", 20, "E26", 2700,true,true)
  lightbulbs.push(sylvaniaLEDFlood)
  return lightbulbs
end

def findAlternatives(current)

 #  wattage = document.getElementById('WattageForm').value
 #  puts wattage

 #  luminage = document.getElementById('LuminageForm').value
 #  puts luminage

 #  cost = document.getElementById('CostForm').value
 #  puts cost

 #  lifespan = document.getElementById('LifespanForm').value
 #  puts lifespan

 #  frosted = document.querySelector('#frosted').value
 #  if frosted == "frosted"
 #   frosted = true
 #  else 
 #   frosted = false
 # end

 #  puts frosted

#   shape = document.querySelector('#shape').value
#   puts shape

#   size = document.getElementById('SizeForm').value
#   puts size

#   base = document.querySelector('#base').value
#   puts base


#   warmth = document.querySelector('#warmth').value
#   puts warmth

# dimmable = document.querySelector('#dimmable').value
#   if dimmable == "dimmable"
#    dimmable = true
#   else 
#    dimmable = false
#  end

#   puts dimmable

  # current.setWatts(wattage)
  # current.setLumens(luminage)
  # current.setPrice(cost)
  # current.setLifespan(lifespan)
  # current.setFrosted(frosted)
  # current.setShape(shape)
  # current.setSize(size)
  # current.setBaseType(base)
  # current.setWarmth(warmth)
  # current.setDimmable(dimmable)

  minLumens = current.lumens * 0.7
  maxLumens = current.lumens * 1.3

  lightbulbs = inputLights()

  possibilities = []

  #create an array with all the possibilities of alternative
  for i in 0..lightbulbs.length-1
    #checks for +-2 size, +- 25% lumenage, same base type, same shape, +-300K warmth, same dimmability and frost
    if lightbulbs[i].shape == current.shape && 
        lightbulbs[i].lumens > minLumens && 
        lightbulbs[i].lumens < maxLumens && 
        (lightbulbs[i].size-current.size).abs <= 2 && 
        lightbulbs[i].baseType == current.baseType && 
        (lightbulbs[i].warmth-current.warmth).abs <= 300 && 
        lightbulbs[i].frosted == current.frosted && 
        lightbulbs[i].dimmable == current.dimmable
      possibilities.push(lightbulbs[i]) # narrows to possibilities based on above criteria
    else
      return [Lightbulb.new(3.4, 4, 350, "https://amzn.to/40EcgsV", 15000, "B", 10, "E12", 2700, false, true), Lightbulb.new(2.24, 6, 450, "https://amzn.to/3YH4Qn6",10000, "A", 19, "E26", 2700,true,true)]
    end
  end 
  
  #get all the differences in prices from their current lightbulb and the possibilities
  for i in 0..possibilities.length-1
    possibilities[i].differential = (current.ppth - possibilities[i].ppth)
  end

  return possibilities
end