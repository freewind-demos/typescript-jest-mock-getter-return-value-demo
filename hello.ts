export class Hello {
  constructor(private _name: string) {
  }

  get name(): string {
    return this._name.trim();
  }

  public getName(): string {
    return this._name.trim();
  }
}
