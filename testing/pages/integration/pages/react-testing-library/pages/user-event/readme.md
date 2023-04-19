# User-event

Эмулятор пользовательских событий, вызывающий события, прокидывая сразу значение внутрь события

👆🏽 Надстройка над fireEvent, рекомендуеться использовать userEvent вместо fireEvent  

```typescript
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("input changes value", async () => {
    render(<input type='text' role='textbox' />);

    userEvent.type(screen.getByRole("textbox"), "react");

    expect(screen.getByRole<HTMLInputElement>("textbox").value).toBe("react");
  });
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**