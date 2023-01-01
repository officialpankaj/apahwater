<?php
  $name  = (isset($_POST['name']))?$_POST['name']:"Null";
  $number  = (isset($_POST['number']))?$_POST['number']:"Null";
  $email  = (isset($_POST['email']))?$_POST['email']:"Null";
  $message  = (isset($_POST['message']))?$_POST['message']:"Null";
  // echo $name.$number.$email.$message;


  require './PHPMailer-master/src/Exception.php'; 
  require './PHPMailer-master/src/PHPMailer.php'; 
  require './PHPMailer-master/src/SMTP.php'; 

  use PHPMailer\PHPMailer; 
  use PHPMailer\Exception; 
  

  $response = array(
    'code'=> 404
  );
  
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
  
  try{
    if($mail->send()) {
      $response['code'] = 200;
      $response['status'] = 'success';
      $response['message'] = 'Message Sent Successfully';
      echo json_encode($response);
    } else {
      $response['status'] = 'failed';
      $response['message'] = 'Invalid Credentials!';
      echo json_encode($response);
    }
  }
  catch(Exception $e){
    $response['code'] = 500;
    $response['status'] = 'error';
    $response['message'] = 'Error Occured!';
    echo json_encode($response);
  }

?>