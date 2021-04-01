export enum ErrorType {
    InvalidId = 0,
    RecordNotFound = 1,
    RecordDuplicated = 2
}

export type CustomError = {
    errorType: ErrorType;
    message: string;
}

export function NotFoundError(entity: string): CustomError {
    return {
        errorType: ErrorType.RecordNotFound,
        message: `${entity} not found`
    }
}

export function DuplicatedError(entity: string): CustomError {
    return {
        errorType: ErrorType.RecordDuplicated,
        message: `${entity} already exists`
    }
}

export function InvalidUuidError(value: string): CustomError {
    return {
        errorType: ErrorType.InvalidId,
        message: `'${value}' is not a valid uuid`
    }
}

