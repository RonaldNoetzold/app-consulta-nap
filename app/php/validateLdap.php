<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once __DIR__ . '/../../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../../');
$dotenv->load();

$input = json_decode(file_get_contents('php://input'), true);
$username = $input['username'] ?? '';
$password = $input['password'] ?? '';

$token = $_ENV['API_TOKEN_LDAP'];

try {
    $ch = curl_init('https://public-api.sulnet.net.br:9191/api/api_ldap_validation.php');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
        'username' => $username,
        'password' => $password
    ]));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: ' . $token,
        'Accept: application/json',
        'Content-Type: application/json'
    ]);

$result = curl_exec($ch);
if ($result === false) {
    echo json_encode(['mensagem' => 'Erro curl: ' . curl_error($ch), 'status' => 'erro']);
    curl_close($ch);
    exit;
}
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode !== 200) {
        echo json_encode([
            'mensagem' => 'Contate o suporte',
            'status' => 'erro'
        ]);
        exit;
    }

    echo $result;
} catch (Exception $e) {
    echo json_encode([
        'mensagem' => 'Contate o suporte',
        'status' => 'erro'
    ]);
}