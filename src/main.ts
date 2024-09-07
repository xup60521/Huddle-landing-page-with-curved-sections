import { z } from "zod";

const emailInput = document.getElementById("email")! as HTMLInputElement;
const submitBtn = document.getElementById("submit")!;
const error = document.getElementById("error")!;

emailInput.addEventListener("input", (event) => {
    const { value: email } = event.target as HTMLInputElement;
    if (email === "" || !email) return closeEmailErrorMsg();
    const { success } = isEmailValid(email);
    if (!success) {
        showEmailErrorMsg();
    } else {
        closeEmailErrorMsg();
    }
});

submitBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const { success } = isEmailValid(email);
    if (success) {
        alert("Subscribe!");
        emailInput.value = ""
    }
});

function showEmailErrorMsg() {
    if (emailInput.classList.contains("border-white")) {
        emailInput.classList.toggle("border-white");
        emailInput.classList.toggle("border-c_Light_Red");
    }
    error.style.display = "block";
}
function closeEmailErrorMsg() {
    if (emailInput.classList.contains("border-c_Light_Red")) {
        emailInput.classList.toggle("border-white");
        emailInput.classList.toggle("border-c_Light_Red");
    }

    error.style.display = "none";
}

const emailSchema = z.string().email();
function isEmailValid(email: string) {
    return emailSchema.safeParse(email);
}
