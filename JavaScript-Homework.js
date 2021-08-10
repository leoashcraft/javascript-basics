//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

newstring = dog_string.toLowerCase();
newnames = dog_names.map(n => n.toLowerCase());


function findWords(dstring,dnames){
    //Your code goes here
    for (let n of newnames){
        if (newstring.search(n) > -1){


            /*//////////////////////////////////////////////////////////////////////
            I obviously don't know or understand any of this part but it bothered me
            not having the dog's name titlecase and it's way easier to do in Python!
            I did manage the rest on my own except for this partial Stack Overflow!
            //////////////////////////////////////////////////////////////////////*/
        
            function toTitleCase(n) {
                return n.replace(
                  /\w\S*/g,
                  function(txt) {
                    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                  }
                );
              }
            /*////////////////////////////////////////////////////////////////////*/
            /*////////////////////////////////////////////////////////////////////*/
            /*////////////////////////////////////////////////////////////////////*/


            console.log("Matched " + toTitleCase(n));
        }else{
            console.log("No Matches");
        }
    }
}

//Call method here with parameters
findWords(dog_string,dog_names);

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(names){
    //code goes here
    for (let i = 0; i < names.length; i++){
        if (i % 2 == 0){
            names.splice(i,1,'even index');
        }
    }
    console.log(names);
}

replaceEvens(arr);
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
