self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: "Hello watchie user!"
  });
});

self.addEventListener('notificationclose', e => {
  console.log("notificationclose fired");
});

self.addEventListener('notificationclick', e => {
  console.log("notificationclick fired");
});