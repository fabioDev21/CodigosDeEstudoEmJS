const obj = {
    _v: 1,
    get valores(){
        return this._v++
    },
    set valores(v = 2){
        if (v > this._v ){
          this._v *= v
        }
    }
}
console.log(obj._v,obj.valores, obj.valores)