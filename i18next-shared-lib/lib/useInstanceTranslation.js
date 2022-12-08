"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInstanceTranslation = void 0;
const react_i18next_1 = require("react-i18next");
const i18nService_1 = __importDefault(require("./i18nService"));
const useInstanceTranslation = (instanceName, resources) => (filename) => {
    const i18nInstance = i18nService_1.default.getOrCreateI18nInstance(instanceName, { resources });
    return (0, react_i18next_1.useTranslation)(filename, { i18n: i18nInstance });
};
exports.useInstanceTranslation = useInstanceTranslation;
exports.default = exports.useInstanceTranslation;
