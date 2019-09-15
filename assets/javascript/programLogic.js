// Connecting the firebase with this config
const db = firebase.firestore();
const $trainList = $('#trainList');
const $addTrain = $('#addTrain')

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

$('#addTrainSubmit').on('click', function (event) {
    event.preventDefault();
    db.collection('trains').add(
        {
            name: $('#trainName').val(),
            destination: $('#destination').val(),
            firstTrain: $('#firstTrain').val(),
            frequency: $('#frequency').val()
        }
    );

    $('#trainName').val('');
    $('#destination').val('');
    $('#firstTrain').val('');
    $('#frequency').val('');
});
