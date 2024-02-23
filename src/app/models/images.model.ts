export interface IImages {
  fixed_height: IFixedHeight;
  fixed_height_still: IFixedHeightStill;
  fixed_height_downsampled: IFixedHeightDownsampled;
  fixed_width: IFixedWidth;
  fixed_width_still: IFixedWidthStill;
  fixed_width_downsampled: IFixedWidthDownsamepled;
  fixed_height_small: IFixedHeightSmall;
  fixed_height_small_still: IFixedHeightSmallStill;
  fixed_width_small: IFixedWidthSmall;
  fixed_width_small_still: IFixedWidthSmallStill;
  downsized: IDownsized;
  downsized_still: IDownsizedStill;
  downsized_large: IDownsizedLarge;
  downsized_medium: IDownsizedMedium;
  downsized_small: IDownsizedSmall;
  original: IOriginal;
  original_still: IOriginalStill;
  looping: ILooping;
  preview: IPreview;
  preview_gif: IPreviewGif;
}

export interface IFixedHeight {
  url: string;
  width: string;
  height: string
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
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
  webp_size: string
}

export interface IFixedWidth {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
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
  webp_size: string;
}

export interface IFixedHeightSmall {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
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
  mp4_size: string;
  webp: string;
  webp_size: string;
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
  mp4_size: string;
}

export interface IOriginal {
  url: string;
  width: string;
  height: string;
  size: string;
  frames: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
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
  mp4_size: string;
  width: string;
  height: string;
}

export interface IPreviewGif {
  url: string;
  width: string;
  height: string;
}


