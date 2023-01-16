"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@test/client");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html').send(`
        <h1>HALO</h1>
        <p>Add: ${(0, client_1.addWeird)(2, 3)}</p>
    `);
});
