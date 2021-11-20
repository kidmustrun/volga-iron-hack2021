const token = localStorage.getItem("token");
const URL_BASE = "http://3aca-95-165-9-250.ngrok.io/api/v1/";
export const getSomething = (dataName) =>
  new Promise((resolve, reject) => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: `${URL_BASE}${dataName}`,
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
