
require('dotenv').config()
exports.envChecking=() => {

    return new Promise(function(resolve, reject) {
        try {
            
            console.log("SVR for:" +process.env.ENV);

            if(!process.env.PORT){
                reject('PORT=' + process.env.PORT);
            }

            resolve('env passed');
        } catch (err) {
            reject('Error env.'+err);
        }
    })
  }