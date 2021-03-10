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

  api.createAccount(data)
    .then((response) => {
      console.log(response);
      // ui.createAccountSuccess()
      ui.showAllAccounts()
    })
    // .then(ui.createAccountSuccess)
    .catch(ui.createAccountFailure);
};

const onUpdateAccount = function (event) {
  event.preventDefault();
  const updateForm = event.target;
  const id = $(updateForm).data("id");
  const formData = getFormFields(event.target);

  // make API call to update one book with the data we grabbed from the form
  api
    .updateAccount(id, formData)
    // if the API call is successful then invoke the onUpdateSuccess function
    .then(() => {
      api.getAccounts().then((response) => {
        console.log(response);
        store.accountsShow
          ? ui.showAllAccounts(response)
          : ui.hideAllAccounts();
      });
      ui.onUpdateAccountSuccess();
    })

    // if the API call fails then run our onError function
    .catch(ui.onAccountFailure);
};

const onGetAccounts = function (event) {
  event.preventDefault();
  store.accountsShow = !store.accountsShow;
  api
    .getAccounts()
    .then((response) => {
      console.log(response);
      store.accountsShow ? ui.showAllAccounts(response) : ui.hideAllAccounts();
    })
    .catch((err) => err);
};

const onDestroyAccount = function (event) {
  api.destroyAccount(store.account._id)
    .then(ui.onDestroyAccountSuccess)
    .catch(ui.onDestroyAccountFailure)
}


module.exports = {
  onCreateAccount,
  onGetAccounts,
  onUpdateAccount,
  onDestroyAccount
};
