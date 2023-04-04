# Suspense
👆🏽 Алгоритм ленивой загрузки компонентов    

```javascript
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));
const Loading = () => <div>Loading...</div>;

function App() {
    return (
        <Router>
                <Switch>
                    <Route path="/home" >
                        <React.Suspense fallback={<Loading/>}>
                            <Home />
                        </React.Suspense>
                    </Route>
                    <Route path="/about" >
                        <React.Suspense fallback={<Loading/>}>
                            <About />
                        </React.Suspense>
                    </Route>
                </Switch>
        </Router>
    );
}
```  

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**