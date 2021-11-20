const token = localStorage.getItem("token");
export const getSomething = (dataName) =>
  new Promise((resolve, reject) => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `http://4a7c-95-165-9-250.ngrok.io/api/v1/${dataName}`,
      headers: {
        Authorization: token,
        Accept: "*/*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };

    axios(config)
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
