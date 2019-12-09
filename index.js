const axios = require("axios");
const faker = require("faker");

const logEvery2Seconds = i => {
  const body = {
    firstName: faker.name.firstName(),
    middleName: "",
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: "Password1\u0021",
    passwordConfirm: "Password1\u0021",
    hasAcceptedTerms: true
  };
  setTimeout(async () => {
    console.log("Infinite Loop Test n:", i);
    console.log(`**************************************************************
              888888        Start ************************
  ****************************************************************************`);
    await axios
      .post(
        "https://t9n0ozee0d.execute-api.ap-southeast-1.amazonaws.com/stage/v1/register",
        body,
        {
          "Content-Type": "application/json"
        }
      )
      .then(res => {
        console.log("Response:", res.data);
        logEvery2Seconds(++i);
      })
      .catch(err => {
        console.log("error", err);
        clearTimeout(logEvery2Seconds);
      });
    console.log(`**************************************************************
              888888        Start ************************
  ****************************************************************************`);
  }, 5000);
};

logEvery2Seconds(0);
