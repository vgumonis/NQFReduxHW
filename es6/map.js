const masinos = [
  {
    marke: 'BMW',
    modelis: 'E36',
    metai: '1995',
    kaina: 800,
  },
  {
    marke: 'Mercedes-Benz',
    modelis: 'E 200',
    metai: '2016',
    kaina: 16100,
  },
  {
    marke: 'Audi',
    modelis: 'A6',
    metai: '2004',
    kaina: 1300,
  },
];

const kainos = masinos.map((masina) => {
  return masina.kaina;
});

console.log(kainos);


masinos.map((masina) => masina.marke);
masinos.filter((masina) => masina.kaina < 2000);
masinos.map((masina) => masina.kaina).reduce((kainuSuma, kaina) => kainuSuma + kaina);
