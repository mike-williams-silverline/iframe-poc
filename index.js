function fireEvent() {
    window.parent.postMessage({key: 'value'}, '*');
}