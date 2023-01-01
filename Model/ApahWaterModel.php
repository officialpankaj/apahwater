<?php
require_once PROJECT_ROOT_PATH . "/Model/Database.php";
 
class ApahWaterModel extends Database
{
    public function registerEmailSubscription($email)
    {
        return $this->update("insert into email_subscription(email) values('".$email."')");
    }

    public function fetchEmailSubscription($email)
    {
        $result =  $this->select("select email from email_subscription where email='".$email."'");
        if ($result!== false && $result->num_rows > 0) {
            return true;
        } else {
            return false;
        }
    }
}
