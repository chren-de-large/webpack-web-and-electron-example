var _process = process;
process.once('loaded', () => {
    global.process= _process;
});
