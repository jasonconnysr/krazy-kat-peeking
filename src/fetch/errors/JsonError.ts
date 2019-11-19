const JSON_ERROR = 'JsonError';

class JsonError extends Error {
    type: string = JSON_ERROR;
    message!: string;
    cause: string;

    constructor(json: any, ...params: Object[]) {
        super('There was an error connecting to the server.  Are you connected to the internet? (code: JSON)');
        this.cause = json.message;
    }
}

export { JSON_ERROR };
export default JsonError;
