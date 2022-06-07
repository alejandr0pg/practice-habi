interface IOptions {
    value?: any,
    label?: string | React.ReactNode
}

export interface IRenderInputProps {
    name: string;
    label?: string | React.ReactNode;
    type?: "text" | "number" | "currency" | "email" | "file" | "switch" | "switch-group";
    description?: string | React.ReactNode;
    options?: IOptions[];
    rules?: {
        min?: number,
        max?: number,
        required?: boolean,
        pattern?: RegExp
    };
}