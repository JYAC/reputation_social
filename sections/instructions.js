/* IMAGES */
image_array = ['img/instr1.jpeg', 'img/instr2.jpeg', 'img/instr3.jpeg',
                'img/instr4.jpeg', 'img/instr5.jpeg','img/instr6.jpeg','img/instr7.jpeg',
                'img/money1.jpeg', 'img/money2.jpeg', 'img/money3.jpeg',
                'img/money4.jpeg', 'img/money5.jpeg', 'img/money6.jpeg', 'img/money7.jpeg']

/* INSTRUCTIONS */

var instru1 = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages:[
    '<p>Thank you for your participation. This study is about the relationship between people’s personalities and the decisions they make. You will first play an economic game with someone you don\'t know. Afterwards, you will complete a brief questionnaire on a separate webpage.</p><p>Please read the instructions carefully. Also please maximize your browser and avoid using the back button.</p>']
}

var instru2 = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages:[
    '<p>You will play a game with someone you don’t know. In this game, there are two players:  \‘Player 1\’ and  \‘Player 2.\’ You will be either Player 1 or Player 2.</p> <p>At the beginning of the trial, Player 1 will be given $10 and will decide how much of this money to transfer to Player 2. If Player 1 chooses to transfer money to Player 2, the amount will be quadrupled. Afterwards, Player 2 will decide how much of the money to return to Player 1. Player 1 will then receive the amount of money Player 2 returns. This is the end of the trial.</p>',
    '<p>In this case, Player 1 has $10. Player 1 has to decide how many dollars to transfer to Player 2.</p>'+
    '<img src=\'img/money1.jpeg\'>',
    '<p>In this case, Player 1 decides to transfer $5 to Player 2, keeping $5.</p>'+
    '<img src=\'img/money2.jpeg\'>',
    '<p>The transferred money is quadrupled, so Player 2 receives $20 (4 x $5).</p>'+
    '<img src=\'img/money3.jpeg\'>',
    '<p>Now Player 2 has to decide how much of the $20 to give back to Player 1. In this case, Player 2 returns $10 (50%) to Player 1.</p>'+
    '<img src=\'img/money4.jpeg\'>',
    '<p>As a result, Player 1 ends up having $15, and Player 2 ends up having $10. This is the end of one trial.</p>'+
    '<img src=\'img/money5.jpeg\'>',
    '<p>Of course, Player 2 may choose not to return any money (0%) to Player 1. In this case, Player 2 will end up having $20, and Player 1 will end up having $5.</p>'+
    '<img src=\'img/money6.jpeg\'>',
    '<p>Similarly, Player 1 may choose not to transfer any money to Player 2, keeping all of the money. In this case, Player 1 will end up with $10, and Player 2 will end up with nothing.</p>'+
    '<img src=\'img/money7.jpeg\'>',
//    '<p>You will play this game with real money, but as an example, we will use tokens. In this case, Player 1 has 4 tokens.</p> <img src=\'img/instr1.jpeg\'>',
//    '<p>Player 1 has to decide how many tokens to transfer to Player 2. In this case, Player 1 decides to transfer 2 tokens, keeping the other 2 tokens.</p> <img src=\'img/instr2.jpeg\'>',
//    '<p>The transferred tokens are quadrupled, so Player 2 receives 8 tokens (4 x 2 tokens).</p>' +
//    '<img src=\'img/instr3.jpeg\'>',
//    '<p>Now Player 2 has to decide whether to return 50% or 0% of the 8 tokens received back to Player 1. In this case, Player 2 returns 4 tokens (50%) to Player 1.</p><img src=\'img/instr4.jpeg\'>',
//    '<p>As a result, Player 1 ends up having 6 tokens, and Player 2 ends up having 4 tokens. This is the end of one trial.</p>'+
//    '<img src=\'img/instr5.jpeg\'>',
//    '<p>Of course, Player 2 may choose not to return any tokens (0%) to Player 1. In this case, Player 2 will end up having 8 tokens, and Player 1 will end up having 2 tokens.</p>'+
//    '<img src=\'img/instr6.jpeg\'>',
//    '<p>Similarly, Player 1 may choose NOT to transfer any tokens to Player 2, keeping all of the tokens. In this case, Player 1 will end up with 4 tokens, and Player 2 will end up with nothing.</p>'+
 //   '<img src=\'img/instr7.jpeg\'>',
//    '<p>Even though we used tokens in the example, you will play with real money. In each trial, Player 1 will receive $6. Player 1 will play the same game with 72 different Player 2s. Player 2 will play the same game with 72 different Player 1s.</p>' +
//    '<p>In most of the game trials, you will play with another person, but in two of the game trials, you will play with the computer. In the trials with the computer, if you are Player 1, the computer will play as Player 2, and will randomly choose how much to return to you. If you are Player 2, the computer will play as Player 1, and will randomly choose how much to transfer to you. </p>' +
//    '<p>Lastly, there will be 2 lottery game trials. You will receive $6 in these trials. You will have an opportunity to choose if you want to keep the $6, or if you want to enter a lottery in which you have a 50% chance of winning $6 more, but a 50% chance of losing $5.</p>' +
//    '<p>Thus the total number of trials you will play is 72. At the end of the study, we will randomly choose one of these 72 different trials, and give you and your counterpart the amount you ended up with in that trial. Thus your total gain will be the $9 gift card plus the amount of money you earned on this randomly selected trial. We will let you know how much you will get at the end of the study.</p>' +
    '<p>Before you are randomly assigned to either Player 1 or Player 2, you and the other players will choose avatar identities, which you will see during each trial. </p>']
}

