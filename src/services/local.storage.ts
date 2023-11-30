export class Storage<T> {
  constructor(private storeName: string) {   // Si quito el private, lo que tendría es un parámetro. Al añadir private significa que se ha declarado implicitamente un parámetro y se le ha asignado un valor
 
  }

    get() {
      const initialData = localStorage.getItem(this.storeName)  // Queremos que nos devuelva el resultado de convertir a objeto esta estructura
      if (!initialData) throw new Error('Invalid store name')
      return JSON.parse(initialData) as T
    }

    set(data: T) {  //  AQuí lo que queremos es guardar los datos en localStorage por lo que tenemos que stringificarlos
      const finalData = JSON.stringify(data);
      localStorage.setItem(this.storeName, finalData)  // Set no devuelve nada, como todos los set devuelve void
    }

    remove() {
      localStorage.removeItem(this.storeName)   // Lo haremos con los logout
    }

}
