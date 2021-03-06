export interface SolarweaveInterface {
    rpc_version: string;
    database: string;
    arweaveGraphQL: string;
    url: string;
    credentials: string;
    local: boolean;
    localFile: string;
    console: boolean;
    debug: boolean;
    compressed: boolean;
    parallelize: number;
    batch: number;
    benchmark: boolean;
    verify: boolean;
    index: boolean;
    start?: number;
    end?: number;
}
