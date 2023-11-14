export default `
    <style>
    @import url('../common.css');

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding: 0;
        margin: 0;
        border: none;
        background: none;
        color: inherit;
        font-size: inherit;
        line-height: inherit;
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

    ._select {
        width: 23.1rem;
        background-image: var(--select-arrow);
        background-repeat: no-repeat;
        background-position: calc(20%) center;
        cursor: pointer;
    }

    </style>
`