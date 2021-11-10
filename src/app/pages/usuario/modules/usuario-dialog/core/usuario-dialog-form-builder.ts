import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// aplicação
import { ConfirmacaoSenhaValidator } from "../validators/confirmacao-senha-validator";
import { Usuario } from "../../../models/usuario";

@Injectable()
export class UsuarioDialogFormBuilder {

    constructor(private formBuilder: FormBuilder) { }

    public criarForm(): FormGroup {
        return this.formBuilder.group({
            dadosPessoais: this.formBuilder.group({
                nome: [null, Validators.required],
                sobrenome: [null, Validators.required],
                email: [null, Validators.required],
            }),
            dadosUsuario: this.formBuilder.group({
                username: [null, Validators.required],
                password: [null, Validators.required],
                confirmacaoPassword: [null, Validators.required],
            }, { validators: ConfirmacaoSenhaValidator }),
        });
    }

    public getUsuarioFromForm(form: FormGroup): Usuario {
        return {
            nome: form.get('dadosPessoais.nome')?.value,
            sobrenome: form.get('dadosPessoais.sobrenome')?.value,
            email: form.get('dadosPessoais.email')?.value,
            username: form.get('dadosUsuario.username')?.value,
            password: form.get('dadosUsuario.password')?.value,
        }
    }

}