function optional_parentes(name?: string, senha?: string, email?: string) {
  let data = { name, senha, email };

  console.log(data);
}

optional_parentes('Gilson Mendes', '123455')