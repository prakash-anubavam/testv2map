var MapModule = require('ti.map');

var win = Ti.UI.createWindow({fullscreen: false});
var anno = MapModule.createAnnotation({latitude: -33.87365, image: 'map_pin.png', longitude: 151.20689, title: "Sydney", subtitle: "Sydney is quite chill", draggable: true});
var anno2 = MapModule.createAnnotation({latitude: -33.86365, pincolor: MapModule.ANNOTATION_BLUE, longitude: 151.21689, title: "Anno2", subtitle: "This is anno2", draggable: true});
var anno3 = MapModule.createAnnotation({latitude: -33.85365, longitude: 151.20689, title: "Anno3", subtitle: "This is anno3", draggable: false});
var anno4 = MapModule.createAnnotation({latitude: -33.86365, longitude: 151.22689, title: "Anno4", subtitle: "This is anno4", draggable: true});

anno.addEventListener('click',function(e){

    alert(JSON.stringify(e));

});

Ti.API.info ("Latitude:" + anno.latitude);
Ti.API.info ("Title:" + anno.title);
//create scrollview Container
var scrollViewContainer = Ti.UI.createScrollView({
	top:0,
	backgroundColor:"#FFF",
	width:Ti.UI.FILL,
	height:Ti.UI.SIZE,
	layout:'vertical'
});
win.add(scrollViewContainer);
var container = Ti.UI.createView({
	layout:"vertical",
	height:Ti.UI.SIZE,
	backgroundColor:"#000",
});	
scrollViewContainer.add(container);

var topContainer = Ti.UI.createView({
	layout:"vertical",
	height:Ti.UI.SIZE,
	backgroundColor:"#FFF"
});	
container.add(topContainer);
var addrString =" m11 , mystreet, mycity, mycountry";
var myText = Ti.UI.createLabel({
	width:290,
	top:5,
	text:addrString,
	textAlign:"center",
	color: '#444',
	height:Ti.UI.SIZE,
	font:{fontSize:13,fontWeight: 'normal',fontFamily:'Helvetica Neue'}
});
topContainer.add(myText);
var divider1 = Ti.UI.createView({
	top:5,
	height : 1,
	backgroundColor: '#000',
	left : 0,
	right: 0
});
topContainer.add(divider1);
var mainMapview = Ti.UI.createView({
	top : 0,
	width : Ti.UI.FILL,
	height : 200
});	
topContainer.add(mainMapview);
var map = MapModule.createView({
    userLocation: true,
    mapType: MapModule.NORMAL_TYPE,
    animate: true,
    annotations: [anno, anno2, anno4],
    region: {latitude: -33.87365, longitude: 151.20689, latitudeDelta: 0.1, longitudeDelta: 0.1 }, //Sydney
    top: '30%'
});
Ti.API.info("userLocation: " + map.userLocation);
mainMapview.add(map);

map.addEventListener('click', function(e) {
    Ti.API.info("Latitude: " + e.latitude);
    Ti.API.info("Source: " + e.clicksource);
});
var myText1 = Ti.UI.createLabel({
	width:290,
	top:5,
	text:addrString,
	textAlign:"center",
	color: '#444',
	height:500,
	font:{fontSize:13,fontWeight: 'normal',fontFamily:'Helvetica Neue'}
});
topContainer.add(myText1);
var divider2 = Ti.UI.createView({
	top:5,
	height : 1,
	backgroundColor: '#000',
	left : 0,
	right: 0
});
topContainer.add(divider2);
var myText2 = Ti.UI.createLabel({
	width:290,
	top:5,
	text:addrString,
	textAlign:"center",
	color: '#444',
	height:500,
	font:{fontSize:13,fontWeight: 'normal',fontFamily:'Helvetica Neue'}
});
topContainer.add(myText2);

win.open();
