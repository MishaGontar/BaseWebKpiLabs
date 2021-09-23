<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link rel="stylesheet" href="../css/projectCSS.css">
</head>
<body>
<header class="header">
    <span><img alt="..." class="homeImg" src="../img/pngwing.com.png" onclick="window.location.href='./../php/StartPage.php'"></span>
    <span class="spanHeader"><a href="FAQ.php">Про проект</a></span>
</header>

<div>
    <hr>
    <form>
        <button formaction="index.php" style="color: coral">Повернутися до Звіту</button>
    </form>
    <div><h1 class="hText">Спорткомплекс ....</h1></div>
    <div>
        <h2>Всі заняття:</h2>
        <table id="table">
        </table>
        <script src="./../js/table-script.js"></script>
    </div>


<div class="form-wrap">
        <h1>Зв'яжіться з нами</h1>
    </div>
    <form>
        <div>
            <label for="name">Ім'я</label>
            <input type="text" id="name" required>
        </div>
        <div>
            <label for="number">E-mail</label>
            <input type="number" id="number" required>
        </div>
        Ваше питання:<br>
        <textarea></textarea>
        <br>
        <button type="submit">Відправити</button>
    </form>
</div>
</body>
</html>