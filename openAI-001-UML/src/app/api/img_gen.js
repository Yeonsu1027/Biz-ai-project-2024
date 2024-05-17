// 이미지생성
"user server";
import OpenAI from "openai";
const openai = new OpenAI();

// 이미지는 prompt만
const image_generation = async (prompt) => {
  const result = openai.images.generate({
    model: "dall-e-3",
    prompt: prompt,
    n: 1,
    response_format: "b64_json",
  });
  return result.data[0].b64_json;
};
// n : 이미지개수 //리턴타입이 이미지
