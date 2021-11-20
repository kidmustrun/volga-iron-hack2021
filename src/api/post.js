const token = localStorage.getItem("token");
const URL_BASE = "http://3aca-95-165-9-250.ngrok.io/";
export const postSomething = (dataName, data) =>
  new Promise((resolve, reject) => {
    var axios = require("axios");

    var config = {
      method: "post",
      url: `${URL_BASE}${dataName}`,
      data: data,
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
