<?php

    $to_email       = "info@toimi.pro, artyom.dovgopol@gmail.com";

    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
        $output = json_encode(array(
            'type'=>'error',
            'text' => 'Sorry Request must be Ajax POST'
        ));
        die($output);
    }

    if (filter_var($_POST["int_web"], FILTER_SANITIZE_STRING) != undefined) {
        $int_web = filter_var($_POST["int_web"], FILTER_SANITIZE_STRING);
        $int_web .= ", ";
    } else {
        $int_web = '';
    }

    if (filter_var($_POST["int_mob"], FILTER_SANITIZE_STRING) != undefined) {
        $int_mob = filter_var($_POST["int_mob"], FILTER_SANITIZE_STRING);
        $int_mob .= ", ";
    } else {
        $int_mob = '';
    }

    if (filter_var($_POST["int_tech"], FILTER_SANITIZE_STRING) != undefined) {
        $int_tech = filter_var($_POST["int_tech"], FILTER_SANITIZE_STRING);
        $int_tech .= ", ";
    } else {
        $int_tech = '';
    }

    if (filter_var($_POST["int_seo"], FILTER_SANITIZE_STRING) != undefined) {
        $int_seo = filter_var($_POST["int_seo"], FILTER_SANITIZE_STRING);
        $int_seo .= ", ";
    } else {
        $int_seo = '';
    }

    if (filter_var($_POST["int_ppc"], FILTER_SANITIZE_STRING) != undefined) {
        $int_ppc = filter_var($_POST["int_ppc"], FILTER_SANITIZE_STRING);
    } else {
        $int_ppc = '';
    }

    $budget          = filter_var($_POST["budget"], FILTER_SANITIZE_STRING);
    $first_name      = filter_var($_POST["first_name"], FILTER_SANITIZE_STRING);
    $email_address   = filter_var($_POST["email_address"], FILTER_SANITIZE_EMAIL);
    $about_project   = filter_var($_POST["about_project"], FILTER_SANITIZE_STRING);
    $subject         = "Заявка с сайта Toimi.pro";

    $message = '<html><body>';
    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $message .= "<tr><td><strong>Интересует:</strong></td> <td>" . $int_web . $int_mob . $int_tech . $int_seo . $int_ppc . "</td></tr>";
    $message .= "<tr><td><strong>Бюджет проекта:</strong> </td><td>" . $budget . "</td></tr>";
    $message .= "<tr><td><strong>Имя:</strong> </td><td>" . $first_name . "</td></tr>";
    $message .= "<tr><td><strong>Email:</strong> </td><td>" . $email_address . "</td></tr>";
    $message .= "<tr><td><strong>О проекте:</strong> </td><td>" . $about_project . "</td></tr>";
    $message .= "</table>";
    $message .= "</body></html>";


    $file_attached = false;
    if(isset($_FILES['file_attach']))
    {
        $file_tmp_name    = $_FILES['file_attach']['tmp_name'];
        $file_name        = $_FILES['file_attach']['name'];
        $file_size        = $_FILES['file_attach']['size'];
        $file_type        = $_FILES['file_attach']['type'];
        $file_error       = $_FILES['file_attach']['error'];

        if($file_error>0)
        {
            $mymsg = array(
            1=>"The uploaded file exceeds the upload_max_filesize directive in php.ini",
            2=>"The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form",
            3=>"The uploaded file was only partially uploaded",
            4=>"No file was uploaded",
            6=>"Missing a temporary folder" );

            $output = json_encode(array('type'=>'error', 'text' => $mymsg[$file_error]));
            die($output);
        }

        $handle = fopen($file_tmp_name, "r");
        $content = fread($handle, $file_size);
        fclose($handle);
        $encoded_content = chunk_split(base64_encode($content));

        $file_attached = true;

    }

    if($file_attached)
    {

    $separator = md5(time());

    $eol = "\r\n";

    $headers = "From:Fromname <info@fromemail.com>" . $eol;
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    $body .= "--" . $separator . $eol;
    $body .= "Content-type:text/html; charset=utf-8\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= $message . $eol;

    $body .= "--" . $separator . $eol;
    $body  .= "Content-Type:".$file_type." ";
    $body .= "Content-Type: application/octet-stream; name=\"" . $file_name . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment; filename=\"".$file_name."\"". $eol;
    $body .= $encoded_content . $eol;
    $body .= "--" . $separator . "--";

    }
    else
    {

        $eol = "\r\n";

        $headers = "From: Fromname <info@fromemail.com>" . $eol;
        $headers .= "Reply-To: ". strip_tags($email_address) . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
        $body .= $message . $eol;

    }

    $send_mail = mail($to_email, $subject, $body, $headers);

    if(!$send_mail)
    {
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        die($output);
    }else{
        $output = json_encode(array('type'=>'message', 'text' => 'Hi '.$first_name .' Thank you for your order, will get back to you shortly'));
        die($output);
    }

?>
