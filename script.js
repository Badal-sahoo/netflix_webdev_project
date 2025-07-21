document.addEventListener("DOMContentLoaded", () => {
    // Trending scroll
    const rb = document.querySelector(".rightbutton");
    const lb = document.querySelector(".leftbutton");
    const top10 = document.querySelector(".top10");
    const scrollAmount = top10.clientWidth;

    rb.addEventListener("click", () => {
        top10.scrollLeft += scrollAmount;
    });

    lb.addEventListener("click", () => {
        top10.scrollLeft -= scrollAmount;
    });

    // FAQ toggle
    const questions = document.querySelectorAll(".question");
    const faqs = document.querySelectorAll(".faq");
    const icons = document.querySelectorAll(".plusicon");

    questions.forEach((question, index) => {
        question.addEventListener("click", () => {
            const faq = faqs[index];
            const icon = icons[index];

            // Toggle current one
            faq.classList.toggle("show");
            icon.classList.toggle("rotate");

            // Optional: Close others if you want accordion-style
            faqs.forEach((f, i) => {
                if (i !== index) f.classList.remove("show");
            });
            icons.forEach((ic, i) => {
                if (i !== index) ic.classList.remove("rotate");
            });
        });
    });
});
