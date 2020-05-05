/* param */
var button_str = '>>'

var fullscreen = false;

// prerep trials
var n_pre_trial = 12;
var pre_face_stimulus = prerep

// n_trail should be 72
var n_trial = 72;
var n_trait_rating = Math.round(n_trial / 2);
var face_duration = 4;
var reputation_duration = 4;

var race_choice = ['EA', 'AA'];
var gender_choice = ['W', 'M'];
var expression_choice = ['0', '1', '5']; // 0 = Neu, 1 = LAP, 5 = HAP
var reputation_choice = ['high', 'low']
var identity_choice = [1,2,3,4,5,6,7,8,9,10,11,12]

var reputation_level_means = [20, 80]
var range = 10

var money_option = ['\$0' ,'\$30', '\$60', '\$90', '\$120', '\$150', '\$180', '\$210', '\$240', '\$270', '\$300'];
var slider_prompt = "爲了向左移動，請按Q。爲了向右移動，請按P。爲了確定你的選擇，請按空格鍵。";

var face_stimulus = faces

/* MAIN TASK */

function showFace(face){
    var face = {
        type: "html-keyboard-response",
        stimulus: "<img src=\'img/faces/"+face['image']+"\'>",
	prompt: "<h2 style=\"text-align: center;\"><span style=\"color:black;\">.</span></h2><div style=\"height:190px; color:white;\"></div>",
        choices: [],
        trial_duration: face_duration * 1000
    };
    return face;
};

function showReputation(face){
    var reputation = {
        type: "html-keyboard-response",
        stimulus: "<img src=\'img/faces/"+face['image']+"\'>",
        prompt: "<h2 style=\"text-align: center;\">" + face['exact value'] + "%的時候，這個人回傳了一半所收到的錢。</h2><div style=\"height:190px; color:white\"></div>",
        choices: [],
        trial_duration: reputation_duration * 1000
    };
    return reputation;
};

/*function showReputation(reputation){
    var reputation = {
        type: "html-keyboard-response",
        stimulus: "<h2 style=\"text-align: center;\">" + reputation + "% of times they gave back half of what they received.</h2>",
        choices: [],
        trial_duration: reputation_duration * 1000
    };
    return reputation;
};*/

function showTrialQ(face){
    image_array.push("img/faces/"+face['image']);
    var q = {
        type: 'survey-multi-choice',
        button_label: button_str,
        preamble: "<img src=\'img/faces/"+face['image']+"\'> <h2 style=\"text-align: center;\">" + face['exact value'] + "%的時候，這個人回傳了一半所收到的錢。</h2>",
        questions: [{
            prompt: "<h2 style=\"text-align: center;\">你想給這個玩家多少錢?</h2>",
            options: money_option,
            horizontal: true,
            required: true}],
        data: {
            reputation: face['reputation'],
            exact_value: face['exact value'],
            emotion: face['emotion'],
            race: face['race'],
            sex: face['sex'],
            identity: face['identity']
        }
    };
    return q;
}

function getTrial(face){
    var trial = [showFace(face),
    showReputation(face),
    showTrialQ(face)];
    return trial;
};

// prerep trials
function getPreTrial(face){
    var trial = [showFace(face),
    showTrialQ(face)];
    return trial;
};

var num_dots = [1,2,3,1,2,3,1,2,3,1,2]
var wait_duration = 500

function wait(ndots, duration, message){
    function getWait(ndots, duration, message){
        var q = {
            type: 'html-keyboard-response',
            stimulus: '<h4>' + message + '.'.repeat(ndots) + '</h4>',
            choices: [],
            trial_duration: duration,
        };
        return q;
    }
    var q_block = []
    for(i in ndots){
        q_block.push(getWait(num_dots[i], wait_duration, message));
    }
    return q_block;
}

/* Trait Ratings */
function showTraitQ(face){
    var q = {
        type: 'survey-multi-select',
        button_label: button_str,
        preamble: "<img src=\'img/faces/"+face['image']+"\'> <h3 style=\"text-align: center;\">" + face['exact value'] + "% of times they gave back half of what they received.</h3>",
        questions: [{
                prompt: "<h3 style=\"text-align: center;\">To what extent is this player <u>benevolent</u>?</h3>",
                options: ["1: Not at all", "2", "3", "4: Moderately", "5", "6", "7: Extremely"],
                horizontal: true},
//                required: true},
            {
                prompt: "<h3 style=\"text-align: center;\">To what extent is this player <u>competent</u>?</h3>",
                options: ["1: Not at all", "2", "3", "4: Moderately", "5", "6", "7: Extremely"],
                horizontal: true},
//                required: true},
            {
                prompt: "<h3 style=\"text-align: center;\">To what extent is this player <u>trustworthy</u>?</h3>",
                options: ["1: Not at all", "2", "3", "4: Moderately", "5", "6", "7: Extremely"],
                horizontal: true},
//                required: true},
            {   
                prompt: "<h3 style=\"text-align: center;\">To what extent is this player <u>financially needy</u>?</h3>",
                options: ["1: Not at all", "2", "3", "4: Moderately", "5", "6", "7: Extremely"],
                horizontal: true},
//                required: true},
            {   
                prompt: "<h3 style=\"text-align: center;\">To what extent is this player <u>dominant</u>?</h3>",
                options: ["1: Not at all", "2", "3", "4: Moderately", "5", "6", "7: Extremely"],
                horizontal: true},
//                required: true},
            {
                prompt: "<h3 style=\"text-align: center;\">To what extent is this player <u>friendly</u>?</h3>",
                options: ["1: Not at all", "2", "3", "4: Moderately", "5", "6", "7: Extremely"],
                horizontal: true}],
//                required: true}]  ,
        data: {
            reputation: face['reputation'],
            exact_value: face['exact value'],
            emotion: face['emotion'],
            race: face['race'],
            sex: face['sex'],
            identity: face['identity']
        }
    };
    return q;
};
