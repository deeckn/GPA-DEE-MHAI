
function makeInputForm() {
    const ul = document.querySelector(".subjectGrades");
    const formContainer = document.createElement("li");
    const gradeLabel = document.createElement("label");
    const comboBox = document.createElement("select");
    const a = document.createElement("option");
    const bPlus = document.createElement("option");
    const b = document.createElement("option");
    const cPlus = document.createElement("option");
    const c = document.createElement("option");
    const dPlus = document.createElement("option");
    const d = document.createElement("option");
    const creditLabel = document.createElement("label");
    const creditInput = document.createElement("input");
    const submitButton = document.createElement("input");

    gradeLabel.htmlFor = "grade";
    gradeLabel.innerHTML = "Select Grade:";

    a.value = "A";
    a.innerHTML = "A";
    bPlus.value = "B+";
    bPlus.innerHTML = "B+";
    b.value = "B";
    b.innerHTML = "B";
    cPlus.value = "C+";
    cPlus.innerHTML = "C+";
    c.value = "C";
    c.innerHTML = "C";
    dPlus.value = "D+";
    dPlus.innerHTML = "D+";
    d.value = "D";
    d.innerHTML = "D";
    comboBox.name = "grade";
    comboBox.appendChild(a);
    comboBox.appendChild(bPlus);
    comboBox.appendChild(b);
    comboBox.appendChild(cPlus);
    comboBox.appendChild(c);
    comboBox.appendChild(dPlus);
    comboBox.appendChild(d);

    creditLabel.innerHTML = "Input Credit:";

    submitButton.type = "submit";

    formContainer.appendChild(gradeLabel);
    formContainer.appendChild(comboBox);
    formContainer.appendChild(creditLabel);
    formContainer.appendChild(creditInput);
    formContainer.appendChild(submitButton);
    formContainer.classList.add("subjectItem");
    ul.appendChild(formContainer);
}

makeInputForm();
makeInputForm();