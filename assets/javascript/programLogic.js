// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCSzsy9BqSHSvhixvpjLvoWR3mRPUVTMUM",
    authDomain: "trainschedule-4f07a.firebaseapp.com",
    databaseURL: "https://trainschedule-4f07a.firebaseio.com",
    projectId: "trainschedule-4f07a",
    storageBucket: "trainschedule-4f07a.appspot.com",
    messagingSenderId: "454593065166",
    appId: "1:454593065166:web:6e47329e851309d8ad609f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Connecting the firebase with this config
var db = firebase.database();

// Document Header

// Container Header
// Current Train Schedule
// Train Name, Destination, Frequency (min), Next Arrival, Minutes Away

// Form Header
// Add Train
// Train Name
// Destination
// First Train Time (military time)
// Frequency (min)
