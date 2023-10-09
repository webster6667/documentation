# Feature Slice Design

<details>
<summary> Что такое FSD</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Методология ведения архитектуры проекта

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие принципы лежат в основе fsd?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)



<details>
<summary> 🎯 SOLID</summary>

----

🥏 Single responsibility    
&emsp;&emsp; 👆 Каждый модуль отвечает только за одно действие

🥏 Open-closed    
&emsp;&emsp; 👆 Используемый модуль должен быть закрыт для изменения, но открыт для расширения возможностей

🥏 Liskov substitution             
&emsp;&emsp; 👆 Все дочерние модули должны иметь все возможности родительского

🥏 Interface segregation    
&emsp;&emsp; 👆 Делить программные сущности так, что бы они не зависеть от методов, которые они не используют  

🥏 Dependency inversion    
&emsp;&emsp; 👆 Делать обратную зависимость модулей, не все модули сайта зависят от одного общего модуля, а общий модуль подстраиваиться под каждый модуль сайта

----

</details>


<details>
<summary>🎯 KISS</summary>

----

👆 `Будь простым и понятным`

Декомпозируй сложную логику на мелкие простые модули взаимодействующие между собой  

----

</details>

<details>
<summary> 🎯 YAGNI </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

👆 `Вам это не понадобится`

Не приводи компонент в shared формат, если он еще нигде не используется   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> 🎯 DDD</summary>

----

👆 Набор терминов и свод правил, позволяющий общатся бизнесу и програмисту на одном языке  

Разделение сущностей на раздельные слои, понятные и бизнесу и програмистам:  

🥏 Чистые       
🥏 Бизнес сущности `entity`  
🥏 Фичи продукта  
🥏 Группа бизнес сущностей  


----

</details>

<details>
<summary> 🎯 GRASP</summary>

----

👆 Подход програмирования уделяющий больше внимания на распределения ответсвенности и установкой связи между сущностями по принципам `ООП`

🥏 Абстракция    
🥏 Наследование  
🥏 Инкапсуляция  
<details>
<summary> 🥏 Полиморфизм </summary>

----

👆 Реализация технически разных решений, при помощи одного метода



Например: абстрактный класс фигуры реализует метод `draw`, который работает по разному, у треугольника и круга      

----

</details>



----

</details>

<details>
<summary> 🎯 DRY</summary>

----

👆 `Don't repeat yourself (не повторяй себя)`  

Не дублируй то, что можно вынести в shared  

----

</details>



