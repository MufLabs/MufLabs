import { IExecutionPipeline } from "./IExecutionPipeline";
import { PipelineContext } from "./PipelineContext";
import { PipelineResult } from "./PipelineResult";
import { IProviderManager } from "../providers";
export declare class ExecutionPipeline implements IExecutionPipeline {
    private readonly providerManager;
    constructor(providerManager: IProviderManager);
    execute(context: PipelineContext): Promise<PipelineResult>;
}
//# sourceMappingURL=ExecutionPipeline.d.ts.map