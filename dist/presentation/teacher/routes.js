"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacheRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
class TeacheRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const teacheController = new controller_1.TeacheController();
        router.get("/", teacheController.allTeache);
        router.get("/:id", teacheController.getTeache);
        router.post("/", teacheController.createTeache);
        router.delete("/:id", teacheController.deleteTeache);
        router.put("/:id", teacheController.updateTeache);
        return router;
    }
}
exports.TeacheRoutes = TeacheRoutes;
