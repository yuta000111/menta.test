const button = document.getElementById("button");

function calculation() {
    let Fizz = Number(document.getElementById("fizzNum").value);
    let Buzz = Number(document.getElementById("buzzNum").value);
    let answer = "";
    if (!Number.isInteger(Fizz) || !Number.isInteger(Buzz) || Fizz === 0 || Buzz === 0) {
        answer += "0以外の整数を入力してください"
        return answer;
    }

    for (let i = 1; i < 100; i++) {
        if (i % Fizz === 0 && i % Buzz === 0) {
            answer += "fizzBuzz" + i + "<br>";
        } else if (i % Fizz === 0) {
            answer += "fizz" + i + "<br>";
        } else if (i % Buzz === 0) {
            answer += "buzz" + i + "<br>";
        }
    }
    return answer;
}

function dom() {
    const target = document.getElementById("target");

    if (target.hasChildNodes) {
        target.innerHTML = '';
    }

    let ptag = document.createElement("p");
    ptag.innerHTML = calculation();
    target.appendChild(ptag);
}

button.addEventListener("click", dom);