// const batteryLevel = document.querySelector(".battery-level");
    // const hold = document.querySelector(".hold")


    let batry = document.querySelector('.level')
    let perc = document.querySelector('.hold')
    let charg_i = document.querySelector('.charge-status')

    navigator.getBattery().then( (battery)=>{
        let lvl = battery.level;
        let lvlPerc = lvl * 100;
        let curLvl = `${lvl * 100}%`
        function makeBattery() {
            setInterval(()=>{
                batry.style.cssText = `width: ${curLvl}`;
                perc.innerHTML = curLvl;
            },10)
        }
        makeBattery()

        if (lvlPerc > 10) {
            batry.classList.add('healthy');
        } else {
            batry.classList.remove('healthy');
        }

        battery.addEventListener('chargingchange', ()=>{
           if (battery.charging == true) {
                batry.classList.add('charging');
                charg_i.classList.add('active');
                
            } else {
                batry.classList.remove('charging')
                charg_i.classList.remove('active')
                
           }
        })

    })