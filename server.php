< php
$_POST=JSON_DECODE(file_get_contents ("php://input"), true);
echo var_dump($_POST)