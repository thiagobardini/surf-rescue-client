const showAllAccounts = function (res) {
  const accountList = Array.from(res.accounts)
  
//   $("#frame").hide();
  let storyHTML = ""
  for (const account of accountList) {
    storyHTML += `
      <div class="container alert alert-primary" role="alert" >
        <p>ID: ${account._id}</p>
        <p>account Name: ${account.name}</p>
        <p>Cells Hometown: ${account.hometown}</p>
        <p>account Stance: ${account.stance}</p>
      </div>
    `
  }
  $('#accountList').html(storyHTML)

};

const hideCreateAccountForm =  function () {
  $("#createAccount").hide()
}

const hideAllAccounts = function () {
  $("#accountList").hide()
//   $('#accountList').html("")
};

// const createAccountSuccess = function {
//   $("#createAccount").hide()
// }

module.exports = {
   showAllAccounts,
   hideAllAccounts,
   hideCreateAccountForm
}