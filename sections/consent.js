/* Consent Form */
var button_str = '>>'

consent = {
        type: 'survey-multi-choice',
        button_label: button_str,
        preamble: 
        "<p>你受邀參加一項研究，“決策的心理學”。你將會完成一個調查問卷，其中涉及到你在不同場合下做出的不同的決定，你對自己以及其他人的觀察和感覺，你的性格、想法、和情緒。</p>"+ 
        "<p>這個實驗不跟任何風險直接相連。我們並不能保證你能在其中得到任何好處。你選擇參與或不參與這項實驗將不會影響你的學習成績。</p>" +
        "<p>這項實驗將需要大概50分鐘的時間。請保證您在實驗過程中不會受到任何打擾。作為參加實驗的報酬，您會收到NT$150的禮物卡，再加上您在隨機抽選的一個遊戲中賺到的錢。</p>" +
        "<p>如果你讀完了這份同意書，決定參加實驗，請知道你的參與是自願的，你有權利撤回你的同意或者在任何時候停止實驗，你不會因此受到任何處罰或者失去其他的好處。你有權利拒絕回答某些問題。在研究所有出版或者書面記載數據中，你的個人隱私將會受到保護。你可以列印一份這個同意書作爲你自己的記錄。</p>" +
        "<p><b><u>聯絡資訊：</b></u></p>" +
        "<p>疑問, 顧慮, 或抱怨：如果您對本研究的過程，風險，以及利益存有任何疑問，顧慮，或不滿，您可以聯絡Dr. Jeanne L. Tsai Ph.D, 其電子郵件為jltsai@stanford.edu。</p>" +
        "<p><b><u>與研究團隊獨立的聯繫方式：</b></u></p>" +
        "<p>如果您不滿意此研究的進行方式，或您對參與該研究課題的權利存有任何的顧慮，不滿，或疑問，請聯絡史丹佛研究審查委員會 （IRB），並可通過以下方式與不屬於此研究團隊的知情人士溝通：電話（650）-723-2480 或者免費熱線1-866-6802906 。您也可寫信至Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306.University, Stanford, 94305-5401。</p>",
        questions: [{
            prompt: "",
            options: ['我同意參加以上形容的實驗。'],
            required: true}]  
    };
