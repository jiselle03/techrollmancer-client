import styled from 'styled-components';
import { string } from 'prop-types';

export const FormContainer = styled.div`
    border-radius: 5px;
    padding: ${({ padding }) => padding};
    width: 25em;
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};
`;

FormContainer.propTypes = {
    padding: string,
    height: string,
    margin: string,
};

export const Form = styled.form`
`;

export const Input = styled.input`
`;

export const FormContent = {
    icon: {
        color: "#000",
    },
    link: {
        textDecoration: "none",
        color: "rgba(45,99,127,1)",
        fontWeight: "bold",
    },
    field: {
        padding: "0.5em",
        margin: "1em 2em",
        width: "85%",
    },
    full: {
        margin: "0.5em 0em",
        width: "80%",
    },
    half: {
        margin: "0.5em",
        width: "calc(40% - 0.5em)",
    },
    scheduler: {
        padding: "0.5em",
        margin: "0.5em 3.25em",
        width: "85%"
    },
    datetime: {
        margin: "auto 0.25em",
        width: "95%"
    }
};

export const SpellForm = styled.div`
    padding: 1em;
    text-align: center;
    background-color: rgba(45,99,127,1);
    box-shadow: 0 5px 5px -2px #888;
    position: sticky;
    z-index: 1;
    top: 0;
`;