import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export const ConfirmacaoSenhaValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const senha = control.get('password');
  const confirmacaoSenha = control.get('confirmacaoPassword');

  const notMatching = senha && confirmacaoSenha && senha.value && confirmacaoSenha.value && senha.value !== confirmacaoSenha.value;
  return notMatching ? { confirmacaoIsDiferente: true } : null;
};
