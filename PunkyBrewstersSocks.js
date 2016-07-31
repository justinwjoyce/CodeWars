// 7kyu

// Punky loves wearing different colored socks, but Henry can't stand it.

// Given an array of different colored socks, return a pair depending on who was picking them out.

// Example:

// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

// If there is no possible combination of socks, return an empty array.

function getSocks(name, socks) {
  if (name === 'Henry') {
    let sock = socks.filter(s => socks.filter(n => n == s).length > 1)[0];
    if (!sock) return [];
    return [sock, sock];
  }
  else if (name === 'Punky') {
    let sock = socks.filter(s => socks.filter(n => n == s).length == 1)[0];
    if (!sock) return [];
    return [sock, socks.filter(s => sock != s)[0]];
  }
}

// best practices

function getSocks(name, socks) {
  
  var a=[];
  
  var i=0;
  while (i< socks.length-1 && a.length == 0){
    for (var j=0; j<socks.length; j++){
      if (i!=j 
          && ((socks[i] == socks[j] && name == 'Henry')
          ||  (socks[i] != socks[j] && name == 'Punky'))){
          a.push(socks[i]);
          a.push(socks[j]);
          break;
      }
    }
    i++;
  }
  return a;
}