<?php

use PHPMailer\PHPMailer;
use PHPMailer\Exception;

class APIController extends BaseController
{
    /**
     * "/user/list" Endpoint - Get list of users
     */
    public function home_contact_form_Action()
    {
        $response = array(
        'code'=> 404
        );

        if (strtoupper($_SERVER["REQUEST_METHOD"])=="POST") {
            // Takes raw data from the request
            $json = file_get_contents('php://input');

            // Converts it into a PHP object
            $data = json_decode($json);

            $name  = (isset($data->name))?$data->name:"Null";
            $number  = (isset($data->number))?$data->number:"Null";
            $email  = (isset($data->email))?$data->email:"Null";
            $message  = (isset($data->message))?$data->message:"Null";
            $source  = (isset($data->source))?$data->source:"Null";



            $mail = new PHPMailer\PHPMailer();
            $mail->IsSMTP(); // enable SMTP

            // $mail->SMTPDebug = 2; // debugging: 1 = errors and messages, 2 = messages only
            $mail->SMTPDebug = false;
            $mail->SMTPAuth = true; // authentication enabled
            $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
            $mail->Host = "ssl://mail.apahwater.in";
            $mail->Port = 465; // or 587
            $mail->IsHTML(true);
            $mail->Username = "site@apahwater.in";
            $mail->Password = "Apahwater@123";
            $mail->SetFrom("site@apahwater.in");
            $mail->Subject = "Website Enquiry";
            $mail->Body = "<!DOCTYPE html>
            <html lang='en'>
            <head>
            <meta charset='UTF-8' />
            <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
            <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' rel='stylesheet' />
            <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We' crossorigin='anonymous' />
            <link rel='stylesheet' href='https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
            <title>Website Enquiry</title>
            </head>
            <body>
            <div style='margin: 0 auto; width: 50vw; font-family: Roboto, sans-serif; background: #f2f2f2; font-weight: 300; color: #999999; padding: 5% 5% 0% 5%'>
            <div style='width: 40vw; background: #fafcfc; padding: 2% 10% 1% 10%; margin: 0 auto;'>
            <div><img style='display: block; width: 22vw; margin: 0 auto; padding-bottom: 2%' src='https://api.apahwater.in/assets/email_enquiry_img.png' /></div>
            <p style='text-align: center; padding: 0% 5%; font-weight: 600; font-size: 2.5rem; color: #202020'>Enquiry!</p>
            <p>Hello Admin,<br /><span style='font-weight: 400; color: #808080'>".$name."</span> has requested an enquiry from website,</p>
            <p><span style='font-weight: 400; color: #808080'>Source: </span>".$source."</p>
            <p><span style='font-weight: 400; color: #808080'>Email: </span>".$email."</p>
            <p><span style='font-weight: 400; color: #808080'>Number: </span>".$number."</p>
            <p style='padding-bottom: 5%'><span style='font-weight: 400; color: #808080'>Message: </span>".$message."</p>
            <p style='padding-top: 5%; font-size: 0.7rem'>This is a system generated email. This mail is not monitored, reply do not respond to this mail</p>
            </div>
            <div style='width: 100%; text-align: center; width: 100%'>
            <div style='font-size: 0.8rem; padding: 4% 0% 1% 0%'>
            <p><img style='width: 15%; display: block; margin: 0 auto' src='https://api.apahwater.in/assets/logo.png' /></p>
            <p style='margin: 0% 0% 1% 0%'>MIG-4, Sector-2A, Saket Nagar, Bhopal 462024</p>
            <p style='margin: 0% 0% 4% 0%'>0755-4701995 | info@apahwater.in</p>
            <p style='margin: 0% 0% 1% 0%'>© 2021 ApahWater – Mineral Water Bottle Company</p>
            </div>
            </div>
            </div>
            </body>
            </html>
            ";
            $mail->AddAddress("info@apahwater.in");

            try {
                if ($mail->send()) {
                    $response['code'] = 200;
                    $response['status'] = 'success';
                    $response['message'] = 'Message Sent Successfully';
                    $this->sendOutput($response);
                } else {
                    $response['status'] = 'failed';
                    $response['message'] = 'Invalid Credentials!';
                    $this->sendOutput($response);
                }
            } catch (Exception $e) {
                $response['code'] = 500;
                $response['status'] = 'error';
                $response['message'] = 'Error Occured!';
                $this->sendOutput($response);
            }
        } else {
            header("HTTP/1.1 405 Method Not Allowed");
            $response['code'] = 405;
            $response['status'] = 'error';
            $response['message'] = 'Method Not Allowed! Only POST requests are allowed';
            $this->sendOutput($response);
        }
    }

