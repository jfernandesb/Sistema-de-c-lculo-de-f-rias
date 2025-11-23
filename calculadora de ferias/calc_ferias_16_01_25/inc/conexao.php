<?php
    $host="216.172.172.49";
	$usuario="fisco807_jose";
	$senha="fisco127799";
	$banco="fisco807_pesquisacae";
	$conn=mysqli_connect($host,$usuario,$senha)or die("Erro na conexão");
	mysqli_select_db($conn,$banco)or die("Erro ao selecionar o banco");
	mysqli_set_charset($conn,"utf8");
?>