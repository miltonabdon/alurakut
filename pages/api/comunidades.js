import { SiteClient } from "datocms-client";

export default async function recebedorDeRequest(req, res) {
  if (req.method === "POST") {
    const TOKEN = "0f7031c84e7936e40a0fe3f1735ba5";

    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "968750",
      ...req.body,
      /*title: "Comunidade de Teste",
      imageUrl: "https://github.com/miltonabdon.png",
      creatorSlug: "miltonabdon",*/
    });

    res.json({
      dados: "Algum dado",
      registroCriado: registroCriado,
    });

    return;
  }

  res.status(404).json({
    message: "Somente funcionando o post",
  });
}
