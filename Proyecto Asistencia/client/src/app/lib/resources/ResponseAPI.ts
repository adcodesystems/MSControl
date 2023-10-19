export class ResponseAPI<T> {
    State: boolean;
    Message?: string | null;
    Value: T;

    constructor(state: boolean, value: T, message?: string) {
        this.State = state;
        this.Value = value;
        this.Message = message || null;
    }
}