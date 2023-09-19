function fireEvent() {
    window.parent.postMessage({key: 'value'}, '*');
}

window.addEventListener('message', (event) => {
    console.log(event.data);
});