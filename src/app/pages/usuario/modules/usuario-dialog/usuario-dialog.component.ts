import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

// material
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepper } from '@angular/material/stepper';

// aplicação
import { UsuarioService } from '../../usuario.service';
import { UsuarioDialogFormBuilder } from './core/usuario-dialog-form-builder';

@Component({
    selector: 'app-usuario-dialog',
    templateUrl: 'usuario-dialog.component.html',
    styleUrls: ['./usuario-dialog.component.scss'],
    providers: [
        UsuarioService,
        UsuarioDialogFormBuilder,
    ]
})
export class UsuarioDialogComponent implements OnInit {

    @ViewChild(MatStepper) 
    private stepper?: MatStepper;

    /**
     * @description FormGroup da modal 
     */
    public form: FormGroup;

    /**
     * @description Flag que identifica o componente em estado de "carregamento"
     */
    public loading: boolean;

    /**
     * @description Label do botão de fechamento da modal
     */
    public buttonLabel: 'Cancelar' | 'Finalizar';

    constructor(
        private usuarioService: UsuarioService,
        private formBuilder: UsuarioDialogFormBuilder,
        private snackBar: MatSnackBar
    ) {
        // inicializa o form
        this.form = this.formBuilder.criarForm();

        // incializa as variáveis do template
        this.loading = false;
        this.buttonLabel = 'Cancelar';
    }

    ngOnInit() { }

    public get dadosPessoaisForm(): FormGroup {
        return this.form.controls['dadosPessoais'] as FormGroup;
    }

    public get dadosUsuarioForm(): FormGroup {
        return this.form.controls['dadosUsuario'] as FormGroup;
    }

    /**
     * @description Executa no click do botão "Cadastrar" do stepper
     * * Valida o form e cadastra o usuário
     */
    public onClickBtnCadastrar() {
        this.form.updateValueAndValidity();

        if (this.form.valid) {
            this.loading = true;
            this.usuarioService.incluir(this.formBuilder.getUsuarioFromForm(this.form)).subscribe(() => {
                this.loading = false;
                this.buttonLabel = 'Finalizar';
            }, error => {
                this.loading = false;
                this.stepper?.previous();
                this.snackBar.open(error.message, 'Ok');
            });
        }
    }

}
