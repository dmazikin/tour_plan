<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];
//echo "Переменная" . var_dump($email);

// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";
//Формирование письма подписки
$titleSub = "Новый подписчик  Best Tour Plan:";
$subText = "
<b>Email:</b> $email";
// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  //$mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['status'][] = $str;
  };

  // Настройки вашей почты
  $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
  $mail->Username   = 'mazikindima@mail.ru'; // Логин на почте
  $mail->Password   = '2899157donald'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;
  $mail->setFrom('mazikindima@mail.ru', 'Дмитрий Мазикин'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('mityamazikin@gmail.com');

  // Отправка сообщения
  if ($message && $phone && $name) {
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
    header('Location: thankyou.html');
  } else {
    $mail->isHTML(true);
    $mail->Subject = $titleSub;
    $mail->Body = $subText;
    header('Location: thanksub.html');
  }

  // Проверяем отравленность сообщения
  if ($mail->send()) {
    $result = "success";
  } else {
    $result = "error";
  }
} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}