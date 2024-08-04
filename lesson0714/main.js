const simpleAcc = (wrapper) => {
    const menu = wrapper.firstElementChild;
    const contents = wrapper.lastElementChild;

    const onClick = () => {
        const isOpen = wrapper.classList.contains('open');

        contents.style.height = `${isOpen ? '0' : contents.scrollHeight}px`;
        wrapper.classList.toggle('open');
    }

    menu.addEventListener('click',onClick);
}

const accs = document.querySelectorAll('[data-acc]');
accs.forEach(simpleAcc);