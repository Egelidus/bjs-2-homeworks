//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash = md5(args); // получаем правильный хеш c помощью функции md5
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
    if (objectInCache) { // если элемент найден
      console.log("Из кэша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + objectInCache.value;
    }
    let result = func(...args); // в кеше результата нет — придётся считать
    cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

function debounceDecorator(func, delay) {
  let isThrottled = false;
  function wrapper(...args) {
    wrapper.history.push(args);
    wrapper.count = wrapper.history.length;
    wrapper.allCount = wrapper.result.length;
    if (isThrottled) {
      return;
    }
    const result = func(...args);
    wrapper.result.push(result)
    isThrottled = true;
    setTimeout(() => isThrottled = false, delay);
    return result;
  }
  wrapper.history = [];
  wrapper.result = [];
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}