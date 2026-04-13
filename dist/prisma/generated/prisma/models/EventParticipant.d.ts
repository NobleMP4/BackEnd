import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EventParticipantModel = runtime.Types.Result.DefaultSelection<Prisma.$EventParticipantPayload>;
export type AggregateEventParticipant = {
    _count: EventParticipantCountAggregateOutputType | null;
    _avg: EventParticipantAvgAggregateOutputType | null;
    _sum: EventParticipantSumAggregateOutputType | null;
    _min: EventParticipantMinAggregateOutputType | null;
    _max: EventParticipantMaxAggregateOutputType | null;
};
export type EventParticipantAvgAggregateOutputType = {
    event_id: number | null;
    user_id: number | null;
};
export type EventParticipantSumAggregateOutputType = {
    event_id: number | null;
    user_id: number | null;
};
export type EventParticipantMinAggregateOutputType = {
    event_id: number | null;
    user_id: number | null;
};
export type EventParticipantMaxAggregateOutputType = {
    event_id: number | null;
    user_id: number | null;
};
export type EventParticipantCountAggregateOutputType = {
    event_id: number;
    user_id: number;
    _all: number;
};
export type EventParticipantAvgAggregateInputType = {
    event_id?: true;
    user_id?: true;
};
export type EventParticipantSumAggregateInputType = {
    event_id?: true;
    user_id?: true;
};
export type EventParticipantMinAggregateInputType = {
    event_id?: true;
    user_id?: true;
};
export type EventParticipantMaxAggregateInputType = {
    event_id?: true;
    user_id?: true;
};
export type EventParticipantCountAggregateInputType = {
    event_id?: true;
    user_id?: true;
    _all?: true;
};
export type EventParticipantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventParticipantWhereInput;
    orderBy?: Prisma.EventParticipantOrderByWithRelationInput | Prisma.EventParticipantOrderByWithRelationInput[];
    cursor?: Prisma.EventParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventParticipantCountAggregateInputType;
    _avg?: EventParticipantAvgAggregateInputType;
    _sum?: EventParticipantSumAggregateInputType;
    _min?: EventParticipantMinAggregateInputType;
    _max?: EventParticipantMaxAggregateInputType;
};
export type GetEventParticipantAggregateType<T extends EventParticipantAggregateArgs> = {
    [P in keyof T & keyof AggregateEventParticipant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEventParticipant[P]> : Prisma.GetScalarType<T[P], AggregateEventParticipant[P]>;
};
export type EventParticipantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventParticipantWhereInput;
    orderBy?: Prisma.EventParticipantOrderByWithAggregationInput | Prisma.EventParticipantOrderByWithAggregationInput[];
    by: Prisma.EventParticipantScalarFieldEnum[] | Prisma.EventParticipantScalarFieldEnum;
    having?: Prisma.EventParticipantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventParticipantCountAggregateInputType | true;
    _avg?: EventParticipantAvgAggregateInputType;
    _sum?: EventParticipantSumAggregateInputType;
    _min?: EventParticipantMinAggregateInputType;
    _max?: EventParticipantMaxAggregateInputType;
};
export type EventParticipantGroupByOutputType = {
    event_id: number;
    user_id: number;
    _count: EventParticipantCountAggregateOutputType | null;
    _avg: EventParticipantAvgAggregateOutputType | null;
    _sum: EventParticipantSumAggregateOutputType | null;
    _min: EventParticipantMinAggregateOutputType | null;
    _max: EventParticipantMaxAggregateOutputType | null;
};
type GetEventParticipantGroupByPayload<T extends EventParticipantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventParticipantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventParticipantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventParticipantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventParticipantGroupByOutputType[P]>;
}>>;
export type EventParticipantWhereInput = {
    AND?: Prisma.EventParticipantWhereInput | Prisma.EventParticipantWhereInput[];
    OR?: Prisma.EventParticipantWhereInput[];
    NOT?: Prisma.EventParticipantWhereInput | Prisma.EventParticipantWhereInput[];
    event_id?: Prisma.IntFilter<"EventParticipant"> | number;
    user_id?: Prisma.IntFilter<"EventParticipant"> | number;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type EventParticipantOrderByWithRelationInput = {
    event_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    event?: Prisma.EventOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type EventParticipantWhereUniqueInput = Prisma.AtLeast<{
    event_id_user_id?: Prisma.EventParticipantEvent_idUser_idCompoundUniqueInput;
    AND?: Prisma.EventParticipantWhereInput | Prisma.EventParticipantWhereInput[];
    OR?: Prisma.EventParticipantWhereInput[];
    NOT?: Prisma.EventParticipantWhereInput | Prisma.EventParticipantWhereInput[];
    event_id?: Prisma.IntFilter<"EventParticipant"> | number;
    user_id?: Prisma.IntFilter<"EventParticipant"> | number;
    event?: Prisma.XOR<Prisma.EventScalarRelationFilter, Prisma.EventWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "event_id_user_id">;
export type EventParticipantOrderByWithAggregationInput = {
    event_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    _count?: Prisma.EventParticipantCountOrderByAggregateInput;
    _avg?: Prisma.EventParticipantAvgOrderByAggregateInput;
    _max?: Prisma.EventParticipantMaxOrderByAggregateInput;
    _min?: Prisma.EventParticipantMinOrderByAggregateInput;
    _sum?: Prisma.EventParticipantSumOrderByAggregateInput;
};
export type EventParticipantScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventParticipantScalarWhereWithAggregatesInput | Prisma.EventParticipantScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventParticipantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventParticipantScalarWhereWithAggregatesInput | Prisma.EventParticipantScalarWhereWithAggregatesInput[];
    event_id?: Prisma.IntWithAggregatesFilter<"EventParticipant"> | number;
    user_id?: Prisma.IntWithAggregatesFilter<"EventParticipant"> | number;
};
export type EventParticipantCreateInput = {
    event: Prisma.EventCreateNestedOneWithoutParticipantsInput;
    user: Prisma.UserCreateNestedOneWithoutParticipantsInput;
};
export type EventParticipantUncheckedCreateInput = {
    event_id: number;
    user_id: number;
};
export type EventParticipantUpdateInput = {
    event?: Prisma.EventUpdateOneRequiredWithoutParticipantsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutParticipantsNestedInput;
};
export type EventParticipantUncheckedUpdateInput = {
    event_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EventParticipantCreateManyInput = {
    event_id: number;
    user_id: number;
};
export type EventParticipantUpdateManyMutationInput = {};
export type EventParticipantUncheckedUpdateManyInput = {
    event_id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EventParticipantListRelationFilter = {
    every?: Prisma.EventParticipantWhereInput;
    some?: Prisma.EventParticipantWhereInput;
    none?: Prisma.EventParticipantWhereInput;
};
export type EventParticipantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventParticipantEvent_idUser_idCompoundUniqueInput = {
    event_id: number;
    user_id: number;
};
export type EventParticipantCountOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type EventParticipantAvgOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type EventParticipantMaxOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type EventParticipantMinOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type EventParticipantSumOrderByAggregateInput = {
    event_id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
};
export type EventParticipantCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventParticipantCreateWithoutUserInput, Prisma.EventParticipantUncheckedCreateWithoutUserInput> | Prisma.EventParticipantCreateWithoutUserInput[] | Prisma.EventParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventParticipantCreateOrConnectWithoutUserInput | Prisma.EventParticipantCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventParticipantCreateManyUserInputEnvelope;
    connect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
};
export type EventParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.EventParticipantCreateWithoutUserInput, Prisma.EventParticipantUncheckedCreateWithoutUserInput> | Prisma.EventParticipantCreateWithoutUserInput[] | Prisma.EventParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventParticipantCreateOrConnectWithoutUserInput | Prisma.EventParticipantCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.EventParticipantCreateManyUserInputEnvelope;
    connect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
};
export type EventParticipantUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventParticipantCreateWithoutUserInput, Prisma.EventParticipantUncheckedCreateWithoutUserInput> | Prisma.EventParticipantCreateWithoutUserInput[] | Prisma.EventParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventParticipantCreateOrConnectWithoutUserInput | Prisma.EventParticipantCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventParticipantUpsertWithWhereUniqueWithoutUserInput | Prisma.EventParticipantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventParticipantCreateManyUserInputEnvelope;
    set?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    disconnect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    delete?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    connect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    update?: Prisma.EventParticipantUpdateWithWhereUniqueWithoutUserInput | Prisma.EventParticipantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventParticipantUpdateManyWithWhereWithoutUserInput | Prisma.EventParticipantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventParticipantScalarWhereInput | Prisma.EventParticipantScalarWhereInput[];
};
export type EventParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.EventParticipantCreateWithoutUserInput, Prisma.EventParticipantUncheckedCreateWithoutUserInput> | Prisma.EventParticipantCreateWithoutUserInput[] | Prisma.EventParticipantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.EventParticipantCreateOrConnectWithoutUserInput | Prisma.EventParticipantCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.EventParticipantUpsertWithWhereUniqueWithoutUserInput | Prisma.EventParticipantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.EventParticipantCreateManyUserInputEnvelope;
    set?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    disconnect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    delete?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    connect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    update?: Prisma.EventParticipantUpdateWithWhereUniqueWithoutUserInput | Prisma.EventParticipantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.EventParticipantUpdateManyWithWhereWithoutUserInput | Prisma.EventParticipantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.EventParticipantScalarWhereInput | Prisma.EventParticipantScalarWhereInput[];
};
export type EventParticipantCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventParticipantCreateWithoutEventInput, Prisma.EventParticipantUncheckedCreateWithoutEventInput> | Prisma.EventParticipantCreateWithoutEventInput[] | Prisma.EventParticipantUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventParticipantCreateOrConnectWithoutEventInput | Prisma.EventParticipantCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventParticipantCreateManyEventInputEnvelope;
    connect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
};
export type EventParticipantUncheckedCreateNestedManyWithoutEventInput = {
    create?: Prisma.XOR<Prisma.EventParticipantCreateWithoutEventInput, Prisma.EventParticipantUncheckedCreateWithoutEventInput> | Prisma.EventParticipantCreateWithoutEventInput[] | Prisma.EventParticipantUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventParticipantCreateOrConnectWithoutEventInput | Prisma.EventParticipantCreateOrConnectWithoutEventInput[];
    createMany?: Prisma.EventParticipantCreateManyEventInputEnvelope;
    connect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
};
export type EventParticipantUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventParticipantCreateWithoutEventInput, Prisma.EventParticipantUncheckedCreateWithoutEventInput> | Prisma.EventParticipantCreateWithoutEventInput[] | Prisma.EventParticipantUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventParticipantCreateOrConnectWithoutEventInput | Prisma.EventParticipantCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventParticipantUpsertWithWhereUniqueWithoutEventInput | Prisma.EventParticipantUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventParticipantCreateManyEventInputEnvelope;
    set?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    disconnect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    delete?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    connect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    update?: Prisma.EventParticipantUpdateWithWhereUniqueWithoutEventInput | Prisma.EventParticipantUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventParticipantUpdateManyWithWhereWithoutEventInput | Prisma.EventParticipantUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventParticipantScalarWhereInput | Prisma.EventParticipantScalarWhereInput[];
};
export type EventParticipantUncheckedUpdateManyWithoutEventNestedInput = {
    create?: Prisma.XOR<Prisma.EventParticipantCreateWithoutEventInput, Prisma.EventParticipantUncheckedCreateWithoutEventInput> | Prisma.EventParticipantCreateWithoutEventInput[] | Prisma.EventParticipantUncheckedCreateWithoutEventInput[];
    connectOrCreate?: Prisma.EventParticipantCreateOrConnectWithoutEventInput | Prisma.EventParticipantCreateOrConnectWithoutEventInput[];
    upsert?: Prisma.EventParticipantUpsertWithWhereUniqueWithoutEventInput | Prisma.EventParticipantUpsertWithWhereUniqueWithoutEventInput[];
    createMany?: Prisma.EventParticipantCreateManyEventInputEnvelope;
    set?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    disconnect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    delete?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    connect?: Prisma.EventParticipantWhereUniqueInput | Prisma.EventParticipantWhereUniqueInput[];
    update?: Prisma.EventParticipantUpdateWithWhereUniqueWithoutEventInput | Prisma.EventParticipantUpdateWithWhereUniqueWithoutEventInput[];
    updateMany?: Prisma.EventParticipantUpdateManyWithWhereWithoutEventInput | Prisma.EventParticipantUpdateManyWithWhereWithoutEventInput[];
    deleteMany?: Prisma.EventParticipantScalarWhereInput | Prisma.EventParticipantScalarWhereInput[];
};
export type EventParticipantCreateWithoutUserInput = {
    event: Prisma.EventCreateNestedOneWithoutParticipantsInput;
};
export type EventParticipantUncheckedCreateWithoutUserInput = {
    event_id: number;
};
export type EventParticipantCreateOrConnectWithoutUserInput = {
    where: Prisma.EventParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventParticipantCreateWithoutUserInput, Prisma.EventParticipantUncheckedCreateWithoutUserInput>;
};
export type EventParticipantCreateManyUserInputEnvelope = {
    data: Prisma.EventParticipantCreateManyUserInput | Prisma.EventParticipantCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type EventParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventParticipantUpdateWithoutUserInput, Prisma.EventParticipantUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.EventParticipantCreateWithoutUserInput, Prisma.EventParticipantUncheckedCreateWithoutUserInput>;
};
export type EventParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.EventParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventParticipantUpdateWithoutUserInput, Prisma.EventParticipantUncheckedUpdateWithoutUserInput>;
};
export type EventParticipantUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.EventParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.EventParticipantUpdateManyMutationInput, Prisma.EventParticipantUncheckedUpdateManyWithoutUserInput>;
};
export type EventParticipantScalarWhereInput = {
    AND?: Prisma.EventParticipantScalarWhereInput | Prisma.EventParticipantScalarWhereInput[];
    OR?: Prisma.EventParticipantScalarWhereInput[];
    NOT?: Prisma.EventParticipantScalarWhereInput | Prisma.EventParticipantScalarWhereInput[];
    event_id?: Prisma.IntFilter<"EventParticipant"> | number;
    user_id?: Prisma.IntFilter<"EventParticipant"> | number;
};
export type EventParticipantCreateWithoutEventInput = {
    user: Prisma.UserCreateNestedOneWithoutParticipantsInput;
};
export type EventParticipantUncheckedCreateWithoutEventInput = {
    user_id: number;
};
export type EventParticipantCreateOrConnectWithoutEventInput = {
    where: Prisma.EventParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventParticipantCreateWithoutEventInput, Prisma.EventParticipantUncheckedCreateWithoutEventInput>;
};
export type EventParticipantCreateManyEventInputEnvelope = {
    data: Prisma.EventParticipantCreateManyEventInput | Prisma.EventParticipantCreateManyEventInput[];
    skipDuplicates?: boolean;
};
export type EventParticipantUpsertWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventParticipantUpdateWithoutEventInput, Prisma.EventParticipantUncheckedUpdateWithoutEventInput>;
    create: Prisma.XOR<Prisma.EventParticipantCreateWithoutEventInput, Prisma.EventParticipantUncheckedCreateWithoutEventInput>;
};
export type EventParticipantUpdateWithWhereUniqueWithoutEventInput = {
    where: Prisma.EventParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventParticipantUpdateWithoutEventInput, Prisma.EventParticipantUncheckedUpdateWithoutEventInput>;
};
export type EventParticipantUpdateManyWithWhereWithoutEventInput = {
    where: Prisma.EventParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.EventParticipantUpdateManyMutationInput, Prisma.EventParticipantUncheckedUpdateManyWithoutEventInput>;
};
export type EventParticipantCreateManyUserInput = {
    event_id: number;
};
export type EventParticipantUpdateWithoutUserInput = {
    event?: Prisma.EventUpdateOneRequiredWithoutParticipantsNestedInput;
};
export type EventParticipantUncheckedUpdateWithoutUserInput = {
    event_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EventParticipantUncheckedUpdateManyWithoutUserInput = {
    event_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EventParticipantCreateManyEventInput = {
    user_id: number;
};
export type EventParticipantUpdateWithoutEventInput = {
    user?: Prisma.UserUpdateOneRequiredWithoutParticipantsNestedInput;
};
export type EventParticipantUncheckedUpdateWithoutEventInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EventParticipantUncheckedUpdateManyWithoutEventInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type EventParticipantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    event_id?: boolean;
    user_id?: boolean;
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["eventParticipant"]>;
export type EventParticipantSelectScalar = {
    event_id?: boolean;
    user_id?: boolean;
};
export type EventParticipantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"event_id" | "user_id", ExtArgs["result"]["eventParticipant"]>;
export type EventParticipantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event?: boolean | Prisma.EventDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $EventParticipantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EventParticipant";
    objects: {
        event: Prisma.$EventPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        event_id: number;
        user_id: number;
    }, ExtArgs["result"]["eventParticipant"]>;
    composites: {};
};
export type EventParticipantGetPayload<S extends boolean | null | undefined | EventParticipantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload, S>;
export type EventParticipantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventParticipantCountAggregateInputType | true;
};
export interface EventParticipantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EventParticipant'];
        meta: {
            name: 'EventParticipant';
        };
    };
    findUnique<T extends EventParticipantFindUniqueArgs>(args: Prisma.SelectSubset<T, EventParticipantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventParticipantClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventParticipantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventParticipantClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventParticipantFindFirstArgs>(args?: Prisma.SelectSubset<T, EventParticipantFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventParticipantClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventParticipantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventParticipantClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventParticipantFindManyArgs>(args?: Prisma.SelectSubset<T, EventParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventParticipantCreateArgs>(args: Prisma.SelectSubset<T, EventParticipantCreateArgs<ExtArgs>>): Prisma.Prisma__EventParticipantClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventParticipantCreateManyArgs>(args?: Prisma.SelectSubset<T, EventParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends EventParticipantDeleteArgs>(args: Prisma.SelectSubset<T, EventParticipantDeleteArgs<ExtArgs>>): Prisma.Prisma__EventParticipantClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventParticipantUpdateArgs>(args: Prisma.SelectSubset<T, EventParticipantUpdateArgs<ExtArgs>>): Prisma.Prisma__EventParticipantClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventParticipantDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventParticipantUpdateManyArgs>(args: Prisma.SelectSubset<T, EventParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends EventParticipantUpsertArgs>(args: Prisma.SelectSubset<T, EventParticipantUpsertArgs<ExtArgs>>): Prisma.Prisma__EventParticipantClient<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventParticipantCountArgs>(args?: Prisma.Subset<T, EventParticipantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventParticipantCountAggregateOutputType> : number>;
    aggregate<T extends EventParticipantAggregateArgs>(args: Prisma.Subset<T, EventParticipantAggregateArgs>): Prisma.PrismaPromise<GetEventParticipantAggregateType<T>>;
    groupBy<T extends EventParticipantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventParticipantGroupByArgs['orderBy'];
    } : {
        orderBy?: EventParticipantGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventParticipantFieldRefs;
}
export interface Prisma__EventParticipantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event<T extends Prisma.EventDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EventDefaultArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventParticipantFieldRefs {
    readonly event_id: Prisma.FieldRef<"EventParticipant", 'Int'>;
    readonly user_id: Prisma.FieldRef<"EventParticipant", 'Int'>;
}
export type EventParticipantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    where: Prisma.EventParticipantWhereUniqueInput;
};
export type EventParticipantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    where: Prisma.EventParticipantWhereUniqueInput;
};
export type EventParticipantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    where?: Prisma.EventParticipantWhereInput;
    orderBy?: Prisma.EventParticipantOrderByWithRelationInput | Prisma.EventParticipantOrderByWithRelationInput[];
    cursor?: Prisma.EventParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventParticipantScalarFieldEnum | Prisma.EventParticipantScalarFieldEnum[];
};
export type EventParticipantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    where?: Prisma.EventParticipantWhereInput;
    orderBy?: Prisma.EventParticipantOrderByWithRelationInput | Prisma.EventParticipantOrderByWithRelationInput[];
    cursor?: Prisma.EventParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventParticipantScalarFieldEnum | Prisma.EventParticipantScalarFieldEnum[];
};
export type EventParticipantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    where?: Prisma.EventParticipantWhereInput;
    orderBy?: Prisma.EventParticipantOrderByWithRelationInput | Prisma.EventParticipantOrderByWithRelationInput[];
    cursor?: Prisma.EventParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventParticipantScalarFieldEnum | Prisma.EventParticipantScalarFieldEnum[];
};
export type EventParticipantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventParticipantCreateInput, Prisma.EventParticipantUncheckedCreateInput>;
};
export type EventParticipantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventParticipantCreateManyInput | Prisma.EventParticipantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventParticipantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventParticipantUpdateInput, Prisma.EventParticipantUncheckedUpdateInput>;
    where: Prisma.EventParticipantWhereUniqueInput;
};
export type EventParticipantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventParticipantUpdateManyMutationInput, Prisma.EventParticipantUncheckedUpdateManyInput>;
    where?: Prisma.EventParticipantWhereInput;
    limit?: number;
};
export type EventParticipantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    where: Prisma.EventParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventParticipantCreateInput, Prisma.EventParticipantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventParticipantUpdateInput, Prisma.EventParticipantUncheckedUpdateInput>;
};
export type EventParticipantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
    where: Prisma.EventParticipantWhereUniqueInput;
};
export type EventParticipantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventParticipantWhereInput;
    limit?: number;
};
export type EventParticipantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventParticipantSelect<ExtArgs> | null;
    omit?: Prisma.EventParticipantOmit<ExtArgs> | null;
    include?: Prisma.EventParticipantInclude<ExtArgs> | null;
};
export {};
