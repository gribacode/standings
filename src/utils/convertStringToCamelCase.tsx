export function convertStringToCamelCase(str: string) {
  return (str.charAt(0).toLowerCase() + str.substring(1)).replace(" ", "");
}
