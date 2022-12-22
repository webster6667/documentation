```typescript
import {InputHTMLAttributes, ReactNode} from 'react';

export interface SelectProps<T extends object> extends InputHTMLAttributes<HTMLSelectElement> {
    /**
     * How large should the button be?
     */
    sizeMod?: "sm" | "md";
    /**
     * Button contents
     */
    label?: string;
    /**
     * Is button disabled
     */
    disabled?: boolean;
    /**
     * Button modifications
     */
    mod?: 'primary' | 'secondary',

    options?: T[],

    render: (item:T) => ReactNode
}

export const PrimarySelect = <T extends object,>({
  sizeMod = "md",
  mod = 'primary',
  name= 'select',
  options,
  render,
  ...props
}:SelectProps<T>):ReactElement  => {
   const RowsList = options?.map((item) => {
       return render(item)
   }),
   OptionsList = options?.map((item) => {
        return render(item)
   })


  return (
      <div >
          {RowsList}
      </label>
  )
};

const Test = () => {
    return (<PrimarySelect
        options={[{name: '1'}]}
        render={(item) => {
            return (<div>
                1
            </div>)
        }}
    />)   
}

```