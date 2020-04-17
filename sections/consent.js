/* Consent Form */
var button_str = '>>'

consent = {
        type: 'survey-multi-choice',
        button_label: button_str,
        preamble: 
        "<p>You are invited to participate in a research study, \'Psychology of decision-making\'. You will complete questionnaires that will ask you about the decisions you make in various situations, your perception about yourself and others, your personality, your thoughts, and your emotions.</p>"+ 
        "<p>There are no direct risks associated with this study. We cannot and do not guarantee or promise that you will receive any benefits from this study. Your decision whether or not to participate in this study will not affect your grades in school.</p>" +
        "<p>Your participation in this experiment will take approximately 50 minutes. Please ensure you will be uninterrupted while you complete the study. You will receive a $12 gift card plus the amount of money you earn on a randomly selected game as compensation for your participation.</p>" +
        "<p>If you have read this form and have decided to participate in this project, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at any time without penalty or loss of benefits to which you are otherwise entitled.  You have the right to refuse to answer particular questions. Your individual privacy will be maintained in all published and written data resulting from the study.  You can also print a copy of this form for your own records.</p>",
        questions: [{
            prompt: "",
            options: ['I consent to participate in the study described above.'],
            required: true}]  
    };
