/* or this exercise, let's make sure that both of the arguments that are passed in satisfy the following criteria:

The length of the word parameter cannot be less than 2.

The length of the match parameter must be 1.

The type of both the word and the match parameters must be string.

You will use the code below to complete your task:
*/

/*function letterFinder(word, match) {
    for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            //if the current character at position i in the word is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}
*/


function letterFinder(word, match) {
    try {
        if(word.length < 2) {
            throw new ReferenceError('The lenght of the word cannot be less than 2');
    } else if (match.lenght !== 1) {
            throw new ReferenceError('The length of the match parameter must be 1');
    } else if (typeof word !== 'string' || typeof match !== 'string') { 
            throw new ReferenceError('The type of both the word and the match must be a string');
    } else {
            for(var i = 0; i < word.length; i++) {
                if(word[i] == match) {
                     //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
    } else {
            console.log('---No match found at', i)
                    }
                        }
                    } 
        } catch(err) {
            console.log(err)
        }
    
}       
