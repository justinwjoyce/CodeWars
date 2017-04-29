// 4kyu
// The purpose of this kata is to implement the undoRedo function.

// This function takes an object and returns an object that has these actions to be performed on the object passed as a parameter:

// set(key, value) Assigns the value to the key. If the key does not exist, creates it.

// get(key) Returns the value associated to the key.

// del(key) removes the key from the object.

// undo() Undo the last operation (set or del) on the object. Throws an exception if there is no operation to undo.

// redo() Redo the last undo operation (redo is only possible after an undo). Throws an exception if there is no operation to redo.

// After set() or del() are called, there is nothing to redo.

// All actions must affect to the object passed to undoRedo(object) function. So you can not work with a copy of the object.

// Any set/del after an undo should disallow new undos.
function undoRedo(object) {
  return {
    obj: object || {},
    undoArray: [],
    redoArray: [],
    set: function(key, value) {
      let v = this.obj[key];
      let create = typeof v === 'undefined';
      this.obj[key] = value;
      this.redoArray = [];
      this.undoArray.push({ k: key, v: value, prev: v, set: !create, create: create });
    },
    get: function(key) {
      return this.obj[key];
    },
    del: function(key) {
      let v = this.obj[key];
      delete this.obj[key];
      this.redoArray = [];
      this.undoArray.push({ k: key, v: undefined, prev: v, del: true });
    },
    undo: function() {
      if (!this.undoArray.length) {
        throw new Error('nothing to undo');
      }

      let undoArray = this.undoArray.pop();
      let redoArray = { k: undoArray.k, v: undoArray.v, prev: undoArray.prev, del: undoArray.del, create: undoArray.create };
      
      if (undoArray.create) {
        delete this.obj[undoArray.k];
      }
      else {
        this.obj[undoArray.k] = undoArray.prev;
      }
      this.redoArray.push(redoArray);
    },
    redo: function() {
      if (!this.redoArray.length) {
        throw new Error('nothing to redo');
      }

      let redoArray = this.redoArray.pop();
      this.undoArray.push({ k: redoArray.k, v: redoArray.v, prev: this.obj[redoArray.k], del: redoArray.del, create: redoArray.create });

      if (redoArray.del) {
        delete this.obj[redoArray.k];
      }
      else {
        this.obj[redoArray.k] = redoArray.v;
      }
    }
  };
}