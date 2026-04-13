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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventOrderByRelevanceFieldEnum = exports.WeekOrderByRelevanceFieldEnum = exports.NullsOrder = exports.UserOrderByRelevanceFieldEnum = exports.SortOrder = exports.EventParticipantScalarFieldEnum = exports.EventScalarFieldEnum = exports.WeekScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Week: 'Week',
    Event: 'Event',
    EventParticipant: 'EventParticipant'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    rank: 'rank',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WeekScalarFieldEnum = {
    id: 'id',
    title: 'title',
    discord_msg_id: 'discord_msg_id',
    created_at: 'created_at',
    discord_msg_id_2: 'discord_msg_id_2'
};
exports.EventScalarFieldEnum = {
    id: 'id',
    week_id: 'week_id',
    day_name: 'day_name',
    title: 'title',
    event_time: 'event_time',
    location: 'location'
};
exports.EventParticipantScalarFieldEnum = {
    event_id: 'event_id',
    user_id: 'user_id'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.UserOrderByRelevanceFieldEnum = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.WeekOrderByRelevanceFieldEnum = {
    title: 'title',
    discord_msg_id: 'discord_msg_id',
    discord_msg_id_2: 'discord_msg_id_2'
};
exports.EventOrderByRelevanceFieldEnum = {
    title: 'title',
    event_time: 'event_time',
    location: 'location'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map