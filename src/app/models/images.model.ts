export interface IImages {
  fixedHeight: IFixedHeight;
  fixedHeightStill: IFixedHeightStill;
  fixedHeightDownsampled: IFixedHeightDownsampled;
  fixedWidth: IFixedWidth;
  fixedWidthStill: IFixedWidthStill;
  fixedWidthDownsampled: IFixedWidthDownsamepled;
  fixedHeightSmall: IFixedHeightSmall;
  fixedHeightSmallStill: IFixedHeightSmallStill;
  fixedWidthSmall: IFixedWidthSmall;
  fixedWidthSmallStill: IFixedWidthSmallStill;
  downsized: IDownsized;
  downsizedStill: IDownsizedStill;
  downsizedLarge: IDownsizedLarge;
  downsizedMedium: IDownsizedMedium;
  downsizedSmall: IDownsizedSmall;
  original: IOriginal;
  originalStill: IOriginalStill;
  looping: ILooping;
  preview: IPreview;
  previewGif: IPreviewGif;
}

export interface IFixedHeight {
  url: string;
  width: string;
  height: string
  size: string;
  mp4: string;
  mp4Size: string;
  webp: string;
  webpSize: string;
}

export interface IFixedHeightStill {
  url: string;
  width: string;
  height: string;
}

export interface IFixedHeightDownsampled {
  url: string;
  width: string;
  height: string;
  size: string;
  webp: string;
  webpSize: string
}

export interface IFixedWidth {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4Size: string;
  webp: string;
  webpSize: string;
}

export interface IFixedWidthStill {
  url: string;
  width: string;
  height: string;
}

export interface IFixedWidthDownsamepled {
  url: string;
  width: string;
  height: string;
  size: string;
  webp: string;
  webpSize: string;
}

export interface IFixedHeightSmall {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4Size: string;
  webp: string;
  webpSize: string;
}

export interface IFixedHeightSmallStill {
  url: string;
  width: string;
  height: string;
}

export interface IFixedWidthSmall {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4Size: string;
  webp: string;
  webpSize: string;
}

export interface IFixedWidthSmallStill {
  url: string;
  width: string;
  height: string;
}

export interface IDownsized {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface IDownsizedStill {
  url: string;
  width: string;
  height: string;
}

export interface IDownsizedLarge {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface IDownsizedMedium {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface IDownsizedSmall {
  mp4: string;
  width: string;
  height: string;
  mp4Size: string;
}

export interface IOriginal {
  url: string;
  width: string;
  height: string;
  size: string;
  frames: string;
  mp4: string;
  mp4Size: string;
  webp: string;
  webpSize: string;
}

export interface IOriginalStill {
  url: string;
  width: string;
  height: string;
}

export interface ILooping {
  mp4: string;
}

export interface IPreview {
  mp4: string;
  mp4Size: string;
  width: string;
  height: string;
}

export interface IPreviewGif {
  url: string;
  width: string;
  height: string;
}


