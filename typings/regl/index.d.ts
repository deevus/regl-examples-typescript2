declare module "regl" {
    const regl: REGLRoot;
    export = regl;
}

interface REGLInitOptions {

}

interface REGLOptions {
    frag?: string;
    vert?: string;
    attributes?: {
        [name: string]: any;
    };
    uniforms?: {
        [name: string]: any;
    };
    count?: number;
    color?: number[];
}

interface REGLContext {
    /**
     * The number of frames rendered
     */
    tick?: number;

    /**
     * Total time elapsed since the regl was initialized in seconds
     */
    time?: number;

    /**
     * Width of the current viewport in pixels
     */
    viewportWidth?: number;

    /**
     * Height of the current viewport in pixels
     */
    viewportHeight?: number;

    /**
     * Width of the current framebuffer in pixels
     */
    framebufferWidth?: number;

    /**
     * Height of the current framebuffer in pixels
     */
    framebufferHeight?: number;

    /**
     * Width of the WebGL context drawing buffer
     */
    drawingBufferWidth?: number;

    /**
     * Height of the WebGL context drawing buffer
     */
    drawingBufferHeight?: number;

    /**
     * The pixel ratio of the drawing buffer
     */
    pixelRatio?: number;
}

interface REGLClearOptions {
    color: number[],
    depth: number;
}

interface REGLRoot {
    /**
     * Calling the regl module with no arguments creates a full screen canvas and WebGL context, and then uses this context to initialize a new REGL instance
     */
    (): REGL;

    /**
     * Appends a generated canvas as a child of the container element passed as the first argument .
     */
    (element: HTMLElement): REGL;

    /**
     * If the first argument is an `HTMLCanvasElement`, then regl will use this canvas to create a new `WebGLRenderingContext` that it renders into.
     */
    (canvas: HTMLCanvasElement): REGL;

    /**
     * If the first argument is a `WebGLRenderingContext`, then regl will just use this context without touching the DOM at all.
     */
    (gl: WebGLRenderingContext): REGL;
}

interface REGLFrameResult {
    cancel(): void;
}

interface REGLBuffer {
    (): any;
    (options: any): any;
}

type REGLContextUser = REGLContext & {[name: string]: any};

interface REGLFunction {
    (): void;
    (options: REGLOptions): void;
}

declare interface REGL {
    (options: REGLOptions): REGLFunction;

    buffer(data: number[][]): REGLBuffer;
    frame(callback: (context: REGLContextUser) => void): REGLFrameResult;
    clear(options: REGLClearOptions): void;

    prop(key: string): any;
    context(key: string): any;
}