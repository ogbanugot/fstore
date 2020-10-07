const closeBtn = document.getElementById("close");
const open = document.getElementById("open");
const unit = document.getElementById("unit").value;
const total = document.getElementById("total");
const name = document.getElementById("name");
const tel = document.getElementById("tel").value;
// const quantity = document.getElementById("quantity").value;
const form = document.getElementById("form");
const submitBtn = document.querySelector("#submitBtn");

const modal = document.querySelector(".modal");

// document.getElementById("email").addEventListener("blur", validateEmail);
// document.getElementById("password").addEventListener("blur", validatePassword);
// document
//   .querySelector(".fa-eye-slash")
//   .addEventListener("click", revealPassword);

// function validateEmail() {
//   const emailDiv = document.querySelector("#emailDiv");
//   const email = document.getElementById("email");
//   const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

//   if (!re.test(email.value)) {
//     emailDiv.classList.add("is-invalid");
//     email.classList.add("input-invalid");
//   } else {
//     emailDiv.classList.remove("is-invalid");
//     email.classList.remove("input-invalid");
//   }
// }

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault();
// });

// function validatePassword() {
//   const password = document.getElementById("password");
//   const passwordDiv = document.getElementById("passwordDiv");

//   if (password.value.length < 5) {
//     passwordDiv.classList.add("is-invalid");
//     password.classList.add("input-invalid");
//   } else {
//     passwordDiv.classList.remove("is-invalid");
//     password.classList.remove("input-invalid");
//   }
// }

// function revealPassword() {
//   const password = document.getElementById("password");

//   if (password.type === "password") {
//     password.type = "text";
//   } else {
//     password.type = "password";
//   }
// }

// // Show input error message
// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.className = "form-control error";
//   const small = formControl.querySelector("small");
//   small.innerText = message;
// }

// const clearFields = function () {
//   document.getElementById("name").value = "";
//   document.getElementById("tel").value = "";
//   document.getElementById("quantity").value = "";
// };

// Show modal
// open.addEventListener("click", () => modal.classList.add("show-modal"));
// console.log(open);

// form.addEventListener("submit", function (e) {
// // Validate
// if (name === "" || tel === "" || quantity === "") {
//   // Error alert
//   showE("Please fill in all fields", "error");
// } else {
//   total = quantity * unit;

//   // Show success
//   showAlert(" Added!", "success");

//   // Clear fields
//   clearFields();
// }

// e.preventDefault();
// });
const pricingBackdrop = document.querySelector(".pricingBackdrop");

const orderBtn = document.querySelectorAll(".bttn");
const modalImg = document.querySelector(".modalImage");
const modalDesc = document.querySelector(".modalDesc");
const unitPrice = document.querySelector("#unit");
const totalPrice = document.querySelector("#total");
const quantity = document.querySelector("#quantity");

const inputValue = document.querySelectorAll(".form-input");

document.querySelector(".increase").addEventListener("click", increment);

document.querySelector(".decrease").addEventListener("click", decrement);

orderBtn.forEach((order) => {
  order.addEventListener("click", () => {
    modal.classList.add("display-modal");
    pricingBackdrop.classList.add("show-backdrop");
    quantity.value = Number("1"); //Resets the quantity when we open the modal
    let cardImg = order.parentElement.parentElement.children[0].children[0].getAttribute(
      "src"
    );
    let cakeDesc =
      order.parentElement.parentElement.children[1].children[0].innerHTML;

    //This cakePrice here is set to a global Variable so as to give
    //The increment and decrement function access to it.
    cakePrice =
      order.parentElement.parentElement.children[1].children[1].innerHTML;

    modalImg.setAttribute("src", cardImg);
    modalDesc.innerHTML = cakeDesc;
    unitPrice.innerHTML = cakePrice;

    totalPrice.innerHTML = cakePrice;
  });
});

function increment() {
  let qty = parseInt(quantity.value, 10);
  if (qty <= 9) {
    //Ensures that the Quantity Value doesn't go above 10
    qty++;
    quantity.value = qty;
    totalPrice.innerHTML = Number(cakePrice) * Number(quantity.value);
  }
}

function decrement() {
  let qty = parseInt(quantity.value, 10); //This Converts our Quantity Value from string to Number

  if (qty > 1) {
    //This ensures that the Quantity Value doesn't go below 1
    qty = qty - 1;
    quantity.value = qty;
    totalPrice.innerHTML = Number(cakePrice) * Number(quantity.value);
  }
}

function removeModal() {
  pricingBackdrop.classList.remove("show-backdrop");
  modal.classList.remove("display-modal");
  let qty = parseInt(quantity.value, 10);
  qty = 1; //Reset the Quantity to 1 after closing the modal
  totalPrice.innerHTML = cakePrice; //Reset total Price to Unit Price on Modal Close

  //Resetting the form after closing the modal
  for (let i = 0; i < inputValue.length; i++) {
    inputValue[i].value = "";
  }
}

window.addEventListener("load", () => {
  quantity.value = Number("1");
});

// Hide modal on outside click
pricingBackdrop.addEventListener("click", removeModal);

// Hide modal
closeBtn.addEventListener("click", removeModal);
