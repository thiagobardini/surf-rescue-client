const getFormFields = require("../../../lib/get-form-fields");
const api = require("./api");
const ui = require("./ui");
const store = require("../store");

const onCreateAccount = function (event) {
  event.preventDefault();
  const form = event.target;
  const data = getFormFields(form);
  console.log("data is ", data);
  console.log("store is ", store);
  data.account.owner = store.user._id;

  api.createAccount(data).then(ui.signUpSuccess).catch(ui.signUpFailure);
};

const onGetAccounts = function(event) {
  event.preventDefault();
  store.accountsShow = !store.accountsShow
  api.getAccounts().then((response) => {
    console.log(response)
    store.accountsShow ? ui.showAllAccounts(response) : ui.hideAllAccounts();

  })
  .catch(err => err)
}
  


// const onSignIn = function (event) {
//   event.preventDefault();
//   // get data from html form
//   const form = event.target;
//   const data = getFormFields(form);

//   // send data to api for sign up
//   api
//     .signIn(data)
//     .then((response) => {
//       console.log("response from api is ", response);
//       console.log("store object originally is ", JSON.stringify(store));

//       store.user = response.user;
//       ui.signInSuccess();
//     })
//     .catch(ui.signInFailure);
// };

// const onChangePassword = function (event) {
//   event.preventDefault();
//   const form = event.target;
//   const data = getFormFields(form);

//   api
//     .changepw(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure);
// };

// const onSignOut = function (event) {
//   event.preventDefault();
//   api.signOut().then(ui.signOutSuccess).catch(ui.signOutFailure);
// };

module.exports = {
  onCreateAccount,
  onGetAccounts
};
