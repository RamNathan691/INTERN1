const data = [{
  name: 'Vishal',
  age: 18,
  class: 'D'
},
{
  name: 'Raj',
  age: 19,
  class: 'C'
},
{
  name: 'Kumar',
  age: 20,
  class: 'D'
}]
const table = document.createElement('table')
var row1 = table.insertRow()
for (var i = 0; i < 3; i++) {
  var th = document.createElement('th')
    if (i == 0)
    {th.innerHTML='<th>NAME</th>';}
  if (i == 1)
    {th.innerHTML='<th>AGE</th>';}
  if (i == 2)
    {th.innerHTML='<th>CLASS</th>';}
  row1.appendChild(th)
}

data.map(function (item) {
    var row1 = table.insertRow()
    var td = document.createElement('td');
        td.innerHTML=`${item.name}`
        row1.appendChild(td)
        var td1 = document.createElement('td');
        td1.innerHTML=`${item.age}`
        row1.appendChild(td1)
        var td2 = document.createElement('td');
        td2.innerHTML=`${item.class}`
        row1.appendChild(td2)
                    
})
document.body.appendChild(table)
