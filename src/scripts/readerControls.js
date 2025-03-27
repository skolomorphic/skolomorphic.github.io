function changeProperty(property, changeValue, measure) {
    let docElement = document.getElementById('book-content');
    let oldValue = window.getComputedStyle(docElement).getPropertyValue(property);
    let newValue = measure ? parseFloat(oldValue) + changeValue + measure : changeValue;
    docElement.style.setProperty(property, newValue);
    localStorage.setItem(property, newValue);
}

document.querySelector('.decreaseFont').addEventListener('click', () => {
    changeProperty('font-size', -2, 'px');
});

document.querySelector('.increaseFont').addEventListener('click', () => {
    changeProperty('font-size', 2, 'px');
});

document.querySelector('.decreaseLineHeight').addEventListener('click', () => {
    changeProperty('line-height', -2, 'px');
});

document.querySelector('.increaseLineHeight').addEventListener('click', () => {
    changeProperty('line-height', 2, 'px');
});

document.querySelector('.changeArial').addEventListener('click', () => {
    changeProperty('font-family', "Arial, sans-serif", '');
});

document.querySelector('.changeGeorgia').addEventListener('click', () => {
    changeProperty('font-family', "Georgia, serif", '');
});

document.querySelector('.changeHelvetica').addEventListener('click', () => {
    changeProperty('font-family', "Helvetica, sans-serif", '');
});

document.querySelector('.changeTrebuchet').addEventListener('click', () => {
    changeProperty('font-family', "'Trebuchet MS', sans-serif", '');
});

document.querySelector('.changeTimes').addEventListener('click', () => {
    changeProperty('font-family', "'Times New Roman', serif", '');
});

document.querySelector('.restoreDefaults').addEventListener('click', () => {
    let docElement = document.getElementById('book-content');
    docElement.style.removeProperty('font-family');
    docElement.style.removeProperty('font-size');
    docElement.style.removeProperty('line-height');
    localStorage.clear();
});

document.querySelector('.control-toggle').addEventListener('click', () => {
    document.getElementById('reader-controls').classList.toggle('hidden');
});