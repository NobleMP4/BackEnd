import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Week: "Week";
    readonly Event: "Event";
    readonly EventParticipant: "EventParticipant";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly password: "password";
    readonly rank: "rank";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const WeekScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly discord_msg_id: "discord_msg_id";
    readonly created_at: "created_at";
    readonly discord_msg_id_2: "discord_msg_id_2";
};
export type WeekScalarFieldEnum = (typeof WeekScalarFieldEnum)[keyof typeof WeekScalarFieldEnum];
export declare const EventScalarFieldEnum: {
    readonly id: "id";
    readonly week_id: "week_id";
    readonly day_name: "day_name";
    readonly title: "title";
    readonly event_time: "event_time";
    readonly location: "location";
};
export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum];
export declare const EventParticipantScalarFieldEnum: {
    readonly event_id: "event_id";
    readonly user_id: "user_id";
};
export type EventParticipantScalarFieldEnum = (typeof EventParticipantScalarFieldEnum)[keyof typeof EventParticipantScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const UserOrderByRelevanceFieldEnum: {
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly password: "password";
};
export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const WeekOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly discord_msg_id: "discord_msg_id";
    readonly discord_msg_id_2: "discord_msg_id_2";
};
export type WeekOrderByRelevanceFieldEnum = (typeof WeekOrderByRelevanceFieldEnum)[keyof typeof WeekOrderByRelevanceFieldEnum];
export declare const EventOrderByRelevanceFieldEnum: {
    readonly title: "title";
    readonly event_time: "event_time";
    readonly location: "location";
};
export type EventOrderByRelevanceFieldEnum = (typeof EventOrderByRelevanceFieldEnum)[keyof typeof EventOrderByRelevanceFieldEnum];
