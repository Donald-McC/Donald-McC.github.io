
const active = {
    display: 'block'
}

const inactive = {
    display: 'none'
}




var panelControl = {
    panelIndex: 0,
    nextPanel : function (){

    },
    prevPanel : function () {

    },
    setup : function () {
        let buttons = document.getElementsByClassName('navButton');
        for(let x = 0; x < buttons.length; x++){
            buttons[x].addEventListener("click", panelControl(x), false);
        }
    },
    slidePanel : function (input) {
        this.panelIndex = input;

        console.log('sliding over panel; input: ' + input);
        let panels = document.getElementsByClassName('panel');
        let navs = document.getElementsByClassName('navButton');
        
        //These don't apply until we add arrows later --------
        if(input > panels.length){
            this.panelIndex = 0;
        }
        if(input < 0){
            this.panelIndex = panels.length - 1;
        }
        //  --------------------------------------------------

        for(let x = 0; x < panels.length; x++){
            panels[x].style.display = 'none';
            navs[x].style = inactive;
            navs[x].className = navs[x].className.replace(' active', '');
        }

        panels[this.panelIndex].style.display = 'block';
        navs[this.panelIndex].stlye = active;
        navs[this.panelIndex].className += ' active';

    }
}


console.log("TESTING IF SCRIPT RUNS!!!!!!!!!!");
panelControl.setup();
panelControl.slidePanel(0);


var i = 0;
var txt = 'Donny!';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();