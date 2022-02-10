# User-event

Эмулятор пользовательских событий, вызывающий события, прокидывая сразу значение внутрь события

👆🏽 Надстройка над fireEvent, рекомендуеться использовать userEvent вместо fireEvent  

```typescript
import { render, screen, fireEvent } from "@testing-library/react";

test("input changes value", async () => {
    render(<input type='text' role='textbox' />);
    const input = await screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { value: "test" }
    });

    expect(screen.getByRole("textbox").value).toBe("test");
  });
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**