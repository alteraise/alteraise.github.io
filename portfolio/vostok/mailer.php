<?php
global $_POST;
$mail_to = "romanovalex52@gmail.com";

// Required fields
$name  = isset( $_POST['name'] ) ? strip_tags( trim( $_POST['name'] ) ) : '';
$phone = isset( $_POST['phone'] ) ? strip_tags( trim( $_POST['phone'] ) ) : '';
$email = isset( $_POST['email'] ) ? strip_tags( trim( $_POST['email'] ) ) : '';
$company = isset( $_POST['company'] ) ? strip_tags( trim( $_POST['company'] ) ) : '';
$text  = isset( $_POST['comment'] ) ? strip_tags( trim( $_POST['comment'] ) ) : '';



$mail_subject = "НРФ 23";

$message = "<h3 style='margin-bottom: 15px;'>Заявка:</h3>";
$message .= "<b>Имя:</b> " . $name . "<br/>";
$message .= "<b>Телефон:</b> " . $phone . "<br/>";
$message .= "<b>Email Адрес:</b> " . $email . "<br/>";
$message .= "<b>Компания:</b> " . $company . "<br/>";
$message .= "<b>Комментарий:</b> " . $text . "<br/>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= "От: <" . $email . ">" . "\r\n";

mail( $mail_to, $mail_subject, $message, $headers );
