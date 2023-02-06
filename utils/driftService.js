"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataDrift = void 0;
const axios_1 = __importDefault(require("axios"));
const getDataDrift = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataSOL = yield axios_1.default.get("https://mainnet-beta.api.drift.trade/trades?marketIndex=0&marketType=perp");
    const dataBTC = yield axios_1.default.get("https://mainnet-beta.api.drift.trade/trades?marketIndex=1&marketType=perp");
    const dataETH = yield axios_1.default.get("https://mainnet-beta.api.drift.trade/trades?marketIndex=2&marketType=perp");
    return dataSOL.data;
});
exports.getDataDrift = getDataDrift;
