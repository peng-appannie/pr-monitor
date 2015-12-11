'use strict';


(function($){

    var merge_message = function (){
        var $container = $('#js-repo-pjax-container');
        var field = $container.find('#merge_message_field');
        var orig_content = field.text();

        var new_content = `[MERGE]    : ${ orig_content }
[MONITOR]: N/A
[IMPACT]   : N/A
`;


        chrome.runtime.sendMessage({from: 'content', subject: 'localStorage'}, function(response){
            if (!response) { return; }

            var localStorage = response.localStorage;

            if(localStorage && !localStorage.pr_monitor_content){
                localStorage.pr_monitor_content = new_content;
            }
            field.val(localStorage.pr_monitor_content);
        });
    };
    merge_message();
    setInterval(merge_message, 1000);
})(jQuery);
