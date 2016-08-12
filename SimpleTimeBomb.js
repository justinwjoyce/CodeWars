// 5kyu

// A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global property that holds the key to which wire to cut. Find that and then you can CutTheWire(wireKey);

CutTheWire(this[Object.keys(this).slice(-1)]);

// best practices solution

var wire = Object.keys(this).pop()
CutTheWire(this[wire]);