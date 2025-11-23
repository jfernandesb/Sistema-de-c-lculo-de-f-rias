$(document).ready(function(){
      
	//ALTERANDO O CURSOR DO MOUSE
		
	  $('#selec_benef,.detalhes_reducao,.detalhes_isencao,.detalhes_diferimento,.detalhes_presumido,.botaofil').mouseover(function(){
		   $(this).css("cursor","pointer");	
	   })
	
	$('.botaofil').click(function(){

	    //Bloquear ação com campos em branco
		if(document.getElementById("dia_inicio").value == '' ){
		alert('Quantidade de dias de férias em branco');
		callback(); 
		};
		if(document.getElementById("mes_inicio").value == 0 ){
		alert('Informe o mês do gozo das férias.');
		callback(); 
		};
		if(document.getElementById("salario").value == '' ){
		alert('Informe o salário base.');
		callback(); 
		};
		
		//Aparecer Resultado
        $("#resultado").show();
	
        //Criando as Variaveis
		if(document.getElementById('dependentes').value == ''){
		var dependentes	= 0;
		}else{
		var dependentes = (document.getElementById('dependentes').value);	
		};
	    var salario = (document.getElementById('salario').value) * 1;
        var dias_abono = (document.getElementById('dias_abono').value) * 1;

		
		//Definir Mes

		var mes_inicio = (document.getElementById('mes_inicio').value);

		var dia_inicio = (document.getElementById('dia_inicio').value);
        
		var mes_fim = (document.getElementById('mes_fim').value);	
		
		if(document.getElementById('dia_fim').value != ''){
		var dia_fim = (document.getElementById('dia_fim').value);
		}else{
			var dia_fim = 0;
		};
		
		//Definir numero de dias para calculo

        //Quantidade de dias do MES INICIO
        
        if(mes_inicio == 1 ){var dias_mes_in = 31;};
		if(mes_inicio == 2 ){var dias_mes_in = 29;};
        if(mes_inicio == 3 ){var dias_mes_in = 31;};
		if(mes_inicio == 4 ){var dias_mes_in = 30;};
        if(mes_inicio == 5 ){var dias_mes_in = 31;};
		if(mes_inicio == 6 ){var dias_mes_in = 30;};
		if(mes_inicio == 7 ){var dias_mes_in = 31;};
		if(mes_inicio == 8 ){var dias_mes_in = 31;};
		if(mes_inicio == 9 ){var dias_mes_in = 30;};
		if(mes_inicio == 10 ){var dias_mes_in = 31;};
		if(mes_inicio == 11 ){var dias_mes_in = 30;};
		if(mes_inicio == 12 ){var dias_mes_in = 31;};

        //Quantidade de dias do MES FIM
        if(mes_fim == 0 ){var dias_mes_fim = 0;};
        if(mes_fim == 1 ){var dias_mes_fim = 31;};
		if(mes_fim == 2 ){var dias_mes_fim = 29;};
        if(mes_fim == 3 ){var dias_mes_fim = 31;};
		if(mes_fim == 4 ){var dias_mes_fim = 30;};
        if(mes_fim == 5 ){var dias_mes_fim = 31;};
		if(mes_fim == 6 ){var dias_mes_fim = 30;};
		if(mes_fim == 7 ){var dias_mes_fim = 31;};
		if(mes_fim == 8 ){var dias_mes_fim = 31;};
		if(mes_fim == 9 ){var dias_mes_fim = 30;};
		if(mes_fim == 10 ){var dias_mes_fim = 31;};
		if(mes_fim == 11 ){var dias_mes_fim = 30;};
		if(mes_fim == 12 ){var dias_mes_fim = 31;};
        
        //Salario dia
        var salario_dia_in = salario/dias_mes_in;
        var salario_dia_fim = salario/dias_mes_fim;
		if(dias_mes_fim == 0){
		var salario_dia_fim = 0;
		}

		//Quantidade de Dias mes abono
		var dias_abono_inter = dia_inicio - dias_abono;
		if(dias_abono_inter == 0){
        var dias_abono_in = dias_abono;
		var dias_abono_fim = 0;
		};
        if(dias_abono_inter > 0){
        var dias_abono_in = dias_abono;
		var dias_abono_fim = 0;
		};
		if(dias_abono_inter < 0){
        var dias_abono_in = dias_mes_in - dia_inicio;
		var dias_abono_fim = dias_abono_inter * (-1);
		};

        //Quantidade de dias de ferias
        var ferias_dia_in = dia_inicio - dias_abono_in;
        var ferias_dia_fim = dia_fim - dias_abono_fim;
		
		//Total de dias de Férias
        var total_dias = ferias_dia_in + ferias_dia_fim;
		var total_dias_fab = ferias_dia_in + ferias_dia_fim + dias_abono_fim + dias_abono_in;
		if(total_dias_fab > 30){
		alert('Periodo de férias não pode ser superior a 30 dias.');
		$("#resultado").hide(); 
		callback();
		};
		if(total_dias_fab < 5){
		alert('Periodo de férias não pode ser inferior a 5 dias.');
		$("#resultado").hide(); 
		callback();
		};
		
		//Valor de Ferias
		var ferias_in = ferias_dia_in * salario_dia_in;
		var ferias_fim = ferias_dia_fim * salario_dia_fim;
		
		if(total_dias == 30){
		var ferias_in = salario/2;
		var ferias_fim = salario/2;
		}
       
		//Ferias antes dos Descontos
        var ferias = ferias_in + ferias_fim;

		var ferias_terco = ferias/3;

		var base_inss = ferias + ferias_terco;

		//FGTS

		//Base FGTS
        var aliq_fgts = 8;

        var base_fgts = ferias + ferias_terco;

		var vlr_fgts = base_fgts * 0.08 ;


        //Descontos
	     
        //Calcular INSS (Cálculo janeiro/2024)
       
        if(base_inss <= 1518.00){
			var inss_faixa_1 = base_inss * 0.075;
			var inss_faixa_2 = 0;
			var inss_faixa_3 = 0;
			var inss_faixa_4 = 0;
			var aliq_inss = 7.5;
			};
			if(base_inss >= 1518.01 && base_inss <= 2793.88){
			var inss_faixa_1 = 113.85;
			var inss_faixa_2 = (base_inss - 1518) * 0.09;
			var inss_faixa_3 = 0;
			var inss_faixa_4 = 0;
			var aliq_inss = ((inss_faixa_1 + inss_faixa_2)/base_inss) * 100;
			};
			if(base_inss >= 2793.89 && base_inss <= 4190.83){
			var inss_faixa_1 = 113.85;
			var inss_faixa_2 = 114.83;
			var inss_faixa_3 = (base_inss - 2793.88) * 0.12;
			var inss_faixa_4 = 0;
			var aliq_inss = ((inss_faixa_1 + inss_faixa_2 + inss_faixa_3)/base_inss) * 100;
			};
			if(base_inss >= 4190.84 && base_inss <= 8157.41){
			var inss_faixa_1 = 113.85;
			var inss_faixa_2 = 114.83;
			var inss_faixa_3 = 167.63;
			var inss_faixa_4 = (base_inss - 4190.83) * 0.14;
			var aliq_inss = ((inss_faixa_1 + inss_faixa_2 + inss_faixa_3 + inss_faixa_4)/base_inss) * 100;
			};
			if(base_inss > 8157.41){
			var inss_faixa_1 = 113.85;
			var inss_faixa_2 = 114.83;
			var inss_faixa_3 = 167.63;
			var inss_faixa_4 = 555.32;
			var aliq_inss = ((inss_faixa_1 + inss_faixa_2 + inss_faixa_3 + inss_faixa_4)/base_inss) * 100;
			};
	
			var vlr_inss = inss_faixa_1 + inss_faixa_2 + inss_faixa_3 + inss_faixa_4;
			
			if(vlr_inss > 951.62){vlr_inss= 951.62;}
			
        
		//Calcular INSS sobre 1/3 de férias
        
		var vlr_inss_terco = vlr_inss/3;

		//Calcular Dependentes

		var vlr_dependts = dependentes * 189.59;

		
        //Férias antes do ir

		var base_ir = ((ferias + ferias_terco) - vlr_inss) - vlr_dependts;
		// Base IR Quando as Deduções legais (INSS, Dependentes, Pensão) for menor que 528
		if(vlr_inss + vlr_dependts < 564.80){ var base_ir = ((ferias + ferias_terco) - 564.80)
		}else{var base_ir = ((ferias + ferias_terco) - vlr_inss) - vlr_dependts;};

		//Calcular base e valor do IR

		if(base_ir <= 2259.20){
		var vlr_ir = 0;
		var aliq_ir = 0;
		};
		if(base_ir >= 2259.21 && base_ir <= 2826.65){
		var vlr_ir = (base_ir * 0.075) - 169.44;
		var aliq_ir = 7.5;
		};
		if(base_ir >= 2826.66 && base_ir <= 3751.05){
		var vlr_ir = (base_ir * 0.15) - 381.44;
		var aliq_ir = 15;
		};
		if(base_ir >= 3751.06 && base_ir <= 4664.68){
		var vlr_ir = (base_ir * 0.225) - 662.77;
		var aliq_ir = 22.5;
		};
		if(base_ir >= 4664.68){
		var vlr_ir = (base_ir * 0.275) - 896;
		var aliq_ir = 27.5;
		};

		//Total Descontos

		var total_desc = vlr_ir + vlr_inss;

        //Ferias depois dos descontos

		var ferias_liq_ter = ((ferias + ferias_terco) - total_desc)/3;

		var ferias_liq = ((ferias + ferias_terco) - total_desc) - ferias_liq_ter;


        //Calcular Abono Pecuniário
        var abono_vlr_in = dias_abono_in * salario_dia_in;
        var abono_vlr_fim = dias_abono_fim * salario_dia_fim;
        var abono = abono_vlr_in + abono_vlr_fim;

		//1/3 abono
        var abono_terco = abono/3;
		
		//Total Abono
		var total_abono = abono + abono_terco;

		//Total Proventos
        var total_prov = total_abono + ferias_liq_ter + ferias_liq;

		//Imprimir
		document.getElementById('salario_i').value = salario.toFixed(2);
		document.getElementById('quant_dependts_i').value = dependentes.toString();
		document.getElementById('vlr_dependts_i').value = vlr_dependts.toFixed(2);
		document.getElementById('base_inss_i').value = base_inss.toFixed(2);
		document.getElementById('vlr_inss_i').value = vlr_inss.toFixed(2);
		document.getElementById('aliq_inss_i').value = aliq_inss.toFixed(2);
		document.getElementById('vlr_fgts_i').value = vlr_fgts.toFixed(2);
		document.getElementById('base_fgts_i').value = base_fgts.toFixed(2);
		document.getElementById('aliq_fgts_i').value = aliq_fgts.toString();
		document.getElementById('aliq_ir_i').value = aliq_ir.toString();
		document.getElementById('base_ir_i').value = base_ir.toFixed(2);
		document.getElementById('vlr_ir_i').value = vlr_ir.toFixed(2);
		document.getElementById('total_desc_i').value = total_desc.toFixed(2);
		document.getElementById('ferias_liq_i').value = ferias_liq.toFixed(2);
		document.getElementById('ferias_liq_ter_i').value = ferias_liq_ter.toFixed(2);
		document.getElementById('total_abono_i').value = total_abono.toFixed(2);
        document.getElementById('total_prov_i').value = total_prov.toFixed(2);
		document.getElementById('total_dias_i').value = total_dias.toString();
		
	 });
});