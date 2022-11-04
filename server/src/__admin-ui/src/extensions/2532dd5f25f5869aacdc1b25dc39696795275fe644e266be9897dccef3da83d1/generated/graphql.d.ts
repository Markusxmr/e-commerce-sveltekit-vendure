export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    DateTime: any;
};
export declare enum MetricInterval {
    Monthly = "MONTHLY",
    Weekly = "WEEKLY"
}
export declare type MetricSummary = {
    __typename?: 'MetricSummary';
    code: Scalars['String'];
    entries: Array<MetricSummaryEntry>;
    interval: MetricInterval;
    title: Scalars['String'];
};
export declare type MetricSummaryEntry = {
    __typename?: 'MetricSummaryEntry';
    label: Scalars['String'];
    value: Scalars['Float'];
};
export declare type MetricSummaryInput = {
    interval: MetricInterval;
};
export declare type Query = {
    __typename?: 'Query';
    /**
     * Get metrics from X weeks/months ago to now.
     * Preceding 26 weeks for WEEKLY and the preceding 12 months when given a MONTHLY interval
     */
    metricSummary: Array<MetricSummary>;
};
export declare type QueryMetricSummaryArgs = {
    input?: InputMaybe<MetricSummaryInput>;
};
export declare type MetricSummaryQueryVariables = Exact<{
    input: MetricSummaryInput;
}>;
export declare type MetricSummaryQuery = {
    __typename?: 'Query';
    metricSummary: Array<{
        __typename?: 'MetricSummary';
        interval: MetricInterval;
        code: string;
        title: string;
        entries: Array<{
            __typename?: 'MetricSummaryEntry';
            label: string;
            value: number;
        }>;
    }>;
};
