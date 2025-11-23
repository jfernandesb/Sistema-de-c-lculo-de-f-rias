<?php
	// adicionar uma bibliteca para vincular o html e o php
	include("../inc/class.TemplatePower.php");
	include("../inc/conexao.php");
	
	// vincular o html com a biblioteca
	$tpl=new TemplatePower("nome_ferramenta.html");
	
	// preparar o html para receber novas tags
	$tpl->prepare();
	
	// CRIANDO VARIÁVEIS
	
	// REQUEST -> usado para buscar variaveis de qualquer método de envio, post ou link
	@$id_estados=$_REQUEST["id_estados"];
	
	@$id_avisos=$_REQUEST["id_avisos"];
	
	@$consultavisos=mysqli_query($conn,"SELECT id_avisos, desc_avisos, id_ferramentas
	                                  from avisos
									  where id_ferramentas='13'") 
							or die ("erro na consulta avisos");
							
	//LISTAR
	 while($listavisos=mysqli_fetch_array($consultavisos)){
	 $tpl->newBlock("lista_avisos");
	 $tpl->assign("id_avisos",$listavisos["id_avisos"]);
	 $tpl->assign("desc_avisos",$listavisos["desc_avisos"]);
     }						
	
	$tpl->gotoBlock("_ROOT");
	
	$tpl->printToScreen();
?>