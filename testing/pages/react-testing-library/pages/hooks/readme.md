# Рендер хуков

```typescript
import { renderHook, act } from "@testing-library/react-hooks";
import { useSwitch } from "./index";

describe("use-switch", () => {
  it("tubmler function is work", () => {
    const { result } = renderHook(() => useSwitch(false)),
      [visibility, show, hide] = result.current;

    expect(visibility).toBeFalsy();

    act(() => {
      show();
    });

    expect(result.current[0]).toBeTruthy();

    act(() => {
      hide();
    });

    expect(result.current[0]).toBeFalsy();
  });
});
```

<br>

### ⟵ **<a href="../../readme.md">Назад</a>**