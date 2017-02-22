// written in plain JS:
// document.getElementById('circle').onclick = function() {
// 	alert("clicked!");
//	document.getElementsByTagName('p').innerHTML = "We've changed the text!";
// }
// written in jQuery:
$('#circle').click(function(){
	alert("Clicked!");
})

$('#circle').hover(function(){	
	$('#justtext').html("We've changed the text!");
	$('img').attr('src','sad.png');
}, function(){
	$('#justtext').html("This is a sentence.");
	$('img').attr('src','happy.jpeg');
})

$('.square').click(function(){
	$(this).css('background-color','blue');
})

$('.square').hover(function(){
	$(this).css('width','400px');	
}, function(){
	$(this).css('width','300px');
})

$('#toggling').click(function(){
	$('#circle').toggleClass('invisible');
});

$('#fader').click(function(){
	$('#fadesquare').fadeToggle(5000);
	$('#clicky').fadeTo(3000,0.4);
});

$('#slider').click(function(){
	$('#fadesquare').slideToggle(4000);
})

$(function(){
	$('#draggable').draggable();
})

$(function(){
	$('#resizable').resizable();
})

$(function() {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});














