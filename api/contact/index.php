<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fullName'])
|| empty($_POST['email']))
|| empty($_POST['message']) die();

if ($_POST)
  {

    http_response_code(200);
    $subject = $_POST['fullName'];
    $to = "pareja.jackie@gmail.com";
    $from = $_POST['email'];

    $msg = $_POST['number'] . $_POST['message'];

    echojson_encode(array(
        "sent" => true
    ));
  }

  else

  {
    echojson_encode(["sent" => false, "message" => "Something went wrong"]);
  }

 ?>
