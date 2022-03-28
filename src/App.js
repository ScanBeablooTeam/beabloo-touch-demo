import { useState } from 'react';
import { Button, Timeout } from './components';
import './App.styles.scss';

const App = () => {

  const [lastButtonPressed, setLastButtonPressed] = useState(null);

  const buttonsToDisplay = [
    {
      id: 'button-1',
      label: 'a',
      color: '#1CAED6'
    },
    {
      id: 'button-2',
      label: 'b',
      color: '#B415D6'
    },
    {
      id: 'button-3',
      label: 'c',
      color: '#D67415'
    },
    {
      id: 'button-4',
      label: 'd',
      color: '#7FD60B'
    }
  ]

  const handleButtonPress = label => {
    setLastButtonPressed(state => {
      return label;
    })
  }

  const findBackgroundColor = label => {
    return buttonsToDisplay.find(button => button.label === label).color;
  }

  const handleTimeout = () => {
    let localdeviceDomain = "localdevice.beabloo.com";

    function getExtension(domainStr) {
      var extension = ".com";
      var res = /^(https?:\/\/)?(([^.]+[.])?[^.]+([.][A-Za-z0-9]+))(:[0-9]+)?/g.exec(domainStr);
      if (res != null) {  // lol stupid beabloo
        extension = res[4];
      }
      return extension;
    }

    if (getExtension(window.location.host) === ".cn") {
      localdeviceDomain = "localdevice.beabloo.cn";
    }

    function resumeScheduling() {
      let xhttp = new XMLHttpRequest();
      xhttp.open("GET", "http://" + localdeviceDomain + ":8081/ResumeScheduling", true);
      xhttp.send();
  
    }

    resumeScheduling();
  }

  return (
    <div className='app'>

      <div className='button-grid'>
        { buttonsToDisplay.map(button => {
          return (
            <Button 
              key={button.id} 
              {...button} 
              onClick={handleButtonPress}
            />
          )
        }) }
      </div>

      <div className='last-pressed'>
        { !lastButtonPressed &&
          <p>no button pressed yet</p>
        }

        { lastButtonPressed &&
          <p
            style={{
              background: `${findBackgroundColor(lastButtonPressed)}`,
              color: '#fff'
            }}
          >
            { `button ${lastButtonPressed} was pressed` }
          </p>
        }
      </div>

      <Timeout allowedInterval={10000} onTimeout={handleTimeout} />
    </div>
  )
}

export default App;
