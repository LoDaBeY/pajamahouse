import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const MiniSliderItems = [
  {
    Title: "Kiremit Çam Desenli Önden Düğmeli Peluş Polar Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/kiremit-cam-desenli-onden-dugmeli-pelus-polar-pijama-takimi-onden-dugmeli-pijama-takimi-pijamaevi-20778-34-K.jpg",
    Fırsat: " Fırsat %35 İndirim ",
    ActualPrice: "304,99",
    FakePrice: "499,99",
  },
  {
    Title: "Mavi Çizgili Uzun Kollu V Yaka Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/mavi-cizgili-uzun-kollu-v-yaka-pijama-takimi-mavi-cizgili-pijama-takimi-pijamaevi-20767-34-K.jpg",
    Fırsat: " Fırsat %20 İndirim ",
    ActualPrice: "219,99",
    FakePrice: "274,99",
  },
  {
    Title: "Mor Puantiyeli Kısa Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/mor-puantiyeli-kisa-kollu-kapuconlu-pijama-takimi-mor-puantiyeli-pijama-takimi-pijamaevi-20766-34-K.jpg",
    Fırsat: " Fırsat %25 İndirim ",
    ActualPrice: "189,99",
    FakePrice: "254,99",
  },
  {
    Title: "Gri Pelerin Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/gri-pelerin-desenli-uzun-kollu-kapuconlu-pijama-takimi-gri-pijama-takimi-pijamaevi-20765-34-K.jpg",
    Fırsat: " Fırsat %30 İndirim ",
    ActualPrice: "259,99",
    FakePrice: "374,99",
  },
  {
    Title: "Beyaz Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/beyaz-desenli-uzun-kollu-kapuconlu-pijama-takimi-beyaz-pijama-takimi-pijamaevi-20764-34-K.jpg",
    Fırsat: " Fırsat %15 İndirim ",
    ActualPrice: "199,99",
    FakePrice: "234,99",
  },
  {
    Title: "Lacivert Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/lacivert-desenli-uzun-kollu-kapuconlu-pijama-takimi-lacivert-pijama-takimi-pijamaevi-20763-34-K.jpg",
    Fırsat: " Fırsat %22 İndirim ",
    ActualPrice: "229,99",
    FakePrice: "294,99",
  },
  {
    Title: "Siyah Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/siyah-desenli-uzun-kollu-kapuconlu-pijama-takimi-siyah-pijama-takimi-pijamaevi-20762-34-K.jpg",
    Fırsat: " Fırsat %18 İndirim ",
    ActualPrice: "189,99",
    FakePrice: "234,99",
  },
  {
    Title: "Pudra Pelerin Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/pudra-pelerin-desenli-uzun-kollu-kapuconlu-pijama-takimi-pudra-pijama-takimi-pijamaevi-20761-34-K.jpg",
    Fırsat: " Fırsat %28 İndirim ",
    ActualPrice: "279,99",
    FakePrice: "389,99",
  },
  {
    Title: "Bordo Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/bordo-desenli-uzun-kollu-kapuconlu-pijama-takimi-bordo-pijama-takimi-pijamaevi-20760-34-K.jpg",
    Fırsat: " Fırsat %20 İndirim ",
    ActualPrice: "219,99",
    FakePrice: "274,99",
  },
  {
    Title: "Turuncu Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/turuncu-desenli-uzun-kollu-kapuconlu-pijama-takimi-turuncu-pijama-takimi-pijamaevi-20759-34-K.jpg",
    Fırsat: " Fırsat %25 İndirim ",
    ActualPrice: "239,99",
    FakePrice: "319,99",
  },
  {
    Title: "Lila Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/lila-desenli-uzun-kollu-kapuconlu-pijama-takimi-lila-pijama-takimi-pijamaevi-20758-34-K.jpg",
    Fırsat: " Fırsat %15 İndirim ",
    ActualPrice: "189,99",
    FakePrice: "224,99",
  },
  {
    Title: "Yeşil Desenli Uzun Kollu Kapüşonlu Pijama Takımı",
    Image:
      "https://cdn.pijamaevi.com/cdn-cgi/image/format=auto,height=500/https://www.pijamaevi.com/yesil-desenli-uzun-kollu-kapuconlu-pijama-takimi-yesil-pijama-takimi-pijamaevi-20757-34-K.jpg",
    Fırsat: " Fırsat %30 İndirim ",
    ActualPrice: "259,99",
    FakePrice: "374,99",
  },
];

const reducer = () => {}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, MiniSliderItems);

  return (
     <ThemeContexttt.Provider value={{ ...firstState}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;