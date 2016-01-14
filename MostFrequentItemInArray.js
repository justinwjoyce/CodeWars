// 7kyu
// Write a program to find count of the most frequent item of an array.

// Assume that input is array of integers.

var numbers = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3];

function mostFrequentItemCount(collection) {
  if(collection.length == 0)
    	return 0;
    var modeMap = {};
    var maxEl = collection[0], maxCount = 1;
    for(var i = 0; i < collection.length; i++)
    {
    	var el = collection[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;	
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return modeMap[maxEl];
}
mostFrequentItemCount(numbers);

//better solution
function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;
  
  var count = Object.create(null);
  
  collection.forEach( item => {
    count[item] = (count[item] || 0) + 1;
  });
  
  return Math.max(...Object.values(count));
}