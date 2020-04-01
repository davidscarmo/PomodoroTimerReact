let secondsDate = 50;
    let minutesDate = 24;
    var countDownDate = new Date("Jan 1, 2021 00:25:00").getTime();
        const Timer = setInterval(start, 1000);
        
        function start() {

            if(secondsDate <= 9)
            {
                var now = new Date(`Jan 1, 2021 00:${minutesDate}:0${secondsDate}`).getTime();
                secondsDate++;
            }
            else if(secondsDate > 9  && secondsDate < 59){
                var now = new Date(`Jan 1, 2021 00:${minutesDate}:${secondsDate}`).getTime();
                secondsDate++;
            }
            else
            {   
                var now = new Date(`Jan 1, 2021 00:${minutesDate}:${secondsDate}`).getTime();
                secondsDate = 0;
                if(minutesDate < 25)
                    minutesDate++;
            }
              
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
              
            // Time calculations minutes and seconds
            var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var sec = Math.floor((distance % (1000 * 60)) / 1000);
            
            setMinutes(min); 
            setseconds(sec);
              
            // If the count down is over, write some text 
            if (distance < 0) {
              setMinutes('00'); 
              setseconds('00');
              clearInterval(Timer);
              alert('O tempo terminou, faça uma pausa!');
              
            }   
        }
          
        function stop()
        {
            clearInterval(Timer);
        }