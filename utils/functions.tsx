export function generateRandomString(length: number): string {
  let randomString: string = "";
  const params =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    randomString += params.charAt(Math.floor(Math.random() * params.length));
  }

  return randomString;
}
