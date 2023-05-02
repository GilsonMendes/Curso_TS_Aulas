interface DadosControle {
  _name: string;
  _id: number;
}

const dadosInt: DadosControle = {
  _id: 34,
  _name: "Sensor temperatura 1",
};

interface AjDados extends DadosControle {
  dadosAj: number[];
}

const agruparDados: AjDados = {
  _id: 12,
  _name: "Sensor 2",
  dadosAj: [32, 31, 30],
};

console.log(agruparDados);
