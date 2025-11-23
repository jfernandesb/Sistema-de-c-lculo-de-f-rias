
// Mascara do Input - Formato de Moeda (Não Mudar)

// usa vírgula como separador decimal, ponto como separador de milhar, sempre com 2 casas decimais
const formatter = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function mask(e) {
  const input = e.target;
  // elimina tudo que não é dígito
  input.value = input.value.replace(/\D+/g, "");
  if (input.value.length === 0)
    // se não tem nada preenchido, não tem o que fazer
    return;
  // verifica se ultrapassou a quantidade máxima de dígitos (pegar o valor no dataset)
  const maxDigits = parseInt(input.dataset.maxDigits);
  if (input.value.length > maxDigits) {
    // O que fazer nesse caso? Decidi pegar somente os primeiros dígitos
    input.value = input.value.substring(0, maxDigits);
  }
  // lembrando que o valor é a quantidade de centavos, então precisa dividir por 100
  input.value = formatter.format(parseInt(input.value) / 100);
}

// Input que vai receber o formato de moeda (Mudar)
document.querySelector("#salario").addEventListener("input", mask);

// Input em Formato Percentual (Não Mudar)
function maskpercent(mascara, documento) {
  let i = documento.value.length;
  let saida = "#";
  let texto = mascara.substring(i);
  while (texto.substring(0, 1) != saida && texto.length) {
    documento.value += texto.substring(0, 1);
    i++;
    texto = mascara.substring(i);
  }
}

//Altera o Formato de Moeda para Float (Não Mudar)
function moedaParaFloat(valor) {
  let textoLimpo = valor
    .replace(".", "")
    .replace(".", "")
    .replace(",", ".")
    .replace("", "0");
  return parseFloat(textoLimpo);
}

