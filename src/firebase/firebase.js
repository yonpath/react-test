import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key,  snapshot.val())
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key,  snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key,  snapshot.val())
// })

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses)
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// // })

// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 109500,
// //   createdAt: 123809
// // });



// // database.ref('notes/L2_BEcUIIb3FkL6v41p').update({
// //   body: "Buy food"
// // })

// // database.ref('notes').push({
// //   title: 'Course topicsss',
// //   body: 'GO aaa a run'
// // });

// // const firebaseNotes = {
// //   notes: {
// //     asdfasdf: {
// //       title: 'First note!',
// //       body: 'This is my note'
// //     },
// //     asdfsadff: {
// //       title: 'Another note!',
// //       body: 'This is my note'
// //     }
// //   }
// // }

// // database.ref('notes').set(notes);
// // database.ref()

// // database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.company}`);
// // })

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //   console.log(snapshot.val());
// // }, (e) => {
// //   console.log("error with data fetching: ", e)
// // });

// // setTimeout(() => {
// //   database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off();
// // }, 7000);

// // setTimeout(() => {
// //   database.ref('age').set(30);
// // }, 10500);

// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((e) => {
// //     console.log('error', e);
// //   })

// // database.ref().set({
// //   name: 'Andrew Mead',
// //   age: 26,
// //   stressLevel: 5,
// //   job: {
// //     title: 'Software devleoer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: 'Philadelphia',
// //     country: 'United States'
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed. ', e)
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "amazon",
// //   "location/city": "Seattle"
// // });

// // database.ref().set('This is my data');

// // database.ref('age').set(27);
// // database.ref('location/city').set('New York');

// // database.ref('attributes').set({
// //   height: 73,
// //   weight: 150
// // });

// // console.log('I made a request to change the data.')

// // database.ref('attributes').set({
// //   height: 73,
// //   weight: 150
// // }).then(() => {
// //   console.log('second')
// // }).catch((e) => {
// //   console.log('This didn(t for the second error')
// // });

// // database.ref('isSingle').remove()
// //   .then(() => {
// //     console.log('Data was removed');
// //   }).catch((e) => {
// //     console.log(e)
// //   })