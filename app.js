
// Globals
let totalSum = 0;
let totalCredits = 0;
let gpa = 0;

// HTML Page Elements
const ul = document.querySelector(".subjectGrades");
const form = document.querySelector(".subjectForm");
const subjectInput = document.querySelector(".subjectInput");
const gradeInput = document.querySelector(".gradeSelector");
const creditInput = document.querySelector(".creditInput");
const clearAllButton = document.querySelector("footer button");


function showSubjectInfo(subjectName, grade, credit) {
    const subjectItem = document.createElement("li");
    const text = document.createElement("p");

    subjectItem.classList.add("subjectItem");
    text.textContent = `${subjectName} | ${grade} | ${credit} Credits`;
    subjectItem.appendChild(text);

    let trashIconSpan = document.createElement("span");
    trashIconSpan.classList.add("trashIcon");
    trashIconSpan.addEventListener('click', () => {
        // TODO
    });

    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fas");
    trashIcon.classList.add("fa-trash");

    trashIconSpan.appendChild(trashIcon);
    subjectItem.appendChild(trashIconSpan);
    form.remove();
    ul.appendChild(subjectItem);
    ul.appendChild(form);
}

const gradeGPA = {
    "A": 4.00,
    "B+": 3.5,
    "B": 3.0,
    "C+": 2.5,
    "C": 2.0,
    "D+": 1.5,
    "D": 1
}

function cumulate(grade, credit) {
    totalSum += gradeGPA[grade] * credit;
    totalCredits += parseInt(credit);;
}


function calculateGPA() {
    gpa = totalSum / totalCredits;
}


function updateResult() {
    const outputSpan = document.querySelector("footer span");
    outputSpan.textContent = `Your current GPA is ${gpa.toPrecision(3)}`;
}


function clearForm() {
    subjectInput.value = "";
    creditInput.value = "";
}

const submitButton = document.querySelector(".submitButton");
submitButton.addEventListener('click', () => {
    let subjectName = subjectInput.value;
    let grade = gradeInput.value;
    let credit = creditInput.value;

    if (subjectName === "" || credit === "" || credit === 0) return;

    cumulate(grade, credit);
    calculateGPA();
    updateResult();
    clearForm();
    showSubjectInfo(subjectName, grade, credit);
});

clearAllButton.addEventListener("click", () => {
    let tasks = Array.prototype.slice.call(ul.children);
    tasks.forEach(subject => { subject.remove(); });
    gpa = 0;
    totalCredits = 0;
    totalSum = 0;
    ul.appendChild(form);
    updateResult();
});