
 const active = {
    display: 'block'
}

const hidden = {
    display: 'none'
}




var panelControl = {
    panelIndex: 0,
    nextPanel : function (){

    },
    prevPanel : function () {

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
            console.log('x: ' + x);
            panels[x].style.display = 'none';
            navs[x].style = hidden
        }

        panels[this.panelIndex].style.display = 'block';
        navs[this.panelIndex].stlye = active;

    }
}

panelControl.slidePanel(0);