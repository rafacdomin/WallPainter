export class CustomValidationError extends Error {
  readonly path: string;

  constructor(path: string, message: string) {
    super();
    this.path = path;
    this.message = message;
  }
}
