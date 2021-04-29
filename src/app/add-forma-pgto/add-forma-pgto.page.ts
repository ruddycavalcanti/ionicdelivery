import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-forma-pgto',
  templateUrl: './add-forma-pgto.page.html',
  styleUrls: ['./add-forma-pgto.page.scss'],
})
export class AddFormaPgtoPage implements OnInit {


  tipoCartao: any = 'credito';
  nomeTitular = '';
  cpfCnpj = '';
  apelidoCartao = '';
  validade = '';
  cvv = '';

  item: any;
  isValid  = false;
  DECIMAL_SEPARATOR = '.';
  GROUP_SEPARATOR = ',';
  numeroCartao: any;
  pureResult: any;
  maskedId: any;


  maskedIdValidade: any;
  pureResultValidade: any;


  buttonDisabled  = false;

  constructor(private route: Router) {

  }


  ngOnInit() {
  }



  salvarFormaPgto(form: NgForm){
    this.isValid = this.validateCPF(this.cpfCnpj);

    if (this.isValid === false){
      this.isValid = true;
    }else{
      this.route.navigate(['/formas-de-pagamento']);
    }

  }




formatValidade(valString) {
  if (!valString) {
      return '';
  }
  const val = valString.toString();
  const parts = this.unFormatValidade(val).split(this.DECIMAL_SEPARATOR);
  this.pureResultValidade = parts;

  if (parts[0].length <= 4){
    this.maskedIdValidade = this.validade_mask(parts[0]);
    return this.maskedIdValidade;
  }
}

unFormatValidade(val) {
  if (!val) {
    return '';
  }
  val = val.replace(/\D/g, '');

  if (this.GROUP_SEPARATOR === ',') {
      return val.replace(/,/g, '');
  } else {
      return val.replace(/\./g, '');
  }
}

validade_mask(v) {
  v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  v = v.replace(/(\d{2})(\d)/, '$1/$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
  v = v.replace(/(\d{2})(\d)/, '$1/$2'); // Coloca um ponto entre o terceiro e o quarto dígitos

  return v;
}

  format(valString) {
    if (!valString) {
        return '';
    }
    const val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    if (parts[0].length <= 11){
      this.maskedId = this.cpf_mask(parts[0]);
      return this.maskedId;
    }else{
      this.maskedId = this.cnpj(parts[0]);
      return this.maskedId;
    }
}

unFormat(val) {
    if (!val) {
      return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
}

  cpf_mask(v) {
    v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
    // de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
}

 cnpj(v) {
    v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/, '$1.$2'); // Coloca ponto entre o segundo e o terceiro dígitos
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); // Coloca ponto entre o quinto e o sexto dígitos
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); // Coloca uma barra entre o oitavo e o nono dígitos
    v = v.replace(/(\d{4})(\d)/, '$1-$2'); // Coloca um hífen depois do bloco de quatro dígitos
    return v;
}


validateCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') {
    return false;
  }
  // Elimina CPFs invalidos conhecidos
  if (cpf.length !== 11 || 
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999'){
      return false;
    }
  // Valida 1o digito

  let add = 0;
  for (let i = 0; i < 9; i++){
      add += parseInt(cpf.charAt(i)) * (10 - i);
    }
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11){
      rev = 0;
    }
  if (rev !== parseInt(cpf.charAt(9))){
      return false;
    }
  // Valida 2o digito
  add = 0;
  for (let i = 0; i < 10; i++){
      add += parseInt(cpf.charAt(i)) * (11 - i);
      rev = 11 - (add % 11);
}
  if (rev === 10 || rev === 11){
      rev = 0;
    }
  if (rev !== parseInt(cpf.charAt(10))){
      return false;
    }
  return true;
}

}
