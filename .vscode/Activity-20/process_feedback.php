<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <h1>Feedback</h1>
    </header>
    <nav>
        <ul>
            <li><a href="activity18.html">Home</a></li>
            <li><a href="activity18-2.html">Game</a></li>
            <li><a href="activity18-1.html">About</a></li>
            <li><a href="activity18-3.html">Fun Facts</a></li>
            <li><a href="activity18-4.html">User Guides</a></li>
            <li><a href="feedback.html">Feedback</a></li>
        </ul>
    </nav>
    <main>
        <section>
            <h2>Feedback Form</h2>
            <form action="process_feedback.php" method="POST">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>
                
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                
                <label for="comments">Comments:</label><br>
                <textarea id="comments" name="comments" rows="4" required></textarea><br><br>
                
                <label for="rating">Rating:</label><br>
                <select id="rating" name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select><br><br>
                
                <input type="submit" value="Submit">
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2024 Lim.</p>
    </footer>
</body>
</html>
