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
exports.userService = void 0;
const client_1 = require("@prisma/client");
class UserService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getAllUser() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.prisma.user.findMany();
                return users;
            }
            catch (error) {
                console.error("Error fetching users:", error);
                throw error;
            }
        });
    }
}
exports.userService = new UserService();
