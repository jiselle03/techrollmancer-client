import React from 'react';

export const InputEdit = props => {
    const { handleSubmit, type, field, 
            defaultValue, min, max, step } = props;

    const handleBlur = field => {
        return props.onHandleBlur(field);
    };

    return(
        <form onSubmit={() => handleSubmit}>
            <input 
                onBlur={handleBlur}
                type={type || "number"}
                field={field}
                htmlFor={field}
                name={field}
                defaultValue={defaultValue}
                min={min}
                max={max}
                step={step}
            />
        </form>
    );
};
