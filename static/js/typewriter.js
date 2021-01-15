const words = ["At the tech front of innovation", "get fully automated system", "Leverage on great Apis and systems developed by us"];
let i = 0;
let timer;
let initial_text = " ";

function typingEffect() {
    let word = words[i].split("");

    var loopTyping = function() {
        if (word.length > 0) {
            // $('.typewriter').text(word.shift());
            $('.wrap').text((index, initial_text) => {
                return initial_text + word.shift();
            });

        } else {
            deletingEffect();
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };

    loopTyping();

}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();

            $('.wrap').text(word.join(""));

        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(function() {
                typingEffect();
            }, 100);

            return false;
        }
        timer = setTimeout(loopDeleting, 50);

    }
    setTimeout(() => {
        loopDeleting();
    }, 1000);

}
typingEffect();