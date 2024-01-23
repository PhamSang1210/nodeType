"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const access_routes_1 = __importDefault(require("./access/access.routes"));
function routes(app) {
    app.use("/", access_routes_1.default);
}
exports.default = routes;
