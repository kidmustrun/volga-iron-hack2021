const token = localStorage.getItem("token");
const URL_BASE = "http://b6da-95-165-9-250.ngrok.io";
export const getSomething = (dataName) =>
  new Promise((resolve, reject) => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `${URL_BASE}/${dataName}`,
      headers: {
        Authorization: token,
        Accept: "*/*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response)
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      });
  });
