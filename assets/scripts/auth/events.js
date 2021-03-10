const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("../store");
const apiAccounts = require("../accounts/api.js");
const uiAccounts = require("../accounts/ui.js");
const placesEvents = require("../places/events.js");

const onSignUp = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);

  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  // get data from html form
  const form = event.target;
  const data = getFormFields(form);

  // send data to api for sign up
  api
    .signIn(data)
    .then((response) => {
      console.log("response from api is ", response);
      console.log("store object originally is ", JSON.stringify(store));
      store.accountsShow = false;
      store.user = response.user;
      ui.signInSuccess();
      placesEvents.onGetPlaces()
    })
    .then(() => {
      apiAccounts
        .getAccounts()
        .then((response) => {
          // Os valores q estao dentro de if sao convertidos boaleanos usando legnth
          // Type coercion
          // 0 = false -> nao tem conta 
          // 1 = true -> tem conta
          if(response.accounts.length) {
            uiAccounts.hideCreateAccountForm()
          }
          console.log(response);
        })
        .catch((err) => err);
    })
    .catch(ui.signInFailure);
};

const onChangePassword = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);

  api
    .changepw(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure);
};

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
};
