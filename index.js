var questions=[];

$.getJSON('https://spreadsheets.google.com/feeds/cells/1nimQ1WlKMMbDJorNsxPp3gpSP0-lc9iJ2O5qKXaRW1o/1/public/full?alt=json', function(data) {
 
  console.log(data.feed.entry);
  var reqdata=data.feed.entry;
  var k=reqdata.length;
  for(var i=7;i<k;i+=7){
	  console.log(i);
	var time=reqdata[i+0].gs$cell.$t;
	
	var name=reqdata[i+1].gs$cell.$t
	
	var questionname=reqdata[i+2].gs$cell.$t
	
	var description=reqdata[i+3].gs$cell.$t
	
	var difficulty=reqdata[i+4].gs$cell.$t
	
	var sollang=reqdata[i+5].gs$cell.$t
	
	var solution=reqdata[i+6].gs$cell.$t
	
	var show=document.getElementById("display");
	console.log(time);
	console.log(name);
	console.log(questionname);
	console.log(description);
	console.log(difficulty);
	console.log(sollang);
	console.log(solution);
    questions.push({time,name,questionname,description,difficulty,sollang,solution});
	

  }
});