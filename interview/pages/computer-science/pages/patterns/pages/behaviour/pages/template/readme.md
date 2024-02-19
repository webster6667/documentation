# Template
> Патерн определяющее шаблонное выполнение алгоритмов(порядов выполнения), имеющих одинаковые название, но разную реализацию

```javascript

class Builder {
    build() {
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
};

class TeslaBuilder extends Builder {
    addEngine() {
        console.log('Add Electronic Engine');
    }

    installChassis() {
        console.log('Install Tesla chassis');
    }

    addElectronic() {
        console.log('Add special electronic');
    }

    collectAccessories() {
        console.log('Collect Accessories');
    }
}

class BmwBuilder extends Builder {
    addEngine() {
        console.log('Add BMW Engine');
    }

    installChassis() {
        console.log('Install BMW chassis');
    }

    addElectronic() {
        console.log('Add electronic');
    }

    collectAccessories() {
        console.log('Collect Accessories');
    }
}

const teslaBuilder = new TeslaBuilder()
teslaBuilder.build()

const bmwBuilder = new BmwBuilder()
bmwBuilder.build()
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**