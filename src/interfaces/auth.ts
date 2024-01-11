export interface IFirebaseSignInToken {
  accessToken: string;
}

export interface IFirebaseUser {
  email_verified: boolean;
  email: string;
  name: string;
  picture: string;
  user_id: string;
  firebase: {
    sign_in_provider: string;
  };
}
