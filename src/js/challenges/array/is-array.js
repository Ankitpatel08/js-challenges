// implementation for isArray
Array.prototype.isArray = function(arg) {
    if (typeof arg === 'object' &&
    ('join' in arg && typeof arg.join === 'function') && 
    ('length' in arg && typeof arg.length === 'number')) {
        return true;
    }
    return false;

    // ECMAScript 5.1 implementation
    // return Object.prototype.toString.call(arg) === '[object Array]';
}