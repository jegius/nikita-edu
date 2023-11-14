export default `
    <style>
    @import url('../common.css');

    .navigation__notification {
        display: flex;
        justify-content: flex-end;
        width: 2rem;
        height: 2.3rem;
        background: var(--nav-notification) no-repeat;
        background-position: bottom left;
    }

    .navigation__notification:hover .navigation__notification-indicator {
        position: absolute;
        width: 1.3rem;
        height: 1.3rem;
        border: solid 0.125rem var(--notification-border);
    }

    .navigation__notification:hover .navigation__notification-count {
        font-size: 15px;
    }

    .navigation__notification-indicator {
        display: flex;
        align-self: flex-start;
        justify-content: center;
        align-items: center;
        width: 1.25rem;
        height: 1.25rem;
        background-color: var(--notification-color);
        border-radius: 50%;
        border: .1rem solid var(--white);
        transition: width .3s ease, height .3s ease;
        cursor: pointer;
    }

    .navigation__notification-count {
        font-size: 12px;
        color: var(--white);
        transition: font-size .3s ease;
    }
    
    </style>
`