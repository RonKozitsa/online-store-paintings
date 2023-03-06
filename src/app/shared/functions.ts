export function createImagesPaths(imagesNames: string[], directoryPrefix: string) {
  return imagesNames.map((name) => `${directoryPrefix}/${name}`);
}
