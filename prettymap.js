/* 
Code is released by Mohamed Elgharabawy
http://itscoding.com/
admin@itscoding.com
Please keep this comment and you are free to use the file in any project you like!
*/
$(document).ready(function() {
var latlng = new google.maps.LatLng(3.158578,101.711702);
var opt =
{ 
center:latlng,
zoom:15,
mapTypeId: google.maps.MapTypeId.ROADMAP,
navigationControl:true,
streetViewControl:false,
navigationControlOptions: {style:google.maps.NavigationControlStyle.DEFAULT},
mapTypeControl:true,
mapTypeControlOptions: {style:google.maps.MapTypeControlStyle.DEFAULT}
};
var map = new google.maps.Map(document.getElementById("mymap"),opt);
var marker= new google.maps.Marker({
position: new google.maps.LatLng(3.158578,101.711702),
clickable: true,
animation: google.maps.Animation.BOUNCE,
map: map,
icon: 'images/marker.png'
});
var styles = 
[
	{
	featureType:	"all",
	elementType:	"geometry",
	stylers: 
	[
	{hue:	"#AD5700"},
	{saturation:	100},
	{lightness: 20}
	]
	},
	{
	featureType:	"all",
	elementType:	"labels.text",
	stylers: 
	[
	{color:	"#4e4e4e"},
	{weight: "0.1"}
	]
	}
];
map.setOptions({styles: styles});
});