//Altera o Formato de Float para Moeda (Não Mudar)
function floatParaMoeda(valor) {
  // Converte o valor para um número
  const numero = parseFloat(valor);
  // Formata o número para moeda brasileira
  return `R$ ${numero.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

//Calcular (Não Mudar)
document.getElementById("bt_calcular").addEventListener("click", function () {
  //Declarar Variaveis do Input (Mudar)
  var myDiv_aviso = document.getElementById("aviso");

  var myDiv_resul = document.getElementById("resultado");

  var salario = moedaParaFloat(document.getElementById("salario").value);

  if (document.getElementById("dependentes").value == "") {
    var dependentes = 0;
  } else {
    var dependentes = document.getElementById("dependentes").value;
  }

  var dias_abono = document.getElementById("dias_abono").value * 1;

  var mes_inicio = document.getElementById("mes_inicio").value;

  var dia_inicio = document.getElementById("dia_inicio").value;

  var mes_fim = document.getElementById("mes_fim").value;

  if (document.getElementById("dia_fim").value != "") {
    var dia_fim = document.getElementById("dia_fim").value;
  } else {
    var dia_fim = 0;
  }

  //Bloquear Calculo quando Campos Estão em Branco e Mostrar Avisos (Mudar)

  if (dia_inicio == "" || mes_inicio == "" || salario == "" ){
    if (dia_inicio == "") {
      var aviso_branco = "Qauntidade de dia de férias não informada.";
    }
  if (mes_inicio == "") {
      var aviso_branco = "Mês de gozo não informado.";
    }
  if (salario == "") {
      var aviso_branco = "Salário não informado.";
    }  
  

  //(Não Mudar)
  myDiv_aviso.classList.remove("sumir");
  myDiv_aviso.offsetHeight;
  myDiv_aviso.classList.add("show_result");

  //Sumir Resultado (Não Mudar)
  myDiv_resul.classList.add("sumir");

   document.getElementById("aviso").textContent = aviso_branco;

   return
  } else {
    //Tabela de Resultado Aparecer (Não Mudar)
  myDiv_resul.classList.remove("sumir"); // Remove a classe 'hidden'
  myDiv_resul.offsetHeight; // Força o reflow para garantir que a transição aconteça
  myDiv_resul.classList.add("show_result"); // Adiciona a classe 'show' para iniciar a transição

  //Sumir Avisos (Não Mudar)
  myDiv_aviso.classList.add("sumir");
  }


  //Definir numero de dias para calculo

  //Quantidade de dias do MES INICIO

  if (mes_inicio == 1) {
    var dias_mes_in = 31;
  }
  if (mes_inicio == 2) {
    var dias_mes_in = 29;
  }
  if (mes_inicio == 3) {
    var dias_mes_in = 31;
  }
  if (mes_inicio == 4) {
    var dias_mes_in = 30;
  }
  if (mes_inicio == 5) {
    var dias_mes_in = 31;
  }
  if (mes_inicio == 6) {
    var dias_mes_in = 30;
  }
  if (mes_inicio == 7) {
    var dias_mes_in = 31;
  }
  if (mes_inicio == 8) {
    var dias_mes_in = 31;
  }
  if (mes_inicio == 9) {
    var dias_mes_in = 30;
  }
  if (mes_inicio == 10) {
    var dias_mes_in = 31;
  }
  if (mes_inicio == 11) {
    var dias_mes_in = 30;
  }
  if (mes_inicio == 12) {
    var dias_mes_in = 31;
  }

  //Quantidade de dias do MES FIM
  if (mes_fim == 0) {
    var dias_mes_fim = 0;
  }
  if (mes_fim == 1) {
    var dias_mes_fim = 31;
  }
  if (mes_fim == 2) {
    var dias_mes_fim = 29;
  }
  if (mes_fim == 3) {
    var dias_mes_fim = 31;
  }
  if (mes_fim == 4) {
    var dias_mes_fim = 30;
  }
  if (mes_fim == 5) {
    var dias_mes_fim = 31;
  }
  if (mes_fim == 6) {
    var dias_mes_fim = 30;
  }
  if (mes_fim == 7) {
    var dias_mes_fim = 31;
  }
  if (mes_fim == 8) {
    var dias_mes_fim = 31;
  }
  if (mes_fim == 9) {
    var dias_mes_fim = 30;
  }
  if (mes_fim == 10) {
    var dias_mes_fim = 31;
  }
  if (mes_fim == 11) {
    var dias_mes_fim = 30;
  }
  if (mes_fim == 12) {
    var dias_mes_fim = 31;
  }

  //Salario dia
  var salario_dia_in = salario / dias_mes_in;
  var salario_dia_fim = salario / dias_mes_fim;
  if (dias_mes_fim == 0) {
    var salario_dia_fim = 0;
  }

  //Quantidade de Dias mes abono
  var dias_abono_inter = dia_inicio - dias_abono;
  if (dias_abono_inter == 0) {
    var dias_abono_in = dias_abono;
    var dias_abono_fim = 0;
  }
  if (dias_abono_inter > 0) {
    var dias_abono_in = dias_abono;
    var dias_abono_fim = 0;
  }
  if (dias_abono_inter < 0) {
    var dias_abono_in = dias_mes_in - dia_inicio;
    var dias_abono_fim = dias_abono_inter * -1;
  }

  //Quantidade de dias de ferias
  var ferias_dia_in = dia_inicio - dias_abono_in;
  var ferias_dia_fim = dia_fim - dias_abono_fim;

  //Total de dias de Férias
  var total_dias = ferias_dia_in + ferias_dia_fim;
  var total_dias_fab =
    ferias_dia_in + ferias_dia_fim + dias_abono_fim + dias_abono_in;
  if (total_dias_fab > 30) {
    var aviso_branco = "Periodo de férias não pode ser superior a 30 dias.";

    myDiv_aviso.classList.remove("sumir");
    myDiv_aviso.offsetHeight;
    myDiv_aviso.classList.add("show_result");
  }
  if (total_dias_fab < 5) {
    var aviso_branco = "Periodo de férias não pode ser inferior a 5 dias.";

    myDiv_aviso.classList.remove("sumir");
    myDiv_aviso.offsetHeight;
    myDiv_aviso.classList.add("show_result");
  }

  //Valor de Ferias
  var ferias_in = ferias_dia_in * salario_dia_in;
  var ferias_fim = ferias_dia_fim * salario_dia_fim;

  if (total_dias == 30) {
    var ferias_in = salario / 2;
    var ferias_fim = salario / 2;
  }

  //Ferias antes dos Descontos
  var ferias = ferias_in + ferias_fim;

  var ferias_terco = ferias / 3;

  var base_inss = ferias + ferias_terco;

  //FGTS

  //Base FGTS
  var aliq_fgts = 8;

  var base_fgts = ferias + ferias_terco;

  var vlr_fgts = base_fgts * 0.08;

  //Descontos

  //Calcular INSS (Cálculo janeiro/2024)

  if (base_inss <= 1518.0) {
    var inss_faixa_1 = base_inss * 0.075;
    var inss_faixa_2 = 0;
    var inss_faixa_3 = 0;
    var inss_faixa_4 = 0;
    var aliq_inss = 7.5;
  }
  if (base_inss >= 1518.01 && base_inss <= 2793.88) {
    var inss_faixa_1 = 113.85;
    var inss_faixa_2 = (base_inss - 1518) * 0.09;
    var inss_faixa_3 = 0;
    var inss_faixa_4 = 0;
    var aliq_inss = ((inss_faixa_1 + inss_faixa_2) / base_inss) * 100;
  }
  if (base_inss >= 2793.89 && base_inss <= 4190.83) {
    var inss_faixa_1 = 113.85;
    var inss_faixa_2 = 114.83;
    var inss_faixa_3 = (base_inss - 2793.88) * 0.12;
    var inss_faixa_4 = 0;
    var aliq_inss =
      ((inss_faixa_1 + inss_faixa_2 + inss_faixa_3) / base_inss) * 100;
  }
  if (base_inss >= 4190.84 && base_inss <= 8157.41) {
    var inss_faixa_1 = 113.85;
    var inss_faixa_2 = 114.83;
    var inss_faixa_3 = 167.63;
    var inss_faixa_4 = (base_inss - 4190.83) * 0.14;
    var aliq_inss =
      ((inss_faixa_1 + inss_faixa_2 + inss_faixa_3 + inss_faixa_4) /
        base_inss) *
      100;
  }
  if (base_inss > 8157.41) {
    var inss_faixa_1 = 113.85;
    var inss_faixa_2 = 114.83;
    var inss_faixa_3 = 167.63;
    var inss_faixa_4 = 555.32;
    var aliq_inss =
      ((inss_faixa_1 + inss_faixa_2 + inss_faixa_3 + inss_faixa_4) /
        base_inss) *
      100;
  }

  var vlr_inss = inss_faixa_1 + inss_faixa_2 + inss_faixa_3 + inss_faixa_4;

  if (vlr_inss > 951.62) {
    vlr_inss = 951.62;
  }

  //Calcular INSS sobre 1/3 de férias

  var vlr_inss_terco = vlr_inss / 3;

  //Calcular Dependentes

  var vlr_dependts = dependentes * 189.59;

  //Férias antes do ir

  var base_ir = ferias + ferias_terco - vlr_inss - vlr_dependts;
  // Base IR Quando as Deduções legais (INSS, Dependentes, Pensão) for menor que 528
  if (vlr_inss + vlr_dependts < 564.8) {
    var base_ir = ferias + ferias_terco - 564.8;
  } else {
    var base_ir = ferias + ferias_terco - vlr_inss - vlr_dependts;
  }

  //Calcular base e valor do IR

  if (base_ir <= 2259.2) {
    var vlr_ir = 0;
    var aliq_ir = 0;
  }
  if (base_ir >= 2259.21 && base_ir <= 2826.65) {
    var vlr_ir = base_ir * 0.075 - 169.44;
    var aliq_ir = 7.5;
  }
  if (base_ir >= 2826.66 && base_ir <= 3751.05) {
    var vlr_ir = base_ir * 0.15 - 381.44;
    var aliq_ir = 15;
  }
  if (base_ir >= 3751.06 && base_ir <= 4664.68) {
    var vlr_ir = base_ir * 0.225 - 662.77;
    var aliq_ir = 22.5;
  }
  if (base_ir >= 4664.68) {
    var vlr_ir = base_ir * 0.275 - 896;
    var aliq_ir = 27.5;
  }

  //Total Descontos

  var total_desc = vlr_ir + vlr_inss;

  //Ferias depois dos descontos

  var ferias_liq_ter = (ferias + ferias_terco - total_desc) / 3;

  var ferias_liq = ferias + ferias_terco - total_desc - ferias_liq_ter;

  //Calcular Abono Pecuniário
  var abono_vlr_in = dias_abono_in * salario_dia_in;
  var abono_vlr_fim = dias_abono_fim * salario_dia_fim;
  var abono = abono_vlr_in + abono_vlr_fim;

  //1/3 abono
  var abono_terco = abono / 3;

  //Total Abono
  var total_abono = abono + abono_terco;

  //Total Proventos
  var total_prov = total_abono + ferias_liq_ter + ferias_liq;
  //Mostrar no Resultado (Mudar)

  document.getElementById("aviso").textContent = aviso_branco;
  document.getElementById("salario_i").textContent = floatParaMoeda(salario);
  document.getElementById("dependentes_i").textContent = dependentes;
  document.getElementById("vlr_dependts_i").textContent = floatParaMoeda(vlr_dependts);
  document.getElementById("base_inss_i").textContent = floatParaMoeda(base_inss);
  document.getElementById("vlr_inss_i").textContent = floatParaMoeda(vlr_inss);
  document.getElementById("aliq_inss_i").textContent = aliq_inss.toFixed(2) + '%';
  document.getElementById("vlr_fgts_i").textContent = floatParaMoeda(vlr_fgts);
  document.getElementById("base_fgts_i").textContent = floatParaMoeda(base_fgts);
  document.getElementById("aliq_fgts_i").textContent = aliq_fgts + '%';
  document.getElementById("aliq_ir_i").textContent = aliq_ir + '%';
  document.getElementById("base_ir_i").textContent = floatParaMoeda(base_ir);
  document.getElementById("vlr_ir_i").textContent = floatParaMoeda(vlr_ir);
  document.getElementById("total_desc_i").textContent = floatParaMoeda(total_desc);
  document.getElementById("ferias_liq_i").textContent = floatParaMoeda(ferias_liq);
  document.getElementById("ferias_liq_ter_i").textContent = floatParaMoeda(ferias_liq_ter);
  document.getElementById("total_abono_i").textContent = floatParaMoeda(total_abono);
  document.getElementById("total_prov_i").textContent = floatParaMoeda(total_prov);
  document.getElementById("total_dias_i").textContent = total_dias;
});

//Deixar o Menu Responsivo (Não Mudar)
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
