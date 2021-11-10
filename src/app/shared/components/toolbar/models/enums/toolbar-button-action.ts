import { LabelValue } from "src/app/shared/models/label-value";

export enum ToolbarButtonAction {
    HOMEPAGE = 'Homepage',
    ARTIGOS = 'Artigos',
    LOGIN = 'Login/cadastro',
    PERFIL = 'Perfil',
    INFO = 'Saiba mais'
}

export type ToolbarButtonActionType = keyof typeof ToolbarButtonAction;

/**
 * @returns Todas as opções da toolbar
 */
export function getToolbarButtonActionOptions(): LabelValue[] {
    const keys = Object.keys(ToolbarButtonAction);
    return Object.values(ToolbarButtonAction).map((label, index) => {
        return { value: keys[index], label: label };
    });
}

/**
 * @returns Opções da toolbar para usuários não logados
 */
export function getToolbarButtonActionLoginOptions(): LabelValue[] {
    return [
        { label: ToolbarButtonAction.LOGIN, value: 'LOGIN' },
        { label: ToolbarButtonAction.INFO, value: 'INFO' },
    ]
}

/**
 * @returns Opções da toolbar para usuários logados
 */
export function getToolbarButtonActionLogadoOptions(): LabelValue[] {
    return [
        { label: ToolbarButtonAction.ARTIGOS, value: 'ARTIGO' },
        { label: ToolbarButtonAction.PERFIL, value: 'PERFIL' },
        { label: ToolbarButtonAction.INFO, value: 'INFO' },
    ]
}