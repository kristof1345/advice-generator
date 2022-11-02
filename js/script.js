const adviceId = document.querySelector(".advice_id");
const adviceTxt = document.querySelector(".advice_text");
const generator = document.querySelector(".advice-generator");

const url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  const res = await fetch(url);
  const {
    slip: { id, advice },
  } = await res.json();
  adviceId.innerText = id;
  adviceTxt.innerText = advice;
}

getAdvice();

generator.addEventListener("click", getAdvice);
