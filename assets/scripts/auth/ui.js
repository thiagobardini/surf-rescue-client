const store = require("../store");

const signUpSuccess = function (response) {
  $("#success-message").text("Thank you for signing up!").addClass(".success");
  $("form").trigger("reset");
  setTimeout(function () {
    $("#success-message").text("").addClass("success");
  }, 4000);
};

const signUpFailure = function (response) {
  $("#error-message").text("Sign up failed, try again!").addClass(".failure");
  $("#sign-up").trigger("reset");
  setTimeout(function () {
    $("#error-message").text("").addClass("failure");
  }, 4000);
};

const signInSuccess = function (response) {
  $("#sign-up").hide();
  $("#sign-in").hide();
  $("#change-password").show();
  $("#sign-out").show();
  $("#signOutHide").show();
  $("#hideContent").show();
  $("#success-message").text("Thank you for signing in").addClass(".success");
  $("form").trigger("reset");
  setTimeout(function () {
    $("#success-message").text("").addClass("success");
  }, 4000);
};

const signInFailure = function (response) {
  $("#error-message").text("Sign in failed, try again!").addClass(".failure");
  $("#sign-in").trigger("reset");

  setTimeout(function () {
    $("#error-message").text("").addClass("failure");
  }, 4000);
};

const changePasswordSuccess = function (response) {
  $("#success-message")
    .text("Password successfully changed")
    .addClass(".success");
  $("#change-password").trigger("reset");
  setTimeout(function () {
    $("#success-message").text("").addClass("success");
  }, 4000);
};

const changePasswordFailure = function (response) {
  $("#error-message")
    .text("Change password failed, try again!")
    .addClass(".failure");
  $("#change-password").trigger("reset");

  setTimeout(function () {
    $("#error-message").text("").addClass("failure");
  }, 4000);
};

const signOutSuccess = function () {
  $("#sign-out").hide();
  $("#hideContent").hide();
  $("#change-password").hide();
  $("#sign-in").show();
  $("#sign-up").show();
  $("#signOutHide").hide();
  $("#success-message").text("See you soon!").addClass(".success");
  $("form").trigger("reset");
  setTimeout(function () {
    $("#success-message").text("").addClass("success");
  }, 4000);
};

const signOutFailure = function (response) {
  $("#error-message").text("Sign out failed, try again").addClass(".failure");

  setTimeout(function () {
    $("#error-message").text("").addClass("failure");
  }, 4000);
};

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
};
