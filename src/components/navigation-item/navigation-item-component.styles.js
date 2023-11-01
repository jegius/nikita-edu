export default `
    <style>
    @import url('../common.css');
    
    li {
        list-style-type: none;
    }

    a {
        color: inherit;
        text-decoration-line: none;
    }

    .text_size-18 {
        font-size: 18px;
    }

    ._main-text {
        font-family: "Inter", sans-serif;
        font-weight: 400;
    }

    .navigation__item {
        text-shadow: 0 0 0;
        transition: all .1s ease-in-out;
    }

    .navigation__item:hover {
        text-shadow: 1px 1px 0;
    }
    
    </style>
`