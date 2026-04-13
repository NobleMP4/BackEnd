import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WeekModel = runtime.Types.Result.DefaultSelection<Prisma.$WeekPayload>;
export type AggregateWeek = {
    _count: WeekCountAggregateOutputType | null;
    _avg: WeekAvgAggregateOutputType | null;
    _sum: WeekSumAggregateOutputType | null;
    _min: WeekMinAggregateOutputType | null;
    _max: WeekMaxAggregateOutputType | null;
};
export type WeekAvgAggregateOutputType = {
    id: number | null;
};
export type WeekSumAggregateOutputType = {
    id: number | null;
};
export type WeekMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    discord_msg_id: string | null;
    created_at: Date | null;
    discord_msg_id_2: string | null;
};
export type WeekMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    discord_msg_id: string | null;
    created_at: Date | null;
    discord_msg_id_2: string | null;
};
export type WeekCountAggregateOutputType = {
    id: number;
    title: number;
    discord_msg_id: number;
    created_at: number;
    discord_msg_id_2: number;
    _all: number;
};
export type WeekAvgAggregateInputType = {
    id?: true;
};
export type WeekSumAggregateInputType = {
    id?: true;
};
export type WeekMinAggregateInputType = {
    id?: true;
    title?: true;
    discord_msg_id?: true;
    created_at?: true;
    discord_msg_id_2?: true;
};
export type WeekMaxAggregateInputType = {
    id?: true;
    title?: true;
    discord_msg_id?: true;
    created_at?: true;
    discord_msg_id_2?: true;
};
export type WeekCountAggregateInputType = {
    id?: true;
    title?: true;
    discord_msg_id?: true;
    created_at?: true;
    discord_msg_id_2?: true;
    _all?: true;
};
export type WeekAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WeekWhereInput;
    orderBy?: Prisma.WeekOrderByWithRelationInput | Prisma.WeekOrderByWithRelationInput[];
    cursor?: Prisma.WeekWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WeekCountAggregateInputType;
    _avg?: WeekAvgAggregateInputType;
    _sum?: WeekSumAggregateInputType;
    _min?: WeekMinAggregateInputType;
    _max?: WeekMaxAggregateInputType;
};
export type GetWeekAggregateType<T extends WeekAggregateArgs> = {
    [P in keyof T & keyof AggregateWeek]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWeek[P]> : Prisma.GetScalarType<T[P], AggregateWeek[P]>;
};
export type WeekGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WeekWhereInput;
    orderBy?: Prisma.WeekOrderByWithAggregationInput | Prisma.WeekOrderByWithAggregationInput[];
    by: Prisma.WeekScalarFieldEnum[] | Prisma.WeekScalarFieldEnum;
    having?: Prisma.WeekScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WeekCountAggregateInputType | true;
    _avg?: WeekAvgAggregateInputType;
    _sum?: WeekSumAggregateInputType;
    _min?: WeekMinAggregateInputType;
    _max?: WeekMaxAggregateInputType;
};
export type WeekGroupByOutputType = {
    id: number;
    title: string;
    discord_msg_id: string | null;
    created_at: Date;
    discord_msg_id_2: string | null;
    _count: WeekCountAggregateOutputType | null;
    _avg: WeekAvgAggregateOutputType | null;
    _sum: WeekSumAggregateOutputType | null;
    _min: WeekMinAggregateOutputType | null;
    _max: WeekMaxAggregateOutputType | null;
};
type GetWeekGroupByPayload<T extends WeekGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WeekGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WeekGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WeekGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WeekGroupByOutputType[P]>;
}>>;
export type WeekWhereInput = {
    AND?: Prisma.WeekWhereInput | Prisma.WeekWhereInput[];
    OR?: Prisma.WeekWhereInput[];
    NOT?: Prisma.WeekWhereInput | Prisma.WeekWhereInput[];
    id?: Prisma.IntFilter<"Week"> | number;
    title?: Prisma.StringFilter<"Week"> | string;
    discord_msg_id?: Prisma.StringNullableFilter<"Week"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Week"> | Date | string;
    discord_msg_id_2?: Prisma.StringNullableFilter<"Week"> | string | null;
    events?: Prisma.EventListRelationFilter;
};
export type WeekOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    discord_msg_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    discord_msg_id_2?: Prisma.SortOrderInput | Prisma.SortOrder;
    events?: Prisma.EventOrderByRelationAggregateInput;
    _relevance?: Prisma.WeekOrderByRelevanceInput;
};
export type WeekWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.WeekWhereInput | Prisma.WeekWhereInput[];
    OR?: Prisma.WeekWhereInput[];
    NOT?: Prisma.WeekWhereInput | Prisma.WeekWhereInput[];
    title?: Prisma.StringFilter<"Week"> | string;
    discord_msg_id?: Prisma.StringNullableFilter<"Week"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Week"> | Date | string;
    discord_msg_id_2?: Prisma.StringNullableFilter<"Week"> | string | null;
    events?: Prisma.EventListRelationFilter;
}, "id">;
export type WeekOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    discord_msg_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    discord_msg_id_2?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.WeekCountOrderByAggregateInput;
    _avg?: Prisma.WeekAvgOrderByAggregateInput;
    _max?: Prisma.WeekMaxOrderByAggregateInput;
    _min?: Prisma.WeekMinOrderByAggregateInput;
    _sum?: Prisma.WeekSumOrderByAggregateInput;
};
export type WeekScalarWhereWithAggregatesInput = {
    AND?: Prisma.WeekScalarWhereWithAggregatesInput | Prisma.WeekScalarWhereWithAggregatesInput[];
    OR?: Prisma.WeekScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WeekScalarWhereWithAggregatesInput | Prisma.WeekScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Week"> | number;
    title?: Prisma.StringWithAggregatesFilter<"Week"> | string;
    discord_msg_id?: Prisma.StringNullableWithAggregatesFilter<"Week"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Week"> | Date | string;
    discord_msg_id_2?: Prisma.StringNullableWithAggregatesFilter<"Week"> | string | null;
};
export type WeekCreateInput = {
    title: string;
    discord_msg_id?: string | null;
    created_at?: Date | string;
    discord_msg_id_2?: string | null;
    events?: Prisma.EventCreateNestedManyWithoutWeekInput;
};
export type WeekUncheckedCreateInput = {
    id?: number;
    title: string;
    discord_msg_id?: string | null;
    created_at?: Date | string;
    discord_msg_id_2?: string | null;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutWeekInput;
};
export type WeekUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    discord_msg_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discord_msg_id_2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    events?: Prisma.EventUpdateManyWithoutWeekNestedInput;
};
export type WeekUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    discord_msg_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discord_msg_id_2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    events?: Prisma.EventUncheckedUpdateManyWithoutWeekNestedInput;
};
export type WeekCreateManyInput = {
    id?: number;
    title: string;
    discord_msg_id?: string | null;
    created_at?: Date | string;
    discord_msg_id_2?: string | null;
};
export type WeekUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    discord_msg_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discord_msg_id_2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WeekUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    discord_msg_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discord_msg_id_2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WeekOrderByRelevanceInput = {
    fields: Prisma.WeekOrderByRelevanceFieldEnum | Prisma.WeekOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type WeekCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    discord_msg_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    discord_msg_id_2?: Prisma.SortOrder;
};
export type WeekAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type WeekMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    discord_msg_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    discord_msg_id_2?: Prisma.SortOrder;
};
export type WeekMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    discord_msg_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    discord_msg_id_2?: Prisma.SortOrder;
};
export type WeekSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type WeekScalarRelationFilter = {
    is?: Prisma.WeekWhereInput;
    isNot?: Prisma.WeekWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type WeekCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.WeekCreateWithoutEventsInput, Prisma.WeekUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.WeekCreateOrConnectWithoutEventsInput;
    connect?: Prisma.WeekWhereUniqueInput;
};
export type WeekUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.WeekCreateWithoutEventsInput, Prisma.WeekUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.WeekCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.WeekUpsertWithoutEventsInput;
    connect?: Prisma.WeekWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WeekUpdateToOneWithWhereWithoutEventsInput, Prisma.WeekUpdateWithoutEventsInput>, Prisma.WeekUncheckedUpdateWithoutEventsInput>;
};
export type WeekCreateWithoutEventsInput = {
    title: string;
    discord_msg_id?: string | null;
    created_at?: Date | string;
    discord_msg_id_2?: string | null;
};
export type WeekUncheckedCreateWithoutEventsInput = {
    id?: number;
    title: string;
    discord_msg_id?: string | null;
    created_at?: Date | string;
    discord_msg_id_2?: string | null;
};
export type WeekCreateOrConnectWithoutEventsInput = {
    where: Prisma.WeekWhereUniqueInput;
    create: Prisma.XOR<Prisma.WeekCreateWithoutEventsInput, Prisma.WeekUncheckedCreateWithoutEventsInput>;
};
export type WeekUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.WeekUpdateWithoutEventsInput, Prisma.WeekUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.WeekCreateWithoutEventsInput, Prisma.WeekUncheckedCreateWithoutEventsInput>;
    where?: Prisma.WeekWhereInput;
};
export type WeekUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.WeekWhereInput;
    data: Prisma.XOR<Prisma.WeekUpdateWithoutEventsInput, Prisma.WeekUncheckedUpdateWithoutEventsInput>;
};
export type WeekUpdateWithoutEventsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    discord_msg_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discord_msg_id_2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WeekUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    discord_msg_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discord_msg_id_2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WeekCountOutputType = {
    events: number;
};
export type WeekCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | WeekCountOutputTypeCountEventsArgs;
};
export type WeekCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekCountOutputTypeSelect<ExtArgs> | null;
};
export type WeekCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
export type WeekSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    discord_msg_id?: boolean;
    created_at?: boolean;
    discord_msg_id_2?: boolean;
    events?: boolean | Prisma.Week$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.WeekCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["week"]>;
