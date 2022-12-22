# Namespace & Module
> Конструкция инкапсулирующая в себе все сущности от глобальной области видимости, по анологии с js модулями

```typescript
namespace Util {
    const hash = 1;
    export type IsEmptyString = (value?: string) => boolean

    export const isEmptyString:IsEmptyString = (value) => Boolean(value)
}

Util.isEmptyString('1')
```

&emsp;&emsp; 🔹 Раньше `namespace` использовался как `module`  
&emsp;&emsp;&emsp;&emsp; 👆 Можно наткнуться на такую конструкцию в старых скриптах

&emsp;&emsp;&emsp;&emsp; ❗️ `module` в файлах `d.ts` несет в себе **<a href="../declarate-file/readme.md">другой смысл</a>**  

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 📗 Для решения этой путаници и изменили конструкцию `module` на `namespace` в контексте пространтве имен   

<br>

&emsp;&emsp; 🔹 Результатом компиляции будет обычная самовызывающийся функция `Util`(`js модуль`)

&emsp;&emsp; 🔹 Снаружи доступны только те элементы, которые помечены конструкцией `export`

&emsp;&emsp; 🔹 Типы модуля не доступны снаружи даже если помечены как export

&emsp;&emsp; 🔹 Для импорта `namespace` в другой файл раньше использовали конструкцию `reference`
```typescript
/// <reference path="FileWithNamespace.ts" >
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**