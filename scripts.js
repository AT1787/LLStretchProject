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
if (biggestNum > 100) {
    yAxisCeiling = (biggestNum + 100) 
    yAxisMid = yAxisCeiling * 0.5
} else {
    barPositioning = barPositioning - data
}

data.forEach(function (element, i, array) {
   

})

let chartSpace = $('<div>').appendTo(element);
let chart= $('<div>').appendTo(chartSpace);
let bars = $('<div>').appendTo(chart);
let upperTitle = $('<p>').appendTo(chart);
let lowerTitle = $('<p>').appendTo(chart);
let sideTitle = $('<p>').appendTo(chart);
let interval1 = $('<p>').appendTo(chart);
let interval2 = $('<p>').appendTo(chart);
let interval3 = $('<p>').appendTo(chart);
let barLabel = $('<p>').appendTo(bars);

upperTitle.text("Chocolate Bars Eaten During Compass Prep");
lowerTitle.text("Brand")
sideTitle.text("Amount") 
interval1.text("0")
interval2.text(yAxisMid.toFixed().toString())
interval3.text(yAxisCeiling.toString())
barLabel.text ("Hershey")

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

bars.css ({
    "position": "absolute",
    "left": "5%",
    "top": barPositioning.toString() + '%',
    "width": "15%",
    "height": data[0].toString() + '%',
    "background-color": '#cc6699',
    "font-size": "15px",
    "color":"#FFFFFF",
    "font-family":  "Helvetica",
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
    "position": "relative",
    "top": "100%",
    "font-family":  "Helvetica",
    "color":"#000000",
    "font-size": "15px",
})

}


$.drawBarChart([30],"#barchart")

})



