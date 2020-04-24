$( document ).ready(function() {
 
    $( "#barchart" ).css({
        "margin": "auto",
        "background-color": "#c5cdd9",
        'width': '1000',
        'height': '1000',
        'border-style': 'solid'
    })
 

$.drawBarChart = function (data, element) {

let biggestNum = Math.max.apply(Math, data)
let yAxisCeiling = 100
let yAxisMid = 50
let barPositioning = 100




let chartSpace = $('<div>').appendTo(element);
let chart= $('<div>').appendTo(chartSpace);
let upperTitle = $('<p>').appendTo(chart);
let lowerTitle = $('<p>').appendTo(chart);
let sideTitle = $('<p>').appendTo(chart);
let interval1 = $('<p>').appendTo(chart);
let interval2 = $('<p>').appendTo(chart);
let interval3 = $('<p>').appendTo(chart);
let barYPosition = 5
let barYInterval = 30

for (let i = 0; i < data.length; i = i + 2) {
    $('<div class=bars id=' + String(i) + '>').appendTo(chart).css ({
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




upperTitle.text("Chocolate Bars Eaten During Compass Prep");
lowerTitle.text("Brand")
sideTitle.text("Amount") 
interval1.text("0")
interval2.text(String(yAxisCeiling))
interval3.text(String(yAxisCeiling))

chartSpace.css ({
    "position": "relative",
    "margin": "10%",
    "background-color": "#FFFFFF",
    'width': '80%',
    'height': '80%',
    'border-style': 'solid',
});

chart.css ({
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

upperTitle.css ({
    "position": "relative",
    "top": "-15%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
    "text-align": "center"
})

lowerTitle.css ({
    "position": "relative",
    "top": "105%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
})

sideTitle.css ({
    "position": "relative",
    "top": "40%",
    "right": "65%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
    "transform": "rotate(-90deg)",
})


interval1.css ({
    "position": "relative",
    "top": "80%",
    "right": "55%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
})

interval2.css ({
    "position": "relative",
    "top": "25%",
    "right": "55%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
})

interval3.css ({
    "position": "relative",
    "top": "-30%",
    "right": "55%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
})

barLabel.css ({
   
})




}


$.drawBarChart([20,'Hershey', 50,'KitKat', 70, 'M&Ms'],"#barchart")

})
