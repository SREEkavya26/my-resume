// function loadjson(file,callback)
// {
// 	var xhr = new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange = function()
// 	{
// 		if(xhr.readyState === 4 && xhr.status == "200")
// 			{
// 				callback(xhr.responseText);
// 			}
// 	};		
// xhr.send(null);
// }
// loadjson("data.json",function(text)
// {
// 	var data = JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinf(data.careerinfo);
// 	qual(data.ed);
// 	skillset(data.technicalskills);
// 	ach(data.achievements);

// })
function loadjson(file){
	return new Promise((resolve,reject)=>{
	return fetch(file).then(response=>{
		if(response.ok){
			resolve(response.json());
		}
		else{
			reject(new Error("error"));
		}
	}) 	
	})
}
var newfile = loadjson("data.json");
newfile.then(data=>
	{
		console.log(data);
 	basics(data.details);
 	careerinf(data.careerinfo);
 	qual(data.ed);
 	skillset(data.technicalskills);
 	ach(data.achievements);
})



var left = document.querySelector(".left")
function basics(det)
{
	var img=document.createElement("img");
	img.src = det.image;
	left.appendChild(img);
	var name1 = document.createElement("h2")
	name1.textContent = det.name;
	left.appendChild(name1)
	var pno=document.createElement("h5");
	pno.textContent = det.phno;
	left.appendChild(pno);
	var email=document.createElement("a");
	email.href = "mailto:kavyarajputh@gmal.com";
	email.textContent = det.email;
	left.appendChild(email);
	var add = document.createElement("h2");
	add.textContent = "Address";
	left.appendChild(add);
	var hrline = document.createElement("hr");
	left.appendChild(hrline);
	var add=document.createElement("h5");
	add.textContent  = det.address;
	left.appendChild(add);
}
var right = document.querySelector(".right")
function careerinf(info){
	var add1 = document.createElement("h2");
	add1.textContent = "career info:";
	right.appendChild(add1);
	var hrline = document.createElement("hr");
	right.appendChild(hrline);
	var inf = document.createElement("h5");
	inf.textContent = info.information;
	right.appendChild(inf);
	
	}
function qual(q)
{
	var add1 = document.createElement("h2");
	add1.textContent = "educational qualification:";
	right.appendChild(add1);

	var hrline = document.createElement("hr");
	right.appendChild(hrline);
	
	var table = document.createElement("table");
	table.border="2";
	right.appendChild(table);

	tabledata="";
	for(i=0;i<q.length;i++)
	{
	tabledata+="<tr><td>"+q[i].qualification+"</td><td>"+q[i].institute+"</td><td>"+q[i].year+"</td><td>"+q[i].percentage+"</td></tr>";
	}
	table.innerHTML=tabledata;
}	
function skillset(ss)
{
	var add1 = document.createElement("h2");
	add1.textContent = "Technical skills:";
	right.appendChild(add1);
		var hrline = document.createElement("hr");
	right.appendChild(hrline);
	for(i=0;i<ss.length;i++)
	{
		var s= document.createElement("h3");
		s.textContent = ss[i].title;
		right.appendChild(s);

	var ul=document.createElement("ul");
	var li=document.createElement("li");
	li.textContent = ss[i].info;
	ul.appendChild(li);
	right.appendChild(ul);
}	
}
function ach(ac)
{
	var a1 = document.createElement("h2");
	a1.textContent = "achievements:";
	right.appendChild(a1);

	var hrline = document.createElement("hr");
	right.appendChild(hrline);
	for(i=0;i<ac.length;i++)
	{
		
		var ul=document.createElement("ul");
	var li=document.createElement("li");
	li.textContent = ac[i].info;
	ul.appendChild(li);
	right.appendChild(ul);

}
}
function openpage(){
	window.open("project.html","_self,true");
}	