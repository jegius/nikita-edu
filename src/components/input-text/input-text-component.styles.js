export default `
    <style>
    @import url('../common.css');

    input {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        appearance: none;
        border-radius: 0;
        color: inherit;
        font-family: inherit;
        background-color: inherit;
    }

    .text_size-14 {
        font-size: 14px;
    }

    ._main-text {
        font-family: "Inter", sans-serif;
        font-weight: 400;
    }

    .rent-a-car__input {
        min-width: 20rem;
        padding: 1.5rem;
        background-color: var(--rent-a-car-input-bg);
        border: .0625rem solid var(--rent-a-car-border-bg);
        border-radius: .3125rem;
    }

    .rent-a-car__input::-webkit-input-placeholder {
        color: var(--black);
    }
    
    </style>
`