// 1 Homework

const delay = ms => {
  const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
    resolve(ms)
  }, ms)
  })
  return promise;
}

delay(1000).then((ms) => {
  console.log(`timeout = ${ms} ms`);
})

// 2 Homework

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const promise = new Promise( (resolve, reject) => {
    const updatedUsers = allUsers.map(user =>
          user.name === userName ? { ...user, active: !user.active } : user,
        );
        resolve(updatedUsers)
    }
  )
  return promise
}

const logger = updatedUsers => console.log(updatedUsers);

toggleUserState(users, 'Mango').then(logger)

// 3 Homework

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {

  const delay = randomIntegerFromInterval(200, 500);

  const promise = new Promise((resolve,reject) => {

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id : transaction.id, delay: delay});
      } else {
        reject(transaction.id);
      }
    }, delay)
      
     })
  return promise;
    
};

const logSuccess = ({id, delay}) => {
  console.log(`Transaction ${id} processed in ${delay} ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);
