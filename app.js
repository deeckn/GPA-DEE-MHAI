
// Global Variables
let totalSum = 0;
let totalCredits = 0;
let gpa = 0;

// HTML Page Elements
const ul = document.querySelector(".subjectGrades");
const form = document.querySelector(".subjectForm");
const subjectInput = document.querySelector(".subjectInput");
const gradeInput = document.querySelector(".gradeSelector");
const creditInput = document.querySelector(".creditInput");
const submitButton = document.querySelector(".submitButton");
const clearAllButton = document.querySelector("footer button");


function showSubjectInfo(subjectName, grade, credit) {
    // HTML Element Creation
    const subjectItem = document.createElement("li");
    const text = document.createElement("p");

    subjectItem.classList.add("subjectItem");
    text.textContent = `${subjectName} | ${grade} | ${credit} Credits`;
    subjectItem.appendChild(text);

    // Trash Icon Slide in and functionality
    let trashIconSpan = document.createElement("span");
    trashIconSpan.classList.add("trashIcon");
    trashIconSpan.addEventListener('click', () => {
        const textContainer = trashIconSpan.previousSibling;
        let text = textContainer.textContent;
        let subjectName = text.split("|")[0].trim();
        reduceSubjectGPA(subjectData[subjectName][0], subjectData[subjectName][1]);
        calculateGPA();
        updateResult();

        // Deleting Subject Item from page
        subjectItem.remove();
    });

    // Trash Icon Visual
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

let subjectData = {};


function addSubjectData(subjectName, grade, credit) {
    subjectData[subjectName] = [grade, credit];
}


function cumulate(grade, credit) {
    totalSum += gradeGPA[grade] * parseInt(credit);
    totalCredits += parseInt(credit);
}


function reduceSubjectGPA(grade, credit) {
    totalSum -= gradeGPA[grade] * parseInt(credit);
    totalCredits -= parseInt(credit);
}


function calculateGPA() {
    if (totalCredits === 0) {
        gpa = 0;
        return;
    }
    gpa = totalSum / totalCredits;
}


function updateResult() {
    const outputSpan = document.querySelector("footer span");

    if (gpa === 0) outputSpan.textContent = "Add subjects to calculate GPA";
    else outputSpan.textContent = `Your current GPA is ${gpa.toPrecision(3)}`;
}


function clearForm() {
    subjectInput.value = "";
    creditInput.value = "";
}


function addSubject(subjectName, grade, credit) {
    if (subjectName === "" || credit === "" || credit === 0) return;

    addSubjectData(subjectName, grade, credit);
    cumulate(grade, credit);
    calculateGPA();
    updateResult();
    clearForm();
    showSubjectInfo(subjectName, grade, credit);
}


// Event Listeners

creditInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        let subjectName = (subjectInput.value).trim();
        let grade = gradeInput.value;
        let credit = creditInput.value;
        addSubject(subjectName, grade, credit);
    }
});

submitButton.addEventListener('click', () => {
    let subjectName = (subjectInput.value).trim();
    let grade = gradeInput.value;
    let credit = creditInput.value;
    addSubject(subjectName, grade, credit);
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