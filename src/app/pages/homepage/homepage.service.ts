import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// aplicação
import { ArtigoDTO } from './models/artigo-dto';

@Injectable()
export class HomepageService {
    
    constructor() { }

    /**
     * @returns Destaques gerais do sistema
     */
    public getDestaques(): Observable<ArtigoDTO[]> {
        return new Observable(observer => {
            observer.next([
                { id: 1, titulo: 'Artigo mock 1', autor: 'João Leonardo'},
                { id: 2, titulo: 'Artigo mock Dois', autor: 'João Leonardo'},
                { id: 3, titulo: 'Artigo mock 3', autor: 'João Leonardo'},
                { id: 4, titulo: 'Artigo mock Quatro', autor: 'João Leonardo'},
                { id: 5, titulo: 'Artigo mock 5', autor: 'João Leonardo'},
            ]);
            observer.complete();
        })
    }
    
    /**
     * @returns Recomendações personalizadas por usuário
     * @param usuarioId Id do usuário
     */
     public getRecomendacoes(usuarioId: number): Observable<ArtigoDTO[]> {
        return new Observable(observer => {
            observer.next([
                { id: 1, titulo: 'Recomendação mock Um', autor: 'João Leonardo'},
                { id: 2, titulo: 'Recomendação mock 2', autor: 'João Leonardo'},
                { id: 3, titulo: 'Recomendação mock Três', autor: 'João Leonardo'},
                { id: 4, titulo: 'Recomendação mock 4', autor: 'João Leonardo'},
                { id: 5, titulo: 'Recomendação mock Cinco', autor: 'João Leonardo'},
            ]);
            observer.complete();
        })
    }
    
}