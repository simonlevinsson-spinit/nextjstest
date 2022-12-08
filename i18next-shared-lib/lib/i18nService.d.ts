import { i18n, InitOptions as I18nInitOptions } from "i18next";
export type I18nAvailableInitOptions = Omit<I18nInitOptions, "initImmediate" | "debug" | "fallbackLng" | "supportedLngs" | "interpolation" | "detection">;
declare const _default: Readonly<{
    registeredInstances: Map<string, i18n>;
    getOrCreateI18nInstance(instanceName: string, initOptions: I18nAvailableInitOptions | undefined): i18n;
    switchLanguage(): void;
    getCurrentLanguage(): string;
    createAndRegisterI18nInstance(instanceName: string, options?: I18nAvailableInitOptions | undefined): i18n;
    changeLanguage(language: string): void;
}>;
export default _default;
