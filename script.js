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

document.addEventListener('DOMContentLoaded', handleUpdateDate);