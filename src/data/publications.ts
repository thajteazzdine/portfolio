export interface Publication {
  authors: string;
  title: string;
  booktitle: string;
  year: number;
  doi?: string;
  pages?: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    authors: "Thajte, Azzadine and Fesquet, Laurent and Di Natale, Giorgio",
    title: "TIMA-PUF: Time Measurement Based Arbiter PUF",
    booktitle: "IEEE 31st International Symposium on On-Line Testing and Robust System Design (IOLTS)",
    year: 2025,
    pages: "1-7",
    doi: "10.1109/IOLTS65288.2025.11117113",
  },
  {
    authors: "Thajte, Azzadine and El Amraoui, Sami and Maistri, Paolo and Leveugle, Regis and Di Natale, Giorgio and Fesquet, Laurent",
    title: "Pulsed ElectroMagnetic Fault Injection Attack on a Time Measurement-based Arbiter-PUF",
    booktitle: "28th Euromicro Conference on Digital System Design (DSD)",
    year: 2025,
    pages: "385-393",
    doi: "10.1109/DSD67783.2025.00060",
  },
  {
    authors: "Thajte, Azzadine and Fesquet, Laurent and Di Natale, Giorgio",
    title: "TIMA-PUF: A reliable arbiter PUF architecture",
    booktitle: "20th CryptArchi Workshop",
    year: 2025,
    url: "https://hal.science/hal-05192577",
  },
  {
    authors: "de-Almeida, Ismael and Thajte, Azzadine and Engels, Sylvain and Fesquet, Laurent",
    title: "Jumper: A State Capturing Element For Testability in Asynchronous Bundled-Data Circuits",
    booktitle: "30th International Symposium on Asynchronous Circuits and Systems (ASYNC)",
    year: 2026,
  },
];