var select_avatar = {
    type: 'survey-multi-choice',
    button_label: button_str,
    preamble: "Please choose one of the 12 pictures below to be your avatar. Choose the one you most identify with. After you choose your avatar, the computer will randomly assign you to be either Player 1 or Player 2.",
    questions: [{
        prompt: '<img src=\'img/Avatar.png\' style=\'width:715px; height:250px;\'>',
        options: ['1-a', '1-b', '1-c', '2-a', '2-b', '2-c', '3-a', '3-b', '3-c', '4-a', '4-b', '4-c'],
        horizontal: true,
        required: true}]
};


var instru3 = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages:[
    '<p style="color: red"><b>You have been assigned to Player 1.</b></p>'+
    '<p>You will play this game 72 times with different players. We will let you know when you are halfway through. <u>On each trial, you will see Player 2’s avatar and the percentage of people who rated this person as trustworthy. These trustworthiness ratings come from participants in previous studies who interacted with these players on a variety of collaborative tasks.</u></p>'+
    '<p>First, you will decide how much you want to transfer in all 72 trials. Then the other players will receive the amount of money you transferred, and will decide how much to return to you. While you are waiting for the other players\' decisions, you will complete other parts of the study.</p>'+
    '<p>At the end of the study, we will randomly choose one of these 72 different trials, and give you and the other player the amount you ended up with on that trial. Thus your total gain will be the $12 gift card plus the amount of money you earned on this randomly selected trial. Do not let your decision in one trial influence your decision in the other trials.</p>'+
    '<p>Now let’s start the game. Click on the next button when you are ready to continue.</p>']
};

var resize = {
    type: 'survey-multi-choice',
    button_label: button_str,
    preamble: "Please resize your internet browser so that \$0 and \$10 are on the same line. Click the button when you are ready to start the first trial.",
    questions: [{
        prompt: '',
        options: ['\$0' ,'\$1', '\$2', '\$3', '\$4', '\$5', '\$6', '\$7', '\$8', '\$9', '\$10'],
        horizontal: true,
        required: false}]
};

var half = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages: [
        '<p>You have completed half of the trials. Please click the arrow to continue.'
    ]
}

var instru4 = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages: [
    '<p>The other players received your offers. While you are waiting for their responses, we will show you some of the faces of the people with whom you played. Please rate each face along various characteristics on the following scale.</p>' +
    '<img src=\'img/scale.jpg\' style=\'width:688px; height:129px;\'>']
}

var instru5 = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages: [
    '<p>You have finished the first portion of the study. Please click on the link below and complete the questionnaire. You may close both tabs after you complete the questionnaire.</p> <p><b><a href="https://stanforduniversity.qualtrics.com/jfe/form/SV_4JDWmATTd7dQVgh">https://stanforduniversity.qualtrics.com/jfe/form/SV_4JDWmATTd7dQVgh</a></b></p>']
}
