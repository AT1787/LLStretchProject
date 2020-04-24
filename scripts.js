$( document ).ready(function() {
 
    $( "#barchart" ).css({
        "margin": "auto",
        "background-color": "#c5cdd9",
        'width': '1000',
        'height': '1000',
        'border-style': 'solid'
    })
 

$.drawBarChart = function (data, element) {


$('<div id=chartSpace>').appendTo(element);
$('<div id=chart>').appendTo('#chartSpace');
$('<p class=titles id=mainTitle>').appendTo( '#chart');
$('<p class=titles id=xAxisTitle>').appendTo('#chart');
$('<p class=titles id=yAxisTitle>').appendTo('#chart');
$('<p class=yAxisTitle id=yAxis0>').appendTo('#chart');
$('<p class=yAxisTitle id=yAxisMid>').appendTo('#chart');
$('<p class=yAxisTitle id=yAxisMax>').appendTo('#chart');
let barYPosition = 5
let barYInterval = 30

for (let i = 0; i < data.length; i = i + 2) {
    $('<div class=bars id=' + String(i) + '>').appendTo('#chart').css ({
        "left": String(barYPosition) + '%',
        "height": String(data[i]) + '%',
        "top": String(100 - data[i]) + '%',
        "width": "15%",
    }).text(data[i])

    barYPosition = barYPosition + barYInterval

    $('<p>').appendTo('#'+ String(i)).css ({
        "position": "relative",
        "top": "100%",
        "font-family":  "Helvetica",
        "color":"#000000",
        "font-size": "15px",
    }).text(data[i+1])
}


$("#mainTitle").text("Chocolate Bars Eaten During Compass Prep");
$("#xAxisTitle").text("Brand")
$("#yAxisTitle").text("Amount") 
$("#yAxis0").text("0")
$("#yAxisMid").text("50")
$("#yAxisMax").text("100")

$('#chartSpace').css ({
    "position": "relative",
    "margin": "10%",
    "background-color": "#FFFFFF",
    'width': '80%',
    'height': '80%',
    'border-style': 'solid',
});

$ ( '#chart' ).css ({
    "position": "relative",
    "margin": "15%",
    "background-color": "#FFFFFFF",
    'width': '70%',
    'height': '70%',
    'border-bottom': '3px solid black',
    'border-left': '3px solid black',
    'text-align': 'center'
})

$( '.bars' ).css ({
    "position": "absolute",
    "background-color": '#cc6699',
    "font-size": "15px",
    "color":"#FFFFFF",
    "font-family":  "Helvetica",
    "width": "15%",
})

$('#mainTitle').css ({
    "position": "relative",
    "top": "-15%",
    "font-family":  "Helvetica",
    "font-size": "15px",
    "text-align": "center"
})

$('#xAxisTitle').css ({
    "position": "relative",
    "top": "105%",
    "font-family":  "Helvetica",
    "font-size": "15px",
})

$('#yAxisTitle').css ({
    "position": "relative",
    "top": "40%",
    "right": "65%",
    "font-family":  "Helvetica",
    "font-size": "15px",
    "transform": "rotate(-90deg)",
})


$( '#yAxis0').css ({
    "position": "relative",
    "top": "80%",
    "right": "55%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
})

$( '#yAxisMid' ).css ({
    "position": "relative",
    "top": "25%",
    "right": "55%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
})

$( '#yAxisMax' ).css ({
    "position": "relative",
    "top": "-30%",
    "right": "55%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
})
$( '.titles' ).css ({
    "color": '#000000'
})

}



$.drawBarChart([20,'Hershey', 50,'KitKat', 70, 'M&Ms'], "#barchart")

})