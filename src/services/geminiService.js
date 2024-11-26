import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gerarDescricaoComGemini(imageBuffer) {
  const prompt =
    "Gere uma legenda criativa e divertida em português do Brasil para a seguinte imagem, como se fosse postada em uma rede social. Use emojis e frases coloquiais. Apresente apenas a legenda, sem instruções adicionais ou uso de barras.";

  const altTextPrompt =
    "Gere uma descrição concisa e objetiva da imagem, priorizando os elementos visuais mais importantes. O texto deve ser claro e conciso, adequado para pessoas com deficiência visual. Apresente apenas o texto alternativo, sem instruções adicionais.";

  try {
    const image = {
      inlineData: {
        data: imageBuffer.toString("base64"),
        mimeType: "image/png",
      },
    };
    const res = await model.generateContent([prompt, image]);
    const descricao = res.response.text() || "Alt-text não disponível.";

    // Adicionando a parte de gerar o altText
    const altTextResponse = await model.generateContent([altTextPrompt, image]);
    const altText = altTextResponse.response.text();

    return {
      descricao,
      altText,
    };
  } catch (erro) {
    console.error("Erro ao obter alt-text:", erro.message, erro);
    throw new Error("Erro ao obter o alt-text do Gemini.");
  }
}
