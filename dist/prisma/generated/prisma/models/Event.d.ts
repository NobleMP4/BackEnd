import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EventModel = runtime.Types.Result.DefaultSelection<Prisma.$EventPayload>;
export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type EventAvgAggregateOutputType = {
    id: number | null;
    week_id: number | null;
};
export type EventSumAggregateOutputType = {
    id: number | null;
    week_id: number | null;
};
export type EventMinAggregateOutputType = {
    id: number | null;
    week_id: number | null;
    day_name: $Enums.DayName | null;
    title: string | null;
    event_time: string | null;
    location: string | null;
};
export type EventMaxAggregateOutputType = {
    id: number | null;
    week_id: number | null;
    day_name: $Enums.DayName | null;
    title: string | null;
    event_time: string | null;
    location: string | null;
};
export type EventCountAggregateOutputType = {
    id: number;
    week_id: number;
    day_name: number;
    title: number;
    event_time: number;
    location: number;
    _all: number;
};
export type EventAvgAggregateInputType = {
    id?: true;
    week_id?: true;
};
export type EventSumAggregateInputType = {
    id?: true;
    week_id?: true;
};
export type EventMinAggregateInputType = {
    id?: true;
    week_id?: true;
    day_name?: true;
    title?: true;
    event_time?: true;
    location?: true;
};
export type EventMaxAggregateInputType = {
    id?: true;
    week_id?: true;
    day_name?: true;
    title?: true;
    event_time?: true;
    location?: true;
};
export type EventCountAggregateInputType = {
    id?: true;
    week_id?: true;
    day_name?: true;
    title?: true;
    event_time?: true;
    location?: true;
    _all?: true;
};
export type EventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventCountAggregateInputType;
    _avg?: EventAvgAggregateInputType;
    _sum?: EventSumAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvent[P]> : Prisma.GetScalarType<T[P], AggregateEvent[P]>;
};
export type EventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithAggregationInput | Prisma.EventOrderByWithAggregationInput[];
    by: Prisma.EventScalarFieldEnum[] | Prisma.EventScalarFieldEnum;
    having?: Prisma.EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _avg?: EventAvgAggregateInputType;
    _sum?: EventSumAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type EventGroupByOutputType = {
    id: number;
    week_id: number;
    day_name: $Enums.DayName;
    title: string;
    event_time: string | null;
    location: string | null;
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]>;
}>>;
export type EventWhereInput = {
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    id?: Prisma.IntFilter<"Event"> | number;
    week_id?: Prisma.IntFilter<"Event"> | number;
    day_name?: Prisma.EnumDayNameFilter<"Event"> | $Enums.DayName;
    title?: Prisma.StringFilter<"Event"> | string;
    event_time?: Prisma.StringNullableFilter<"Event"> | string | null;
    location?: Prisma.StringNullableFilter<"Event"> | string | null;
    participants?: Prisma.EventParticipantListRelationFilter;
    week?: Prisma.XOR<Prisma.WeekScalarRelationFilter, Prisma.WeekWhereInput>;
};
export type EventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    week_id?: Prisma.SortOrder;
    day_name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    event_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    participants?: Prisma.EventParticipantOrderByRelationAggregateInput;
    week?: Prisma.WeekOrderByWithRelationInput;
    _relevance?: Prisma.EventOrderByRelevanceInput;
};
export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    week_id?: Prisma.IntFilter<"Event"> | number;
    day_name?: Prisma.EnumDayNameFilter<"Event"> | $Enums.DayName;
    title?: Prisma.StringFilter<"Event"> | string;
    event_time?: Prisma.StringNullableFilter<"Event"> | string | null;
    location?: Prisma.StringNullableFilter<"Event"> | string | null;
    participants?: Prisma.EventParticipantListRelationFilter;
    week?: Prisma.XOR<Prisma.WeekScalarRelationFilter, Prisma.WeekWhereInput>;
}, "id">;
export type EventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    week_id?: Prisma.SortOrder;
    day_name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    event_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    location?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EventCountOrderByAggregateInput;
    _avg?: Prisma.EventAvgOrderByAggregateInput;
    _max?: Prisma.EventMaxOrderByAggregateInput;
    _min?: Prisma.EventMinOrderByAggregateInput;
    _sum?: Prisma.EventSumOrderByAggregateInput;
};
export type EventScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Event"> | number;
    week_id?: Prisma.IntWithAggregatesFilter<"Event"> | number;
    day_name?: Prisma.EnumDayNameWithAggregatesFilter<"Event"> | $Enums.DayName;
    title?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    event_time?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
    location?: Prisma.StringNullableWithAggregatesFilter<"Event"> | string | null;
};
export type EventCreateInput = {
    day_name: $Enums.DayName;
    title: string;
    event_time?: string | null;
    location?: string | null;
    participants?: Prisma.EventParticipantCreateNestedManyWithoutEventInput;
    week: Prisma.WeekCreateNestedOneWithoutEventsInput;
};
export type EventUncheckedCreateInput = {
    id?: number;
    week_id: number;
    day_name: $Enums.DayName;
    title: string;
    event_time?: string | null;
    location?: string | null;
    participants?: Prisma.EventParticipantUncheckedCreateNestedManyWithoutEventInput;
};
export type EventUpdateInput = {
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    participants?: Prisma.EventParticipantUpdateManyWithoutEventNestedInput;
    week?: Prisma.WeekUpdateOneRequiredWithoutEventsNestedInput;
};
export type EventUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    week_id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    participants?: Prisma.EventParticipantUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventCreateManyInput = {
    id?: number;
    week_id: number;
    day_name: $Enums.DayName;
    title: string;
    event_time?: string | null;
    location?: string | null;
};
export type EventUpdateManyMutationInput = {
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EventUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    week_id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EventListRelationFilter = {
    every?: Prisma.EventWhereInput;
    some?: Prisma.EventWhereInput;
    none?: Prisma.EventWhereInput;
};
export type EventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventOrderByRelevanceInput = {
    fields: Prisma.EventOrderByRelevanceFieldEnum | Prisma.EventOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type EventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    week_id?: Prisma.SortOrder;
    day_name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    event_time?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
};
export type EventAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    week_id?: Prisma.SortOrder;
};
export type EventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    week_id?: Prisma.SortOrder;
    day_name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    event_time?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
};
export type EventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    week_id?: Prisma.SortOrder;
    day_name?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    event_time?: Prisma.SortOrder;
    location?: Prisma.SortOrder;
};
export type EventSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    week_id?: Prisma.SortOrder;
};
export type EventScalarRelationFilter = {
    is?: Prisma.EventWhereInput;
    isNot?: Prisma.EventWhereInput;
};
export type EventCreateNestedManyWithoutWeekInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutWeekInput, Prisma.EventUncheckedCreateWithoutWeekInput> | Prisma.EventCreateWithoutWeekInput[] | Prisma.EventUncheckedCreateWithoutWeekInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutWeekInput | Prisma.EventCreateOrConnectWithoutWeekInput[];
    createMany?: Prisma.EventCreateManyWeekInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUncheckedCreateNestedManyWithoutWeekInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutWeekInput, Prisma.EventUncheckedCreateWithoutWeekInput> | Prisma.EventCreateWithoutWeekInput[] | Prisma.EventUncheckedCreateWithoutWeekInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutWeekInput | Prisma.EventCreateOrConnectWithoutWeekInput[];
    createMany?: Prisma.EventCreateManyWeekInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUpdateManyWithoutWeekNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutWeekInput, Prisma.EventUncheckedCreateWithoutWeekInput> | Prisma.EventCreateWithoutWeekInput[] | Prisma.EventUncheckedCreateWithoutWeekInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutWeekInput | Prisma.EventCreateOrConnectWithoutWeekInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutWeekInput | Prisma.EventUpsertWithWhereUniqueWithoutWeekInput[];
    createMany?: Prisma.EventCreateManyWeekInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutWeekInput | Prisma.EventUpdateWithWhereUniqueWithoutWeekInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutWeekInput | Prisma.EventUpdateManyWithWhereWithoutWeekInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventUncheckedUpdateManyWithoutWeekNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutWeekInput, Prisma.EventUncheckedCreateWithoutWeekInput> | Prisma.EventCreateWithoutWeekInput[] | Prisma.EventUncheckedCreateWithoutWeekInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutWeekInput | Prisma.EventCreateOrConnectWithoutWeekInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutWeekInput | Prisma.EventUpsertWithWhereUniqueWithoutWeekInput[];
    createMany?: Prisma.EventCreateManyWeekInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutWeekInput | Prisma.EventUpdateWithWhereUniqueWithoutWeekInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutWeekInput | Prisma.EventUpdateManyWithWhereWithoutWeekInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EnumDayNameFieldUpdateOperationsInput = {
    set?: $Enums.DayName;
};
export type EventCreateNestedOneWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutParticipantsInput, Prisma.EventUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutParticipantsInput;
    connect?: Prisma.EventWhereUniqueInput;
};
export type EventUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutParticipantsInput, Prisma.EventUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutParticipantsInput;
    upsert?: Prisma.EventUpsertWithoutParticipantsInput;
    connect?: Prisma.EventWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EventUpdateToOneWithWhereWithoutParticipantsInput, Prisma.EventUpdateWithoutParticipantsInput>, Prisma.EventUncheckedUpdateWithoutParticipantsInput>;
};
export type EventCreateWithoutWeekInput = {
    day_name: $Enums.DayName;
    title: string;
    event_time?: string | null;
    location?: string | null;
    participants?: Prisma.EventParticipantCreateNestedManyWithoutEventInput;
};
export type EventUncheckedCreateWithoutWeekInput = {
    id?: number;
    day_name: $Enums.DayName;
    title: string;
    event_time?: string | null;
    location?: string | null;
    participants?: Prisma.EventParticipantUncheckedCreateNestedManyWithoutEventInput;
};
export type EventCreateOrConnectWithoutWeekInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutWeekInput, Prisma.EventUncheckedCreateWithoutWeekInput>;
};
export type EventCreateManyWeekInputEnvelope = {
    data: Prisma.EventCreateManyWeekInput | Prisma.EventCreateManyWeekInput[];
    skipDuplicates?: boolean;
};
export type EventUpsertWithWhereUniqueWithoutWeekInput = {
    where: Prisma.EventWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventUpdateWithoutWeekInput, Prisma.EventUncheckedUpdateWithoutWeekInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutWeekInput, Prisma.EventUncheckedCreateWithoutWeekInput>;
};
export type EventUpdateWithWhereUniqueWithoutWeekInput = {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutWeekInput, Prisma.EventUncheckedUpdateWithoutWeekInput>;
};
export type EventUpdateManyWithWhereWithoutWeekInput = {
    where: Prisma.EventScalarWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyWithoutWeekInput>;
};
export type EventScalarWhereInput = {
    AND?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    OR?: Prisma.EventScalarWhereInput[];
    NOT?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    id?: Prisma.IntFilter<"Event"> | number;
    week_id?: Prisma.IntFilter<"Event"> | number;
    day_name?: Prisma.EnumDayNameFilter<"Event"> | $Enums.DayName;
    title?: Prisma.StringFilter<"Event"> | string;
    event_time?: Prisma.StringNullableFilter<"Event"> | string | null;
    location?: Prisma.StringNullableFilter<"Event"> | string | null;
};
export type EventCreateWithoutParticipantsInput = {
    day_name: $Enums.DayName;
    title: string;
    event_time?: string | null;
    location?: string | null;
    week: Prisma.WeekCreateNestedOneWithoutEventsInput;
};
export type EventUncheckedCreateWithoutParticipantsInput = {
    id?: number;
    week_id: number;
    day_name: $Enums.DayName;
    title: string;
    event_time?: string | null;
    location?: string | null;
};
export type EventCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutParticipantsInput, Prisma.EventUncheckedCreateWithoutParticipantsInput>;
};
export type EventUpsertWithoutParticipantsInput = {
    update: Prisma.XOR<Prisma.EventUpdateWithoutParticipantsInput, Prisma.EventUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutParticipantsInput, Prisma.EventUncheckedCreateWithoutParticipantsInput>;
    where?: Prisma.EventWhereInput;
};
export type EventUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: Prisma.EventWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutParticipantsInput, Prisma.EventUncheckedUpdateWithoutParticipantsInput>;
};
export type EventUpdateWithoutParticipantsInput = {
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    week?: Prisma.WeekUpdateOneRequiredWithoutEventsNestedInput;
};
export type EventUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    week_id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EventCreateManyWeekInput = {
    id?: number;
    day_name: $Enums.DayName;
    title: string;
    event_time?: string | null;
    location?: string | null;
};
export type EventUpdateWithoutWeekInput = {
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    participants?: Prisma.EventParticipantUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateWithoutWeekInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    participants?: Prisma.EventParticipantUncheckedUpdateManyWithoutEventNestedInput;
};
export type EventUncheckedUpdateManyWithoutWeekInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    day_name?: Prisma.EnumDayNameFieldUpdateOperationsInput | $Enums.DayName;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    location?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EventCountOutputType = {
    participants: number;
};
export type EventCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participants?: boolean | EventCountOutputTypeCountParticipantsArgs;
};
export type EventCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventCountOutputTypeSelect<ExtArgs> | null;
};
export type EventCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventParticipantWhereInput;
};
export type EventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    week_id?: boolean;
    day_name?: boolean;
    title?: boolean;
    event_time?: boolean;
    location?: boolean;
    participants?: boolean | Prisma.Event$participantsArgs<ExtArgs>;
    week?: boolean | Prisma.WeekDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.EventCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectScalar = {
    id?: boolean;
    week_id?: boolean;
    day_name?: boolean;
    title?: boolean;
    event_time?: boolean;
    location?: boolean;
};
export type EventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "week_id" | "day_name" | "title" | "event_time" | "location", ExtArgs["result"]["event"]>;
export type EventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participants?: boolean | Prisma.Event$participantsArgs<ExtArgs>;
    week?: boolean | Prisma.WeekDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.EventCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $EventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Event";
    objects: {
        participants: Prisma.$EventParticipantPayload<ExtArgs>[];
        week: Prisma.$WeekPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        week_id: number;
        day_name: $Enums.DayName;
        title: string;
        event_time: string | null;
        location: string | null;
    }, ExtArgs["result"]["event"]>;
    composites: {};
};
export type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventPayload, S>;
export type EventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventCountAggregateInputType | true;
};
export interface EventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Event'];
        meta: {
            name: 'Event';
        };
    };
    findUnique<T extends EventFindUniqueArgs>(args: Prisma.SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventFindFirstArgs>(args?: Prisma.SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventFindManyArgs>(args?: Prisma.SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventCreateArgs>(args: Prisma.SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventCreateManyArgs>(args?: Prisma.SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends EventDeleteArgs>(args: Prisma.SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventUpdateArgs>(args: Prisma.SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventUpdateManyArgs>(args: Prisma.SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends EventUpsertArgs>(args: Prisma.SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventCountArgs>(args?: Prisma.Subset<T, EventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventCountAggregateOutputType> : number>;
    aggregate<T extends EventAggregateArgs>(args: Prisma.Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>;
    groupBy<T extends EventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventGroupByArgs['orderBy'];
    } : {
        orderBy?: EventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventFieldRefs;
}
export interface Prisma__EventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    participants<T extends Prisma.Event$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Event$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    week<T extends Prisma.WeekDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WeekDefaultArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventFieldRefs {
    readonly id: Prisma.FieldRef<"Event", 'Int'>;
    readonly week_id: Prisma.FieldRef<"Event", 'Int'>;
    readonly day_name: Prisma.FieldRef<"Event", 'DayName'>;
    readonly title: Prisma.FieldRef<"Event", 'String'>;
    readonly event_time: Prisma.FieldRef<"Event", 'String'>;
    readonly location: Prisma.FieldRef<"Event", 'String'>;
}
export type EventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type EventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type EventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type EventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
};
export type EventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
    where: Prisma.EventWhereUniqueInput;
};
export type EventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    where?: Prisma.EventWhereInput;
    limit?: number;
};
export type EventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
};
export type EventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    limit?: number;
};
export type Event$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
};
export {};
