export class user {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _expiresIn: Date
  ) {}

  get token() {
    // check if token expire or not
    if (!this._expiresIn || new Date() > this._expiresIn) {
      console.log('from Model' + this._expiresIn);
      return null;
    } else {
      return this._token;
    }
  }
}
