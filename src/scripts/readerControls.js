function changeProperty(property, changeValue, measure) {
    let docElement = document.getElementById('book-content');
    let oldValue = window.getComputedStyle(docElement).getPropertyValue(property);
    console.log('oldValue', oldValue);
    let newValue = measure ? parseFloat(oldValue) + changeValue + measure : changeValue;
    docElement.style.setProperty(property, newValue);
    localStorage.setItem(property, newValue);
}

document.querySelector('.decreaseFont').addEventListener('click', () => {
    changeProperty('--reader-font-size', -2, 'px');
});

document.querySelector('.increaseFont').addEventListener('click', () => {
    changeProperty('--reader-font-size', 2, 'px');
});

document.querySelector('.decreaseLineHeight').addEventListener('click', () => {
    changeProperty('--reader-line-height', -2, 'px');
});

document.querySelector('.increaseLineHeight').addEventListener('click', () => {
    changeProperty('--reader-line-height', 2, 'px');
});

document.querySelector('.decreasePSpacing').addEventListener('click', () => {
    changeProperty('--reader-p-spacing', -5, 'px');
});

document.querySelector('.increasePSpacing').addEventListener('click', () => {
    changeProperty('--reader-p-spacing', 5, 'px');
});

document.querySelector('.changeArial').addEventListener('click', () => {
    changeProperty('--reader-font-family', "Arial, sans-serif", '');
});

document.querySelector('.changeGeorgia').addEventListener('click', () => {
    changeProperty('--reader-font-family', "Georgia, serif", '');
});

document.querySelector('.changeTrebuchet').addEventListener('click', () => {
    changeProperty('--reader-font-family', "'Trebuchet MS', sans-serif", '');
});

document.querySelector('.changeTimes').addEventListener('click', () => {
    changeProperty('--reader-font-family', "'Times New Roman', serif", '');
});

document.querySelector('.changeGaramond').addEventListener('click', () => {
    changeProperty('--reader-font-family', "Garamond, serif", '');
});

document.querySelector('.changeTahoma').addEventListener('click', () => {
    changeProperty('--reader-font-family', "Tahoma, sans-serif", '');
});

document.querySelector('.restoreDefaults').addEventListener('click', () => {
    let docElement = document.getElementById('book-content');
    docElement.style.setProperty('--reader-font-family', docElement.style.getPropertyValue('--default-font-family'));
    docElement.style.setProperty('--reader-font-size', docElement.style.getPropertyValue('--default-font-size'));
    docElement.style.setProperty('--reader-line-height', docElement.style.getPropertyValue('--default-line-height'));
    docElement.style.setProperty('--reader-p-spacing', docElement.style.getPropertyValue('--default-p-spacing'));
    localStorage.clear();
});

document.querySelector('.control-toggle').addEventListener('click', () => {
    document.getElementById('reader-controls').classList.toggle('hidden');
});