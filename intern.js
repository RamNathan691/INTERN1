let data = {
    name: "Vishal",
    class: "IT-D",
    marks:
    [
    {
        subject: "OOAD",
        mark: "80",
        grade: "A"
    },
    {
    subject: "AI",
    mark: "90",
    grade: "S"
    }
]
}
document.getElementById('name').innerHTML=data.name;
document.getElementById('class').innerHTML=data.class;

let table=document.createElement('table');
let mark=data.marks;
let len=mark.length;
var row1=table.insertRow();
for(var i=0;i<3;i++)
{
    var  th =document.createElement('th');
    if(i==0)
        th.innerHTML='<th>Subject</th>';
    if(i==1)
        th.innerHTML='<th>Marks</th>';
    if(i==2)
        th.innerHTML='<th>Grade</th>';
    row1.appendChild(th);
}
for(var i=0;i<len;i++){
    var row=table.insertRow();
    for(j in mark[i]){
        var cell=row.insertCell();
        cell.innerText =mark[i][j];
    }
}
document.body.appendChild(table);