    public function email_subscription_Action()
    {
        $response = array(
        'code'=> 404
        );
        header("Access-Control-Allow-Origin: *");
        if (strtoupper($_SERVER["REQUEST_METHOD"])=="POST") {
            // Takes raw data from the request
            $json = file_get_contents('php://input');

            // Converts it into a PHP object
            $data = json_decode($json);

            $email  = (isset($data->email))?$data->email:"Null";

            $apahModel = new ApahWaterModel();
            if ($apahModel->fetchEmailSubscription($email) == false) {
                if ($apahModel->registerEmailSubscription($email)) {
                    $response['code'] = 200;
                    $response['status'] = 'success';
                    $response['message'] = 'Registered Successfully!';
                }
            } else {
                $response['code'] = 409;
                $response['status'] = 'fail';
                $response['message'] = 'Email already exists!';
            }

            $this->sendOutput($response);
        } else {
            header("HTTP/1.1 405 Method Not Allowed");
            $response['code'] = 405;
            $response['status'] = 'error';
            $response['message'] = 'Method Not Allowed! Only POST requests are allowed';
            $this->sendOutput($response);
        }
    }

    public function product_list_Action()
    {
        $products = array(
            array(
                "name" => "Mountain Mint Mixer",
                "flavour" => "Mint Flavour",
                "price" => 60,
                "details" => array(
                "ingredients" => "Calcium extracts, carbonates, and more",
                "expiry" => "4 months",
                ),
                "extra_discount" => 10,
                "extra_discount_on_min" => 200,
                "image" => "our-product-item-06.webp",
                "thumbnail" => "our-product-item-thumbnail-06.webp",
                "available_size" => ["500ML", "1L"],
            ),
            array(
                "name" => "Cave Honey",
                "flavour" => "Honey Flavour",
                "price" => 75,
                "details" => array(
                "ingredients" => "Calcium extracts, carbonates, and more",
                "expiry" => "4 months",
                ),
                "extra_discount" => 10,
                "extra_discount_on_min" => 100,
                "image" => "our-product-item-05.webp",
                "thumbnail" => "our-product-item-thumbnail-05.webp",
                "available_size" => ["300ML","500ML", "1L"],
            ),
            array(
                "name" => "Holey Water",
                "flavour" => "Tulsi Flavour",
                "price" => 45,
                "details" => array(
                "ingredients" => "Calcium extracts, carbonates, and more",
                "expiry" => "4 months",
                ),
                "extra_discount" => 15,
                "extra_discount_on_min" => 250,
                "image" => "our-product-item-01.webp",
                "thumbnail" => "our-product-item-thumbnail-01.webp",
                "available_size" => ["300ML","500ML", "1L"],
            ),
            array(
                "name" => "Alround Amla",
                "flavour" => "Amla Flavour",
                "price" => 55,
                "details" => array(
                "ingredients" => "Calcium extracts, carbonates, and more",
                "expiry" => "4 months",
                ),
                "extra_discount" => 8,
                "extra_discount_on_min" => 50,
                "image" => "our-product-item-04.webp",
                "thumbnail" => "our-product-item-thumbnail-04.webp",
                "available_size" => ["300ML","500ML", "1L"],
            ),
            array(
                "name" => "Magic Lemon",
                "flavour" => "Lemon Flavour",
                "price" => 45,
                "details" => array(
                "ingredients" => "Calcium extracts, carbonates, and more",
                "expiry" => "4 months",
                ),
                "extra_discount" => 16,
                "extra_discount_on_min" => 100,
                "image" => "our-product-item-02.webp",
                "thumbnail" => "our-product-item-thumbnail-02.webp",
                "available_size" => ["300ML","500ML", "1L"],
            ),
            array(
                "name" => "Miraculous Lemon",
                "flavour" => "Clove Flavour",
                "price" => 50,
                "details" => array(
                "ingredients" => "Calcium extracts, carbonates, and more",
                "expiry" => "4 months",
                ),
                "extra_discount" => 12,
                "extra_discount_on_min" => 150,
                "image" => "our-product-item-03.webp",
                "thumbnail" => "our-product-item-thumbnail-03.webp",
                "available_size" => ["500ML", "1L"],
            ),
            array(
                "name" => "Mountain Water",
                "flavour" => "Mineral Water",
                "price" => 35,
                "details" => array(
                "ingredients" => "Calcium extracts, carbonates, and more",
                "expiry" => "4 months",
                ),
                "extra_discount" => 18,
                "extra_discount_on_min" => 100,
                "image" => "our-product-item-07.webp",
                "thumbnail" => "our-product-item-thumbnail-07.webp",
                "available_size" => ["300ML","500ML", "1L"],
            ),

        );

        $this->sendOutput($products);
    }
}
