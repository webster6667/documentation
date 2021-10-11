# Опциональная цепочка

Нововведение в язык, позволяющее проверять наличие свойства

```javascript
const user = {
    name: 'Ben',
    address: {
        city: 'Moscow',
        country: 'Russia'    
    }
}

const userCountry = user?.address.city
```