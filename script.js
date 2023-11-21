const faqs__singleColumn = document.querySelectorAll(".faqs__singleColumn");

faqs__singleColumn.forEach(faqs__singleColumn => {
    faqs__singleColumn.addEventListener("click", () => {
        faqs__singleColumn.classList.toggle("active");
    })
})