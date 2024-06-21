<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $comments = htmlspecialchars($_POST['comments']);
    $rating = htmlspecialchars($_POST['rating']);
    
    $data = "Name: $name\nEmail: $email\nComments: $comments\nRating: $rating\n\n";
    
    file_put_contents("feedback.txt", $data, FILE_APPEND);
    
    echo "Thank you for your feedback!";
}
?>
