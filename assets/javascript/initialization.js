// Scripts that created trains

// function createTrain(name, destination, firstTrain, frequency){
//     var train = {}
//     train.name = name;
//     train.destination = destination;
//     train.firstTrain = firstTrain;
//     train.frequency = frequency;

//     return train;
// }

// var trains = [];

// trains.push(createTrain("Banshee Express", "Candy Castle", 0700, 15));

// trains.push(createTrain("Trans-Centaur", "Cupcake Commons", 0730, 20));
// trains.push(createTrain("Griffin Pacific", "Gingerbread Plum Trees", 0800, 30));
// trains.push(createTrain("Great Eastern Hydra", "Gumdrop Mountains", 0830, 40));
// trains.push(createTrain("Midland Phoenix", "Licorice Castle", 0900, 15));
// trains.push(createTrain("Wendigo Branch Line", "Lollipop Woods", 0930, 20));
// trains.push(createTrain("Werewolf Coast Line", "Licorice Forest", 1000, 30));
// trains.push(createTrain("Isle of Pixie Line", "Cupcake Commons", 1030, 45));
// trains.push(createTrain("Trans-Siberian Unicorn", "Lollipop Palace", 1100, 60));

// console.log(trains)


// Scripts that used trains to seed database on Firebase
trains = [
  {
      name: 'Griffin Pacific',
      destination: 'Gingerbread Plum Trees',
      firstTrain: 815,
      frequency: 30
  },
  {
      name: 'Great Eastern Hydra',
      destination: 'Gumdrop Mountains',
      firstTrain: 830,
      frequency: 40
  },
  {
      name: 'Midland Phoenix',
      destination: 'Licorice Castle',
      firstTrain: 900,
      frequency: 15
  },
  {
      name: 'Wendigo Branch Line',
      destination: 'Lollipop Woods',
      firstTrain: 930,
      frequency: 20
  },
  {
      name: 'Werewolf Coast Line',
      destination: 'Licorice Forest',
      firstTrain: 1000,
      frequency: 30
  },
  {
      name: 'Isle of Pixie Line',
      destination: 'Cupcake Commons',
      firstTrain: 1030,
      frequency: 45
  },
  {
      name: 'Trans-Siberian Unicorn',
      destination: 'Lollipop Palace',
      firstTrain: 1100,
      frequency: 60
  }];
  
  for (var i = 0; i < trains.length; i++){
      db.collection('trains').add(trains[i]);
  }