const getGifs = async (category) => {
  const limit = 10;
  const key = "4b73wWqZZYOc6qqOgg8vagiSpZPGmZSB";
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};

export default getGifs;