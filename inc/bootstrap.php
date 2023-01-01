<?php
define("PROJECT_ROOT_PATH", __DIR__ . "/../");
 
// include main configuration file
require_once PROJECT_ROOT_PATH . "/inc/config.php";
 
// include the base controller file
require_once PROJECT_ROOT_PATH . "/Controller/Api/BaseController.php";
 
// include the use model file
require_once PROJECT_ROOT_PATH . "/Model/ApahWaterModel.php";

// include PHP Mailer files
require PROJECT_ROOT_PATH . "./inc/PHPMailer-master/src/Exception.php";
require PROJECT_ROOT_PATH . "./inc/PHPMailer-master/src/PHPMailer.php";
require PROJECT_ROOT_PATH . "./inc/PHPMailer-master/src/SMTP.php";
?>