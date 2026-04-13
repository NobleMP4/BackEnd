"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeeksController = void 0;
const common_1 = require("@nestjs/common");
const weeks_service_1 = require("./weeks.service");
const passport_1 = require("@nestjs/passport");
let WeeksController = class WeeksController {
    weeksService;
    constructor(weeksService) {
        this.weeksService = weeksService;
    }
    async create(dto, req) {
        this.checkAdmin(req.user.rank);
        return this.weeksService.create(dto);
    }
    async findAll() {
        return this.weeksService.findAll();
    }
    async findOne(id) {
        return this.weeksService.findOne(+id);
    }
    async remove(id, req) {
        this.checkAdmin(req.user.rank);
        return this.weeksService.remove(+id);
    }
    async publish(id, req) {
        this.checkAdmin(req.user.rank);
        await this.weeksService.triggerDiscordUpdate(+id, true);
        return { message: 'Publié sur Discord' };
    }
    checkAdmin(rank) {
        const em = ['CS_IN_CHARGE', 'COMMANDING_OFFICER', 'ASSISTANT_COMMANDING_OFFICER'];
        if (!em.includes(rank))
            throw new common_1.ForbiddenException('EM Requis.');
    }
};
exports.WeeksController = WeeksController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WeeksController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WeeksController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeeksController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WeeksController.prototype, "remove", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Post)(':id/publish'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], WeeksController.prototype, "publish", null);
exports.WeeksController = WeeksController = __decorate([
    (0, common_1.Controller)('weeks'),
    __metadata("design:paramtypes", [weeks_service_1.WeeksService])
], WeeksController);
//# sourceMappingURL=weeks.controller.js.map