$( document ).ready(function() {
 
    $( "#barchart" ).css({
        "margin": "auto",
        "background-color": "#c5cdd9",
        'width': '1000',
        'height': '1000',
        'border-style': 'solid'
    })

$.drawBarChart = function (data, option, element) {

$('<div id=' + 'chartSpace' + '>').appendTo(element);
$('<div id=chart>').appendTo('#' + 'chartSpace');
$('<p class=titles id=mainTitle>').appendTo( '#chart');
$('<p class=titles id=xAxisTitle>').appendTo('#chart');
$('<p class=titles id=yAxisTitle>').appendTo('#chart');
$('<p class=yAxisNum id=yAxis0>').appendTo('#chart');
$('<p class=yAxisNum id=yAxisMid>').appendTo('#chart');
$('<p class=yAxisNum id=yAxisMax>').appendTo('#chart');
let barYPosition = 5


for (let i = 0; i < data.length; i = i + 2) {
    $('<div class=bars id=' + String(i) + '>').appendTo('#chart').css ({
        "left": String(barYPosition) + '%',
        "height": String(data[i]) + '%',
        "top": String(100 - data[i]) + '%',
        "width": "15%"
    }).text(data[i])

    barYPosition = barYPosition + option.barDynamics.additionalSpacing,

    $('<p>').appendTo('#'+ String(i)).css ({
        "position": "relative",
        "top": "100%",
        "color": option.colors.labels,
        "font": option.fonts.labels,
        "font-size": option.fonts.labelSize,
    }).text(data[i+1])
}

$("#mainTitle").text(option.titles.main);
$("#xAxisTitle").text(option.titles.xAxis)
$("#yAxisTitle").text(option.titles.yAxis) 
$("#yAxis0").text(option.titles.yInterval0)
$("#yAxisMid").text(option.titles.yIntervalMid)
$("#yAxisMax").text(option.titles.yIntervalMax)

$('#' + 'chartSpace').css ({
    "position": "relative",
    "margin": "10%",
    "background-color": "#FFFFFF",
    'width': '80%',
    'height': '80%',
    'border-style': 'solid',
});

$ ( '#' + 'chart' ).css ({
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
    "background-color": option.colors.bars,
    "font-size": "15px",
    "color":"#FFFFFF",
    "font-family":  "Helvetica",
    "width": "15%",
    "display": "none"
})

$('.bars').slideDown();

$('#mainTitle').css ({
    "position": "relative",
    "top": "-15%",
    "text-align": "center",
    "font-size": option.fonts.yAxisNumSize
})

$('#xAxisTitle').css ({
    "position": "relative",
    "top": "105%"
})

$('#yAxisTitle').css ({
    "position": "relative",
    "top": "40%",
    "right": "65%",
    "transform": "rotate(-90deg)",
})

$( '#yAxis0').css ({
    "position": "relative",
    "top": "80%",
    "right": "55%",
    
})

$( '#yAxisMid' ).css ({
    "position": "relative",
    "top": "25%",
    "right": "55%",
})

$( '#yAxisMax' ).css ({
    "position": "relative",
    "top": "-30%",
    "right": "55%",
})

$( '.titles' ).css ({
    "color": option.colors.titles,
    "font-family":  option.fonts.titles,
    "font-size": option.fonts.titleSize
})

$( '.yAxisNum' ).css ({
    'color': option.colors.yAxisNumbers,
    'font-family':  option.fonts.yAxisNumbers,
    "font-size": option.fonts.yAxisNumSize
})

};


let testOptions = {
    colors: {
        titles : '#000000', 
        yAxisNumbers: '#000000',
        bars: '#cc6699',
        labels: '#000000'
    },
    fonts: {
        titles: "Helvetica",
        titleSize: '15px',
        yAxisNumbers: "Helvetica",
        yAxisNumSize: '15px',
        labels: "Helvetica",
        labelSize: '15px'  
    },

    titles: {
        main: "Chocolate Bars Eaten During Compass Prep" ,
        xAxis: "Brand" ,
        yAxis: "Amount",
        yInterval0: "0",
        yIntervalMid: "50",
        yIntervalMax: "100"
    },

    barDynamics: {
        additionalSpacing: 30
    }
};


$.drawBarChart([20,'Hershey', 50,'KitKat', 70, 'Coffee Crisp'], testOptions, "#barchart");

})