![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Как какие слои есть в fsd </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

<details>
<summary> 💠 Shared</summary>

----

👆🏽 Элементы ничего не знающие о предметной области, доступный всем идущим выше слоям

<details>
<summary> 🔹 ui kit</summary>

----

👆 Максимально чистые `ui` компоненты

```javascript
import React, {FC} from "react";
import { PrimaryRadioProps } from "./types"
import { Wrapper, HiddenRadioButton, Shape, ShapeWrapper} from "./styles"
import { Text } from '@typography'

/**
 * Primary UI component for user interaction
 */
export const PrimaryRadio:FC<PrimaryRadioProps> = ({
  size = "md",
  mod = 'primary',
  label,
  name= 'radio',
  labelPosition = 'left',
  ...props
})  => {
  return (
    <Wrapper {...{size, labelPosition, mod}} >
      <HiddenRadioButton name={name} type='radio' {...props}  />
      <ShapeWrapper size={size} >
        <Shape size={size} />
      </ShapeWrapper>
      {label && <Text as='span'>{label}</Text>}
    </Wrapper>)
};
```

----

</details>

<details>
<summary> 🔹 helpers/utils/lib</summary>

----

👆 Автономные самописные хелперы, которые можно вынести в `npm` пакет



```javascript
export const getCapitalizedFirstLetter = (str) => {
	return str?.length ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};
```

<br>

```javascript
export const useSwitch = (initialState = false) => {
    const [switchState, setSwitchState] = useState(initialState);

    const on = () => setSwitchState(true);
    const off = () => setSwitchState(false);

    return [switchState, on, off];
};
```

----

</details>

<details>
<summary> 🔹 api</summary>

----

👆 Инстансы аксиоса с интерцепторами, обработками ошибок

```javascript
import ky from 'ky'
import { config } from "./congif"
import { authMiddleware } from './middleware/authMiddleware'
import { refreshMiddleware } from './middleware/refreshMiddleware'


export const api = ({url, method = 'get', params = {}, data, headers = {}}) => {
  const instance = ky.extend({
    ...config.commonRequestConfig,
    hooks: {
      beforeRequest: [authMiddleware],
      afterResponse: [refreshMiddleware]
    },
})
    

  return instance(url, {method, headers, json: data}).json()
};
```

----

</details>

<details>
<summary> 🔹 constants</summary>

----

👆 Глобальные константы проекта, статических данных

```javascript
export const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
```

----

</details>

<details>
<summary> 🔹 config</summary>

----

👆 Глобальные конфиги не предметных либ  

Например `i18n` или `storybook`


----

</details>

<br>

> 📗 Папку `shared` можно таскать из проекта в проект

----

</details>


<br>

💠 Entities

👆🏽 Бизнес сущности, собранные из `shared` кусков, например:   
&emsp;&emsp; 🎯 Карточка товара      
&emsp;&emsp; 🎯 Статья

С слотами рендера под элементы действия(кнопки, лайки и тд)  

Конкретная сущность, относящаяся к бизнесу.   
Не просто карточка, а карточка товара и тд, сложенная из shared компонентов  

<br>

💠 `features`   
👆🏽 Бизнес сущность выполняющая какое-то действие


&emsp;&emsp; 🎯 Форма отправки сообщения      
&emsp;&emsp; 🎯 Логин форма  
&emsp;&emsp; 🎯 Дроп даун поиска пользователя   

Под капотом юзают `shared` или `entity` компонент, с уже проставленными хендлерами уже делают нужный запрос, и просто принимают айдишники и тд  


<br>

💠 `widgets`   
👆🏽 Самостоятельные блоки комбинирующие нижние слои

&emsp;&emsp; 🎯 `Хедр`  
&emsp;&emsp; 🎯 `Футер`  
&emsp;&emsp; 🎯 `Какой-то повторяющийся список товаров с лоадером и пейджером`  



<br>

💠 `pages`   
👆🏽 Отдельные странички, в которых реализуеться компановка ниже лежащих слоев

<br>

💠 `processes`   
👆🏽 Процессы, повторяющися на нескольких страничках

&emsp;&emsp; 🔹 Регистрация        
&emsp;&emsp; 🔹 Оплата товара  
&emsp;&emsp; 🔹 Сейчас `deprecated`  
&emsp;&emsp;&emsp;&emsp; 👆 На практике оказался лишним

<br>

💠 `app`   
👆🏽 Инициализация логики приложения

&emsp;&emsp; 🔹 Поключения глобальных стилей  
&emsp;&emsp; 🔹 Роутер  
&emsp;&emsp; 🔹 Обетка шаблоном  


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие правила взаимодействия между слоями?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Слои могут обращаться только к ниже лежащим слоям  
Фича не может реализовывать фичу

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое слайсы?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Модули предметной области в каждом из слоев

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что такое сегменты</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Еще более глубокое разделение слайсов  

&emsp;&emsp; 🔹 `ui`  
&emsp;&emsp;&emsp;&emsp; 👆

&emsp;&emsp; 🔹 `lib`   
&emsp;&emsp;&emsp;&emsp; 👆 Вспомогательные библиотеки, хуки, которые можно вынести в отдельную библиотеку 

&emsp;&emsp; 🔹 `api`   
&emsp;&emsp;&emsp;&emsp; 👆 Логика взаимодействия с `API`, экземпляры запросов, хуки запросов

&emsp;&emsp; 🔹 `config`   
&emsp;&emsp;&emsp;&emsp; 👆 Модуль конфигурации приложения и его окружения (`i18n`, ...)

&emsp;&emsp; 🔹 `model`   
&emsp;&emsp;&emsp;&emsp; 👆 Работа с бизнес логикой (`reducers, actions, hooks, selectors`)


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие бывают варианты использования fsd / Как бы ты его втаскивал</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Elementary  
Вынос shared сущностей

🎯 Beginner      
Выносим повторяющиейся блоки страничек в widgets  

🎯 Intermediate      
Начинаем выносить бизнес сущности entities и рефакторить из них виджеты     

🎯 Advanced      
Выносим фичи продукта в отдельные компоненты  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary>Обьясни места в которых ты видишь использование патернов лежащих в основе методологии </summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Simple Responsibility  
Большие модули, дробят на большое кол-во подмодулей, выделяя каждому единственную зону ответственностей

🥏 Просто отрисовать    
🥏 Обьединить не разрывные блоки и сделать запрос     
🥏 Преобразовать    

<br>

🎯 Open/Close      
Слои используют openApi(экспортируеться только то что нужно), при этом все верхние слои(`feature`, `widgets`) имеют все те же возможности что и нижние слои(`entity`, `shared`), не могут их изменять, но могут расширять   

🎯 Liscov      
Используеться принцип наследования и расширение, от нижнего слоя к верхнему  

🎯 Dependency Env      
Позволяет выстраивать обратную зависимость через адаптеры

---

🎯 KISS  
Вместо больших контейнеров, есть простые `shared` блоки, которые используються в независимых прозрачных фичах, которые обьединяються на сраничке 

---

🎯 YAGNI  
Методология позволяет хранить не дробленые сущности в entyte/feature/widgets до тех пор пока она не начнет дублироваться   

---

🎯 DDD

Терминология схожа с `DDD`, мы так же делим сущности на бестолковые, бизнес, группа бизнес сущностей. Что позволяет нам с бизнесом общаться на одном языке  

---

🎯 GRASP  
Уделяеться большое кол-во времени анализу правильного нахождения элементов и их связей, больше чем на написание, что приводит к более легкой и гибкой расширяемости продукта 

---

🎯 DRY  

Вынос повторяемых элементов в `shared`, или в более конкретную предметную область, для переиспользования   

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Что делать когда не понятно куда пихать сущность, в entity или features?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

Кидаем в widgets, так как это абстрактная сущность которая может работать с обоими слоями, по мере роста проекта и необходимости будет понятней на какие сущности раздробить виджет  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Разложим проект</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)


