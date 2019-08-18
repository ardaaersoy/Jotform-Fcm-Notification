importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

// Initialize Firebase app in the service worker
firebase.initializeApp({
    'messagingSenderId': '542566846482'
});

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);

    // Customize notification
    const notificationTitle = 'JotForm Notifier';
    const notificationOptions = {
        body: 'You have a new form submission.',
        icon: 'jotform-icon.png',
        actions: [
            { "action": "no", "title": "Look at" }
        ],
        sound: "default"
    };

    // Show notification
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

// Notification Click Event
self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    event.waitUntil(
        clients.openWindow('https://www.jotform.com/submissions/91633295969978')
    );
});