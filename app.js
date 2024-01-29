const OTPinputs = document.querySelectorAll("input");
const button = document.querySelector("button");

window.addEventListener("load", () => OTPinputs[0].focus());

function areAllInputsFilled() {
  for (const input of OTPinputs) {
    if (input.value === "") {
      return false;
    }
  }
  return true;
}

function redirectToDifferentPage() {
  const enteredOTP =
    OTPinputs[0].value +
    OTPinputs[1].value +
    OTPinputs[2].value +
    OTPinputs[3].value;

  switch (enteredOTP) {
    default:
      window.location.href = "http://tinyurl.com/y0a4er1ckrolled";
      // You have been rick rolled 
  }
}

button.addEventListener("click", () => {
  if (areAllInputsFilled()) {
    redirectToDifferentPage();
  } else {
    alert("Please fill in all OTP inputs");
  }
});

OTPinputs.forEach((input) => {
  input.addEventListener("input", () => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;

    if (currentInput.value.length > 1 && currentInput.value.length === 2) {
      currentInput.value = "";
    }

    if (
      nextInput !== null &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (!OTPinputs[3].disabled && OTPinputs[3].value !== "") {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  input.addEventListener("keyup", (e) => {
    if (e.key === "Backspace") {
      if (input.previousElementSibling !== null) {
        e.target.value = "";
        e.target.setAttribute("disabled", true);
        input.previousElementSibling.focus();
      }
    }
  });
});
