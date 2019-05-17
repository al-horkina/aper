<?php
/**
 * Created by PhpStorm.
 * User: Dsolodukhin
 * Date: 5/17/19
 * Time: 2:14 PM
 */

$name  = $_POST['name'];
$phone = $_POST['phone'];
$sub   = $_POST['subject'];

$message = 'Телефон: '. $phone .'; Name: ' . $name . '; Форма: ' . $sub;

mail('apercode.system@gmail.com', 'Заказ с сайта', $message);

header('Location: /');
exit;