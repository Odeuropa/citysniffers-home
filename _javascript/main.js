import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHNjBw0fScKnnl4JjdVRJSvf6MVuiYw9E",
  authDomain: "citysniffers-ef03f.firebaseapp.com",
  projectId: "citysniffers-ef03f",
  storageBucket: "citysniffers-ef03f.appspot.com",
  messagingSenderId: "67733560146",
  appId: "1:67733560146:web:1ad61892e02df86644b88b",
  measurementId: "G-ZV7EJY0B56"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.querySelectorAll(".store-link").forEach(el => {
  el.addEventListener('click', (event) => {
    const store = el.getAttribute('data-store');
    logEvent(analytics, 'click_store', {
      store_name: store,
    });
  });
})