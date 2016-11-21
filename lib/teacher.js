const Teacher = (function(){
  let id = 0

  return class {
    constructor(name, hometown) {
      this.name = name;
      this.hometown = hometown;
      this.id = ++id;
      store.teachers.push(this)
    }
  }
}())
