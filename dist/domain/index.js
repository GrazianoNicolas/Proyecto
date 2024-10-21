"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./datasources/student.datasource"), exports);
__exportStar(require("./dtos"), exports);
__exportStar(require("./entity/student.entity"), exports);
__exportStar(require("./repository/student.repository"), exports);
__exportStar(require("./datasources/teacher.datasource"), exports);
__exportStar(require("./entity/teacher.entity"), exports);
__exportStar(require("./repository/teacher.repository"), exports);
__exportStar(require("./datasources/course.datasource"), exports);
__exportStar(require("./entity/course.entity"), exports);
__exportStar(require("./repository/course.repository"), exports);
__exportStar(require("./datasources/registration.datasource"), exports);
__exportStar(require("./entity/registration.entity"), exports);
__exportStar(require("./repository/registration.repository"), exports);
