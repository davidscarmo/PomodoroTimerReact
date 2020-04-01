import React, {useState} from 'react';
import './styles.css'; 

export default function PomodoroTimer()
{
    const [minutes, setMinutes] = useState('25');
    const [seconds, setseconds] = useState('00');
    let secondsDate = 60;
    let minutesDate = 24;

    function startPomodoro()
    {
        
        const Timer = setInterval(function() {
            
            if(secondsDate <= 60 && secondsDate > 0)
            {
                secondsDate--;
            }
            else
            {
                secondsDate= 59; 
                minutesDate--;
            }
              
            if (minutesDate < 0) {
              setMinutes('00'); 
              setseconds('00');
              clearInterval(Timer);
              alert('O tempo terminou, faça uma pausa!');  
            }
            
            if(minutesDate >=0){
                setMinutes(minutesDate); 
                setseconds(secondsDate);
            }
            
          }, 1000)
          ;
        }
        function refreshPage() {
            window.location.reload(false);
          }
    
    return (
        <div>
            <div>
                <p id="demo"> 
                    <input value={minutes}/>:<input value={seconds}/>
                </p>
                <button onClick={startPomodoro}>Start</button>
                <button onClick={refreshPage}> Refresh</button>
            </div>
        </div>
    );
}