export type WeekSelectScalar = {
    id?: boolean;
    title?: boolean;
    discord_msg_id?: boolean;
    created_at?: boolean;
    discord_msg_id_2?: boolean;
};
export type WeekOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "discord_msg_id" | "created_at" | "discord_msg_id_2", ExtArgs["result"]["week"]>;
export type WeekInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.Week$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.WeekCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $WeekPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Week";
    objects: {
        events: Prisma.$EventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        title: string;
        discord_msg_id: string | null;
        created_at: Date;
        discord_msg_id_2: string | null;
    }, ExtArgs["result"]["week"]>;
    composites: {};
};
export type WeekGetPayload<S extends boolean | null | undefined | WeekDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WeekPayload, S>;
export type WeekCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WeekFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WeekCountAggregateInputType | true;
};
export interface WeekDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Week'];
        meta: {
            name: 'Week';
        };
    };
    findUnique<T extends WeekFindUniqueArgs>(args: Prisma.SelectSubset<T, WeekFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WeekFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WeekFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WeekFindFirstArgs>(args?: Prisma.SelectSubset<T, WeekFindFirstArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WeekFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WeekFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WeekFindManyArgs>(args?: Prisma.SelectSubset<T, WeekFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WeekCreateArgs>(args: Prisma.SelectSubset<T, WeekCreateArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WeekCreateManyArgs>(args?: Prisma.SelectSubset<T, WeekCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends WeekDeleteArgs>(args: Prisma.SelectSubset<T, WeekDeleteArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WeekUpdateArgs>(args: Prisma.SelectSubset<T, WeekUpdateArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WeekDeleteManyArgs>(args?: Prisma.SelectSubset<T, WeekDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WeekUpdateManyArgs>(args: Prisma.SelectSubset<T, WeekUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends WeekUpsertArgs>(args: Prisma.SelectSubset<T, WeekUpsertArgs<ExtArgs>>): Prisma.Prisma__WeekClient<runtime.Types.Result.GetResult<Prisma.$WeekPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WeekCountArgs>(args?: Prisma.Subset<T, WeekCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WeekCountAggregateOutputType> : number>;
    aggregate<T extends WeekAggregateArgs>(args: Prisma.Subset<T, WeekAggregateArgs>): Prisma.PrismaPromise<GetWeekAggregateType<T>>;
    groupBy<T extends WeekGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WeekGroupByArgs['orderBy'];
    } : {
        orderBy?: WeekGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WeekGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeekGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WeekFieldRefs;
}
export interface Prisma__WeekClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    events<T extends Prisma.Week$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Week$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WeekFieldRefs {
    readonly id: Prisma.FieldRef<"Week", 'Int'>;
    readonly title: Prisma.FieldRef<"Week", 'String'>;
    readonly discord_msg_id: Prisma.FieldRef<"Week", 'String'>;
    readonly created_at: Prisma.FieldRef<"Week", 'DateTime'>;
    readonly discord_msg_id_2: Prisma.FieldRef<"Week", 'String'>;
}
export type WeekFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    where: Prisma.WeekWhereUniqueInput;
};
export type WeekFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    where: Prisma.WeekWhereUniqueInput;
};
export type WeekFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    where?: Prisma.WeekWhereInput;
    orderBy?: Prisma.WeekOrderByWithRelationInput | Prisma.WeekOrderByWithRelationInput[];
    cursor?: Prisma.WeekWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WeekScalarFieldEnum | Prisma.WeekScalarFieldEnum[];
};
export type WeekFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    where?: Prisma.WeekWhereInput;
    orderBy?: Prisma.WeekOrderByWithRelationInput | Prisma.WeekOrderByWithRelationInput[];
    cursor?: Prisma.WeekWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WeekScalarFieldEnum | Prisma.WeekScalarFieldEnum[];
};
export type WeekFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    where?: Prisma.WeekWhereInput;
    orderBy?: Prisma.WeekOrderByWithRelationInput | Prisma.WeekOrderByWithRelationInput[];
    cursor?: Prisma.WeekWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WeekScalarFieldEnum | Prisma.WeekScalarFieldEnum[];
};
export type WeekCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WeekCreateInput, Prisma.WeekUncheckedCreateInput>;
};
export type WeekCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WeekCreateManyInput | Prisma.WeekCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WeekUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WeekUpdateInput, Prisma.WeekUncheckedUpdateInput>;
    where: Prisma.WeekWhereUniqueInput;
};
export type WeekUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WeekUpdateManyMutationInput, Prisma.WeekUncheckedUpdateManyInput>;
    where?: Prisma.WeekWhereInput;
    limit?: number;
};
export type WeekUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    where: Prisma.WeekWhereUniqueInput;
    create: Prisma.XOR<Prisma.WeekCreateInput, Prisma.WeekUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WeekUpdateInput, Prisma.WeekUncheckedUpdateInput>;
};
export type WeekDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
    where: Prisma.WeekWhereUniqueInput;
};
export type WeekDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WeekWhereInput;
    limit?: number;
};
export type Week$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WeekDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WeekSelect<ExtArgs> | null;
    omit?: Prisma.WeekOmit<ExtArgs> | null;
    include?: Prisma.WeekInclude<ExtArgs> | null;
};
export {};
