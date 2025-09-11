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
            span.textContent = spanId === "documentId" ? "Ofício nº" + input.value + "/" + currentYear : input.value;
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

function handleCPFFormater(cpfInput) {
    cpfInput.addEventListener("input", function () {
        let inputValue = cpfInput.value.replace(/\D/g, "");

        if (inputValue.length > 11) inputValue = inputValue.slice(0, 11); 

        inputValue = inputValue.replace(/(\d{3})(\d)/, "$1.$2");
        inputValue = inputValue.replace(/(\d{3})(\d)/, "$1.$2");
        inputValue = inputValue.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpfInput.value = inputValue;
    });
}

function handleGeneratePDF() {
    document.getElementById("generatePDFButton").addEventListener("click", () => {
    const elemento = document.getElementById("editorContainer");

    // Esconde o elemento
    elemento.style.display = "none";
    // Aguarda um pequeno tempo para o navegador aplicar o CSS antes de abrir o print
    setTimeout(() => {
        window.print();

        // (Opcional) Reexibir o elemento depois da impressão
        elemento.style.display = "flex";
    }, 100);
});
}

document.addEventListener('DOMContentLoaded', () => {
    handleUpdateDate();

    const bindings = [
        { input: "numberOfDocumentId", span: "documentId" },
        { input: "applicantNameInput", span: "applicantName" },
        { input: "cpfInput", span: "applicantCPF" }
    ];
    bindings.forEach(({ input, span }) => handleInputToSpan(input, span));

    handleTextAreaToSpan("greetingAuthorityInput", "greetingToTheAforementionedAuthority")
    handleTextAreaToSpan("mainContentInput", "mainText")

    const cpfInput = document.getElementById("cpfInput");
    handleCPFFormater(cpfInput)

    handleGeneratePDF();
});