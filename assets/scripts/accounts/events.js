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

  api.createAccount(data).then( (response) => {
    console.log(response);
    // ui.createAccountSuccess()
  })
  .catch(ui.createAccountFailure);
};

const onGetAccountById = function(event) {
  event.preventDefault();
  // console.log(accountId)
  console.log(store.user._id)
  // console.log(store.account.owner)
  api.getAccountById(store.user._id)
  .then(ui.showAccountId)
  .catch(err => err)
}
  

const onGetAccounts = function(event) {
  event.preventDefault();
  store.accountsShow = !store.accountsShow
  api.getAccounts().then((response) => {
    console.log(response)
    store.accountsShow ? ui.showAllAccounts(response) : ui.hideAllAccounts();

  })
  .catch(err => err)
}

module.exports = {
  onCreateAccount,
  onGetAccounts,
  onGetAccountById
};
