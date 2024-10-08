<?php
$dischiList = file_get_contents("../json/dischi.json");
header("Content-type: application/json");
echo $dischiList;
?>
