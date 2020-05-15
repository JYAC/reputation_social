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
    '<p>感謝你的參與。這個研究是有關於人們的性格和他們做的決定之間的關係。您會跟一些不認識的人玩一系列的經濟遊戲。之後，你會在另一個網頁上完成一份簡短的問卷。</p><p>請你仔細閱讀一切的說明。另外，請把網頁調到最大的設定（它應該佔用你整個屏幕），並且避免按返回鍵。</p>']
}

var instru2 = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages:[
    '<p>你將會和你不認識的人玩一個遊戲。這個遊戲會有兩個玩家：「玩家1」和「玩家2」。你將會被分配為玩家1或玩家2。</p><p>在每一局的開始，玩家1將被給予300新台幣，並且被要求決定轉多少錢給玩家2。如果玩家1選擇轉移錢給玩家2，轉移的數量會翻四倍。之後，玩家2會決定給玩家1退還多少金錢。玩家1將會收到玩家2送回的錢。每一局會如此結束。</p>',
    '<p>例如，玩家1有300新台幣。玩家1將要決定轉移多少元給玩家2。</p>'+
    '<img src=\'img/money1.jpeg\'>',
    '<p>在這個局面中，玩家1決定轉移150新台幣給玩家2，給自己留150新台幣。</p>'+
    '<img src=\'img/money2.jpeg\'>',
    '<p>轉移的錢將被翻四倍，所以玩家二會收到600新台幣（4 x 150新台幣）。</p>'+
    '<img src=\'img/money3.jpeg\'>',
    '<p>現在玩家2要決定把600新台幣的其中的多少錢還給玩家1。在這個局面中，玩家2選擇還300新台幣（50%）給玩家1。</p>'+
    '<img src=\'img/money4.jpeg\'>',
    '<p>因此，玩家1最終有450新台幣，玩家2 最終有300新台幣。這一局到此結束。</p>'+
    '<img src=\'img/money5.jpeg\'>',
    '<p>當然，玩家2 可以選擇不把任何錢（0%）還給玩家1。在這個情況下，玩家2最終會有600新台幣，玩家1最終會有150新台幣。</p>'+
    '<img src=\'img/money6.jpeg\'>',
    '<p>玩家1也可以選擇不轉移任何錢給玩家2，自己保存所有的錢。在這個情況下，玩家1最終會有300新台幣，玩家2什麼都沒有。</p>'+
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
    '<p>在遊戲開始之前，你和其他玩家會選擇頭像，你們將會在每局中看到彼此的頭像。</p>']
}

var select_avatar = {
    type: 'survey-multi-choice',
    button_label: button_str,
    preamble: "請從下面12張圖片中選擇一個作爲你的頭像。請選擇最代表你的那個。在你選擇你的頭像之後，電腦將會隨機把你分配爲玩家1或玩家2。",
    questions: [{
        prompt: '<img src=\'img/Avatar.png\' style=\'width:715px; height:250px;\'>',
        options: ['1a', '1b', '1c', '2a', '2b', '2c', '3a', '3b', '3c', '4a', '4b', '4c'],
        horizontal: true,
        required: true}]
};


var instru3a = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages:[
    '<p style="color: red"><b>你被分配爲玩家1。</b></p>'+
    '<p>在每一局中，您會看到玩家2的頭像，並選擇您想給他轉發多少錢。玩家2會收到您轉發的錢，再選擇還給您多少錢。當您等待玩家2的決定的同時，您將繼續完成研究的其他部分。</p>'+
    '<p>在此之前，您會跟12位不同的玩家進行遊戲以便練習。</p>'+
    '<p>當你準備好，請按箭頭前進。</p>']
};

var instru3b = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages:[
    '<p>您完成了12局遊戲練習。</p>'+
    '<p>您現在會跟72位不同的玩家玩這個遊戲。我們會定期地顯示您在遊戲中的進展。<u>在看到玩家2的頭像之外，您也會看到一個百分比數字，代表多少人認為他是值得信赖的。這些信任指數來自之前的研究參與者。他們跟玩家2在一系列項目上合作過。</u></p>'+
    '<p>Just like the您之前所練習的12局遊戲一樣，您會選擇給玩家2轉發的金額。然後，玩家2會收到您轉發的錢，將決定把其中多少還給您。當您等待對方的決定時，您將繼續完成研究的其他部分。</p>'+
    '<p>在實驗的最後，我們會隨機抽選72局的其中一局，給你和玩家2你們在那局最終擁有的錢。你總共的收益從而是132元的禮物卡加上那隨機抽取的一局的錢。請不要讓自己在任何一局作出的決定影響你在其他的局做出的決定。</p>'+
    '<p>遊戲現在開始。當你準備好，請按箭頭前進。</p>']
};

var resize = {
    type: 'survey-multi-choice',
    button_label: button_str,
    preamble: '<p>請調整你的網頁大小，以便NT$0與NT$300顯示在同一行。</p>' +
    '<p>當你準備好開始遊戲的第一局，請點擊按鍵。</p>',
    questions: [{
        prompt: '',
        options: ['\$0' ,'\$30', '\$60', '\$90', '\$120', '\$150', '\$180', '\$210', '\$240', '\$270', '\$300'],
        horizontal: true,
        required: false}]
};

var onefourth = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages: [
        '<p style=font-size:22px>您已完成1/4局的遊戲。請按下面的箭頭繼續。'
    ]
}

var half = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages: [
        '<p style=font-size:22px>你已完成了一半的遊戲局。請按下面的箭頭繼續。'
    ]
}

var threefourths = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages: [
        '<p style=font-size:22px>您已完成3/4局的遊戲。請按下面的箭頭繼續。'
    ]
}

var instru4 = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: true,
    allow_backward: false,
    pages: [
    '<p>其他的玩家們收到了你轉移的錢。當你在等待他們的回應時，我們會再呈現一些他們的頭像，請評價每一個頭像的不同特質。</p>' +
    '<img src=\'img/scale.jpg\' style=\'width:688px; height:129px;\'>']
}

var instru5 = {
    type: 'instructions',
    allow_keys: false,
    show_clickable_nav: false,
    allow_backward: false,
    pages: [
    '<p>你已完成了實驗的第一部分。請點擊以下的網絡連結，完成問卷。在這個問卷中，我們會顯示一些跟您互動過的玩家，並讓您對他們的一些性格特點評分。完成問卷之後，你可以把兩個網頁都關掉。</p> <p><b><a href="https://stanforduniversity.qualtrics.com/jfe/form/SV_5tO8DW4nWx5bGPb">https://stanforduniversity.qualtrics.com/jfe/form/SV_5tO8DW4nWx5bGPb</a></b></p>']
}
