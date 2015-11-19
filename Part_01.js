/*
	HELPERS WEB SITES
	https://regex101.com/
 */
 
 // String Chunks

function stringChunk(str, n) {
	if (n <= 0)
	{
		return [];
	}
	else
	{
		if (n > str.lenght)
		{
			return [str];
		}
		else
		{
			result = [];
		/*
			words = str.split(" ");

			for (var i=0; i<words.length; i++)
			{
				var word = words[i];

				console.log(word);

				if (n > word.lenght)
				{
					result.push(word);
				}
				else
				{
					regexp = new RegExp('.{1,' + n + '}', 'g');
					subres = word.match(regexp);
					result = result.concat(subres);
				}
			}
		*/
			regexp = new RegExp('.{1,' + n + '}', 'g');
			result = str.match(regexp);
			if (result == null)
			{
				result = [];
			}

			return result;
		}
	}
}

stringChunk('codewars code', 2);

// Regex validate PIN code

function validatePIN (pin) {
	return (pin.match(/^(\d{6}|\d{4})$/gim) == null) ? false : true;
}

// You're a square!

var isSquare = function(n){
	if (n>=0)
	{
		var sqrt = Math.sqrt(n);
		return sqrt == Math.floor(sqrt);
	}
	else
	{
		return false;
	}
}
