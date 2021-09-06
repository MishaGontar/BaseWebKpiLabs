function change(props) {
    let a = document.getElementById('cont')
    a.innerHTML = props
}

function about() {
    const text = "<h1>Опис предметного середовища</h1>" +
        "<div>Наш сайт буде пов'язаний з спорткомплексом (тренежерний зал , басейн і т.д.) </div>"
    change(text)
}

function typeOfLab() {
    const text = "<h1>Тема Мета Місце розташування лаби №1</h1>" +
        "<div><h3>Тема :<span class='text2'> Структура html-документа. вибір предметного галузі. робота з посиланнями, таблицями, зображеннями, формами в html-документі</span></h3></div>"+
        "<div><h3>Мета :<span class='text2'> Придбати практичні навички роботи  з HTML-документом, таблицями,формами, зображеннями, посиланнями.\n" +
        "Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт\n</span></h3></div>"+
        "<button  class='gitBtn' onclick=\"window.location.href='https://github.com/MishaGontar/Report_Labs'\"></button>"
    change(text)
}

function s_table() {
    const text = "<div>Hello from s_table</div>"
    change(text)
}

function s_form() {
    const text = "<div>Hello from s_form</div>"
    change(text)
}

function s_img() {
    const text = "<div>Hello from s_img</div>"
    change(text)
}

function conclusion() {
    const text = "<h1>Висновок</h1>"
    change(text)
}

