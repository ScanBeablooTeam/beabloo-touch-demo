import { useEffect, useState } from 'react';
import './Timeout.styles.scss';

export const Timeout = ({ allowedInterval, onTimeout }) => {

  const [timeUntilTimeout, setTimeUntilTimeout] = useState(allowedInterval / 1000);

  const handleTimeout = () => {
    onTimeout();
  }

  useEffect(() => {
    if (!onTimeout) {
      return;
    }

    let timeAtRedirect = Date.now() + allowedInterval;
    const updateLastInteraction = () => {
      timeAtRedirect = Date.now() + allowedInterval;
    }

    // apply window event to the application
    document.addEventListener('touchstart', updateLastInteraction, false);
    // mouse events
    document.addEventListener('mousedown', updateLastInteraction, false); 
    // keyboard events 
    document.addEventListener('keypress', updateLastInteraction, false); 
    document.addEventListener('keydown', updateLastInteraction, false); 
    document.addEventListener('keyup', updateLastInteraction, false);

    const checkIfShouldRedirect = () => {
      let currentTime = Date.now();

      setTimeUntilTimeout(state => {
        let time = Math.floor((timeAtRedirect - currentTime) / 1000);
        if (time < 0) {
          time = 0;
        }
        return time;
      })

      if (currentTime > timeAtRedirect) {
        handleTimeout();
      }
    }

    setInterval(checkIfShouldRedirect, 1000);

  }, [ ])

  return (
    <div className='timeout'
      data-testid='timeout'
    >
      <p data-testid='timeout-text' >timeout in { timeUntilTimeout }s</p>
    </div>
  )
}