<details>
<summary> Первый слой</summary>

---

🎯 ui-kit  
🎯 Преобразователи дат    
🎯 Инстанс аксиоса  
🎯 Глобальные константы и типы      

--- 

</details>

<details>
<summary> Второй слой</summary>

----

Появляються сущности карточка товара  
Но она немного по разному выглядит на страничке поиска и в корзине, как разложишь?   

🎯 В `entity` Создам слайс `product`     

🎯 Сложу из `shared` компонентов (`card`, `title`, `img`) `entity` карточку `productCard` с пропсами `renderButtons`, `renderActions` 

🎯 Создам в `features` слайсы `product` и `cart`, в них папки `ui` с кнопками (`addToCart`, `addToFavorite`) - `product` и (`deleteFromCart`)  

🎯 Внутри слайса `product` создаем папки `model` и `api`, где описываем работу со стором и запросы к `api`    
&emsp;&emsp; 👆 Кнопки ожидают только параметры для работы с `model`  

🎯 Создам в `widgets` слайсы `product` и `cart`, в которых в папке `ui` создам два вида карточек обьединяющих `features` и `entity` в карточки для конкретных бизнес кейсов   

----

</details>

<details>
<summary> Третий слой</summary>

----

Есть блок поиска товаров, с пейджером и кнопкой показать еще, который появляеться на разных страничках с небольшими отличиями

🎯 В `widgets` слайсе `product` в папке `ui` создаю папку `searchProducts`, в которой обьединяю верстки сетки, фичи (`SearchProduct`, `Pagination`, `ProductCard`)     
      

----

</details>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Карточка товара это виджет, куда бы ты положил компонент с списком карточек?</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

В ту же папку где и карточка товаров, только в папку `facade`.    
👆 Архитектура запрещает соединять слайсы, но не сегменты  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие видишь плюсы у fsd</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Сильная связанность,         
&emsp;&emsp; 👆 Каждый модуль решает только одну задачу      
  
🎯 Слабое зацепление      
&emsp;&emsp; 👆 Архитектура имеет однонаправленный поток изменения, который позволяет удалять бизнес фичи и не аффектить соседние модули    

🎯 Проще говорить с бизнесом на одном языке        
&emsp;&emsp; 👆 За счет деления обычного комка кода на сущности понятные для бизнеса   

🎯 При понимании и соблюдении общей архитектуры в разы проще находить нужный код  

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<details>
<summary> Какие минусы у fsd</summary>

![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-up.svg)

🎯 Сложный порог вхождения    
🎯 Сразу проблемы в лоб, нужно думать кто где лежит  
🎯 Пока что все понимают и трактуют этот подход по разному  
🎯 Занимает слишком много времени для хаотичного `mvp`     


![illustration](https://raw.githubusercontent.com/webster6667/documentation/master/documentation-data/illustrations/dd-down.svg)

</details>

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**