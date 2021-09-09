const lesson = (title, photo, trainer, data) => {
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
    }

    function generateData() {
        const hour = getRandom(7, 21)
        const time = getRandom(0, 59)
        const day = getRandom(10, 28)
        const month = getRandom(9, 12)

        return `час: ${(hour < 10) ? `0${hour}` : hour}:${(time < 10) ? `0${time}` : time} 
                дата:${(day < 10) ? `0${day}` : day}.${(month < 10) ? `0${month}` : month}.2021`
    }

    return {
        title: title,
        photoUrl: `./../img/${photo}_photo.png`,
        data: (data) ? data : generateData(),
        trainer: trainer
    }
}

// Буде винесено в БД
const lessons = [
    lesson('Американський футбол', 'americfootball', "Traktor I.V."),
    lesson('Баскетбол', 'basketball', "Traktor I.V."),
    lesson('Більярд', 'bilard', "Traktor I.V."),
    lesson('Бокс', 'box', "Traktor I.V."),
    lesson('Шахмати', 'chess', "Traktor I.V."),
    lesson('Футбол', 'football', "Traktor I.V."),
    lesson('Хокей', 'hokey', "Traktor I.V."),
    lesson('Плавання', 'swimming', "Traktor I.V."),
    lesson('Фехтування', 'swordplay', "Traktor I.V."),
    lesson('Великий теніс', 'tennis', "Traktor I.V."),
    lesson('Волейбол', 'volleyball', "Traktor I.V."),
    lesson('Йога', 'yoga', "Traktor I.V.")
]

const table = document.getElementById('table')

for (let i of lessons) {
    table.innerHTML +=
        `<tr>
            <th> ${i.title} </th>
            <th> <img alt="..." src="${i.photoUrl}" style="width: 150px;height: 100px"> </th>
            <th> ${i.data} </th>
            <th> Тренер: ${i.trainer} </th>
            <th>
                <form action="./../php/error.php" method="get">
                    <input type="submit" value="Записатися">
                </form>
           </th>
        </tr>`
}