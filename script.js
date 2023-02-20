var id = 0;
function startLight() {

}


function plusSpeed(id) {
    id = parseInt(id)
    let numberid = id + "number"
    let curspeed = parseInt(document.getElementById(numberid).innerHTML)
    curspeed++;
    document.getElementById(numberid).innerHTML = curspeed + " kmph"

}


function minusSpeed(id) {
    id = parseInt(id)
    let numberid = id + "number"
    let curspeed = parseInt(document.getElementById(numberid).innerHTML)
    if (curspeed > 0) curspeed--;
    document.getElementById(numberid).innerHTML = curspeed + " kmph"

}


function stop(id) {
    id = parseInt(id)
    let startID = id + "start"
    let numberid = id + "number"
    let colorid = id + "color"
    let plusid = id + "plus"
    let minusid = id + "minus"
    document.getElementById(plusid).disabled = true
    document.getElementById(startID).disabled = false
    document.getElementById(minusid).disabled = true
    document.getElementById(colorid).style.backgroundColor = "red"
    document.getElementById(numberid).innerHTML = 0 + " kmph"
}
function start(id) {
    id = parseInt(id)
    let numberid = id + "number"
    let colorid = id + "color"
    let plusid = id + "plus"
    let minusid = id + "minus"
    let startID = id + "start"
    document.getElementById(plusid).disabled = false
    document.getElementById(startID).disabled = true
    document.getElementById(minusid).disabled = false
    document.getElementById(colorid).style.backgroundColor = "green"
    document.getElementById(numberid).innerHTML = 10 + " kmph"
}


function createNew() {
    id++
    let total = document.createElement('div');
    total.id = id + "total";
    let upper = document.createElement('div');
    upper.id = id + 'upper';
    let colorspeed = document.createElement('div');
    colorspeed.id = 'coloid+rspeed';
    let color = document.createElement('div');
    color.id = id + 'color';
    let speed = document.createElement('p');
    speed.id = id + 'speed';
    let number = document.createElement('span');
    number.id = id + 'number';
    let plusminus = document.createElement('div');
    plusminus.id = id + 'plusminus';
    let plus = document.createElement('button')
    plus.id = id + 'plus'
    let minus = document.createElement('button')
    minus.id = id + 'minus'
    let startstop = document.createElement('div')
    startstop.id = id + "startstop";
    let start = document.createElement('button')
    start.id = id + "start";
    let stop = document.createElement('button')
    stop.id = id + "stop";
    let bottom = document.createElement('div')
    bottom.id = id + "bottom"
    let add = document.createElement("button")
    add.id = id + 'add'
    total.appendChild(upper)
    total.classList.add('total')
    total.appendChild(bottom)
    bottom.classList.add('bottom')
    upper.appendChild(colorspeed)
    upper.classList.add('upper')
    upper.appendChild(plusminus)
    upper.appendChild(startstop)
    colorspeed.appendChild(color)
    colorspeed.appendChild(speed)
    speed.appendChild(number)
    plusminus.appendChild(plus)
    plusminus.appendChild(minus)
    startstop.appendChild(start)
    startstop.appendChild(stop);
    bottom.appendChild(add)
    colorspeed.classList.add('colorspeed')
    color.classList.add('color')
    speed.classList.add('speed')
    speed.appendChild(number)
    number.innerHTML = "10" + " kmph"
    plusminus.classList.add("plusminus")
    plus.classList.add("plus")
    plus.classList.add("button")
    minus.classList.add("button")
    start.classList.add("button")
    stop.classList.add("button")
    add.classList.add("button")
    plus.innerHTML = '+'
    minus.innerHTML = '-'
    start.innerHTML = 'Start'
    stop.innerHTML = "Stop"
    add.innerHTML = 'Add Car'
    startstop.classList.add('startstop')
    start.classList.add('start')
    stop.classList.add('stop')
    add.classList.add('add')
    minus.classList.add('minus')
    add.setAttribute("onclick", "createNew()")
    plus.disabled=true
    minus.disabled=true
    plus.setAttribute("onclick", "plusSpeed(id)");
    minus.setAttribute("onclick", "minusSpeed(id)");
    start.setAttribute("onclick", "start(id)")
    stop.setAttribute("onclick", "stop(id)")
    document.body.appendChild(total)
}
createNew()
