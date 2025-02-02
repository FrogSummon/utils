export const removeRandomItem = (array: any[]): any[] => {
  const randomIndex = Math.floor(Math.random() * array.length)

  return array.filter((_, index) => index !== randomIndex)
}
