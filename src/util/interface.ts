export interface ValidationResult {
    isValid: boolean;
    errors: {
        [key: string]: string;
    };
}

export interface PostParam {
    title: string;
    user: string;
    content: string;
    category: string;
    create_time: string;
}