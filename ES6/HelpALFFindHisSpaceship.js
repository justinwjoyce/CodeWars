// 7kyu

// Late last night in the Tanner household, ALF was repairing his spaceship so he might get back to Melmac. Unfortunately for him, he forgot to put on the parking brake, and the spaceship took off during repair. Now it's hovering in space.

// ALF has the technology to bring the spaceship home if he can lock on to it's location.

// Given a map:

// ..........
// ..........
// ..........
// .......X..
// ..........
// ..........
// The map will be given in the form of a string with \n separating new lines. The bottom left of the map is [0, 0]. X is ALF's spaceship.

// In this expample:

// findSpaceship(map) => [7, 2]
// If you cannot find the spaceship, the result should be

// "Spaceship lost forever."


function findSpaceship(map) {
  if (!map || map.indexOf('X') === -1) return `Spaceship lost forever.`;
  
  let spaceShip;
  
  let lines = map.split('\n');
  lines.forEach((l, li) => (i = l.indexOf('X')) != -1 ? (spaceShip = [i, lines.length-1-li]) : 0);
  
  return spaceShip;
}