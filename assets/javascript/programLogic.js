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

// trains = [ { name: 'Banshee Express',
//  a   destination: 'Candy Castle',
//     firstTrain: 730,
//     frequency: 15 },
//   { name: 'Trans-Centaur',
//     destination: 'Cupcake Commons',
//     firstTrain: 800,
//     frequency: 20 },
//   { name: 'Griffin Pacific',
//     destination: 'Gingerbread Plum Trees',
//     firstTrain: 815,
//     frequency: 30 },
//   { name: 'Great Eastern Hydra',
//     destination: 'Gumdrop Mountains',
//     firstTrain: 830,
//     frequency: 40 },
//   { name: 'Midland Phoenix',
//     destination: 'Licorice Castle',
//     firstTrain: 900,
//     frequency: 15 },
//   { name: 'Wendigo Branch Line',
//     destination: 'Lollipop Woods',
//     firstTrain: 930,
//     frequency: 20 },
//   { name: 'Werewolf Coast Line',
//     destination: 'Licorice Forest',
//     firstTrain: 1000,
//     frequency: 30 },
//   { name: 'Isle of Pixie Line',
//     destination: 'Cupcake Commons',
//     firstTrain: 1030,
//     frequency: 45 },
//   { name: 'Trans-Siberian Unicorn',
//     destination: 'Lollipop Palace',
//     firstTrain: 1100,
//     frequency: 60 } ];


// db.ref().push(trains);

db.ref().on("child_added", function(snapshot){
    

});