"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const react_i18next_1 = require("react-i18next");
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
const DEFAULT_I18N_OPTIONS = {
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "fr"],
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: ["localStorage"],
    },
};
const i18nService = {
    registeredInstances: new Map(),
    getOrCreateI18nInstance(instanceName, initOptions) {
        if (this.registeredInstances.has(instanceName)) {
            return this.registeredInstances.get(instanceName);
        }
        return this.createAndRegisterI18nInstance(instanceName, initOptions);
    },
    switchLanguage() {
        const targetLanguage = this.getCurrentLanguage() === 'en' ? 'fr' : 'en';
        this.changeLanguage(targetLanguage);
    },
    getCurrentLanguage() {
        return [...this.registeredInstances.values()][0]?.language ?? 'en';
    },
    createAndRegisterI18nInstance(instanceName, options) {
        const initOptions = {
            ...options,
            ...DEFAULT_I18N_OPTIONS,
            initImmediate: false,
        };
        const newInstance = i18next_1.default
            .createInstance()
            .use(react_i18next_1.initReactI18next)
            .use(i18next_browser_languagedetector_1.default);
        newInstance.init(initOptions);
        this.registeredInstances.set(instanceName, newInstance);
        return newInstance;
    },
    changeLanguage(language) {
        for (const i18nInstance of this.registeredInstances.values()) {
            i18nInstance.changeLanguage(language);
        }
    },
};
exports.default = Object.freeze(i18nService);
