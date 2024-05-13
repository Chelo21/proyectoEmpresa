function getRandomNumber() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        const randomValue = Math.random();
        const error = randomValue > .8 ? true : false;
  
        if (error) {
          reject(new Error('Ooops, something broke!'));
        } else {
          resolve(randomValue);
        }
      }, 2000);
    }); 
  }
  
  getRandomNumber()
    .then(function(value) {
      console.log('Async success!', value);
    })
    .catch(function(err) {
      console.log('Caught an error!', err);
    });


    // fetch(`/game/market-simulator/make-sell-request/${symbol}/${quantity}`)

    // fetch(`/game/market-simulator/make-sell-request/?symbol=${symbol}&quantity=${quantity}`)