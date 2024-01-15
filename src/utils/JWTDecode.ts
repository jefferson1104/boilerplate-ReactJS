export const JWTDecode = (token: string) => {
  if (!token) {
    throw new Error('Token does not exist or is invalid');
  }

  // Fix invalid characters and add filler characters if necessary
  const fixedJwtPayload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');

  // Add padding characters to ensure a length that is a multiple of 4
  const paddedJwtPayload = fixedJwtPayload + '=='.substring(0, (4 - (fixedJwtPayload.length % 4)) % 4);

  const decodedJwtPayload = atob(paddedJwtPayload);
  const jwtData = JSON.parse(decodedJwtPayload);

  return jwtData;
};
