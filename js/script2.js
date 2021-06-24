ClassList.prototype = {
    add: function() {
        forEach(arguments, function(name) {
            if (!this.contains(name)) {
                this.element.className += this.element.className.length > 0 ? ' ' + name : name;
            }
        }, this);
    },
    remove: function() {
        forEach(arguments, function(name) {
            this.element.className =
                this.element.className.replace(regExp(name), '');
        }, this);
    },
    toggle: function(name) {
        if (this.contains(name)) {
            this.remove(name);
            return false;
        } else {
            this.add(name);
            return true;
        }
    },
    contains: function(name) {
        return regExp(name).test(this.element.className);
    },
    // bonus..
    replace: function(oldName, newName) {
        this.remove(oldName);
        this.add(newName);
    }
};

// IE8/9, Safari
if (!('classList' in Element.prototype)) {
    Object.defineProperty(Element.prototype, 'classList', {
        get: function() {
            return new ClassList(this);
        }
    });
}