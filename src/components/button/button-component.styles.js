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

    .text_manrope {
        font-family: "Manrope", sans-serif;
    }

    .text_size-20 {
        font-size: 20px;
    }

    .text_bold {
        font-weight: 700;
    }

    .navigation__login {
        text-transform: capitalize;
        padding: .75rem 1.5rem;
        border: .125rem solid var(--black);
        border-radius: .3125rem;
        box-shadow: 0 0 0 0 var(--black);
        text-shadow: 0 0 0 var(--orange);
        transition: box-shadow .2s ease, text-shadow .2s ease-out;
        cursor: pointer;
    }

    .navigation__login:hover {
        box-shadow: 0 0 .08rem .08rem var(--black);
        text-shadow: .05rem 0 .1rem var(--orange);
    }
    </style>
`