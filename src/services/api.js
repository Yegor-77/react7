const KEYS = {
  weather: "806f91b390d1d105d098362f860f3dc6",
  news: "3113d7e69bd8419ab235045b2e81d9d0",
  pixabay: "55714880-7e7726c195ee1570bcca1f92a",
};

export async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${KEYS.weather}&units=metric&lang=uk`
  );

  if (!response.ok) {
    throw new Error("Не вдалося отримати погоду");
  }

  return response.json();
}

export async function getForecast(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${KEYS.weather}&units=metric&lang=uk`
  );

  if (!response.ok) {
    throw new Error("Не вдалося отримати прогноз");
  }

  return response.json();
}

export async function getNews() {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=weather%20OR%20nature&language=en&sortBy=publishedAt&pageSize=8&apiKey=${KEYS.news}`
  );

  if (!response.ok) {
    throw new Error("Не вдалося отримати новини");
  }

  const data = await response.json();
  return data.articles || [];
}

export async function getNaturePhotos() {
  const response = await fetch(
    `https://pixabay.com/api/?key=${KEYS.pixabay}&q=nature%20landscape&image_type=photo&orientation=horizontal&per_page=12`
  );

  if (!response.ok) {
    throw new Error("Не вдалося отримати фотографії");
  }

  const data = await response.json();
  return data.hits || [];
}

export async function getPetPhotos() {
  const response = await fetch(
    `https://pixabay.com/api/?key=${KEYS.pixabay}&q=dogs%20cats&image_type=photo&orientation=horizontal&per_page=12`
  );

  if (!response.ok) {
    throw new Error("Не удалось загрузить фотографии животных");
  }

  const data = await response.json();
  return data.hits || [];
}
