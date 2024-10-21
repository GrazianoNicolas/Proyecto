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
exports.RegistrationDatasourceImpl = void 0;
const domain_1 = require("../../domain");
const postgres_1 = require("../../data/postgres");
class RegistrationDatasourceImpl {
    create(createTodoDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newregistration = yield postgres_1.prima.registration.create({
                data: {
                    studentId: createTodoDto.student,
                    courseId: createTodoDto.course,
                    delet: false,
                },
            });
            return domain_1.Registration.fromObject(newregistration);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allregistration = yield postgres_1.prima.registration.findMany({
                where: { delet: false },
            });
            return allregistration.map((regis) => domain_1.Registration.fromObject(regis));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const registration = yield postgres_1.prima.registration.findFirst({
                where: { id: id, delet: false },
            });
            if (!registration) {
                throw new Error("no se encontro el estudiante ");
            }
            return domain_1.Registration.fromObject(registration);
        });
    }
    updateById(updateRegistrationtDto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(updateRegistrationtDto.id);
            const updateregistration = yield postgres_1.prima.registration.update({
                where: { id: updateRegistrationtDto.id, delet: false },
                data: {
                    studentId: updateRegistrationtDto.student,
                    courseId: updateRegistrationtDto.course,
                },
            });
            return domain_1.Registration.fromObject(updateregistration);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.findById(id);
            let registration = yield postgres_1.prima.registration.update({
                where: { id: id, delet: false },
                data: { delet: true },
            });
            return domain_1.Registration.fromObject(registration);
        });
    }
}
exports.RegistrationDatasourceImpl = RegistrationDatasourceImpl;
