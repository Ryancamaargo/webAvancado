import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";

@Injectable()
export abstract class CrudService<T> {

    constructor(
        @Inject('url') public url: string,
        public http: HttpClient,
    ) { }

    /**
     * @description Retorna um novo registro (T)
     */
    public abstract get novoRegistro(): Observable<T>;

    /**
     * @description Inclui o novo registro
     * @returns Void
     * @param novo Registro da inclusão
     */
    public incluir(novo: T): Observable<void> {
        return this.http.post<void>(this.url + '/incluir', novo);
    }

    /**
     * @description Atualiza o registro
     * @returns Void
     * @param registro Registro da atualização
     */
    public atualizar(registro: T): Observable<void> {
        return this.http.put<void>(this.url + '/atualizar', registro);
    }

    /**
     * @description Pesquisa todos os registros do objeto
     * @returns Vetor com todos os registro do objeto
     */
    public pesquisarTodos(): Observable<T[]> {
        return this.http.get<T[]>(this.url + '/pesquisar-todos');
    }

    /**
     * @description Busca o registro pelo id
     * @returns Registro correspondente ao id (ou null)
     * @param id Identificador do registro
     */
    public carregar(id: number): Observable<T> {
        return this.http.get<T>(this.url + '/' + id);
    }

    /**
     * @description Deleta o registro pelo id
     * @returns Void
     * @param id Identificador do registro
     */
    public remover(id: number): Observable<void> {
        return this.http.delete<void>(this.url + '/' + id);
    }

}