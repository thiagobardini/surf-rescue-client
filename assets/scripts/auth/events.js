const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("../store");
const placesEvents = require("../places/events.js");

const onSignUp = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  api.signUp(data).then(ui.signUpSuccess).catch(ui.signUpFailure);
};

const onSignIn = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  api
    .signIn(data)
    .then((response) => {
      store.accountsShow = false;
      store.user = response.user;
      ui.signInSuccess();
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
  onSignOut,
};
