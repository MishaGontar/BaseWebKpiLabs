function change(props) {
    let a = document.getElementById('context')
    a.innerHTML = props
}

function team() {
    const text = "<div class=\"about\">\n" +
        "                <div><img src=\"../img/Misha.jpg\" alt=\"...\" onclick='console.log(`Уф посхалка `)'></div>\n" +
        "                <div class=\"text\">Даров , мене звати Гонтар Михайло. Я люблю їсти та бекенд розробку. Тут повинен бути іще текст тому ось і він.</div>\n" +
        "            </div>\n" +
        "            <div class=\"about\">\n" +
        "                <div class=\"text\">Гуров Богдан Русланович, студент ІА-01 ФІОТ каф. ІСТ, юний розробник front-end та back-end</div>\n" +
        "                <div><img src=\"../img/Bodya.jpg\" alt=\"...\"></div>\n" +
        "            </div>\n" +
        "            <div class=\"about\">\n" +
        "                <div><img src=\"../img/Denys.jpg\" alt=\"...\"></div>\n" +
        "                <div class=\"text\">Ониськів Денис Євгенович, навчаюся в КПІ на 2 курсі, цікавлюсь футболом і програмуванням:)</div>\n" +
        "            </div>\n" +
        "            <div class=\"about\">\n" +
        "                <div class=\"text\">Кравчук Владислав Олегович Студент 2-го курсу. <br> Фан C# та Java. <br> Баскетбол та Комп'ютерні ігри One LOVE!!!</div>\n" +
        "                <div><img src=\"../img/Vlad.jpg\" alt=\"...\"></div>\n" +
        "            </div>"
    change(text)
}