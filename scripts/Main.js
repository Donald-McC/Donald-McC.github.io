
 active : {
    display: 'active'
}

hidden : {
    display: 'none'
}




var panelControl = {
    panelIndex: 0,
    nextPanel : function (){

    },
    prevPanel : function () {

    },
    slidePanel : function (input) {
        let panels = document.getElementsByClassName('panel');
        let navs = document.getElementsByClassName('navButton');

        if(input > panels.length){
            this.panelIndex = 0;
        }
        if(input < 0){
            this.panelIndex = panels.length - 1;
        }

        for(let x = 0; x < panels.length; x++){
            panels[x].style.display = 'none';
            navs[x].style = hidden
        }

        panels[this.panelIndex].style.display = 'block';
        navs[this.panelIndex].stlye = active;

    }
}

panelControl.slidePanel(0);