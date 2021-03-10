const showAllAccounts = function (res) {
   const accountList = Array.from(res.accounts)
  let storyHTML = ""  
  for (const account of accountList) {
    storyHTML += `
      <div class="container alert alert-primary" role="alert" >
        <h3 class="font-weight-normal">My Account</h3>
        <p>Account ID: ${account._id}</p>
        <p>Name: ${account.name}</p>
        <p>Hometown: ${account.hometown}</p>
        <p>Average Budget Day: US$${account.avgBudgetDay}</p>
        <p>Wave Range Size Preference: ${account.waveRange}ft</p>
        <p>Stance: ${account.stance}</p>

          <hr>    

        <h4>Update your Account</h4>
        <form class="account-update-dynamic" data-id=${account._id}>
        <input type="text" name="account[name]" placeholder="Enter new name" required>
        <input type="text" name="account[hometown]" placeholder="Enter new hometown" required>
        <input type="text" name="account[avgBudgetDay]" placeholder="Enter average budget day" required>
        <input type="text" name="account[waveRange]" placeholder="Enter new hometown" required>
        <input type="text" name="account[stance]" placeholder="Enter new stance" required><br>
        <button type="submit" class="index-dynamic-button btn btn-primary">Update Account</button>
      </form>
        <hr>
      <button class='account-destroy-dynamic btn btn-primary' data-id=${account._id}>Delete Account</button>
      </div>
    `
  }
  $('#account-display').show()
  $('#account-display').html(storyHTML)
  

};

const createAccountSuccess = function (res) {
   const accountList = Array.from(res.accounts)
  let storyHTML = ""  
  for (const account of accountList) {
    storyHTML += `
      <div class="container alert alert-primary" role="alert" >
        <p >Account ID: ${account._id}</p>
        <p >Name: ${account.name}</p>
        <p >Hometown: ${account.hometown}</p>
        <p >Average Budget Day: ${account.avgBudgetDay}</p>
        <p >waveRange: ${account.waveRange}</p>
        <p >Stance: ${account.stance}</p>
      </div>
    `
  }
  $('#account-display').show()
  $('#account-display').html(storyHTML)
  

};

const hideCreateAccountForm =  function () {
  $("#createAccount").hide()
}

const hideAllAccounts = function () {
  $("#accountList").hide()
//   $('#accountList').html("")
};

const onUpdateAccountSuccess = function () {
  $('form').trigger('reset')
  // $('#trip1-message').hide()
  $$('#account-display').text('The update has gone through.').addClass('.success')
  setTimeout(() => {
    $('#account-display').html('')
  }, 5000)
}

// const createAccountSuccess = function {
//   $("#createAccount").hide()
// }


const onDestroyAccountSuccess = function (response) {
  $('#account-destroy').html('Your trip has been deleted.')
  //  $$('#account-destroy').text('Your account has been delete.').addClass('.success')
  setTimeout(() => {
    $('#account-destroy').html('')
  }, 8000)
}
module.exports = {
   showAllAccounts,
   hideAllAccounts,
   hideCreateAccountForm,
   onUpdateAccountSuccess,
   createAccountSuccess,
   onDestroyAccountSuccess
}