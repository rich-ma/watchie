self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: `Hey ${data.fname}!`,
    actions: [
      {action: 'addLocation', title: 'Add location'},
      {action: 'close', title: 'Close'},
    ]
  });
});

self.addEventListener('notificationclose', e => {
  console.log("notificationclose fired");
});

self.addEventListener('notificationclick', e => {
  const notification = e.notification;
  const action = e.action;

  switch(action) {
    case 'addLocation':
      //send location to server
      break;
    case 'close':
    default:
      notification.close();
  }
  console.log("notificationclick fired");
});

self.addEventListener('pushsubscriptionchange', e => {
  //update subscription on server, but not sure how to get current user id
  // debugger
});

self.onabortpayment = e => {
  // debugger
};
self.onactivate = e => {
  console.log("service worker onactivate fired");
};
self.oncanmakepayment = e => {
  // debugger
};
self.onfetch = e => {
  // debugger
};
self.oninstall = e => {
  console.log("service worker oninstall fired")
};
self.onmessage = e => {
  console.log("service worker onmessage fired", e.data);
};
self.onpaymentrequest = e => {
  // debugger
};
self.onsync = e => {
  // debugger
};