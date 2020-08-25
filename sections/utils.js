/* HELPER FUNCTIONS*/

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

    return array;
}

/* reputation sampler*/
function sampleReputation(type){
    if(type == 'low'){
        return Math.round(Math.random()*range*2 - range + reputation_level_means[0]);
    } else if(type == 'mod'){
        return Math.round(Math.random()*range*2 - range + reputation_level_means[1]);
    } else if (type == 'high') {
        return Math.round(Math.random()*range*2 - range + reputation_level_means[2])
    }
};