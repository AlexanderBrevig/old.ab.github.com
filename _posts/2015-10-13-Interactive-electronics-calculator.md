---
layout: post
title: "Interactive electronics calculator!"
tagline: "A simple javascript project"
description: "Step in to see the easy EE calculator"
category: projects
tags: [electronics, guitar, diy, calculator, javascript]
---
{% include JB/setup %}

# Try it out why don't you!?

<input id="input" 
	style="margin:1em; padding:1em; display: block; width:100%;" 
	value="( 10k + 1k2 ) * 10n" />

<div id="answer" 
	style="margin:1em; padding:1em; display: block; width:100%; font-family: monospace"></div>

<div id="tips"
	style="color: #333; margin:1em; padding:1em; display: block; width:100%; font-family: monospace">
    Currently we support the following SI prefixes (though as suffixes):
    <ul>
      	<li>Tera T = 1000000000000,</li>
  		<li>Giga G = 1000000000</li>
  		<li>Mega M = 1000000</li>
  		<li>Kilo k = 1000</li>
  		<li>Hecto h = 100</li>
  		<li>Deca da = 10</li>
  		<li>Deci d = 0.1</li>
  		<li>Centi c = 0.01</li>
  		<li>Milli m = 0.001</li>
  		<li>Micro u = 0.000001</li>
  		<li>Nano n = 0.000000001</li>
  		<li>Pico p = 0.000000000001</li>
    </ul>
</div>

<script src="https://code.jquery.com/jquery-3.0.0-alpha1.js"></script>
<script>
var iso = {
  "T":1000000000000,
  "G":1000000000,
  "M":1000000,
  "k":1000,
  "h":100,
  "da":10,
  "d":0.1,
  "c":0.01,
  "u":0.000001, //important to be before m
  "m":0.001,
  "n":0.000000001,
  "p":0.000000000001
};

function freqRC(r, c) {
  return 1 / (2 * Math.PI * r * c);
}

function freqLC(l, c) {
  return 1 / (2 * Math.PI * Math.sqrt(l * c));
}

function impedanceLC(l, c){
  return  Math.sqrt(l / c);
}

$(function(){
  $("#input").keyup(function(){
	  var input = $("#input").val();
	  var words = input.split(" ");
	  function change(word){
	    for (var prop in iso) {
	      if (iso.hasOwnProperty(prop)) {
	        var parts = word.split(prop);
	        if (parts.length > 1){
	          word = parts[0] * iso[prop];
	          if (parts[1] !== undefined){
	            word += (parts[1] * iso[prop])/10;
	          }
	          return word;
	        }
	      }
	    }
	    return word;
	  }
	  var algo = "";
	  words.map(function(i){
	    algo += (change(i));
	  });
	  $("#answer").html(""); 
	  $("#answer").append(algo);
	  $("#answer").append("<br/> ="); 
  	  $("#answer").append("<span>" + eval(algo) + "</span>");
	  $("#answer span").css("font-size", "2em");
  });
  $("#input").keyup();
});
</script>