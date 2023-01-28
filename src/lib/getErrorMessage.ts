interface ErrorWithMessage {
  message: string
}

const isErrorWithMessage = (error: unknown): error is ErrorWithMessage =>
  typeof error === 'object' &&
  error !== null &&
  'message' in error &&
  typeof (error as Record<string, unknown>).message === 'string'

const toErrorWithMessage = (error: unknown): ErrorWithMessage => {
  if (isErrorWithMessage(error)) {
    return error
  }

  try {
    return new Error(JSON.stringify(error))
  } catch {
    return new Error(String(error))
  }
}

export const getErrorMessage = (error: unknown): string =>
  toErrorWithMessage(error).message
