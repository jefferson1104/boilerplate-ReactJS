export const JWTDecode = (token: string) => {
  if (!token) {
    throw new Error('Token does not exist or is invalid');
  }

  const jwtPayload = token.split('.')[1];
  const decodedJwtPayload = atob(jwtPayload);
  const jwtData = JSON.parse(decodedJwtPayload);

  return jwtData;
};
