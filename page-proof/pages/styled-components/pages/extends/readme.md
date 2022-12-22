```typescript

export interface LabelProps {
    hasError: boolean
}

export const Label = styled(Text)`
     ${centerBlockInsideRelativeWrapper({axis: 'y'})}
     left: 20px;

     transform-origin: left;

     font-size: 16px;
     line-height: 1;
     color: #8f8f8f;
     cursor: text;
`

export const PrimaryInput = () => {
    return (<div>
            <Label as='label' >Label</Label>
        </div>)
}
    
    

```