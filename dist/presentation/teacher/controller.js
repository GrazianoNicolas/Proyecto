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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacheController = void 0;
const postgres_1 = require("../../data/postgres");
class TeacheController {
    constructor() {
        this.allTeache = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allStudent = yield postgres_1.prima.teacher.findMany({
                where: { delet: false },
            });
            res.json(allStudent);
        });
        this.getTeache = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                res.status(400).json({ error: "Id argument is not number " });
            const teacher = yield postgres_1.prima.teacher.findFirst({
                where: { id: id },
            });
            teacher
                ? res.json(teacher)
                : res.status(404).json({ error: "Error profesor no existe" });
        });
        this.createTeache = (req, res) => {
            const { email, name } = req.body;
            if (email)
                res.status(200).json("email, name ");
            return res.status(200).json("email, name ");
        };
        this.updateTeache = (req, res) => {
            const { email, name } = req.body;
            return res.status(200).json("email, name ");
        };
        this.deleteTeache = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            if (isNaN(id))
                res.status(400).json({ error: "Id argument is not number " });
            let teacher = postgres_1.prima.teacher.update({
                where: { id: id, delet: false },
                data: { delet: true },
            });
            if (teacher) {
                res.json(teacher);
            }
            else {
                res.status(404).json({ error: "Error profesor no existe" });
            }
        });
    }
}
exports.TeacheController = TeacheController;
