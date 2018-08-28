import React from 'react';
import { withRouter } from 'react-router-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      publicVapidKey: "BOOXPGBUF0FmG1lWmpmMqlndyVmZCddh1L6cMleka_Otbltch0agVQgD8j0w6BRQ9ktFI9lpM5K4DRpHuPfABp0"
    };
    this.handleClick = this.handleClick.bind(this);
    this.run = this.run.bind(this);
  }

  componentDidMount() {
    this.registerServiceWorker();
  }

  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      this.serviceWorker = navigator.serviceWorker.register('../js/sw.js');
    } else {
      console.log("Push notifications are not supported in this browser");
    }
  }

  run() {
    this.serviceWorker
      .then(reg => {
        reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: this.urlBase64ToUint8Array(this.state.publicVapidKey)
        })
        .catch(console.log)
        .then(subscription => {
          fetch(`${location.origin}/api/push/subscribe`, {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
              "content-type": "application/json"
            }
          })
          .catch(console.log);
        })
        .catch(console.log);
      })
      .catch(console.log);
  }

  handleClick() {
    if ('serviceWorker' in navigator) {
      this.run();
    } else {
      console.log("Push notifications are not supported in this browser");
    }
  }

  //https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
  urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  render() {
    return (
      <div>
        <button id="notify-btn" onClick={this.handleClick}>Notify</button>
      </div>
    )
  }
}

export default withRouter(Test);