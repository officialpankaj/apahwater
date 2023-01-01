<?php
require __DIR__ . "/inc/bootstrap.php";
require PROJECT_ROOT_PATH . "/Controller/Api/APIController.php";
 
$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$uri = explode('/', $uri);

if (isset($uri[1])) {
    $objFeedController = new APIController();
    switch ($uri[1]) {
      case 'home_contact_form': $strMethodName = $uri[1] . '_Action';
                                $objFeedController->{$strMethodName}();
                                break;
      case 'email_subscription': $strMethodName = $uri[1] . '_Action';
                                 $objFeedController->{$strMethodName}();
                                 break;
      case 'product_list': $strMethodName = $uri[1] . '_Action';
                           $objFeedController->{$strMethodName}();
                           break;
      default:  header("HTTP/1.1 404 Not Found");
                $response = array();
                $response['code'] = 404;
                $response['status'] = 'error';
                $response['message'] = 'Request URL Not Found';
                echo json_encode($response);
                exit();

    }
}
 

