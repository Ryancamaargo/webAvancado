import { Component, OnInit } from '@angular/core';

// aplicação
import { ArtigoDTO } from '../../models/artigo-dto';

@Component({
    selector: 'app-artigos-row',
    templateUrl: 'artigos-row.component.html',
    styleUrls: ['./artigos-row.component.scss']
})
export class ArtigosRowComponent implements OnInit {

    /**
     * @description Armazena os DTO's dos artigos da row
     */
    public listaArtigos: ArtigoDTO[] = [];

    constructor() { }

    ngOnInit() { }

    public montarRow(listaArtigos: ArtigoDTO[]) {
        this.listaArtigos = listaArtigos;
    }

}