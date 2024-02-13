function displayAdvice(response) {
  const adviceId = document.getElementById("advice-id");
  const adviceText = document.getElementById("advice-text");
  adviceId.innerHTML = response.data.slip.id;
  adviceText.innerHTML = response.data.slip.advice;
}

function getAdvice() {
  const url = "https://api.adviceslip.com/advice";
  axios.get(url).then(displayAdvice);
}

const getAdviceButton = document.querySelector("button");
getAdviceButton.addEventListener("click", getAdvice);

getAdvice();
