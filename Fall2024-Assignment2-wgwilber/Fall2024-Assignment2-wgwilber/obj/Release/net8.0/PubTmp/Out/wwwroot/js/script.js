let jasperState = 1;

function apiSearch() {
    var params = {
        'q': $('#query').val(),
        'count': 50,
        'offset': 0,
        'mkt': 'en-us'
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        type: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': '98b5bd7df3904babb181bf3b7b41ee47'
        }
    })
        .done(function (data) {
            var len = data.webPages.value.length;
            var results = '';
            for (i = 0; i < len; i++) {
                results += `<p><a href="${data.webPages.value[i].url}">${data.webPages.value[i].name}</a>: ${data.webPages.value[i].snippet}</p>`;
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert('error');
        });
}


function showTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours().toString().padStart(2, '0');
    let minute = currentTime.getMinutes().toString().padStart(2, '0');
    let timeString = hour + ":" + minute;
    document.getElementById("Time").innerHTML = timeString;
    document.getElementById("Time").style.display = "block";
    $("#Time").dialog();
}


function swapJasper() {
    if (jasperState == 5) {
        jasperState = 1;
    }

    else{
        jasperState++;
    }

    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url("media/jasper'+jasperState+'.jpeg")';
}

document.getElementById("SearchButton").onclick = apiSearch;
document.getElementById("TimeButton").onclick = showTime;
document.getElementById("Title").onclick = swapJasper;

