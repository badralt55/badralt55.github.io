    var min = 0
    var sec =0
    var doli = 0
    var paused = true // true uyd pausel
    var x
    var count = 0
    var lapNumber = 1
    var lapButton = document.querySelectorAll("button")[2]
    
    //start towchluur daragdahad ajillana
    function start() {
        
        if (paused) {
            x = setInterval(myFunction,10);
            document.getElementById("change").innerHTML = "Stop"
            lapButton.disabled = false
        }
        else{
            clearInterval(x)//intervalaar toolohiig arilgana
            document.getElementById("change").innerHTML = "Start"
            lapButton.disabled = true
        }
        paused = !paused //paused esreg utgiig paused ruu hiisen
        

    }
    
    //10ml sec tutamd ajillana
    function myFunction() {
        document.getElementById("disp").innerHTML = ('00' + min).slice(-2) + ":" + ('00' + sec).slice(-2) + ":" + ('00' + doli).slice(-2)
        doli++
        if (doli == 100) {
            doli = 0
            sec++
        }
        if (sec == 60) {
            sec = 0
            min++
        }
        if (min == 1440) {
            min = 0
            sec = 0
            doli = 0

        }
    }
    //setInterval(myFunction,10)

    //lap darahad ajillana
    function lap() {
        
        let container = document.createElement('div');
        container.setAttribute("style", "display: flex; flex-direction: row;");
        var element = document.createElement("div")
        var lapNo = document.createElement("div")
        lapNo.innerHTML = lapNumber
        
        element.innerHTML = document.getElementById("disp").innerHTML
        container.append(lapNo, element);
        document.getElementsByClassName("down")[0].append(container);
        lapNumber++
        
        element.style.backgroundColor = "white"
        element.style.height = "20px"
        element.style.width="498px"
        element.style.border = "1px solid green"
        
        
    }
    // reset towchluur daragdahad ajillana
    function reset() {
        min = 0
        sec = 0 
        doli = 0
        
        document.getElementById("disp").innerHTML = "00:00:00"
        document.getElementById("change").innerHTML = "Start"
        var y = document.getElementsByClassName("down")[0]
        y.innerHTML = ""
        clearInterval(x)
        count = 0
        lapNumber = 1
    }
    
