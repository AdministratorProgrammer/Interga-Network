// Init TWA
Telegram.WebApp.ready();

// Event occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
Telegram.WebApp.onEvent('themeChanged', function() {
    document.documentElement.className = Telegram.WebApp.colorScheme;
});

function testFunc() {
	showPopup();
}

function showPopup() {
    Telegram.WebApp.showPopup({
        title: 'Hi!',
        message: 'It will be soon=)',
        buttons: [
            {id: 'link', type: 'default', text: 'Open Project Site'},
            {type: 'cancel'},
        ]
    }, function(btn) {
        if (btn === 'link') {
            Telegram.WebApp.openLink('https://administratorprogrammer.github.io/Interga-Network/');
        }
    });
};