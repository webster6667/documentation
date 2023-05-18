# null
Тип данных для явного обозначения что переменная пустая

<a name="type-of-null"></a>
&emsp;&emsp; 🛑 `typeof null` вернет `object` <ins>[ 💬](## "баг языка")</ins>  
&emsp;&emsp;&emsp;&emsp; ⚡ Для определение типа данных `null`, нужно выполнять сравнение с значением `null === null` 👉🏼 `true`

<details>
<summary> ❌</summary>

___

```js
const data = null

if (typeof data === 'null') {
    console.error('cannot be null')
}
```

___

</details>

<details>
<summary> ✅</summary>

___

```js
const data = null

const isNull = (data) => data === null

if (isNull(data)) {
    console.error('cannot be null')
}
```

___

</details>

<br>

&emsp;&emsp; 🔹 `null` преобразуется к числу `0`, только при математическом сравнении    
&emsp;&emsp;&emsp;&emsp; 👆 При нестрогом сравнении, преобразование не происходит

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `null == null` 👉🏼 `null == null` 👉🏼 `true`     
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `null == 0` 👉🏼 `null == 0` 👉🏼 `true`  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 🎯 `null >= 0` 👉🏼 `0 >= 0` 👉🏼 `true`

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**