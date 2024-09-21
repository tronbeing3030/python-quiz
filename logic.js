const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const q3 = document.getElementById('q3')
const q4 = document.getElementById('q4')
const q5 = document.getElementById('q5')
const q6 = document.getElementById('q6')
const q7 = document.getElementById('q7')
const q8 = document.getElementById('q8')
const q9 = document.getElementById('q9')
const q10 = document.getElementById('q10')

const result = document.getElementById('result');

function answers() {
    let score = 0
    if (q1.value.toLowerCase() === "high") {
        score++;
        q1.style.backgroundColor = "#06d6a0";
        q1.style.color = "#0b132b";
    } else {
        q1.style.backgroundColor = "#ef476f";
    }

    if (q2.value.toLowerCase() === "1991") {
        score++;
        q2.style.backgroundColor = "#06d6a0";
        q2.style.color = "#0b132b";
    } else {
        q2.style.backgroundColor = "#ef476f";
    }

    if (q3.value.toLowerCase() === "3.12") {
        score++;
        q3.style.backgroundColor = "#06d6a0";
        q3.style.color = "#0b132b";
    } else {
        q3.style.backgroundColor = "#ef476f";
    }

    if (q4.value.toLowerCase() === "monty python") {
        score++;
        q4.style.backgroundColor = "#06d6a0";
        q4.style.color = "#0b132b";
    } else {
        q4.style.backgroundColor = "#ef476f";
    }

    if (q5.value.toLowerCase() === "input()") {
        score++;
        q5.style.backgroundColor = "#06d6a0";
        q5.style.color = "#0b132b";
    } else {
        q5.style.backgroundColor = "#ef476f";
    }

    if (q6.value.toLowerCase() === ".py") {
        score++;
        q6.style.backgroundColor = "#06d6a0";
        q6.style.color = "#0b132b";
    } else {
        q6.style.backgroundColor = "#ef476f";
    }

    if (q7.value.toLowerCase() === "#") {
        score++;
        q7.style.backgroundColor = "#06d6a0";
        q7.style.color = "#0b132b";
    } else {
        q7.style.backgroundColor = "#ef476f";
    }

    if (q8.value.toLowerCase() === "length") {
        score++;
        q8.style.backgroundColor = "#06d6a0";
        q8.style.color = "#0b132b";
    } else {
        q8.style.backgroundColor = "#ef476f";
    }

    if (q9.value.toLowerCase() === "guido van rossum") {
        score++;
        q9.style.backgroundColor = "#06d6a0";
        q9.style.color = "#0b132b";
    } else {
        q9.style.backgroundColor = "#ef476f";
    }

    if (q10.value.toLowerCase() === "max()") {
        score++;
        q10.style.backgroundColor = "#06d6a0";
        q10.style.color = "#0b132b";
    } else {
        q10.style.backgroundColor = "#ef476f";
    }

    // let p = document.createElement('p');
    // p.innerHTML = `You scored ${score} points`;
    // result.appendChild('p');

    // let p = document.createElement('p');
    // p.innerHTML = `Thankyou for Playing this small quiz game, you attempted ${score} questions correctly!`
    // result.appendChild(p);
    // let mark = (score / total_questions) * 100;
    // let p = document.createElement('p');
    // p.innerHTML = `Marks obtained: ${mark}`
    // result.appendChild(p);
}