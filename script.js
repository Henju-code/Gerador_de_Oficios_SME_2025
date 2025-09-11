function handleDateformat() {
    const currentDate = new Date();
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    return `Madalena, ${day} de ${month} de ${year}`;

}
function handleUpdateDate() {
    const dateElements = document.querySelectorAll('.datetime');
    const formatedDate = handleDateformat();
    
    dateElements.forEach(element => {
        element.textContent = formatedDate;
    });
}

function handleInputToSpan(inputId, spanId) {
    const input = document.getElementById(inputId);
    const span = document.getElementById(spanId);
    const currentYear = new Date().getFullYear();

    if (input && span) {
        input.addEventListener("input", function () {
            span.textContent = "Ofício nº" + input.value + "/" + currentYear;
        });
    }
}

function handleTextAreaToSpan(textAreaId, spanId) {
    const inputArea = document.getElementById(textAreaId);
    const span = document.getElementById(spanId);
    const currentYear = new Date().getFullYear();

    if (inputArea && span) {
        inputArea.addEventListener("input", function () {
            const formatedText = inputArea.value.replace(/\n/g, "<br>");
            span.innerHTML = formatedText;
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    handleUpdateDate();

    const bindings = [
        { input: "numberOfDocumentId", span: "documentId" }
    ];
    bindings.forEach(({ input, span }) => handleInputToSpan(input, span));

    handleTextAreaToSpan("greetingAuthorityInput", "greetingToTheAforementionedAuthority")
    handleTextAreaToSpan("mainContentInput", "mainText")
});