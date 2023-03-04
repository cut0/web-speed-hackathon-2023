type FontFaceSource = {
  family: string;
  source: string;
  descripter: FontFaceDescriptors;
};

const FONT_FACE_SOURCES: FontFaceSource[] = [
  {
    descripter: {
      display: 'block',
      style: 'normal',
      weight: '700',
    },
    family: 'Noto Serif JP',
    source: "url('/fonts/subset-bold.woff2')",
  },
  {
    descripter: {
      display: 'block',
      style: 'normal',
      weight: '400',
    },
    family: 'Noto Serif JP',
    source: "url('/fonts/subset.woff2')",
  },
];

export async function loadFonts() {
  const fontFaces = FONT_FACE_SOURCES.map(({ descripter, family, source }) => new FontFace(family, source, descripter));
  (await Promise.all(fontFaces.map((font) => font.load()))).forEach((font) => document.fonts.add(font));
}
