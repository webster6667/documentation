# Styled Components

🔹 exp:stc - export styled component
```typescript
export const $name$ = styled.div`
    $data$ 
`
```

<br><br>

🔹 stc:if - styled component if

```typescript
${({ $data$ }) => $if$}
```

<br><br>

🔹 stc:if:css - styled component if true - css

```typescript
${({ $data$ }) => $if$ && css`                  
      $css$
`}
```