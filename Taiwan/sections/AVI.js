/* AVI */
AA = "Over the course of <u>a typical week</u>, I <u>actually</u> feel "
IA = "Over the course of <u>a typical week</u>, I <u>ideally</u> like to feel "
AVI_items = ['Enthusiastic', 'Astonished', 'Nervous', 'Dull', 'Quiet', 'Relaxed', 'Excited', 'Surprised', 'Elated', 'Sleepy']
AVI_scale = ["1: Never", "2: A small amount of the time", "3: Half the time", "4: Most of the Time", "5: All the time"]
function getAVIQ(pre, items, scale){
    var questions = []
    for(var i = 0; i < items.length; i++){
        questions.push({prompt: items[i].toLowerCase(), labels: scale, required:true});
    }
    return questions;
};

var actual_affect = {
    type: 'survey-likert',
    preamble: "Listed below are a number of words that describe feelings. Some of the feelings are very similar to each other, whereas others are very different from each other. Read each word and then rate how often you <u>actually have</u> that feeling over the course of <u>a typical week</u>.",
    questions: getAVIQ(AA, AVI_items, AVI_scale)
};

var ideal_affect = {
    type: 'survey-likert',
    preamble: "Listed below are a number of words that describe feelings. Some of the feelings are very similar to each other, whereas others are very different from each other. Read each word and then rate how often you <u>ideally like to have</u> that feeling over the course of <u>a typical week</u>.",
    questions: getAVIQ(IA, AVI_items, AVI_scale)
};