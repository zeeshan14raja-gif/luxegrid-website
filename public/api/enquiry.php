<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
function reply(int $code, array $data): never { http_response_code($code); echo json_encode($data); exit; }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') reply(405, ['error'=>'Method not allowed']);
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array(parse_url($origin, PHP_URL_HOST), ['luxegridpk.com','www.luxegridpk.com'], true)) reply(403,['error'=>'Origin not allowed']);
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) reply(413,['error'=>'Request too large']);
$data = json_decode(file_get_contents('php://input', false, null, 0, 20001), true);
if (!is_array($data)) reply(400,['error'=>'Invalid request']);
foreach (['name','email','phone','service','message','website'] as $field) { if (isset($data[$field]) && !is_string($data[$field])) reply(422,['error'=>'Invalid field']); }
if (!empty($data['website'])) reply(422,['error'=>'Invalid enquiry']);
$name=trim($data['name']??''); $email=trim($data['email']??''); $phone=trim($data['phone']??''); $service=$data['service']??''; $message=trim($data['message']??'');
if (strlen($name)<2 || strlen($name)>100 || !filter_var($email,FILTER_VALIDATE_EMAIL) || strlen($email)>254 || preg_match('/[\r\n]/',$email) || strlen($phone)>30 || strlen($message)<10 || strlen($message)>4000 || !in_array($service,['buy','sell','rent','consultancy','marketing','construction','general'],true)) reply(422,['error'=>'Please check the form fields']);
// Per-address throttle, stored outside the public web directory. No enquiry text is stored.
$path=sys_get_temp_dir().'/luxegrid-enquiry-'.hash('sha256',$_SERVER['REMOTE_ADDR']??'unknown');
$lock=fopen($path,'c+');
if (!$lock || !flock($lock,LOCK_EX)) reply(503,['error'=>'Please try again later']);
$last=(int)stream_get_contents($lock);
if(time()-$last<60){flock($lock,LOCK_UN);fclose($lock);reply(429,['error'=>'Please wait a minute before sending again']);}
ftruncate($lock,0);rewind($lock);fwrite($lock,(string)time());flock($lock,LOCK_UN);fclose($lock);
$body="LuxeGrid website enquiry\n\nName: $name\nEmail: $email\nPhone: $phone\nService: $service\n\n$message\n";
$headers=['From'=>'LuxeGrid Website <contact@luxegridpk.com>','Reply-To'=>$email,'MIME-Version'=>'1.0','Content-Type'=>'text/plain; charset=UTF-8'];
if(!mail('contact@luxegridpk.com','LuxeGrid enquiry: '.$service,$body,$headers)) reply(503,['error'=>'Email could not be accepted. Please contact us directly.']);
reply(200,['accepted'=>true]);
