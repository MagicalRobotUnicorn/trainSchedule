// Connecting the firebase with this config
const db = firebase.firestore();
const $trainList = $('#trainList');

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

db.collection('trains').get().then((snapshot) => {
    snapshot.docs.forEach((doc) => {

        var $newRow = $('<tr>');
        var $trainName = $('<td>').append(doc.data().name);
        var $destination = $('<td>').append(doc.data().destination);
        var $frequency = $('<td>').append(doc.data().frequency);

        // Moment time stamp now
        var currentTime = moment().format("HHmm");

        // Moment time stamp at first train
        var firstTrain = moment(doc.data().firstTrain, "HHmm");

        var nextTrain = firstTrain;

        // Function that adds interval until is it larger than now
        while (nextTrain.format("HHmm") < currentTime) {
            nextTrain.add(doc.data().frequency, 'm');

            if (nextTrain.format("HH") == 00) {
                nextTrain = "----";
                break;
            }
        }

        // Function that extrapolates how much time is left until the next train
        if (nextTrain !== "----") {
            var duration = moment.duration(nextTrain.diff(moment()));
            var minUntil = (duration.asMinutes());
        } else {
            var duration = moment.duration(firstTrain.diff(moment()));
            var minUntil = (duration.asMinutes());
        }

        // Display only military time of next train
        if (nextTrain !== "----") {
            var displayNextTrain = nextTrain.format("HHmm");
        } else {
            var displayNextTrain = "----";
        }

        // Create jQuery object cells of remaining fields
        var $nextTrain = $('<td>').append(displayNextTrain);
        var $minUntil = $('<td>').append(parseInt(minUntil));



        // Individual cells
        $newRow.append($trainName);
        $newRow.append($destination);
        $newRow.append($frequency);
        $newRow.append($nextTrain);
        $newRow.append($minUntil);

        // Append row
        $trainList.append($newRow);

    })
});
// db.ref().on("child_added", function(snapshot){


// });