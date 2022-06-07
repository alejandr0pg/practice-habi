interface IOptions {
    value?: any,
    label?: string | React.ReactNode
}

export enum TypesInput {
    Text = "text",
    Number = "number",
    Currency = "currency",
    Email = "email",
    File = "file",
    Switch = "switch",
    SwitchGroup = "switch-group"
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