import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

// aplicação
import { ArtigosRowComponent } from './components/artigos-row/artigos-row.component';
import { HomepageService } from './homepage.service';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.page.html',
    styleUrls: ['./homepage.page.scss'],
    providers: [
        HomepageService,
    ]
})
export class HomepageComponent implements OnInit, AfterViewInit {

    @ViewChild('recomendacoesRow')
    private recomendacoesRow!: ArtigosRowComponent;

    @ViewChild('destaquesRow')
    private destaquesRow!: ArtigosRowComponent;

    constructor(private service: HomepageService) { }

    ngOnInit() { }

    ngAfterViewInit(): void {
        this.buscarRecomendacoes();
        this.buscarDestaques();
    }

    /**
     * @description Busca as recomendações do usuário e seta o resultado na row de destaque
     */
    private buscarRecomendacoes(): void {
        if (this.recomendacoesRow) {
            // TODO: validar o usuário logado
            this.service.getRecomendacoes(0).subscribe(res => this.recomendacoesRow.montarRow(res));
        }
    }

    /**
     * @description Busca os destaques gerais do sistema e seta o resultado na row de destaque
     */
    private buscarDestaques(): void {
        this.service.getDestaques().subscribe(res => this.destaquesRow.montarRow(res));
    }

    /**
     * @description Executa no click do logo
     * * Leva o scroll até a última row de artigos
     */
    public onClickLogo() {
        const listaRows = document.getElementsByTagName('app-artigos-row');

        if (listaRows) {
            listaRows[listaRows.length - 1].scrollIntoView({ behavior: 'smooth' });
        }
    }

}